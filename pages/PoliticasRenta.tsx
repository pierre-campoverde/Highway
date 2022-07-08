import Layout from "components/Layout";
import RentPoint from "components/Organisms/RentPoint";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const PoliticasRenta: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Politicas de renta | Highway</title>
      </Head>
      <main className="min-h-screen mx-auto container">
        <section className="py-5 divide-y-2 ">
          <RentPoint
            topic="Topic title"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum id ratione consectetur quibusdam in quaerat aut neque accusantium. Eaque repellendus reiciendis aliquid blanditiis consequuntur laboriosam excepturi explicabo, omnis iusto magnam!"
          />
          <RentPoint
            topic="Topic title"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum id ratione consectetur quibusdam in quaerat aut neque accusantium. Eaque repellendus reiciendis aliquid blanditiis consequuntur laboriosam excepturi explicabo, omnis iusto magnam!"
          />
          <RentPoint
            topic="Topic title"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum id ratione consectetur quibusdam in quaerat aut neque accusantium. Eaque repellendus reiciendis aliquid blanditiis consequuntur laboriosam excepturi explicabo, omnis iusto magnam!"
          />
          <RentPoint
            topic="Topic title"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum id ratione consectetur quibusdam in quaerat aut neque accusantium. Eaque repellendus reiciendis aliquid blanditiis consequuntur laboriosam excepturi explicabo, omnis iusto magnam!"
          />
        </section>
      </main>
    </Layout>
  );
};

export default PoliticasRenta;
