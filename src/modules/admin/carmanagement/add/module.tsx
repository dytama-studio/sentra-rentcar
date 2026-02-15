"use client";
import React, { useRef, useState } from "react";
import FormAddCar, { FormAddRefCarType } from "./FormAddCar";
import { Button } from "@/components/button";
import { FiPlusCircle } from "react-icons/fi";

const ModuleAddCar = () => {
  const ref = useRef<FormAddRefCarType>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: any) => {
    setLoading(false);
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full lg:justify-between pb-5">
        <h3 className="text-xl lg:text-3xl font-semibold text-black">
          Buat Unit
        </h3>
        <div>
          <Button startIcon={<FiPlusCircle />} size={"sm"} color={"primary"}>
            Add New Category
          </Button>
        </div>
      </div>
      <FormAddCar
        ref={ref}
        defaultValues={{}}
        isLoading={loading}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ModuleAddCar;
