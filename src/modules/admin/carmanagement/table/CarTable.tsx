"use client";

import React, { useCallback, useMemo } from "react";
import { api } from "@/libs/trpc/react";
import { useQueryState, parseAsString, parseAsInteger } from "nuqs";
import { ColumnDef } from "@tanstack/react-table";
import DataTableController from "@/components/dttable";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiEdit2, FiTrash } from "react-icons/fi";
import Image from "next/image";
import { FaBriefcase, FaCar, FaUsers } from "react-icons/fa";
import { formatCurrency } from "@/helpers/globalHelper";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";

const CarTable = () => {
  const [search, setSearch] = useQueryState("search", {
    ...parseAsString.withDefault(""),
    shallow: true,
  });

  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const { mutate: deleteCar } = api.car.deleteCar.useMutation();

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [perPage] = useQueryState("perPage", parseAsInteger.withDefault(5));

  const {
    data: carList,
    isLoading,
    refetch,
  } = api.car.getList.useQuery({
    search,
    page,
    perPage,
  });

  const data = carList?.data;
  type Unpacked<T> = T extends (infer U)[] ? U : T;
  type TData = NonNullable<typeof data>;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleAdd = (e?: React.MouseEvent) => {
    e?.preventDefault();
    router.push("/admin/carmanagement/add");
  };

  const handleDelete = useCallback(
    (carID: string) => {
      MySwal.fire({
        title: "Are you sure to delete this data ?",
        showCancelButton: true,
        confirmButtonText: "Yes, Deleted",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteCar(
            { id: carID },
            {
              onSuccess: () => {
                toast.success("Car has been deleted");
                refetch();
              },
              onError: () => {
                toast.error("Failed to deleted");
              },
            }
          );
        }
      });
    },
    [MySwal, deleteCar, refetch]
  );

  const columns = useMemo<ColumnDef<Unpacked<TData>>[]>(
    () => [
      { header: "No", accessorKey: "no", cell: ({ row }) => row.index + 1 },
      {
        header: "Nama Mobil",
        accessorKey: "name",
        cell: (data: any) => {
          const thumbnail = data.cell.row.original.thumbnail;
          const nameCar = data.cell.row.original.name;
          return (
            <>
              <div className="flex flex-col lg:flex-row gap-3 items-center">
                <div className="w-[100px] h-[70px] border border-gray-100  rounded overflow-hidden">
                  <Image
                    src={thumbnail}
                    alt="Sample"
                    className="w-full h-full object-cover"
                    width={200}
                    height={50}
                  />
                </div>
                <div>
                  <p className="text-black font-semibold text-sm">{nameCar}</p>
                </div>
              </div>
            </>
          );
        },
      },
      {
        header: "Spesifikasi",
        accessorKey: "Spesifikasi",
        cell: (data: any) => {
          const type = data.cell.row.original.categoryName;
          const spec = {
            transmission: data.cell.row.original.transmission,
            capacity: data.cell.row.original.capacity,
            storage: data.cell.row.original.storage,
          };
          return (
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs font-normal">Type : </p>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-indigo-50 text-primary">
                  {type}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                <div className="inline-flex gap-1 items-center text-gray-500 text-xs">
                  <FaCar />
                  <p>{spec.transmission}</p>
                </div>
                <div className="inline-flex gap-1 items-center text-gray-500 text-xs">
                  <FaUsers />
                  <p>{spec.capacity} Orang</p>
                </div>
                <div className="inline-flex gap-1 items-center text-gray-500 text-xs">
                  <FaBriefcase />
                  <p>{spec.storage} Koper</p>
                </div>
              </div>
            </div>
          );
        },
      },
      {
        header: "Harga / Hari",
        accessorKey: "pricePerDay",
        cell: (data: any) => {
          const price = data.cell.row.original.pricePerDay;
          return (
            <p className="text-black font-semibold text-sm">
              {formatCurrency(price)} /Hari
            </p>
          );
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({ row }: any) => {
          const status = row.original.status;

          const statusMap: Record<string, string> = {
            active: "bg-emerald-50 text-emerald-700",
            inactive: "bg-rose-50 text-rose-700",
            draft: "bg-gray-100 text-gray-600",
          };

          const dotMap: Record<string, string> = {
            active: "bg-emerald-600",
            inactive: "bg-rose-600",
            draft: "bg-gray-500",
          };

          return (
            <span
              className={`capitalize inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${statusMap[status] ?? "bg-gray-100 text-gray-600"}`}
            >
              <span
                className={`size-1.5  inline-block rounded-full ${dotMap[status] ?? "bg-gray-500"}`}
              ></span>
              {status}
            </span>
          );
        },
      },
      {
        header: "Action",
        cell: ({ row }) => {
          return (
            <div className="flex justify-start">
              <Link
                href={`/admin/carmanagement/${row.original.id}`}
                className="py-2 px-3 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-500 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-sm "
              >
                <FiEdit2 />
              </Link>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(row.original.id);
                }}
                className="py-2 px-3 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-500 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-sm "
              >
                <FiTrash />
              </a>
            </div>
          );
        },
      },
    ],
    [handleDelete]
  );

  return (
    <DataTableController
      isLoading={isLoading}
      columns={columns}
      handleSearch={handleSearch}
      data={data || []}
      meta={carList?.meta}
      isAdd={true}
      handleAdd={handleAdd}
    />
  );
};

export default CarTable;
