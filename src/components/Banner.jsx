import React, { useEffect, useState } from "react";
import bannerImg from "../assets/banner.png";
import hillsImg from "../assets/Hills-icon.png";

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="row justify-content-center banner">
        <div className="col-lg-5 banner-text" data-aos="fade-up">
          <div className="row">
            <div className="col-6 border-end border-2 border-black">
              <h1 className="tagline1">
                I want
                <br />
                to go
                <br />
                hiking
              </h1>
            </div>
            <div className="col-6 ">
              <h1 className="tagline2">
                Get
                <br />
                out
                <br />
                now
              </h1>
            </div>
            <div className="col-sm-6 ms-auto banner-btn ">
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 d-none d-lg-block"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            className="img-fluid banner-img"
            src={bannerImg}
            alt="Banner Img"
          />
        </div>
      </div>

      {/* second row lower banner content */}

      <div className="row lower-banner justify-content-center ">
        <div className="col-md-6 lower-content">
          <img src={hillsImg} alt="mountain" />
          <p>
            Join us for the weeekend to climb <br /> the highest peak in England
          </p>
        </div>
        <div
          className="col-md-5 align-self-end social-icons"
          style={{ textAlign: "end" }}
        >
          <span href="#">
            <AiOutlineInstagram />
          </span>
          <span href="#">
            <FaFacebookF />
          </span>
          <span href="#">
            <AiOutlineTwitter />
          </span>
          <span href="#">
            <AiOutlineWhatsApp />
          </span>
        </div>
      </div>

      {/* copyright text row */}
      <div className="row justify-content-center copyright-text">
        <div className="col-11">© Company Name 2020. All rights reserved.</div>
      </div>
    </>
  );
};

export default Banner;
