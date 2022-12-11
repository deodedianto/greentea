import React from "react";

const ProjectGallery = () => {
  return (
    <section className="portfolio po-arch section-padding pb-80" id="po-arch">
      <div className="container">
        <div className="row">
          <div className="gallery">

            <div
              className="col-md-12 items web rumah wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <img src="/img/portfolio/project-bessmansion2/1.webp" alt="image" />
                  <div className="item-img-overlay"></div>
              </div>
            </div>

            <div
              className="col-md-12 items web apart lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <img src="/img/portfolio/project-bessmansion2/2.webp" alt="image" />
                  <div className="item-img-overlay"></div>
              </div>
            </div>

            <div
              className="col-md-12 items web apart lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <img src="/img/portfolio/project-bessmansion2/3.webp" alt="image" />
                  <div className="item-img-overlay"></div>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
    


  );
};

export default ProjectGallery;
