import React from "react";
import bgimg from "../../assets/img/bg_image_1.jpg";

const Banner = () => {
  return (
    <div
      className="page-hero bg-image overlay-dark"
      style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="hero-section">
        <div className="container text-center wow zoomIn">
          <span className="subhead">Let's make your life happier</span>
          <h1 className="display-4">Healthy Living</h1>
          <a href="/" className="btn btn-primary">
            Let's Consult
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
