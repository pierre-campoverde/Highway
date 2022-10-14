import AltHeading from "components/Atoms/AltHeading";
import SocialMediaButton from "components/Atoms/SocialmediaLink";
import Subheading from "components/Atoms/Subheading";
import WhatsappButton from "components/Atoms/WhatsappButton";
import ContactInfo from "components/Molecules/ContactInfo";
import ContactForm from "components/Organisms/ContactForm";
import React from "react";
import { AiFillPhone, AiTwotoneEnvironment } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="text-center my-4 px-2">
        <AltHeading label="¿COMO CONTACTARNOS?" />
        <Subheading
          redText="sobre la renta de autos"
          blackText="Contáctanos y consulta"
        />
      </div>

      <div className="flex flex-col items-center text-center sm:flex-row sm:text-left lg:w-8/12 mx-auto ">
        <div className="flex px-3  flex-col w-11/12 md:w-5/12 mx-auto ">
          <div className="flex-col">
            <ContactInfo href="tel:+529981617696" label="+52-998-161-7696">
              <span className="text-customRed text-3xl">
                <AiFillPhone />
              </span>
            </ContactInfo>
            <ContactInfo href="tel:+529981402018" label="+52-998-140-2018">
              <span className="text-customRed text-3xl">
                <AiFillPhone />
              </span>
            </ContactInfo>
            <ContactInfo
              href="https://goo.gl/maps/D8G74SMNdBqKhvRK8"
              label="Carr. Tulum-Cancun 102a"
            >
              <span className="text-customRed text-3xl">
                <AiTwotoneEnvironment />
              </span>
            </ContactInfo>
          </div>
          <div className="flex justify-center my-2">
            <SocialMediaButton
              platform="instagram"
              to="https://instagram.com/highwaycar_rental?igshid=YmMyMTA2M2Y="
            />
            <SocialMediaButton
              platform="facebook"
              to="https://www.facebook.com/Highway-Car-Rental-103187419157524/"
            />
          </div>
          <div className="w-full mx-auto">
            <WhatsappButton />
          </div>
        </div>
        <div className="form w-11/12 md:w-5/12 mx-auto text-center">
          <p className="text-lg text-zinc-500">O envíanos un mail</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
