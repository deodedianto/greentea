import React from "react";
import { Link as LinkTwo } from "react-scroll";
import { Link as LinkOne } from "gatsby";
import appData from "data/app.json";
import { handleMobileDropdown } from "common/navbar";

const NavbarArch = ({ navbarRef, theme }) => {
  
  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        <a className="logo" href="/">
          {theme ? (
            theme === "themeL" ? (
              <img src={appData.darkLogo} alt="logo" />
            ) : (
              <img src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img src={appData.lightLogo} alt="logo" />
          )}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
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
                <LinkTwo
                  className="nav-link"
                  to="arch-slider"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </LinkTwo>
            </li>

            <li className="nav-item">
              <LinkTwo
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </LinkTwo>
            </li>

            <li className="nav-item">
              <LinkTwo
                className="nav-link"
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Service
              </LinkTwo>
            </li>

            <li className="nav-item">
              <LinkTwo
                className="nav-link"
                to="po-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Project
              </LinkTwo>
            </li>

            <li className="nav-item">
              <LinkTwo
                className="nav-link"
                to="whyus"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                WhyUs
              </LinkTwo>
            </li>
            
            {/* <li className="nav-item">
              <LinkTwo
                className="nav-link"
                to="testimonials-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonials
              </LinkTwo>
            </li> */}

            <li className="nav-item">
              <LinkOne
                className="nav-link"
                to="https://wa.me/6285204409450?text=Mas Roni, Saya Mau Konsultasi"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Konsultasi Gratis
              </LinkOne>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
