import React from "react";
import { Link } from "react-router-dom";

// props classes
const BrandLink = ({ classes }) => (
  <Link to="/" className={`text-2xl font-krona ${classes}`}>
    Brand
  </Link>
);

export default BrandLink;
