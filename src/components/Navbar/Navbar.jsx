import React from "react";
import BrandLink from "../BrandLink/BrandLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="container flex justify-between py-3 mx-auto font-krona">
        {/* BRAND */}
        {/*: extract to a component  */}
        <BrandLink />

        {/* HOME/SEARCH/ABOUT */}
        <div className="flex items-end">
          <a className="mr-8 text-sm" href="/home">
            home
          </a>
          <a className="mr-4 text-sm" href="/search">
            search
          </a>
          <a className="mr-8 text-sm" href="/about">
            about
          </a>

          {/* ICONS */}
          {/* TODO: add colors to icons (text-dark) */}
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          {/* LIKED */}
          {/* CART */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
