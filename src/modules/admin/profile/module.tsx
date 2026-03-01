"use client";

import React, { useRef, useState } from "react";
import FormProfile, { FormProfileRef } from "./form/FormProfile";
import { SubmitHandler } from "react-hook-form";
import { FormProfileValues } from "@/interface/profile";
import { api } from "@/libs/trpc/react";
import { toast } from "react-toastify";
import { nanoid } from "@reduxjs/toolkit";
import { createClient } from "@/libs/supabase/client";
import { useRouter } from "next/navigation";

interface Props {
  defaultValues: any;
}

const ModuleProfile = ({ defaultValues }: Props) => {
  const ref = useRef<FormProfileRef>(null);
  const supabase = createClient();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: updateProfile } = api.profile.storeProfile.useMutation();

  const onSubmit: SubmitHandler<FormProfileValues> = async (values: any) => {
    setIsLoading(true);

    try {
      if (!defaultValues.id) {
        throw new Error("Organisasi tidak ditemukan");
      }

      let finalLogoUrl = values.logoUrl;

      if (values.logoUrl instanceof File) {
        const fileExt = values.logoUrl.name.split(".").pop();
        const fileName = `${nanoid()}.${fileExt}`;

        const { data, error } = await supabase.storage
          .from("sentracar")
          .upload(`profile/${fileName}`, values.logoUrl);

        if (error) throw error;

        const { data: publicUrl } = supabase.storage
          .from("sentracar")
          .getPublicUrl(data.path);

        finalLogoUrl = publicUrl.publicUrl;
      }

      await updateProfile({
        ...values,
        id: defaultValues.id,
        logoUrl: typeof finalLogoUrl === "string" ? finalLogoUrl : null,
      });

      toast.success("Profile berhasil diupdate");
      router.refresh();
    } catch (err: any) {
      toast.error(err?.message ?? "Upload gagal");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full justify-between pb-5">
        <h3 className="text-xl lg:text-3xl font-semibold text-black">
          Profile Rental
        </h3>
      </div>
      <div className="mt-10">
        <FormProfile
          ref={ref}
          defaultValues={defaultValues}
          isLoading={isLoading}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default ModuleProfile;
