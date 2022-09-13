import React, { Fragment } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = ({ children }) => {
  return (
    <>
      {/*  Navbar */}
      <Navbar />
      <div className="container mx-auto">{children}</div>

      {/* Content  */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Main;
