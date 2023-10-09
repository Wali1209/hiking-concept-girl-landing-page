import React from "react";
import bannerImg from "../assets/banner.png";
import hillsImg from "../assets/Hills-icon.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BiLogoWhatsappSquare } from "react-icons/bi";

const Banner = () => {
  return (
    <>
      <div className="row justify-content-center banner">
        <div className="col-md-5 banner-text">
          <div className="row">
            <div className="col-6 border-end">
              <h1>
                I want
                <br />
                to go
                <br />
                hiking{" "}
              </h1>
            </div>
            <div className="col-6">
              <h1>
                Get
                <br />
                out
                <br />
                now
              </h1>
            </div>
            <div className="col">
              <button className="btn btn-danger">Get Started</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img className="img-fluid" src={bannerImg} alt="Banner Img" />
        </div>
      </div>
      <div className="row justify-content-center banner-lower">
        <div className="col-5">
          <div className="row justify-content-center">
            <div className="col-2">
              <img className="img-fluid" src={hillsImg} alt="hillsIcon" />
            </div>
            <div className="col-8">
              <p>
                join us for the weeekend to climb <br />
                The highest peak in England
              </p>
            </div>
            <div className="col-10 copyright-notice">
              Company Name 2020. All rights reserved.
            </div>
          </div>
        </div>
        <div className="col-2 ms-auto">
          <div className="social-icons">
            <AiFillInstagram />
            <AiFillFacebook />
            <AiFillTwitterSquare />
            <BiLogoWhatsappSquare />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
