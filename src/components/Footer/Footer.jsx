import React from "react";
import BrandLink from "../BrandLink/BrandLink";
import "./Footer.css";

const Footer = () => {
  const links = ["about", "skincare", "makeup", "supplements", "contact"];
  return (
    <footer className="flex justify-between px-4 py-4 bg-dark text-light">
      <BrandLink classes="text-yellow font-krona text-2xl" />

      <div className="flex items-center">
        {links.map((link) => (
          <a className="ml-4" href="/">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
