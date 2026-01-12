"use client";
import { useRef, useState } from "react";
import FormPortofolio, {
  FormPortofolioRefType,
} from "@/modules/admin/portofolio/FormPortofolio";
import { PortofolioValues } from "@/interface/admin/portofolio";
import { SubmitHandler } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createClient } from "@/libs/supabase/client";
import { api } from "@/libs/trpc/react";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  detail: any;
}

const UpdatePortofolio = ({ id, detail }: Props) => {
  const ref = useRef<FormPortofolioRefType>(null);
  const [loading, setLoading] = useState(false);
  const { mutate: updatePorto } = api.portofolios.update.useMutation();
  const router = useRouter();
  const supabase = createClient();
  const utils = api.useUtils();

  const onSubmit: SubmitHandler<PortofolioValues> = async (values: any) => {
    setLoading(true);
    console.log(values);
    try {
      let fileUrl: string | null = null;
      const coverPath = values.cover?.[0];

      if (coverPath instanceof File) {
        // upload baru
        const fileExt = coverPath.name.split(".").pop();
        const fileName = `${nanoid()}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("dytamastorage")
          .upload(`portofolio/${fileName}`, coverPath);
        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("dytamastorage")
          .getPublicUrl(uploadData.path);
        fileUrl = publicUrlData.publicUrl;
      }

      const payload = {
        ...values,
        id,
        cover:
          fileUrl ??
          (typeof values.cover === "string"
            ? values.cover
            : values.cover?.[0] ?? null),
      };

      updatePorto(payload, {
        onSuccess: () => {
          toast.success("Portofolio has been updated");
          utils.portofolios.getList.invalidate();
          router.push("/admin/portofolio");
        },
        onError: (err: any) => {
          toast.error(err.message);
        },
      });
    } catch (err: any) {
      toast.error(err.message || "File upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormPortofolio
      ref={ref}
      defaultValues={detail}
      isLoading={loading}
      onSubmit={onSubmit}
    />
  );
};

export default UpdatePortofolio;
