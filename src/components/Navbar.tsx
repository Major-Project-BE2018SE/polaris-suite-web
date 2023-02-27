import React, { useState } from "react";
import { polaris_logo } from "../assets/images";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import { X } from "react-feather";

const Navbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <div className=" navbar font-lato font-extralight flex justify-between items-center px-6 py-7 sm:px-24 sm:pt-20">
      <div className="logo_container w-10">
        <Link to="/">
          <img src={polaris_logo} alt="logo"></img>
        </Link>
      </div>
      <div className="hamburger_icon sm:hidden" onClick={handleShowNavbar}>
        <div className="w-7 h-1 mb-1 bg-black"></div>
        <div className="w-7 h-1 mb-1 bg-black"></div>
        <div className="w-5 h-1 bg-black"></div>
      </div>
      {showNavbar && (
        <div className="bg-primary w-full fixed h-screen top-0 transition ease-in-out duration-[3000ms] flex flex-col justify-center items-center font-extralight text-2xl bg-opacity-90 rounded-md">
          <div className="cross">{<X onClick={handleShowNavbar} />}</div>

          <ul>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about" ? "text-white" : "text-black"
              }`}
              onClick={handleShowNavbar}
            >
              <li>About</li>
            </Link>
            <Link
              to="/docs"
              className={`${
                location.pathname === "/docs" ? "text-white" : "text-black"
              }`}
              onClick={handleShowNavbar}
            >
              <li>Docs</li>
            </Link>
            <Link
              to="/install"
              className={`${
                location.pathname === "/" || location.pathname === "/install"
                  ? "text-white"
                  : "text-black"
              }`}
              onClick={handleShowNavbar}
            >
              <li>Install</li>
            </Link>
          </ul>
        </div>
      )}
      <div className="nav_items hidden sm:flex">
        <ul className="flex space-x-14 items-center">
          <Link
            to="/about"
            className={`${
              location.pathname === "/about" ? "text-primary" : "text-black"
            }`}
          >
            <li>About</li>
          </Link>
          <Link
            to="/docs"
            className={`${
              location.pathname === "/docs" ? "text-primary" : "text-black"
            }`}
          >
            <li>Docs</li>
          </Link>
          <Link
            to="/install"
            className={`${
              location.pathname === "/" || location.pathname === "/install"
                ? "text-primary"
                : "text-black"
            }`}
          >
            <li>Install</li>
          </Link>

          <li className="shadow-lg">
            <Button
              onClick={() => alert("Button 1 is clicked !")}
              variant="default"
              size="lg"
            >
              Get Started
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
