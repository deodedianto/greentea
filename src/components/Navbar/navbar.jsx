import React from "react";
import { Link as LinkTwo } from "react-scroll";
import { Link as LinkOne } from "gatsby";
import appData from "data/app.json";
import {handleMobileDropdown } from "common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <LinkTwo to="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={appData.darkLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" />
          )}
        </LinkTwo>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <LinkOne
                  className="nav-link"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </LinkOne>
            </li>

            <li className="nav-item">
                <LinkOne
                  className="nav-link"
                  to="https://wa.me/6285204409450?text=Mas Roni, Saya Mau Konsultasi"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Gratis Konsultasi
                </LinkOne>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
