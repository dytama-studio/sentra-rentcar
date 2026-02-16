import InputText from "@/components/inputs/InputText";
import Modal from "@/components/modal";
import { FormAddCategorySchema } from "@/entities/admin/carmanagement";
import { FormAddCategoryValues } from "@/interface/admin/carmanagement";
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

interface Props {
  defaultValues: any;
  onSubmit: SubmitHandler<FormAddCategoryValues>;
  isLoading: boolean;
  isOpen: boolean;
  handleClose: () => void;
}

export type FormAddRefCategoryType = {
  setError: UseFormSetError<FormAddCategoryValues>;
  setValue: UseFormSetValue<FormAddCategoryValues>;
};

const FormAddCategory: ForwardRefRenderFunction<
  FormAddRefCategoryType,
  Props
> = ({ defaultValues, onSubmit, isLoading, isOpen, handleClose }, ref) => {
  const { control, handleSubmit, setValue, setError } = useForm({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(FormAddCategorySchema),
  });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  return (
    <Modal isOpen={isOpen} className="max-w-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full justify-between px-4 py-3 border-b border-gray-200">
          <div className="relative space-y-1">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Form Tambah Kategori
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
        <div className="px-4 py-2.5 relative w-full grid grid-cols-1">
          <InputText
            label="Nama Kategori"
            name="name"
            control={control}
            placeholder="Masukan Nama Kategori"
            autoComplete={"false"}
          />
        </div>
        <div className="px-3 py-4 bg-gray-100">
          <div className="inline-flex w-full justify-end h-full">
            <button
              onClick={() => {
                handleClose();
              }}
              className="px-6 py-2 bg-white text-black font-medium text-xs rounded-md border border-gray-200 hover:bg-slate-700 hover:text-white"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="ms-2 px-4 py-2 bg-primary font-medium text-white text-xs rounded-md hover:bg-blue-700"
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
                  Menyimpan...
                </>
              ) : (
                "Simpan"
              )}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default forwardRef(FormAddCategory);
