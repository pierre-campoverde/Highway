import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import React from "react";
import Slider from "components/Organisms/Slider";
import Link from "next/link";
import { useIntl } from "react-intl";

const Catalog = () => {
  const intl = useIntl();
  return (
    <section className="container mx-auto py-10">
      <div className="text-center  my-4 px-2">
        <AltHeading
          label={intl.formatMessage({ id: "page.home.catalog.smallTitle" })}
        />
        <Subheading
          blackText={intl.formatMessage({
            id: "page.home.catalog.tittle-black",
          })}
          redText={intl.formatMessage({ id: "page.home.catalog.tittle-red" })}
        />

        <Body
          content={intl.formatMessage({ id: "page.home.catalog.description" })}
        />
      </div>
      <Slider />
      <div className="flex justify-center w-7/12 sm:w-2/12 mx-auto mt-5">
        {/* //TODO:Set action */}
        <Link href={"/Catalogo"}>
          <a className="border-2 text-customBlue border-customBlue rounded-xl py-3 text-xl px-4  hover:shadow-xl">
            {intl.formatMessage({ id: "page.home.catalog.button" })}
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Catalog;
