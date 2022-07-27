import Image from "next/image";
import Link from "next/link";
import React from "react";

const Maintanance = () => {
  return (
    <section className="py-10">
      <div className="mx-auto flex justify-center mt-10">
        <Image
          src={"/BuildingImg.png"}
          alt="Pagina en construccion"
          width={400}
          height={375.98}
        />
      </div>
      <div className="text-center mt-10">
        <h2 className="font-gillSansBold text-4xl text-customRed text-center">
          Pagina en construcción.
        </h2>
        <p className="text-lg">
          En caso de necesitar soporte{" "}
          <Link href={"/Contacto"}>
            <a className="underline underline-offset-4 ">contáctanos</a>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Maintanance;
