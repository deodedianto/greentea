import React from "react";
import { Link } from 'gatsby';
import initIsotope from "common/initIsotope";

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".rumah">Perumahan</span>
              <span data-filter=".apart">Apartemen</span>
            </div>
          </div>

          <div className="gallery full-width">
            

            <div
              className="col-md-6 items web rumah wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/citra_garden`} className="imago wow">
                  <img src="/img/arch/work/2.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Citra Garden</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Luxurious Design</Link>,
                  <Link to="/works/works-dark">Kamar Tidur</Link>
                </span>
              </div>
            </div>


            <div
              className="col-md-6 items web apart lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/gunawangsa_tidar`} className="imago wow">
                  <img src="/img/arch/work/1.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>GUNAWANGSA TIDAR</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Modern Design</Link>,
                  <Link to="/works/works-dark">Apartment - 1BR</Link>
                </span>
              </div>
            </div>


            <div
              className="col-md-6 items web rumah wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/dreamland`} className="imago wow">
                  <img src="/img/arch/work/7.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>DreamLand</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Classic Design</Link>,
                  <Link to="/works/works-dark">Dapur</Link>
                </span>
              </div>
            </div>



            <div
              className="col-md-6 items web apart wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/anderson`} className="imago wow">
                  <img src="/img/arch/work/4.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Anderson</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Modern Design</Link>,
                  <Link to="/works/works-dark">Apartment - 1BR</Link>
                </span>
              </div>
            </div>


            <div
              className="col-md-6 items web rumah wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/pakuwon`} className="imago wow">
                  <img src="/img/arch/work/3.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Pakuwon</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Minimalist Design</Link>,
                  <Link to="/works/works-dark">Kamar Anak</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web rumah wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/royal_residance`} className="imago wow">
                  <img src="/img/arch/work/5.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Royal Residance</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Luxurious Design</Link>,
                  <Link to="/works/works-dark">Kamar Tidur</Link>
                </span>
              </div>
            </div>


            <div
              className="col-md-6 items web rumah wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/citra_garden2`} className="imago wow">
                  <img src="/img/arch/work/6.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Citra Garden</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Modern Design</Link>,
                  <Link to="/works/works-dark">Ruang Keluarga</Link>
                </span>
              </div>
            </div>


            <div
              className="col-md-6 items web apart wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/prospero`} className="imago wow">
                  <img src="/img/arch/work/8.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Prospero</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Minimalis Design</Link>,
                  <Link to="/works/works-dark">Apartment - Studio</Link>
                </span>
              </div>
            </div>


            <div
              className="col-md-6 items apart wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/balehinggil`} className="imago wow">
                  <img src="/img/arch/work/9.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Balle Hinggil</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Modern Design</Link>,
                  <Link to="/works/works-dark">Apartment - Studio</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items apart wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/bessmansion`} className="imago wow">
                  <img src="/img/arch/work/10.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Bess Mansion</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Classic Design</Link>,
                  <Link to="/works/works-dark">Apartment - Studio</Link>
                </span>
              </div>
            </div>

            {/* <div
              className="col-md-6 items web apart wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project-details2/project-details2-dark`} className="imago wow">
                  <img src="/img/arch/work/11.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Bess Mension</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Traditional Design</Link>,
                  <Link to="/works/works-dark">Apartment - Studio</Link>
                </span>
              </div>
            </div> */}

            <div
              className="col-md-6 items web rumah wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/grahabandara`} className="imago wow">
                  <img src="/img/arch/work/12.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Graha Bandara</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Minimalist Design</Link>,
                  <Link to="/works/works-dark">Ekserior & Interior Rumah</Link>
                </span>
              </div>
            </div>


            <div
              className="col-md-6 items web apart wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/prospero2`} className="imago wow">
                  <img src="/img/arch/work/14.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Prospero</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Modern Design</Link>,
                  <Link to="/works/works-dark">Apartment - 1BR</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web apart wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project/bessmansion2`} className="imago wow">
                  <img src="/img/arch/work/13.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Bess Mension</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Classic Design</Link>,
                  <Link to="/works/works-dark">Apartment - Studio</Link>
                </span>
              </div>
            </div>

            {/* <div
              className="col-md-6 items web apart wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/project-details2/project-details2-dark`} className="imago wow">
                  <img src="/img/arch/work/3.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Prospero</h5>
                <span className="tags main-color custom-font">
                  <Link to="/works/works-dark">Semi Modern Design</Link>,
                  <Link to="/works/works-dark">Apartment - Studio</Link>
                </span>
              </div>
            </div> */}



          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;
