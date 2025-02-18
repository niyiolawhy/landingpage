import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error = "", required, ...rest }, ref) => {
    return (
      <div className="flex flex-col space-y-1 ">
        <div className="flex space-x-1">
          <label className="text-sm text-[#09090A] font-normal">{label}</label>
          {required && <span className="text-red-500">*</span>}
        </div>
        <input
          className="border rounded-lg border-[#A7A7A9] p-2 w-full focus:outline-none focus:ring-2 focus:ring-black text-black mt-0  "
          ref={ref}
          {...rest}
        />
        {error && <p className="text-red-500 text-xs md:mt-1">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
