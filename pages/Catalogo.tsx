import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import Layout from "components/Layout";
import CarsCatalog from "components/Templates/Catalog/CarsCatalog";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useIntl } from "react-intl";
const Catalogo: NextPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <Head>
        <title>Catalogo | Highway Car Rental</title>
      </Head>
      <main className="">
        <div className="text-center my-4 px-2">
          <AltHeading
            label={intl.formatMessage({ id: "page.catalog.small-title" })}
          />
          <Subheading
            blackText={intl.formatMessage({ id: "page.catalog.black-title" })}
            redText={intl.formatMessage({ id: "page.catalog.red-title" })}
          />
          <Body
            content={intl.formatMessage({ id: "page.catalog.description" })}
          />
        </div>
        <CarsCatalog />
      </main>
    </Layout>
  );
};

export default Catalogo;
