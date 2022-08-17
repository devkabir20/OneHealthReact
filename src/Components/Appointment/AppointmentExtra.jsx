import React from "react";
import googleplay from "../../assets/img/google_play.svg";
import appstore from "../../assets/img/app_store.svg";
import mobileapp from "../../assets/img/mobile_app.png";
import bannerapttern from "../../assets/img/banner-pattern.svg";

const AppointmentExtra = () => {
  return (
    <div
      class="page-section banner-home bg-image"
      style={{ backgroundImage: `url(${bannerapttern})` }}>
      <div class="container py-5 py-lg-0">
        <div class="row align-items-center">
          <div class="col-lg-4 wow zoomIn">
            <div class="img-banner d-none d-lg-block">
              <img src={mobileapp} alt="" />
            </div>
          </div>
          <div class="col-lg-8 wow fadeInRight">
            <h1 class="font-weight-normal mb-3">
              Get easy access of all features using One Health Application
            </h1>
            <a href="/">
              <img src={googleplay} alt="" />
            </a>
            <a href="/" class="ml-2">
              <img src={appstore} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentExtra;
