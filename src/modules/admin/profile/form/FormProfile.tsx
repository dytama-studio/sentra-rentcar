import InputNum from "@/components/inputs/InputNum/InputNum";
import InputText from "@/components/inputs/InputText";
import InputTextArea from "@/components/inputs/InputTextArea";
import InputUploadHidden from "@/components/inputs/inputUploadHidden";
import { FormProfileSchema } from "@/entities/profile";
import { FormProfileValues } from "@/interface/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  SubmitHandler,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";

interface Props {
  defaultValues: any;
  onSubmit: SubmitHandler<FormProfileValues>;
  isLoading: boolean;
}

export type FormProfileRef = {
  setError: UseFormSetError<FormProfileValues>;
  setValue: UseFormSetValue<FormProfileValues>;
};

const FormProfile: ForwardRefRenderFunction<FormProfileRef, Props> = (
  { defaultValues, onSubmit, isLoading },
  ref
) => {
  const [logoPreview, setLogoPreview] = useState("");

  const { control, handleSubmit, setValue, setError, watch } =
    useForm<FormProfileValues>({
      defaultValues: {
        name: "",
        slug: "rental-mobil",
        logoUrl: "",
        description: "",
        googleMapUrl: "",
        whatsappTemplate: "",
        phone: "",
        email: "",
        address: "",
        ...defaultValues,
      },
      resolver: zodResolver(FormProfileSchema),
    });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  const watchedLogoUrl = watch("logoUrl");

  useEffect(() => {
    let objectUrl = "";

    if (watchedLogoUrl instanceof File) {
      objectUrl = URL.createObjectURL(watchedLogoUrl);
      setLogoPreview(objectUrl);
    } else if (
      typeof watchedLogoUrl === "string" &&
      watchedLogoUrl.length > 0
    ) {
      setLogoPreview(watchedLogoUrl);
    } else {
      setLogoPreview("");
    }

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [watchedLogoUrl]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative w-full">
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-8">
          {logoPreview ? (
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-neutral-secondary-medium">
              <Image
                src={logoPreview}
                alt="Logo rental"
                fill
                unoptimized
                sizes="80px"
                className="object-cover"
              />
            </div>
          ) : (
            <span className="inline-flex items-center justify-center size-18 rounded-full font-semibold bg-orange-500 text-white  text-xl">
              AZ
            </span>
          )}

          <div className="w-40">
            <InputUploadHidden name="logoUrl" control={control} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InputText
            label="Nama Rental"
            name="name"
            control={control}
            placeholder="Nama Rental"
          />

          <InputText
            label="Link Alamat Google"
            name="googleMapUrl"
            control={control}
            placeholder="URL Google"
          />
          <InputTextArea
            label="Deskripsi Rental"
            name="description"
            control={control}
            placeholder="Deskripsi Rental"
            rows={3}
          />
          <InputTextArea
            label="Alamat Rental"
            name="address"
            control={control}
            placeholder="Alamat Rental"
            rows={3}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-black">Call to Action</h4>
          </div>
          <div className="space-y-4">
            <InputText
              label="Email"
              name="email"
              control={control}
              placeholder="Email Perusahaan"
            />

            <InputNum
              label="Telepon"
              name="phone"
              control={control}
              placeholder="Nomor Telepon"
            />
          </div>

          {/* RIGHT COLUMN */}
          <InputTextArea
            label="Template Pesan Whatsapp"
            name="whatsappTemplate"
            control={control}
            placeholder="Masukan format pesan whatsapp anda"
            rows={6}
          />
        </div>
        <div className="flex w-full justify-end items-center">
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              type="button"
              className="px-5 py-2 bg-white border border-danger rounded-lg shadow-sm text-danger text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ms-2 px-10 py-2 bg-indigo-700 hover:bg-indigo-800 font-semibold rounded-lg shadow-m text-white text-sm"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Submitted...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default forwardRef(FormProfile);
