/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import { Controller } from "react-hook-form";

interface InputUploadProps {
  name: string;
  control: any;
  helperText?: string;
}

const InputUploadHidden: React.FC<InputUploadProps> = ({
  name,
  control,
  helperText,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const validTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/gif",
          ];

          const maxSize = 3 * 1024 * 1024;

          if (!validTypes.includes(file.type)) {
            return field.onChange(null);
          }

          if (file.size > maxSize) {
            return field.onChange(null);
          }

          field.onChange(file);
        };

        return (
          <div className="flex flex-col">
            {/* Hidden Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".jpeg,.jpg,.png,.gif"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-3 bg-indigo-700 hover:bg-indigo-800 font-semibold rounded-xl text-white text-sm inline-flex items-center gap-2 shadow-sm transition"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0L8 12m4-4v12"
                />
              </svg>
              Upload Photo
            </button>

            {/* Helper */}
            <p className="text-xs text-gray-500 mt-2">
              {helperText ||
                "Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb"}
            </p>

            {/* Error */}
            {fieldState.error && (
              <p className="text-xs text-red-500 mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default InputUploadHidden;
