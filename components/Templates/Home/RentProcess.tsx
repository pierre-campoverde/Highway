import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import StepCard from "components/Molecules/StepCard";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoDocuments } from "react-icons/io5";
import { GiCarKey } from "react-icons/gi";

const RentProcess = () => {
  return (
    <section className="mx-auto container py-10">
      <div className="text-center my-4 px-2">
        <AltHeading label="COMO RENTAR" />
        <Subheading redText="rapido" blackText="Proceso agil y " />
        <Body content="Renta tu auto en 3 sencillos pasos" />
      </div>
      <div className="flex flex-wrap m-2 justify-center">
        <StepCard
          title="Reserva"
          description="Contáctanos y reserva una de nuestras unidades."
        >
          <AiOutlineWhatsApp />
        </StepCard>
        <StepCard
          title="Presenta tu documentacion"
          description="Presenta tus documentos y metodos de pago."
        >
          <IoDocuments />
        </StepCard>
        <StepCard
          title="¡Listo para recorrer!"
          description="Realiza una breve inspección del auto y ¡listo!"
        >
          <GiCarKey />
        </StepCard>
      </div>
    </section>
  );
};

export default RentProcess;
