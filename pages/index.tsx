import AboutUs from "components/Templates/Home/AboutUs";
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
        <title>
          Highway Car Rental | Renta un auto en Cancún fácil y rapido.
        </title>
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
        <AboutUs />
        <Contact />
      </main>
    </Layout>
  );
};

export default Home;
