import Layout from "components/Layout";
import Maintanance from "components/Templates/Maintanance";
import Head from "next/head";
import React from "react";

const AboutUs = () => {
  return (
    <Layout>
      <Head>
        <title>Sobre Nosotros | Highway Car Rental</title>
      </Head>
      <main className="min-h-screen">
        <Maintanance />
      </main>
    </Layout>
  );
};

export default AboutUs;
