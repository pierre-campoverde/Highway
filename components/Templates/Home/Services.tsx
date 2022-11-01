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
import { useIntl } from "react-intl";

const Services = () => {
  const intl = useIntl();
  return (
    <section className="mx-auto py-10  py-6 container">
      <div className="flex justify-center flex-col sm:flex-row">
        <div className="text-center sm:w-4/12 m-4 px-2  sm:text-left  block">
          <AltHeading
            label={intl.formatMessage({
              id: "page.home.ourServices.smallTitle",
            })}
          />
          <Subheading
            blackText={intl.formatMessage({
              id: "page.home.ourServices.title-black",
            })}
            redText={intl.formatMessage({
              id: "page.home.ourServices.title-red",
            })}
          />
          <Body
            content={intl.formatMessage({
              id: "page.home.ourServices.description",
            })}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4  mx-auto sm:mx-0">
          <ServiceCard
            label={intl.formatMessage({ id: "page.home.ourServices.card1" })}
          >
            <HiDocumentSearch />
          </ServiceCard>
          <ServiceCard
            label={intl.formatMessage({ id: "page.home.ourServices.card2" })}
          >
            <RiSecurePaymentFill />
          </ServiceCard>
          <ServiceCard
            label={intl.formatMessage({ id: "page.home.ourServices.card3" })}
          >
            <MdAirportShuttle />
          </ServiceCard>
          <ServiceCard
            label={intl.formatMessage({ id: "page.home.ourServices.card4" })}
          >
            <AiFillCar />
          </ServiceCard>
          <ServiceCard
            label={intl.formatMessage({ id: "page.home.ourServices.card5" })}
          >
            <AiFillSafetyCertificate />
          </ServiceCard>
          <ServiceCard
            label={intl.formatMessage({ id: "page.home.ourServices.card6" })}
          >
            <FaUserClock />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
