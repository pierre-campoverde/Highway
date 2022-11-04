import WhatsappButton from "components/Atoms/WhatsappButton";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useIntl } from "react-intl";

const ContactAside = () => {
  const intl = useIntl();
  return (
    <div className="hidden sm:block w-3/12 ">
      <div className="border p-3 rounded-3xl mt-12 shadow-md 2xl:w-10/12">
        <span className="text-gray-600">
          {intl.formatMessage({ id: "component.contactAside.text" })}
        </span>
        <a
          className="flex  transition-all items-center font-gillSansRegular font-ligth justify-center h-10 mt-2 text-lg p-2  rounded-xl text-white bg-customRed"
          href="https://wa.me/529981225203?text=Hola,%20quisiera%20rentar%20un%20auto."
          target={"_blank"}
          rel="noreferrer"
        >
          <span className="text-2xl mr-2">
            <AiOutlineWhatsApp />
          </span>
          {intl.formatMessage({ id: "component.contactAside.button" })}
        </a>
      </div>
    </div>
  );
};

export default ContactAside;
