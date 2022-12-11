import React from "react";
import appData from 'data/app.json'

const FooterArch = () => {
  return (
    <footer className="sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h4>Officeal Address</h4>
                    <h7>Sidoarjo Jawa Timur</h7>
                    <p>Jl. Sedati no.43, Tumapel, Wedi, Kec. Gedangan</p>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              
              <div className="copy-right">
                <p>
                  © 2022, GreenInterior
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArch;
