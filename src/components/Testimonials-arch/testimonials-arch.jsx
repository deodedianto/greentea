import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TestimonialsArch extends React.Component {
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  
  render() {
    return (
      <section
      id="testimonials-arch"
        className="testimonials section-padding position-re"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h2 className="wow fadeIn" data-wow-delay=".3s">
                  Testimonials
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >


                <div className="item">
                  <div className="info inf-lrg valign">
                    <div className="cont">
                      <div className="author">
                        <h6 className="author-name color-font">
                          Ibu Nining
                        </h6>
                        <span className="author-details">
                         Perumahan Pakuwon
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="valign">
                    <p className="fz-20 fw-200">
                    Green Interior sangat membantu dalam proses pengerjaan interior kamar anak-anak saya, karena mengerti kebutuhan klien dan juga banyak contoh tema yg diberikan sebagai gambaran. terimakasih green interior.
                    </p>
                  </div>
                </div>
                
                <div className="item">
                  <div className="info inf-lrg valign">
                    <div className="cont">
                      <div className="author">
                        <h6 className="author-name color-font">
                          Bapak Hadi
                        </h6>
                        <span className="author-details">
                          Apartement Anderson
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="valign">
                    <p className="fz-20 fw-200">
                    Trimakasih jasa interior mas bakron yg cepat & bagus skali pengerjaannya. pengerjaan di rumah saya sangat cepat. harga sesuai kualitas, benar-benar memuaskan 
                    </p>
                  </div>
                </div>
               
                <div className="item">
                  <div className="info inf-lrg valign">
                    <div className="cont">
                      <div className="author">
                        <h6 className="author-name color-font">
                          Ibu Yuni
                        </h6>
                        <span className="author-details">
                          Prospero Apartment
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="valign">
                    <p className="fz-20 fw-200">
                    Thank you yaaa green interior udah ngedesain & mempercantik apartemen aku, jd cakep bgt… budget friendly & high quality. kapan-kapan kalo pindah apartemen mau desain pake green interior lg sih hehe
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="info inf-lrg valign">
                    <div className="cont">
                      <div className="author">
                        <h6 className="author-name color-font">
                          Bapak Suud
                        </h6>
                        <span className="author-details">
                          Bess Mansion Apartment
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="valign">
                    <p className="fz-20 fw-200">
                    Dulunya coba jasa interior yg lain, tp malah tidak cocok. untung ketemu mas roni ini yg desainnya cocok, kualitas top
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="info inf-lrg valign">
                    <div className="cont">
                      <div className="author">
                        <h6 className="author-name color-font">
                          Bapak Adi
                        </h6>
                        <span className="author-details">
                          Gunawangsa Tidar Apartment
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="valign">
                    <p className="fz-20 fw-200">
                    Pertama kali pakai jasa desain interior… awalnya khawatir tidak sesuai ekspektasi. tapi lihat hasilnya saya merasa lega karena sangat melebihi harapan saya. terima kasih green interior sudah membantu kami merombak suasana di apartemen.. sangat direkomendasikan 
                    </p>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
        <div className="line-v top"></div>
        <div className="line-v bottom"></div>
      </section>
    );
  }
}

export default TestimonialsArch;
