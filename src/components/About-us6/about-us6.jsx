import React from 'react'

const AboutUs6 = () => {
    return (
      <section id="about" className="about-ar section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="img">
                <div
                  className="bg-img bg-fixed hero-bg"
                  style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                ></div>
                <div className="exp valign text-center">
                  <div className="full-width">
                    <h2
                      className="bg-img bg-fixed"
                      style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                    >
                      8
                    </h2>
                    <p>Years Of Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 valign">
              <div className="content">
                <h3>Best Designer For You</h3>
                <h6>
                Selama 8 tahun, Green Interior Studio selalu memberikan bahan interior yang berkualitas kepada klien.
                Kami memberikan jaminan kepada Anda dapat menggunakan interior dari kami dalam jangka waktu yang panjang.
                Selain itu, selama pekerjaan perbaikan dan konstruksi, kami mengontrol semua proses utama: mulai dari kualitas operasi dan persyaratan pengiriman furniture hingga instalasi.
                </h6>
                {/* <Link to="/about/about-dark" className="butn bord mt-30">
                  <span>About Us</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUs6