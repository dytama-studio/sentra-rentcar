"use client";
import React, { useRef, useState } from "react";
import FormAddCar, { FormAddRefCarType } from "./FormAddCar";
import { Button } from "@/components/button";
import { FiPlusCircle } from "react-icons/fi";
import FormAddCategory, {
  FormAddRefCategoryType,
} from "../modal/FormAddCategory";
import { api } from "@/libs/trpc/react";
import { toast } from "react-toastify";

const ModuleAddCar = () => {
  const ref = useRef<FormAddRefCarType>(null);
  const refCatgory = useRef<FormAddRefCategoryType>(null);

  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { mutateAsync: postCategory, isPending: isPendingCategory } =
    api.car.storeCategory.useMutation();

  const onSubmit = async (values: any) => {
    setLoading(false);
  };

  const onSubmitCategory = async (values: any) => {
    try {
      await postCategory(values);
      toast.success("Category has been created");
      handleOpenModal();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full justify-between pb-5">
        <h3 className="text-xl lg:text-3xl font-semibold text-black">
          Buat Unit
        </h3>
        <div>
          <Button
            onClick={handleOpenModal}
            startIcon={<FiPlusCircle />}
            size={"sm"}
            color={"primary"}
          >
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
      <FormAddCategory
        ref={refCatgory}
        defaultValues={{}}
        isLoading={isPendingCategory}
        onSubmit={onSubmitCategory}
        isOpen={openModal}
        handleClose={handleOpenModal}
      />
    </div>
  );
};

export default ModuleAddCar;
