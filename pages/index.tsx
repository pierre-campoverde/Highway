import AltHeading from "components/Atoms/AltHeading";
import Body from "components/Atoms/Body";
import Heading from "components/Atoms/Heading";
import Card from "components/Organisms/Card";
import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Atoms/Button";
import Layout from "../components/Layout";
import data from "../data/carsCatalog.json";
const Home: NextPage = () => {
  console.log(data);
  return (
    <Layout>
      <main className="py-10">
        {/*------Hero section------*/}
        <div className="sm:flex my-10 justify-center items-center">
          <div className="sm:w-5/12 h-full">
            <Image
              src={"/Hero.png"}
              alt="Highway car"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <section className="sm:w-5/12 p-5  align-center rounded-2xl transform -translate-y-10 bg-white">
            <div className="container">
              <Heading blackText="Highway" redText="car rental" />
              <div className="my-2">
                <Body content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra fringilla lectus, et feugiat magna convallis et. Praesent congue orci eget dui gravida, eu laoreet massa tristique." />
              </div>

              <div className="sm:w-6/12 my-2">
                <Button type="primary" label="CONTACTAR" />
              </div>
            </div>
          </section>
        </div>
        <section className="container snap-x mx-auto border">
          <div className="text-center my-10">
            <AltHeading label="NUESTROS COCHES" />
          </div>
          <div className="flex overflow-auto snap-x scrollbar">
            {data.map((car) => (
              <Card
                key={car.model}
                model={car.model}
                fuel={car.fuel}
                transmision={car.transmission}
                passengers={car.passengers}
                price={car.price}
              />
            ))}
          </div>
          <div className="snap-x"></div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
