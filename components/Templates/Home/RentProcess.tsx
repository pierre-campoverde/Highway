import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import StepCard from "components/Molecules/StepCard";
import React, { useRef } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoDocuments } from "react-icons/io5";
import { GiCarKey } from "react-icons/gi";
import { useInView } from "framer-motion";

const RentProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="mx-auto container py-10">
      <div
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="text-center my-4 px-2">
          <AltHeading label="¿COMO RENTAR?" />
          <Subheading redText="rápido" blackText="Proceso fácil y " />
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
            title="Presenta tu documentación"
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
      </div>
    </section>
  );
};

export default RentProcess;
