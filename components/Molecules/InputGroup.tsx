import React from "react";
type Props = {
  label: string;
  type: string;
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputGroup = ({ callback, label, type }: Props) => {
  return (
    <div className="w-full my-2">
      <label htmlFor={label} className="sr-only">
        {label}
      </label>
      <input
        onChange={callback}
        className="w-full bg-gray-200 border border-gray-300 h-14 text-xl px-4 rounded-lg focus:outline-none focus:ring-2 "
        type={type}
        id={label}
        placeholder={label}
      />
    </div>
  );
};

export default InputGroup;
