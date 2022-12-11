import React from "react";
import { Link } from 'gatsby';

const Services6 = () => {
  return (
    <section id="services" className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s1.webp)" }}
          >
            <h6 className="numb">01</h6>
            <h5>Exterior Design</h5>
            <p>
             Seni arsitektur bangunan, meliputi desain taman, kanopi, hingga teras.
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s2.webp)" }}
          >
            <h6 className="numb">02</h6>
            <h5>Interior Design</h5>
            <p>
            Design interior dengan tema scandinavian, semi classic, minimalis dan tema lain yang anda inginkan.
            </p>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s3.webp)" }}
          >
            <h6 className="numb">03</h6>
            <h5>Furniture Design</h5>
            <p>
              Design perabot rumah tangga yang astetik dan nyaman.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Services6;
