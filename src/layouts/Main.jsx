import React, { Fragment } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      {/*  Navbar */}
      <Navbar />
      <div className="container mx-auto">
        <p>Main</p>
      </div>

      {/* Content  */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Main;
