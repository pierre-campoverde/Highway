import InputGroup from "components/Molecules/InputGroup";
import TextArea from "components/Molecules/TextArea";
import React from "react";

const ContactForm = () => {
  return (
    <form>
      <InputGroup />
      <TextArea />
      <input
        type="submit"
        value="Enviar"
        className="bg-white text-customRed font-semibold border border-customRed border-2 rounded-lg w-full sm:w-6/12 h-14 text-lg cursor-pointer hover:bg-customRed hover:text-white md:float-right"
      />
    </form>
  );
};

export default ContactForm;
