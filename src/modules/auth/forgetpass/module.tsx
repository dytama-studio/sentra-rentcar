import React, {
  ForwardRefRenderFunction,
  useImperativeHandle,
  forwardRef,
  // useEffect,
} from "react";
import {
  SubmitHandler,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgetSchema } from "@/entities/auth";
import { ForgetPasswordValues } from "@/interface/auth";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import InputText from "@/components/inputs/InputText";
// import bcrypt from "bcryptjs";

interface Props {
  onSubmit: SubmitHandler<ForgetPasswordValues>;
  errorMsg: string;
  onLoading: boolean;
}

export type ForgetPasswordFormRefType = {
  setError: UseFormSetError<ForgetPasswordValues>;
  setValue: UseFormSetValue<ForgetPasswordValues>;
};

const ForgetPasswordModule: ForwardRefRenderFunction<
  ForgetPasswordFormRefType,
  Props
> = ({ onSubmit, errorMsg, onLoading }, ref) => {
  const { handleSubmit, control, setError, setValue } = useForm({
    resolver: zodResolver(ForgetSchema),
    defaultValues: {
      email: "",
    },
  });

  // const checkPass = async () => {
  //   const plainPassword = "admin480!";
  //   const hashedPasswordFromDB =
  //     "$2b$10$JwwCXP8Dl0s6yuDyC0AcNuu0zQNJBhZtddNzSLPO52uzv0XPS5z.e"; // isi dari tabel account.password

  //   const isMatch = await bcrypt.compare(plainPassword, hashedPasswordFromDB);

  //   if (isMatch) {
  //     console.log("Password benar!");
  //   } else {
  //     console.log("Password salah!");
  //   }
  // };

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  // useEffect(() => {
  //   checkPass();
  // }, []);

  return (
    <div className="mb-16 w-full lg:px-16 ">
      <div className="flex w-full justify-between items-center pt-10 lg:pt-10">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src={"/assets/img/brand/sentra-color.svg"}
            alt="background_auth"
            className="w-10 h-auto lg:h-auto lg:w-10"
            width={100}
            height={100}
          />
          <p className="text-base text-black font-semibold">Sentra Rent Car</p>
        </div>

        <Link
          href={"/"}
          className="inline-flex text-xs lg:text-sm items-center gap-2 font-normal text-black hover:text-primary hover:font-bold"
        >
          <FiArrowLeft />
          Back to Signin
        </Link>
      </div>

      <div className="flex w-full pt-15 lg:pt-25 justify-center">
        <div className="relative w-full lg:max-w-sm">
          <div className="text-center space-y-3">
            <div className="flex flex-col space-y-2 pt-5">
              <h4 className="text-2xl lg:text-3xl text-black font-bold">
                Lupa Password
              </h4>
              <p className="text-gray-500 text-xs lg:text-sm font-normal">
                Silahkan masukan email yang terdaftar pada sistem manajemen
                rental
              </p>
            </div>
          </div>
          {errorMsg && (
            <div className="mt-4">
              <div
                className="mt-2 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
                role="alert"
                tabIndex={-1}
                aria-labelledby="hs-soft-color-danger-label"
              >
                <span id="hs-soft-color-danger-label" className="font-bold">
                  Gagal
                </span>{" "}
                {errorMsg}
              </div>
            </div>
          )}
          <form className="py-5 lg:py-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-y-4">
              <InputText
                name="email"
                label="Email"
                placeholder="Masukkan email anda"
                control={control}
              />

              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-indigo-600 disabled:opacity-50 disabled:pointer-events-none"
                disabled={onLoading}
              >
                {onLoading ? (
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
                    Mengirim...
                  </>
                ) : (
                  "Lupa Password"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(ForgetPasswordModule);
