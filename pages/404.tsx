import Layout from "components/Layout";
import Image from "next/image";
import React from "react";

const Custom404 = () => {
  return (
    <Layout>
      <main className="py-28">
        <div className="flex justify-center items-center">
          <Image
            src={"/404.svg"}
            alt="Pagina no encontrada"
            height={500}
            width={500}
          />
          <div className="w-3/12 ml-4">
            <p className="h2 font-gillSansBold text-5xl text-customRed">
              Error 404{" "}
            </p>
            <p className="text-xl text-gray-600">
              La pagina que buscas no esta disponible o no existe.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Custom404;
