import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import ServiceCard from "components/Atoms/ServiceCard";
import Subheading from "components/Atoms/Subheading";
import React from "react";
import { RiMedalFill, RiSecurePaymentFill } from "react-icons/ri";
import { HiDocumentSearch } from "react-icons/hi";
import { MdAirportShuttle } from "react-icons/md";
import { AiFillCar, AiFillSafetyCertificate } from "react-icons/ai";
import { FaUserClock } from "react-icons/fa";

const Services = () => {
  return (
    <section className="mx-auto py-10  py-6 container">
      <div className="flex justify-center flex-col sm:flex-row">
        <div className="text-center sm:w-4/12 m-4 px-2  sm:text-left  block">
          <AltHeading label="NUESTROS SERVICIOS" />
          <Subheading
            blackText="Servicios orientados a la"
            redText="comodidad y seguridad del cliente "
          />
          <Body content="Todos los servicios están incluidos sin ningún costo adicional." />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4  mx-auto sm:mx-0">
          <ServiceCard label="Sin cargos ocultos">
            <HiDocumentSearch />
          </ServiceCard>
          <ServiceCard label="Forma de pago ágil y segura">
            <RiSecurePaymentFill />
          </ServiceCard>
          <ServiceCard label="Recolección en el aeropuerto">
            <MdAirportShuttle />
          </ServiceCard>
          <ServiceCard label="Kilometraje ilimitado">
            <AiFillCar />
          </ServiceCard>
          <ServiceCard label="Cobertura amplia">
            <AiFillSafetyCertificate />
          </ServiceCard>
          <ServiceCard label="Atención 24/7">
            <FaUserClock />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
