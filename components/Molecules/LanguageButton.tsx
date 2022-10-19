import Button from "components/Atoms/Button";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdLanguage, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
export const LanguageButton = () => {
  const [open, setopen] = useState(false);
  const changeVisibility = () => {
    setopen(!open);
  };

  const { locales, locale, pathname } = useRouter();
  return (
    <div className="fixed right-10 bottom-10 ">
      <motion.div
        initial={{ opacity: 0, y: -1 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-2 border rounded-2xl my-1 bg-white ${
          open ? "block" : "hidden"
        }`}
      >
        {locales?.map((loc) => {
          return (
            <Link href={pathname} locale={loc} key={loc}>
              <a className="w-full block text-center cursor-pointer p-2 hover:bg-blue-100 rounded-2xl">
                {loc === "en" ? "English" : "Español"}
              </a>
            </Link>
          );
        })}
      </motion.div>
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
        {locale === "en" ? "English" : "Español"}
        <MdOutlineKeyboardArrowUp />
      </button>
    </div>
  );
};
