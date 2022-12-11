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
                Berpengalaman di bidang desain interior selama 8 tahun,
                 Green Interior Studio selalu mempersembahkan bahan interior yang berkualitas dengan desain indah dan up to date.
                 Kami memberikan jaminan kepada Anda untuk mendapatkan kualitas interior dengan ketahanan jangka panjang.
                  Pengerjaan interior kami juga terpantau dan terkontrol dengan detail, mulai dari kualitas operasi, pengiriman furnitur, hingga proses instalasi.
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