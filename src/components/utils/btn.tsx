import React from 'react'


interface ButtonProps {
  color: string;
  textSize: string | number;
  border?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}
export default function Button({
  color,
  textSize,
  border,
  children,
   onClick,
  disabled,
      type
}: ButtonProps) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${color} ${textSize} ${border}`}
      >
        {children}
      </button>
    </div>
  );
}
