import React from "react";
import CarTable from "./table/CarTable";

const CarManagement = () => {
  return (
    <div className="relative w-full">
      <h2 className="text-black font-semibold text-xl lg:text-3xl mb-2">
        Car Management
      </h2>
      <div className="relative w-full grid grid-cols-1 mt-5">
        <CarTable />
      </div>
    </div>
  );
};

export default CarManagement;
