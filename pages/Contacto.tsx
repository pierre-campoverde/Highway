import Layout from "components/Layout";
import Contact from "components/Templates/Home/Contact";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Contacto: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contacto | Highway Car Rental</title>
      </Head>
      <main className="h-auto">
        <Contact />
      </main>
    </Layout>
  );
};

export default Contacto;
