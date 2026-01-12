"use client";
import PortofolioTable from "@/components/table/PortofolioTable";
import React, { Suspense } from "react";
import Link from "next/link";

const PortofolioModule = () => {
  return (
    <div className="relative w-full space-y-2">
      <div className="flex w-full justify-between pb-2">
        <h3 className="text-lg lg:text-xl text-black font-semibold items-center">
          Portofolio List
        </h3>
        <Link
          href={"/admin/portofolio/add"}
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-indigo-800 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Add Portofolio
        </Link>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <PortofolioTable />
      </Suspense>
    </div>
  );
};

export default PortofolioModule;
