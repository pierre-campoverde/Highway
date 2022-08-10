import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import Layout from "components/Layout";
import Question from "components/Molecules/Question";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
const PreguntasFrecuentes: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>FAQ | Highway</title>
      </Head>
      <main className="min-h-screen">
        <div className="text-center my-4 mt-10 px-2">
          <AltHeading label="PREGUNTAS FRECUENTES" />
          <Subheading
            redText="a responder cualquier duda."
            blackText="Estamos disponibles  "
          />
          <Body content="Para cualquier pregunta adicional no dudes en contactarnos." />
        </div>
        <div className="w-11/12 mx-auto my-10 sm:w-6/12">
          <Question question="¿Qué requisitos se necesitan para rentar un auto?">
            <p className="text-lg">
              Los requisitos necesarios para la renta de un auto en Cancún son:
            </p>
            <ul className="list-disc text-lg ml-10">
              <li>Identificación</li>
              <li>Licencia de conducir</li>
            </ul>
          </Question>
          <Question question="¿Cuál es la edad mínima para rentar un auto?">
            <p className="text-lg">
              La edad mínima es de 18 años, menos de 25 años tiene un costo
              adicional.
            </p>
          </Question>
          <Question question="¿La renta incluye seguro? Y ¿En qué caso se puede declinar?">
            <p className="text-lg">
              Sí, ya incluye seguro y se puede declinar en caso de no cumplir
              lineamientos de tránsito o si el conductor se encuentra bajo
              efectos de estupefacientes.
            </p>
          </Question>
          <Question question="¿Cuánto es el kilometraje disponible en la renta?">
            <p className="text-lg">El kilometraje es ilimitado.</p>
          </Question>
          <Question question="¿Cuánto es el tiempo mínimo de renta de un auto?">
            <p className="text-lg">El tiempo mínimo de renta es de 1 día.</p>
          </Question>
          <Question question="¿Es seguro rentar un coche en el aeropuerto de Cancún?">
            <p className="text-lg">
              Sí es seguro, el promedio de turistas que llegan a Cancín es de 10
              000 cada día.
            </p>
          </Question>
        </div>
      </main>
    </Layout>
  );
};

export default PreguntasFrecuentes;
