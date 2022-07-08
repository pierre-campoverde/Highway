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
        <title>Highway car rental</title>
      </Head>
      <main className="">
        <Hero />
        <Catalog />
        <RentProcess />
        <Services />
        <Contact />
      </main>
    </Layout>
  );
};

export default Home;
