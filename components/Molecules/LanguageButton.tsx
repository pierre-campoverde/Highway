import Button from "components/Atoms/Button";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdLanguage, MdOutlineKeyboardArrowUp } from "react-icons/md";
export const LanguageButton = () => {
  const [open, setopen] = useState(false);
  const changeVisibility = () => {
    setopen(!open);
  };
  const { locale } = useRouter();
  const { locales } = useRouter();
  return (
    <div className="fixed right-10 bottom-10 ">
      <div
        className={`p-2 border rounded-2xl my-1 bg-white ${
          open ? "block" : "hidden"
        }`}
      >
        {locales?.map((loc) => {
          return (
            <button
              key={loc}
              className="w-full py-2 hover:bg-blue-100 rounded-2xl"
            >
              {loc}
            </button>
          );
        })}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeVisibility();
        }}
        className="border text-gray-700 w-full justify-center font-medium bg-white   rounded-xl z-1  p-2 flex items-center transition-all"
      >
        <span className="text-3xl">
          <MdLanguage />
        </span>
        {locale}
        <MdOutlineKeyboardArrowUp />
      </button>
    </div>
  );
};
