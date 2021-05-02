import React from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
export const Input: React.FC<InputProps> = ({ label, ...inputProps }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={inputProps?.id}>{label}</label>
      <input {...inputProps} className="border-2 rounded-sm border-blue-300" />
    </div>
  );
};
