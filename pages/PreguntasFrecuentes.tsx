import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Subheading from "components/Atoms/Subheading";
import Layout from "components/Layout";
import Question from "components/Molecules/Question";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useIntl } from "react-intl";
const PreguntasFrecuentes: NextPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <Head>
        <title>FAQ | Highway</title>
      </Head>
      <main className="min-h-screen">
        <div className="text-center my-4 mt-10 px-2">
          <AltHeading
            label={intl.formatMessage({ id: "page.FAQ.smallTitle" })}
          />
          <Subheading
            redText={intl.formatMessage({ id: "page.FAQ.redTitle" })}
            blackText={intl.formatMessage({ id: "page.FAQ.blackTitle" })}
          />
          <Body content={intl.formatMessage({ id: "page.FAQ.description" })} />
        </div>
        <div className="w-11/12 mx-auto my-10 sm:w-6/12">
          <Question question={intl.formatMessage({ id: "page.FAQ.question1" })}>
            <p className="text-lg">
              {intl.formatMessage({ id: "page.FAQ.answer1" })}
            </p>
            <ul className="list-disc text-lg ml-10">
              <li>
                {intl.formatMessage({ id: "page.FAQ.answer1.requirement1" })}
              </li>
              <li>
                {intl.formatMessage({ id: "page.FAQ.answer1.requirement2" })}
              </li>
            </ul>
          </Question>
          <Question question={intl.formatMessage({ id: "page.FAQ.question2" })}>
            <p className="text-lg">
              {intl.formatMessage({ id: "page.FAQ.answer2" })}
            </p>
          </Question>
          <Question question={intl.formatMessage({ id: "page.FAQ.question3" })}>
            <p className="text-lg">
              {intl.formatMessage({ id: "page.FAQ.answer3" })}
            </p>
          </Question>
          <Question question={intl.formatMessage({ id: "page.FAQ.question4" })}>
            <p className="text-lg">
              {" "}
              {intl.formatMessage({ id: "page.FAQ.answer4" })}
            </p>
          </Question>
          <Question question={intl.formatMessage({ id: "page.FAQ.question5" })}>
            <p className="text-lg">
              {" "}
              {intl.formatMessage({ id: "page.FAQ.answer5" })}
            </p>
          </Question>
          <Question question={intl.formatMessage({ id: "page.FAQ.question6" })}>
            <p className="text-lg">
              {intl.formatMessage({ id: "page.FAQ.answer6" })}
            </p>
          </Question>
        </div>
      </main>
    </Layout>
  );
};

export default PreguntasFrecuentes;
