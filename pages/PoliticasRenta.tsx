import Layout from "components/Layout";
import ContactAside from "components/Organisms/ContactAside";
import RentPoint from "components/Organisms/RentPoint";
import PoliciesSection from "components/Templates/Policies/PoliciesSection";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const PoliticasRenta: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Políticas de renta | Highway</title>
      </Head>
      <main className="min-h-screen mx-auto sm:flex container">
        <PoliciesSection />
        <ContactAside />
      </main>
    </Layout>
  );
};

export default PoliticasRenta;
