import { FC, ReactElement } from "react";
import { TTable } from "../type";
import { SearchBox } from "./SearchBox";
import { Pagination } from "./Pagination";
import { Button } from "@/components/button";
import { FiPlus } from "react-icons/fi";
import { parseAsInteger, useQueryState } from "nuqs";

export const Table: FC<TTable> = (props): ReactElement => {
  const [perPage, setPerPage]: any = useQueryState(
    "perPage",
    parseAsInteger.withDefault(5)
  );
  return (
    <section className="shadow-md bg-white h-full overflow-y-hidden border rounded-lg w-full flex flex-col overflow-x-auto">
      <div className="flex md:flex-row flex-col  md:items-center sticky z-10 w-full">
        <SearchBox {...props} />
        <div className="max-w-sm space-y-3 me-4">
          <select
            value={perPage || 5}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
            }}
            className="py-2 px-3 pe-2 block border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
          >
            {[5, 10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        {props.isAdd && (
          <div className="ps-4 border-s border-gray-200">
            <Button
              onClick={props.handleAdd}
              size={"sm"}
              startIcon={<FiPlus />}
              color={"primary"}
            >
              Tambah
            </Button>
          </div>
        )}
      </div>
      <div className="overflow-x-auto min-w-max w-full h-fit flex p-1 bg-gray-50 rounded-lg ">
        <table className="p-2 w-full">{props.children}</table>
      </div>
      {props.meta && props?.data?.length > 0 && <Pagination {...props} />}
    </section>
  );
};
