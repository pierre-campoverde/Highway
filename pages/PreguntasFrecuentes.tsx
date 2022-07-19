import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import Layout from "components/Layout";
import Question from "components/Molecules/Question";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Maintanance from "../components/Templates/Maintanance";
const PreguntasFrecuentes: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>FAQ | Highway</title>
      </Head>
      <main className="min-h-screen">
        {/* <div className="text-center my-4 px-2">
          <AltHeading label="COMO RENTAR" />
          <Subheading redText="rapido" blackText="Proceso agil y " />
          <Body content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, a?" />
        </div>
        <div className="w-11/12 mx-auto my-20 sm:w-6/12">
          <Question
            question="Como reservar?"
            answer="ftcgvhbdasjdasjndnasdsd"
          />
          <Question
            question="Como reservar?"
            answer="ftcgvhbdasjdasjndnasdsd"
          />
          <Question
            question="Como reservar?"
            answer="ftcgvhbdasjdasjndnasdsd"
          />
          <Question
            question="Como reservar?"
            answer="ftcgvhbdasjdasjndnasdsd"
          />
          <Question
            question="Como reservar?"
            answer="ftcgvhbdasjdasjndnasdsd"
          />
        </div> */}
        <Maintanance />
      </main>
    </Layout>
  );
};

export default PreguntasFrecuentes;
