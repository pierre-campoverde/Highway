import React from "react";

const InputGroup = () => {
  return (
    <div className="w-full my-2">
      <label htmlFor="" className="hidden">
        Email
      </label>
      <input
        className="w-full bg-gray-200 border border-gray-300 h-14 text-xl px-4 rounded-lg"
        type="email"
        id="email"
        placeholder="Email"
      />
    </div>
  );
};

export default InputGroup;
