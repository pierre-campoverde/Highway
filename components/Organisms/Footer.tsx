import FooterLink from "components/Atoms/FooterLink";
import SocialMediaButton from "components/Atoms/SocialmediaLink";
import Logo from "components/Molecules/Logo";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="p-5 bg-gray-200">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex flex-col my-2 md:w-11/12 md:mx-auto">
          <p className="text-customRed text-xl font-gillSansRegular">FAQ</p>
          <nav>
            <ul>
              <li className="my-4 ">
                <FooterLink to="/PoliticasRenta" label="Politica de renta" />
              </li>
              <li className="my-4 ">
                <FooterLink
                  to="/PreguntasFrecuentes"
                  label="Preguntas frecuentes"
                />
              </li>
              <li className="my-4 ">
                <FooterLink to="/Contacto" label="Contacto" />
              </li>
              <li className="my-4 ">
                <FooterLink to="/AboutUs" label="Sobre nosotros" />
              </li>
            </ul>
          </nav>
          <div className="border flex justify-center">
            <SocialMediaButton
              platform="instagram"
              to="https://instagram.com/highwaycar_rental?igshid=YmMyMTA2M2Y="
            />
            <SocialMediaButton
              platform="facebook"
              to="https://www.facebook.com/Highway-Car-Rental-103187419157524/"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-customRed text-center p-4">
        <p className="text-white">Copyright 2022 © All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
