"use client";

import React, { useCallback, useMemo } from "react";
import { useQueryState, parseAsInteger, parseAsString } from "nuqs";
import { api } from "@/libs/trpc/react";
import { ColumnDef } from "@tanstack/react-table";
import DataTableController from "../dttable";
import Link from "next/link";
import { FiEdit2, FiTrash } from "react-icons/fi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";

const PortofolioTable = () => {
  const [search, setSearch] = useQueryState("search", {
    ...parseAsString.withDefault(""),
    shallow: true,
  });
  const MySwal = withReactContent(Swal);

  const { mutate: deletePortofolio } = api.portofolios.delete.useMutation();

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [perPage] = useQueryState("perPage", parseAsInteger.withDefault(5));
  const {
    data: portofolioList,
    isLoading,
    refetch,
  } = api.portofolios.getList.useQuery({
    search,
    page,
    perPage,
  });

  const data = portofolioList?.data;
  type Unpacked<T> = T extends (infer U)[] ? U : T;
  type TData = NonNullable<typeof data>;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleDelete = useCallback(
    (portofoliosID: string) => {
      MySwal.fire({
        title: "Are you sure to delete this data ?",
        showCancelButton: true,
        confirmButtonText: "Yes, Deleted",
      }).then((result) => {
        if (result.isConfirmed) {
          deletePortofolio(
            { id: portofoliosID },
            {
              onSuccess: () => {
                toast.success("Portofolio has been deleted");
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
    [MySwal, deletePortofolio, refetch]
  );

  const columns = useMemo<ColumnDef<Unpacked<TData>>[]>(
    () => [
      {
        header: "Action",
        cell: ({ row }) => {
          return (
            <div className="flex justify-start">
              <Link
                href={`/admin/portofolio/${row.original.id}`}
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
      { header: "No", accessorKey: "no", cell: ({ row }) => row.index + 1 },
      {
        header: "Title",
        accessorKey: "title",
      },
      {
        header: "Type",
        accessorKey: "type",
      },
      {
        header: "Client",
        accessorKey: "client",
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
      meta={portofolioList?.meta}
    />
  );
};

export default PortofolioTable;
