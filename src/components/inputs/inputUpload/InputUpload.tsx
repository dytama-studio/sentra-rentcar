/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

interface InputUploadProps {
  name: string;
  control: any; // dari react-hook-form
  defaultFile?: string; // URL file saat edit
  label?: string;
  multiple?: boolean;
}

const InputUpload: React.FC<InputUploadProps> = ({
  name,
  control,
  defaultFile,
  label,
  multiple = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultFile || null}
      render={({ field }) => (
        <div className="space-y-2">
          {label && (
            <label className="block text-sm font-medium">{label}</label>
          )}

          <Dropzone
            multiple={multiple}
            onDrop={(acceptedFiles) => field.onChange(acceptedFiles)}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="border-2 border-dashed p-4 rounded-md cursor-pointer text-center"
              >
                <input {...getInputProps()} />

                {/* Preview */}
                {field.value ? (
                  Array.isArray(field.value) ? (
                    // === File[] ===
                    <div className="space-y-2">
                      {field.value.map((file: File, idx: number) => (
                        <img
                          key={idx}
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${idx}`}
                          className="max-h-40 mx-auto"
                        />
                      ))}
                    </div>
                  ) : (
                    // === String (URL) ===
                    <div>
                      <p className="text-sm text-gray-500">
                        Your Upload before:
                      </p>
                      <img
                        src={field.value}
                        alt="Preview"
                        className="max-h-40 mx-auto mt-2"
                      />
                    </div>
                  )
                ) : (
                  <>
                    <div className="flex w-full justify-center">
                      <svg
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                    </div>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG (MAX. 800x400px)
                    </p>
                  </>
                )}
              </div>
            )}
          </Dropzone>
        </div>
      )}
    />
  );
};

export default InputUpload;
