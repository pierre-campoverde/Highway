import FooterLink from "components/Atoms/FooterLink";
import SocialMediaButton from "components/Atoms/SocialmediaLink";
import Logo from "components/Molecules/Logo";
import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";

const Footer = () => {
  const intl = useIntl();
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
                <FooterLink
                  to="/PoliticasRenta"
                  label={intl.formatMessage({
                    id: "layout.footer.link.policies",
                  })}
                />
              </li>
              <li className="my-4 ">
                <FooterLink
                  to="/PreguntasFrecuentes"
                  label={intl.formatMessage({ id: "layout.footer.link.faq" })}
                />
              </li>
              <li className="my-4 ">
                <FooterLink
                  to="/Contacto"
                  label={intl.formatMessage({
                    id: "layout.footer.link.contact",
                  })}
                />
              </li>
              <li className="my-4 ">
                <FooterLink
                  to="/AboutUs"
                  label={intl.formatMessage({
                    id: "layout.footer.link.aboutUs",
                  })}
                />
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
        <span className="text-white">
          Copyright 2022 © All rights reserved | Made by{" "}
          <a
            href="https://www.pierre-c.com/"
            target={"_blank"}
            rel="noreferrer"
            className="font-medium"
          >
            Pierre Campoverde 🤝
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
