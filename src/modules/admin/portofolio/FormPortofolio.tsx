"use client";

import { PortofolioValues } from "@/interface/admin/portofolio";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { PortofolioSchema } from "@/entities/admin/portofolio";
import InputText from "@/components/inputs/InputText";
import InputSelect from "@/components/inputs/InputSelect";
import InputSelect2 from "@/components/inputs/inputSelect2";
import InputUpload from "@/components/inputs/inputUpload";
import InputTiptap from "@/components/inputs/InputTipTap";
import InputTextArea from "@/components/inputs/InputTextArea";

interface Props {
  defaultValues: any;
  onSubmit: SubmitHandler<PortofolioValues>;
  isLoading: boolean;
}

export type FormPortofolioRefType = {
  setError: UseFormSetError<PortofolioValues>;
  setValue: UseFormSetValue<PortofolioValues>;
};

const FormPortofolio: ForwardRefRenderFunction<FormPortofolioRefType, Props> = (
  { defaultValues, onSubmit, isLoading },
  ref
) => {
  const optionType = [
    { code: "Website", display: "Website" },
    { code: "Mobile", display: "Mobile" },
    { code: "UI/UX", display: "UI/UX" },
  ];

  const technologiesDDL = [
    { code: "NextJs", display: "NextJs" },
    { code: "Laravel", display: "Laravel" },
    { code: "NodeJs", display: "NodeJs" },
    { code: "Figma", display: "Figma" },
    { code: "Adobe Illustrator", display: "Adobe Illustrator" },
    { code: "SQL Server", display: "SQL Server" },
  ];

  const { control, handleSubmit, setValue, setError } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      type: "",
      overviewDescription: { type: "doc", content: [] },
      technologies: [] as string[],
      challenges: "",
      solutions: "",
      features: "",
      client: "",
      projectYear: "",
      projectLink: "",
      duration: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      cover: null,
      ...defaultValues,
    },
    resolver: zodResolver(PortofolioSchema),
  });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative w-full space-y-4">
        <div className="flex flex-col mb-5 lg:mb-8">
          <h3 className="text-lg lg:text-xl text-black font-semibold items-center">
            Create a new portofolio
          </h3>
        </div>
        <div className="w-full space-y-4 lg:max-w-4xl mx-auto">
          <div className="relative w-full bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="flex w-full border-b p-4 ">
              <div className="flex flex-col space-y-0">
                <h3 className="text-sm lg:text-base text-black font-semibold">
                  Details
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  Title, short description, image...
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-5 p-4">
              <div className="col-span-2">
                <div className="relative">
                  <p className="text-sm font-semibold text-black pb-2">Cover</p>
                  <InputUpload name="cover" control={control} />
                </div>
              </div>
              <div className="col-span-2">
                <InputText
                  label="Title"
                  name="title"
                  control={control}
                  placeholder="Title Portofolio"
                />
              </div>
              <div className="col-span-1">
                <InputText
                  label="Slug"
                  name="slug"
                  control={control}
                  placeholder="Slug portofolio"
                />
              </div>
              <div className="col-span-1">
                <InputSelect
                  label="Type "
                  name="type"
                  control={control}
                  placeholder="Please select type"
                  options={optionType}
                />
              </div>
              <div className="col-span-2">
                <InputTiptap
                  label="Overview and Description"
                  name={"overviewDescription"}
                  control={control}
                  placeholder={"Please tell me overview project"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-4xl mx-auto">
          <div className="relative w-full bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="flex w-full border-b p-4 ">
              <div className="flex flex-col space-y-0">
                <h3 className="text-sm lg:text-base text-black font-semibold">
                  About The Project
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  tell me about the project
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-5 p-4">
              <div className="">
                <InputText
                  label="Client"
                  name="client"
                  control={control}
                  placeholder="Client Name"
                />
              </div>
              <div className="">
                <InputText
                  label="Duration"
                  name="duration"
                  control={control}
                  placeholder="Duration Develope"
                />
              </div>
              <div className="">
                <InputText
                  label="Project Year"
                  name="projectYear"
                  control={control}
                  placeholder="Project Year"
                />
              </div>
              <div className="">
                <InputText
                  label="Project Link"
                  name="projectLink"
                  control={control}
                  placeholder="Project Link"
                />
              </div>
              <div className="col-span-2">
                <InputSelect2
                  label="Technologies"
                  name={"technologies"}
                  control={control}
                  placeholder={"Please select develope with"}
                  options={technologiesDDL}
                  isMulti={true}
                />
              </div>
              <div className="col-span-2">
                <InputTextArea
                  label="The challenges"
                  name="challenges"
                  control={control}
                  placeholder="Tell the challenges"
                />
              </div>
              <div className="col-span-2">
                <InputTextArea
                  label="The solutions"
                  name="solutions"
                  control={control}
                  placeholder="Tell the solutions"
                />
              </div>
              <div className="col-span-2">
                <InputTextArea
                  label="The Features"
                  name="features"
                  control={control}
                  placeholder="Tell the features"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-4xl mx-auto">
          <div className="relative w-full bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="flex w-full border-b p-4 ">
              <div className="flex flex-col space-y-0">
                <h3 className="text-sm lg:text-base text-black font-semibold">
                  Properties
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  Additional functions and attributes...
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-5 p-4">
              <div className="col-span-2">
                <InputText
                  label="Meta Title"
                  name="metaTitle"
                  control={control}
                  placeholder="Meta Title"
                />
              </div>
              <div className="col-span-2">
                <InputText
                  label="Meta Description"
                  name="metaDescription"
                  control={control}
                  placeholder="Meta Description"
                />
              </div>
              <div className="col-span-2">
                <InputText
                  label="Meta Keywords"
                  name="metaKeywords"
                  control={control}
                  placeholder="Meta Keywords"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:max-w-4xl  justify-start p-4 mt-4 border-t border-gray-200 mx-auto">
          <div className="inline-flex w-full justify-end">
            <button
              type="button"
              className="px-5 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-slate-800 text-sm"
            >
              Back
            </button>
            <button
              type="submit"
              className="ms-2 px-5 py-2 bg-indigo-700 hover:bg-indigo-800 font-semibold rounded-lg shadow-m text-white text-sm"
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

export default forwardRef(FormPortofolio);
