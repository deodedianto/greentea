import React from "react";
import featuresData from "data/sections/features.json";

const Services4 = ({serviceMB50}) => {
  return (
    <section id="whyus" className="services section-padding">
      <div className="container">
        <div className="row justify-content-center">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".5s">
                Why Us
              </h2>
            </div>
        </div>
        <div className="row">
          {featuresData.slice(0, 4).map((item, index) => (
            <div
              className="col-lg-3 wow fadeInLeft"
              data-wow-delay={index == 0 ? ".5s" : index == 1 ? ".7s" : ".9s"}
              key={item.id}
            >
              <div
                className={`item-box no-curve ${
                  serviceMB50 && index + 1 != featuresData.length - 1 ? "mb-50" : ""
                }`}
              >
                <span className={`icon ${item.icon}`}></span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services4;
