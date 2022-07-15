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
        <section className="container mx-auto my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6643753685285!2d-86.85198198506706!3d21.046111085989033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc86bfe7e605f8480!2zMjHCsDAyJzQ2LjAiTiA4NsKwNTAnNTkuMyJX!5e0!3m2!1sen!2sar!4v1657842358192!5m2!1sen!2sar"
            width="100%"
            height="450"
            className="border-none"
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </Layout>
  );
};

export default Contacto;
