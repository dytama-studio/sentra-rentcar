"use client";

import React, { useMemo } from "react";
import { api } from "@/libs/trpc/react";
import { useQueryState, parseAsString, parseAsInteger } from "nuqs";
import { ColumnDef } from "@tanstack/react-table";
import DataTableController from "@/components/dttable";
import { useRouter } from "next/navigation";

const CarTable = () => {
  const [search, setSearch] = useQueryState("search", {
    ...parseAsString.withDefault(""),
    shallow: true,
  });

  const router = useRouter();

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [perPage] = useQueryState("perPage", parseAsInteger.withDefault(5));

  const { data: carList, isLoading } = api.car.getList.useQuery({
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

  const handleAdd = () => {
    router.push("/admin/carmanagement/add");
  };

  const columns = useMemo<ColumnDef<Unpacked<TData>>[]>(
    () => [
      { header: "No", accessorKey: "no", cell: ({ row }) => row.index + 1 },
      {
        header: "Nama Mobil",
        accessorKey: "name",
      },
      {
        header: "Harga / Hari",
        accessorKey: "pricePerDay",
      },
      {
        header: "Status",
        accessorKey: "status",
      },
    ],
    []
  );

  console.log(carList);
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
