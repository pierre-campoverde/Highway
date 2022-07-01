import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Atoms/Button";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="">
        <div className="">
          <Image
            src={"/Hero.png"}
            alt="Highway car"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
