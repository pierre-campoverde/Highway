import Catalog from "components/Templates/Home/Catalog";
import Contact from "components/Templates/Home/Contact";
import Hero from "components/Templates/Home/Hero";
import RentProcess from "components/Templates/Home/RentProcess";
import Services from "components/Templates/Home/Services";
import type { NextPage } from "next";
import Layout from "../components/Layout";
const Home: NextPage = () => {
  return (
    <Layout>
      <main className="py-10">
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
