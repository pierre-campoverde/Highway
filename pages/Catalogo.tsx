import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import Layout from "components/Layout";
import Card from "components/Organisms/Card";
import CarsCatalog from "components/Templates/Catalog/CarsCatalog";
import { NextPage } from "next";
import React from "react";
const Catalogo: NextPage = () => {
  return (
    <Layout>
      <main className="">
        <div className="text-center my-4 px-2">
          <AltHeading label="COMO RENTAR" />
          <Subheading redText="rapido" blackText="Proceso agil y " />
          <Body content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, a?" />
        </div>
        <CarsCatalog />
      </main>
    </Layout>
  );
};

export default Catalogo;
