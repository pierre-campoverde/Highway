import Layout from "components/Layout";
import Contact from "components/Templates/Home/Contact";
import { NextPage } from "next";
import React from "react";

const Contacto: NextPage = () => {
  return (
    <Layout>
      <main className="h-auto">
        <Contact />
      </main>
    </Layout>
  );
};

export default Contacto;
