import Heading from "components/Atoms/Heading";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Atoms/Button";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="">
        <div className="sm:flex">
          <div className="">
            <Image
              src={"/Hero.png"}
              alt="Highway car"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <section className="p-5 rounded-2xl transform -translate-y-10 bg-white">
            <div className="container">
              <Heading blackText="Flota de autos" redText="par alquilar" />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
