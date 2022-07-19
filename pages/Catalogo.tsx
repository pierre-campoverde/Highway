import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import Layout from "components/Layout";
import CarsCatalog from "components/Templates/Catalog/CarsCatalog";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
const Catalogo: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Catalogo | Highway Car Rental</title>
      </Head>
      <main className="">
        <div className="text-center my-4 px-2">
          <AltHeading label="CATALOGO" />
          <Subheading
            blackText="Conoce nuestros "
            redText="autos disponibles."
          />
          <Body content="¿Estás listo para comenzar tu viaje?" />
        </div>
        <CarsCatalog />
      </main>
    </Layout>
  );
};

export default Catalogo;
