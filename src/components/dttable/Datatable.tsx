import React, { ReactElement, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { TDataTable } from "./type";
import clsx from "clsx";
import { Table } from "./molecules/Table";
import { TableHead } from "./molecules/TableHead";
import { TableBody } from "./molecules/TableBody";

const DataTableController = <T extends Record<string, unknown>>(
  props: TDataTable<T>
): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const className = clsx("relative w-full z-0", {
    "h-[200px]": props.isLoading,
    "h-fit": !props.isLoading,
  });

  return (
    <div className={className}>
      <Table {...props}>
        <TableHead tableHead={table.getHeaderGroups()} />
        <TableBody
          tableBody={table.getRowModel()}
          loading={props.isLoading ?? false}
          columnLength={props.columns.length}
        />
      </Table>
    </div>
  );
};

export default DataTableController;
