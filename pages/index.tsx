import Catalog from "components/Templates/Home/Catalog";
import Contact from "components/Templates/Home/Contact";
import Hero from "components/Templates/Home/Hero";
import RentProcess from "components/Templates/Home/RentProcess";
import Services from "components/Templates/Home/Services";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Highway Car Rental</title>
        <meta
          name="description"
          content="Alquiler de autos en Cancún, México. Renta un coche fácil y rapido"
        />
        <meta charSet="UTF-8" />
      </Head>
      <main className="">
        <Hero />
        <RentProcess />
        <Catalog />
        <Services />

        <Contact />
      </main>
    </Layout>
  );
};

export default Home;
