import React from "react";
import { Control, useController } from "react-hook-form";
import Select from "react-select";

/*
EXAMPLE USE 
   <InputSelect2
      label=""
      name="category"
      placeholder="Select Category"
      options={optCategory}
      control={control}
   />
*/

type Props = {
  label?: string;
  name: string;
  placeholder: string;
  control: Control<any>;
  options: any[];
  mandatory?: any;
  required?: boolean;
  readOnly?: boolean;
  isMulti?: boolean;
  className?: string;
};

function InputSelect2({
  label,
  name,
  control,
  placeholder,
  options = [],
  mandatory,
  readOnly,
  isMulti,
  className,
  ...rest
}: Props) {
  const {
    field: { onChange, onBlur, ref, value },
    fieldState: { invalid, error },
  } = useController({ name, control });

  const handleChange = (event: any) => {
    if (isMulti) {
      onChange(event ? event.map((s: any) => s.value) : []);
    } else {
      const value = event.value;
      onChange(value);
    }
  };

  const optionList = options.map((item: any) => ({
    value: item.code,
    label: item.display,
  }));

  return (
    <div className={`space-y-1 ${className || ""}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {mandatory ? <span className="text-red-500"> *</span> : ""}
        </label>
      )}
      <div>
        <Select
          name={name}
          id={name}
          isMulti={isMulti}
          options={optionList}
          isLoading={!optionList}
          value={
            isMulti
              ? optionList.filter((opt) => value?.includes(opt.value))
              : optionList.find((opt) => opt.value === value) || null
          }
          onChange={handleChange}
          ref={ref}
          onBlur={onBlur}
          placeholder={placeholder}
          isDisabled={readOnly}
          className="react-select-container"
          classNamePrefix="react-select"
          styles={{
            control: (base) => ({
              ...base,
              height: 48, // Set the height here
              minHeight: 48, // Optional: Ensure the min-height is 42px as well
              backgroundColor: "#FFFFFF",
              fontSize: 14,
            }),
            dropdownIndicator: (base) => ({
              ...base,
              padding: 4, // Optional: adjust dropdown icon size to fit better with the 42px height
            }),
            indicatorSeparator: () => ({
              display: "none", // Optional: remove the indicator separator if desired
            }),
            menu: (base) => ({
              ...base,
              zIndex: 9999, // Ensure dropdown appears above the modal
              borderRadius: 10,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderColor: "#e5e7eb",
              // maxHeight: '250px', // Limit the dropdown height
              overflowY: "auto", // Make the dropdown scrollable if content exceeds 250px
            }),
            option: (base, state) => ({
              ...base,
              padding: "10px 15px",
              color: state.isSelected ? "#FFFFFF" : "#374151",
              backgroundColor: state.isSelected ? "#3B82F6" : "#FFFFFF",
              "&:hover": {
                backgroundColor: "#E5E7EB",
              },
            }),
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          menuPortalTarget={document.body}
          {...rest}
        />
      </div>

      {invalid && <p className="text-sm text-red-500">{error?.message}</p>}
    </div>
  );
}

export default InputSelect2;
