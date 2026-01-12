import React, { useState } from "react";
import { Control, useController } from "react-hook-form";

/*

example use :
<InputUploadFile control={control} name="file" fileType=".xlsx" />

*/

type Props = {
  name: string;
  control: Control<any>;
  fileType?: string; // Optional prop to specify accepted file types (e.g., '.xlsx, .jpg')
};
const InputUploadFile = ({ name, control, fileType }: Props) => {
  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [uploadFiles, setUploadFiles] = useState<File[]>([]);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setUploadFiles(selectedFiles);
      onChange(selectedFiles); // Update react-hook-form's state
    }
  };

  // Handle file name display in the text input
  const fileName =
    uploadFiles.length > 0 ? uploadFiles[0].name : "Tidak ada file";

  return (
    <div className="flex flex-col">
      <div className="flex items-center relative">
        {/* Label that triggers file input */}
        <label
          htmlFor="fileInput"
          className="w-[120px] cursor-pointer px-4 py-3 bg-slate-100 rounded-l-md text-sm border-t border-b border-l"
        >
          Pilih file
        </label>

        {/* File input */}
        <input
          ref={ref} // React Hook Form's ref
          type="file"
          id="fileInput"
          name={name}
          accept={fileType || ".xlsx"} // Accept dynamic file types
          onChange={handleFileChange}
          className="opacity-0 absolute inset-0 cursor-pointer"
        />

        {/* Display file name */}
        <input
          type="text"
          readOnly
          value={fileName}
          className="w-full cursor-pointer border bg-gray-50 px-4 py-3 rounded-r-md text-sm shadow-sm text-semibold"
        />
      </div>

      {/* Show error message */}
      {error?.message && (
        <p
          className="text-sm text-red-600 mt-2"
          id="hs-validation-name-error-helper"
        >
          {error?.message}
        </p>
      )}
    </div>
  );
};

export default InputUploadFile;
