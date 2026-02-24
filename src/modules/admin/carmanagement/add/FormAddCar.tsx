import InputCurrency from "@/components/inputs/InputCurrency";
import InputSelect from "@/components/inputs/InputSelect";
import InputText from "@/components/inputs/InputText";
import InputTextArea from "@/components/inputs/InputTextArea";
import InputUpload from "@/components/inputs/inputUpload";
import { FormAddCarSchema } from "@/entities/admin/carmanagement";
import { FormAddCarValues } from "@/interface/admin/carmanagement";
import { zodResolver } from "@hookform/resolvers/zod";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import {
  SubmitHandler,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { api } from "@/libs/trpc/react";
import { Button } from "@/components/button";
import { FiPlusCircle } from "react-icons/fi";
import InputQty from "@/components/inputs/InputQty";

interface Props {
  defaultValues: any;
  onSubmit: SubmitHandler<FormAddCarValues>;
  isLoading: boolean;
  handleOpenModal: () => void;
}

export type FormAddRefCarType = {
  setError: UseFormSetError<FormAddCarValues>;
  setValue: UseFormSetValue<FormAddCarValues>;
};

const FormAddCar: ForwardRefRenderFunction<FormAddRefCarType, Props> = (
  { defaultValues, onSubmit, isLoading, handleOpenModal },
  ref
) => {
  const { data: ddlCategory = [] } = api.car.getCategory.useQuery();

  const statusOptionDdl = [
    { code: "active", display: "Active" },
    { code: "inactive", display: "InActive" },
    { code: "draft", display: "Draft" },
  ];

  const transmissionDdl = [
    { code: "manual", display: "Manual" },
    { code: "automatic", display: "Automatic" },
  ];

  const { control, handleSubmit, setValue, setError } = useForm({
    defaultValues: {
      categoryId: "",
      name: "",
      pricePerDay: 0,
      description: "",
      thumbnail: "",
      status: "",
      transmission: "",
      capacity: 1,
      storage: 1,
      ...defaultValues,
    },
    resolver: zodResolver(FormAddCarSchema),
  });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="relative w-full bg-white rounded-md border border-gray-200 shadow-sm">
            <div className="flex w-full px-4 py-2.5">
              <h4 className="text-sm lg:text-[16px] font-semibold text-black ">
                Informasi Mobil
              </h4>
            </div>
            <div className="relative grid grid-cols-1 w-full gap-4 px-4 pt-2.5 pb-10">
              <div className="lg:col-span-2">
                <InputText
                  label="Nama Mobil"
                  name="name"
                  control={control}
                  placeholder="Nama Mobil"
                />
              </div>
              <div className="lg:col-span-2">
                <InputTextArea
                  label="Description"
                  name="description"
                  control={control}
                  placeholder="Description"
                  rows={3}
                />
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white rounded-md border border-gray-200 shadow-sm my-5">
            <div className="flex w-full px-4 py-2.5">
              <h4 className="text-sm lg:text-[16px] font-semibold text-black ">
                Spesifikasi
              </h4>
            </div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 w-full gap-4 px-4 py-2.5">
              <InputQty
                label="Kapasitas Orang"
                name="capacity"
                control={control}
                min={1}
              />
              <InputQty
                label="Bagasi"
                name="storage"
                control={control}
                min={1}
              />
              <div className="lg:col-span-2">
                <InputSelect
                  label="Transmission"
                  name={"transmission"}
                  control={control}
                  placeholder={"Pilih transmission"}
                  options={transmissionDdl || []}
                />
              </div>
            </div>
            <div className="px-4 py-2.5 border-t border-gray-200 flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-black">
                  Harga per-hari
                </p>
                <small className="text-xs font-normal text-gray-500">
                  Anda dapat menginputkan harga nominal perhari untuk sewa
                </small>
              </div>
              <div className="w-full lg:w-48">
                <InputCurrency
                  name="pricePerDay"
                  control={control}
                  placeholder="0"
                  indonesiaCurrency={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="relative w-full bg-white rounded-md border border-gray-200 shadow-sm pb-5">
            <div className="flex w-full px-4 py-2.5">
              <h4 className="text-md lg:text-[16px] font-semibold text-black ">
                Upload Thumbnail
              </h4>
            </div>
            <div className="grid grid-cols-1 px-4 py-2.5">
              <InputUpload name="thumbnail" control={control} />
            </div>
          </div>
          <div className="relative w-full bg-white rounded-md border border-gray-200 shadow-sm my-5">
            <div className="flex w-full justify-between items-center px-4 py-2.5">
              <h4 className="text-sm lg:text-md font-semibold text-black ">
                Tipe Mobil
              </h4>
            </div>
            <div className="grid grid-cols-1 px-4 py-2.5 gap-4">
              <InputSelect
                name={"categoryId"}
                control={control}
                placeholder={"Please select category"}
                options={ddlCategory.ddl || []}
                description="kategori dari unit anda"
              />
              <div>
                <Button
                  type="button"
                  onClick={handleOpenModal}
                  startIcon={<FiPlusCircle />}
                  size={"sm"}
                  className="bg-indigo-50 border-primary text-primary hover:text-white hover:bg-primary hover:border-primary"
                >
                  Add New Category
                </Button>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white rounded-md border border-gray-200 shadow-sm my-5">
            <div className="flex w-full justify-between items-center px-4 py-2.5">
              <h4 className="text-md lg:text-[16px] font-semibold text-black ">
                Status
              </h4>
              <span className="size-3 rounded-full bg-success"></span>
            </div>
            <div className="grid grid-cols-1 px-4 py-2.5">
              <InputSelect
                name={"status"}
                control={control}
                placeholder={"Please select status"}
                options={statusOptionDdl}
                description="Atur status dari mobil anda"
              />
            </div>
          </div>
        </div>
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
    </form>
  );
};

export default forwardRef(FormAddCar);
