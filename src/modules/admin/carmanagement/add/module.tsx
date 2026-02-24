"use client";
import React, { useRef, useState } from "react";
import FormAddCar, { FormAddRefCarType } from "./FormAddCar";
import FormAddCategory, {
  FormAddRefCategoryType,
} from "../modal/FormAddCategory";
import { api } from "@/libs/trpc/react";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import { FormAddCarValues } from "@/interface/admin/carmanagement";
import { createClient } from "@/libs/supabase/client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { nanoid } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ModuleAddCar = () => {
  const ref = useRef<FormAddRefCarType>(null);
  const refCatgory = useRef<FormAddRefCategoryType>(null);
  const supabase = createClient();
  const { user } = useSelector((state: RootState) => state.User);
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { mutateAsync: postCategory, isPending: isPendingCategory } =
    api.car.storeCategory.useMutation();

  const { mutateAsync: postCar } = api.car.storeCar.useMutation();

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
      postCar(payload, {
        onSuccess: () => {
          toast.success("Unit berhasil terbuat");
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
        <Link
          href={"/admin/carmanagement"}
          className="inline-flex gap-2 items-center text-black text-sm hover:text-primary hover:font-semibold"
        >
          Kembali
          <FiArrowRight />
        </Link>
      </div>
      <FormAddCar
        ref={ref}
        defaultValues={{}}
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

export default ModuleAddCar;
