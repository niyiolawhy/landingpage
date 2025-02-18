import React, { TextareaHTMLAttributes, forwardRef } from "react";

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  rows?: number;
  required?: boolean;
  className?: string;
  error?: string;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, rows = 4, required = false, className, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <div className="flex gap-1">
          <label className="text-sm text-[#09090A] font-normal">{label}</label>
          {required && <p className="text-red-500 text-sm mt-1">*</p>}
        </div>
        <textarea
          rows={rows}
          required={required}
          ref={ref}
          {...rest}
          className={`${className} border text-black rounded-lg border-[#A7A7A9] p-4 w-full focus:outline-none focus:ring-2 focus:ring-black`}
        ></textarea>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

TextAreaField.displayName = "TextAreaField";

export default TextAreaField;
