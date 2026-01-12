import React from "react";
import { Control, useController } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  control: Control<any>;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  readOnly?: boolean;
  className?: string;
};

function InputNumCount({
  label,
  name,
  control,
  min = 0,
  max = 10000000,
  step = 1,
  required,
  readOnly = false,
  className,
}: Props) {
  const {
    field: { onChange, value },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules: {
      required: required ? "This field is required" : undefined,
      min: { value: min, message: `Minimum value is ${min}` },
      max: { value: max, message: `Maximum value is ${max}` },
    },
  });

  const handleIncrement = () => {
    if (!readOnly) {
      const newValue = Math.min(Number(value || 0) + step, max);
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (!readOnly) {
      const newValue = Math.max(Number(value || 0) - step, min);
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-xs font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <div
        className={`relative flex items-center p-2 rounded-md border border-gray-200 ${readOnly ? "bg-gray-50" : "bg-white"}`}
      >
        <button
          type="button"
          onClick={handleDecrement}
          data-input-counter-decrement="counter-input"
          className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-2.5 h-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="number"
          value={value === null || value === undefined ? "" : value}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue === "" || !isNaN(Number(inputValue))) {
              const newValue =
                inputValue === ""
                  ? null
                  : Math.min(Math.max(Number(inputValue), min), max); // Pastikan dalam batas
              onChange(newValue);
            }
          }}
          onBlur={() => {
            // Saat kehilangan fokus, pastikan input kosong diganti dengan 0
            if (value === null || value === undefined || value === "") {
              onChange(0);
            }
          }}
          min={min}
          max={max}
          step={step}
          className={`${readOnly ? "bg-gray-50" : "bg-white"} bflex-shrink-0 ${className} text-gray-900 dark:text-white border-0 bg-transparent  text-xs font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center ${
            invalid ? "border-red-500" : "border-gray-300"
          }`}
          readOnly={readOnly}
        />
        <button
          type="button"
          onClick={handleIncrement}
          data-input-counter-increment="counter-input"
          className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-2.5 h-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      {invalid && <p className="text-xs text-red-600 mt-2">{error?.message}</p>}
    </div>
  );
}

export default InputNumCount;
