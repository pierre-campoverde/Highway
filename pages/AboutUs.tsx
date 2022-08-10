import Heading from "components/Atoms/Heading";
import Layout from "components/Layout";
import Maintanance from "components/Templates/Maintanance";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <Layout>
      <Head>
        <title>Sobre Nosotros | Highway Car Rental</title>
      </Head>
      <main className="min-h-screen ">
        <div className="mx-auto flex justify-center mt-10 my-4">
          <Heading blackText="Sobre" redText="nosotros" />
        </div>
        <section className="md:w-6/12 mx-auto my-6">
          <article className="mx-auto bg-gray-100 my-3 rounded-xl p-3">
            <h2 className="text-xl font-semibold">Nuestra misión</h2>
            <p className="text-lg">
              Garantizaremos una experiencia de alquiler libre de
              complicaciones, ya que proporcionaremos servicios superiores que
              satisfagan las necesidades individuales de nuestros clientes
            </p>
          </article>
          <article className="mx-auto border bg-gray-100 my-3 rounded-xl p-3">
            <h2 className="text-xl font-semibold">Nuestra visión</h2>
            <p className="text-xl">
              Dirigiremos nuestra industria al defender la excelencia del
              servicio y forjando una lealtad incomparable de parte de los
              clientes.
            </p>
          </article>
          <article className="mx-auto border bg-gray-100 rounded-xl p-3">
            <h2 className="text-xl font-semibold">Nuestros valores</h2>
            <ul className="list-disc ml-10">
              <li>Integridad</li>
              <li>Respeto por las personas</li>
              <li>Calidad</li>
              <li>Trabajo en equipo</li>
              <li>Crecimiento y Rentabilidad</li>
            </ul>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default AboutUs;
