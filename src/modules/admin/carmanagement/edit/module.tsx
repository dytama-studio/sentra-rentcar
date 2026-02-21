"use client";
import React, { useRef, useState } from "react";
import FormAddCar, { FormAddRefCarType } from "../add/FormAddCar";
import FormAddCategory, {
  FormAddRefCategoryType,
} from "../modal/FormAddCategory";
import { toast } from "react-toastify";
import { nanoid } from "@reduxjs/toolkit";
import { FormAddCarValues } from "@/interface/admin/carmanagement";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { createClient } from "@/libs/supabase/client";
import { api } from "@/libs/trpc/react";

interface Props {
  id: string;
  defaultValues: any;
}

const ModuleEditCar = ({ id, defaultValues }: Props) => {
  const ref = useRef<FormAddRefCarType>(null);
  const refCatgory = useRef<FormAddRefCategoryType>(null);
  const supabase = createClient();
  const { user } = useSelector((state: RootState) => state.User);
  const router = useRouter();
  const utils = api.useUtils();

  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { mutateAsync: postCategory, isPending: isPendingCategory } =
    api.car.storeCategory.useMutation();

  const { mutateAsync: updateCar } = api.car.updateCar.useMutation();

  const onSubmit: SubmitHandler<FormAddCarValues> = async (values) => {
    setLoading(true);
    try {
      if (!user?.organization_id || typeof user.organization_id !== "string") {
        throw new Error("organization_id tidak valid");
      }

      let fileUrl: string | null = null;
      const thumbnailPath = values.thumbnail?.[0];

      if (thumbnailPath instanceof File) {
        const fileExt = thumbnailPath.name.split(".").pop();
        const fileName = `${nanoid()}.${fileExt}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("sentracar")
          .upload(`cars/${user.organization_id}/${fileName}`, thumbnailPath);

        if (uploadError) throw uploadError;
        const { data: publicUrlData } = supabase.storage
          .from("sentracar")
          .getPublicUrl(uploadData.path);
        fileUrl = publicUrlData.publicUrl;
      }
      const payload = { ...values, thumbnail: fileUrl };
      updateCar(payload, {
        onSuccess: () => {
          toast.success("Unit berhasil terbuat");
          utils.car.getList.invalidate();
          router.push("/admin/carmanagement");
        },
        onError: (err: any) => {
          toast.error(err.message);
        },
      });
    } catch (err: any) {
      toast.error(err?.message ?? "File upload failed");
    } finally {
      setLoading(false);
    }
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
      </div>
      <FormAddCar
        ref={ref}
        defaultValues={defaultValues}
        isLoading={loading}
        onSubmit={onSubmit}
        handleOpenModal={handleOpenModal}
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

export default ModuleEditCar;
