import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Button from "components/Atoms/Button";
import SocialMediaButton from "components/Atoms/SocialmediaLink";
import Subheading from "components/Atoms/Subheading";
import ContactForm from "components/Organisms/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="text-center my-4 px-2">
        <AltHeading label="COMO CONTACTARNOS?" />
        <Subheading redText="red text" blackText="Black text" />
      </div>

      <div className="flex flex-col text-center sm:flex-row sm:text-left lg:w-8/12 mx-auto ">
        <div className="flex px-3 flex-col w-11/12 md:w-5/12 mx-auto md:mt-20 ">
          <Body content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus finibus leo" />
          <div className="w-full mx-auto mt-4 ">
            <Button type="primary" label="CONTACTAR" />
          </div>
          <div className="flex justify-center my-2">
            <SocialMediaButton platform="instagram" to="" />
            <SocialMediaButton platform="facebook" to="" />
            <SocialMediaButton platform="twitter" to="" />
          </div>
        </div>
        <div className="form w-11/12 md:w-5/12 mx-auto text-center">
          <p className="text-lg text-zinc-500">O envianos un mail</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
