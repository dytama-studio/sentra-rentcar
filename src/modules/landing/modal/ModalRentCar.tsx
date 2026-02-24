import InputDate from "@/components/inputs/InputDate";
import InputNum from "@/components/inputs/InputNum/InputNum";
import InputText from "@/components/inputs/InputText";
import InputTextArea from "@/components/inputs/InputTextArea";
import Modal from "@/components/modal";
import { ModalRentSchema } from "@/entities/landing/modalrent";
import { CarItemValue, FormPenyewaValue } from "@/interface/landing";
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
import Image from "next/image";
import { FaBriefcase, FaCar, FaUsers } from "react-icons/fa";
import { formatCurrency } from "@/helpers/globalHelper";

interface Props {
  onSubmit: SubmitHandler<FormPenyewaValue>;
  isOpen: boolean;
  handleClose: () => void;
  detailData: CarItemValue;
}

export type ModalRentRefType = {
  setError: UseFormSetError<FormPenyewaValue>;
  setValue: UseFormSetValue<FormPenyewaValue>;
};

const ModalRentCar: ForwardRefRenderFunction<ModalRentRefType, Props> = (
  { onSubmit, isOpen, handleClose, detailData },
  ref
) => {
  const { control, handleSubmit, setValue, setError } = useForm({
    defaultValues: {
      date_rent: "",
      day_rent: "",
      name: "",
      contact: "",
      address: "",
    },
    resolver: zodResolver(ModalRentSchema),
  });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  return (
    <Modal isOpen={isOpen} className="max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full justify-between px-4 py-3 border-b border-gray-200">
          <div className="relative space-y-1">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Form Reservasi Sewa Mobil
            </h3>
          </div>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-4 py-3">
          <div className="flex gap-4 items-start pb-5 border-b-2 border-dashed border-gray-200">
            <div className="relative p-3 bg-zinc-50 rounded-2xl">
              <span className="absolute top-3 left-3 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                {detailData?.categoryName}
              </span>

              <Image
                src={detailData?.thumbnail}
                alt={detailData?.name}
                width={800}
                height={800}
                className="w-50 h-auto sm:h-40 object-contain"
              />
            </div>
            <div className="relative">
              <h3 className="text-sm lg:text-xl font-semibold text-gray-900">
                {detailData?.name}
              </h3>
              <div className="mt-2 grid grid-cols-2 lg:grid-cols-3 gap-2 text-[10px] sm:text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaCar /> <span>{detailData?.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUsers /> <span>{detailData?.capacity}</span> Orang
                </div>
                <div className="flex items-center gap-1">
                  <FaBriefcase /> <span>{detailData?.storage}</span> Koper
                </div>
              </div>
              <div className="pt-5 space-y-1">
                <p className="text-sm font-normal text-gray-500">Harga Sewa</p>

                <p className="text-base sm:text-xl font-bold text-gray-900">
                  {formatCurrency(detailData?.pricePerDay)}
                  <span className="text-xs sm:text-sm font-normal">/Hari</span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-5">
            <InputDate
              label="Tanggal Sewa"
              name="date_rent"
              control={control}
              placeholder="Tanggal Sewa"
            />
            <InputNum
              label="Lama Sewa"
              name="day_rent"
              control={control}
              placeholder="Masukan Jumlah Hari"
            />
            <div className="col-span-2">
              <InputText
                label="Nama"
                name="name"
                control={control}
                placeholder="Masukan Nama Penyewa"
              />
            </div>
            <div className="col-span-2">
              <InputNum
                label="Nomer Kontak"
                name="contact"
                control={control}
                placeholder="Masukan Jumlah Hari"
              />
            </div>
            <div className="col-span-2">
              <InputTextArea
                label="Alamat"
                name="address"
                control={control}
                placeholder="Masukan Alamat"
              />
            </div>
          </div>
        </div>
        <div className="relative px-4 py-3 border-t border-gray-200">
          <button
            type="submit"
            className="w-full flex text-white rounded-md bg-primary hover:bg-indigo-800 justify-center items-center px-4 py-2.5"
          >
            Reservasi Sekarang
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default forwardRef(ModalRentCar);
