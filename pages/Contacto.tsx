import Layout from 'components/Layout';
import Contact from 'components/Templates/Home/Contact';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Contacto: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contacto | Highway Car Rental</title>
      </Head>
      <main className="h-auto min-screen">
        <Contact />
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.3104141251015!2d-86.82497320138071!3d21.16748279842631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2d7b10698615%3A0xe5ae2687d75c3395!2sEdificio%20SavaS!5e0!3m2!1sen!2sar!4v1696956008817!5m2!1sen!2sar"
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
