import React from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";

const labelClass = "text-sm font-medium text-gray-700";

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  className = "",
  error = null, // For field-level errors
}) => {
  const InputComponent = type === "textarea" ? Textarea : Input;
  
  return (
    <div className="flex flex-col gap-2">
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <InputComponent
        id={name}
        name={name}
        type={type === "textarea" ? undefined : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`${className} ${error ? "border-red-500" : ""}`}
      />
      {/* field-level error display */}
      {error && (
        <span className="text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </span>
      )}
    </div>
  );
};

export default FormField;