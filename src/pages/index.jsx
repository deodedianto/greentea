import {React} from "react";
import Intro5 from "components/Intro5/intro5";
import AboutUs6 from "components/About-us6/about-us6";
import Services6 from "components/Services6/services6";
import Services2 from "components/Services4/services4";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import WorksStyle5 from "components/Works-style5/works-style5";
import FooterArch from "components/Footer-arch/footer-arch.jsx";
import TestimonialsArch from "components/Testimonials-arch/testimonials-arch";
import LightTheme from "layouts/Light";

const Homepage = () => {
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <LightTheme useSkin>
      <NavbarArch navbarRef={navbarRef} theme="themeL" />
      <Intro5 />
      <AboutUs6 />
      <Services6 />
      <WorksStyle5 />
      <Services2 />
      <TestimonialsArch />
      <FooterArch />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>GreenInterior - Home Design</title>
      <link rel="stylesheet" href="/css/arch-skin-light.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" />
    </>
  )
}

export default Homepage;
