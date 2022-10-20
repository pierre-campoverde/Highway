import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import StepCard from "components/Molecules/StepCard";
import React, { useRef } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoDocuments } from "react-icons/io5";
import { GiCarKey } from "react-icons/gi";
import { useInView } from "framer-motion";
import { useIntl } from "react-intl";
import { IntlError } from "@formatjs/intl";
const RentProcess = () => {
  const intl = useIntl();
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
          <AltHeading
            label={intl.formatMessage({
              id: "page.home.rentProcess.smallTitle",
            })}
          />
          <Subheading
            redText={intl.formatMessage({
              id: "page.home.rentProcess.tittle-red",
            })}
            blackText={intl.formatMessage({
              id: "page.home.rentProcess.tittle-black",
            })}
          />
          <Body
            content={intl.formatMessage({
              id: "page.home.rentProcess.description",
            })}
          />
        </div>
        <div className="flex flex-wrap m-2 justify-center">
          <StepCard
            title={intl.formatMessage({
              id: "page.home.rentProcess.card1.title",
            })}
            description={intl.formatMessage({
              id: "page.home.rentProcess.card1.text",
            })}
          >
            <AiOutlineWhatsApp />
          </StepCard>
          <StepCard
            title={intl.formatMessage({
              id: "page.home.rentProcess.card2.title",
            })}
            description={intl.formatMessage({
              id: "page.home.rentProcess.card2.text",
            })}
          >
            <IoDocuments />
          </StepCard>
          <StepCard
            title={intl.formatMessage({
              id: "page.home.rentProcess.card3.title",
            })}
            description={intl.formatMessage({
              id: "page.home.rentProcess.card3.text",
            })}
          >
            <GiCarKey />
          </StepCard>
        </div>
      </div>
    </section>
  );
};

export default RentProcess;
