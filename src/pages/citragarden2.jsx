import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer-arch/footer-arch";
import ProjectDetails2Header from "components/Project-details2-header/project-details2-header";
import ProjectGallery from "components/Project-gallery/project-citragarden2";
import ProjectDescription from "components/Project-description/project-description";
import ProjectDate from "data/project-citragarden2.json";
import DarkTheme from "layouts/Light";

const ProjectDetails2Dark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    // if (window.pageYOffset > 300) {
    //   navbar.classList.add("nav-scroll");
    // } else {
    //   navbar.classList.remove("nav-scroll");
    // }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={ProjectDate} />
        <ProjectDescription projectDescriptionData={ProjectDate.description} />
        <ProjectGallery />
        {/* <NextProject /> */}
        
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>GreenInterior - Citra Garden</title>
    </>
  )
}

export default ProjectDetails2Dark;
