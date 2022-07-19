import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-AboutUsImage bg-scroll bg-cover bg-center bg-no-repeat text-center py-6  my-10">
      <div className="md:w-6/12 mx-auto py-4">
        <p className="font-gillSansRegular text-3xl text-white">
          “Dirigiremos nuestra industria al defender la excelencia del servicio
          y forjando una lealtad incomparable de parte de los clientes”.
        </p>
        <div className="w-44 my-3 mx-auto">
          <Link href={"/AboutUs"}>
            <a className="border-2 mt-2 block text-xl px-2 py-3  text-white rounded-xl hover:bg-white hover:text-customRed transition-all">
              Sobre Nosotros
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
