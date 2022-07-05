import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
type Props = {
  question: string;
  answer: string;
};
const Question = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);
  const toggleAnswer = () => {
    setOpen(!open);
  };
  //!TODO Add animation
  return (
    <motion.div className="bg-gray-100 my-5 rounded-lg w-full mx-auto divide-y-2 transition-all">
      <div
        className="flex p-4 text-customBlue cursor-pointer tab justify-between "
        onClick={toggleAnswer}
      >
        <p className="text-xl">{question}</p>
        <p className="text-3xl">
          <MdKeyboardArrowDown />
        </p>
      </div>
      <div className={`p-4 ${open ? "block" : "hidden"}`}>
        <p>{answer}</p>
      </div>
    </motion.div>
  );
};

export default Question;
