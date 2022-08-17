import React from "react";
import bgdoctor from "../../assets/img/bg-doctor.png";
const About = () => {
  return (
    <div className="bg-light">
      <div className="page-section py-3 mt-md-n5 custom-index">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 py-3 py-md-0">
              <div className="card-service wow fadeInUp">
                <div className="circle-shape bg-secondary text-white">
                  <span className="mai-chatbubbles-outline"></span>
                </div>
                <p>
                  <span>Chat</span> with a doctors
                </p>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card-service wow fadeInUp">
                <div className="circle-shape bg-primary text-white">
                  <span className="mai-shield-checkmark"></span>
                </div>
                <p>
                  <span>One</span>-Health Protection
                </p>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card-service wow fadeInUp">
                <div className="circle-shape bg-accent text-white">
                  <span className="mai-basket"></span>
                </div>
                <p>
                  <span>One</span>-Health Pharmacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3 wow fadeInUp">
              <h1>
                Welcome to Your Health <br /> Center
              </h1>
              <p className="text-grey mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Accusantium aperiam earum ipsa
                eius, inventore nemo labore eaque porro consequatur ex
                aspernatur. Explicabo, excepturi accusantium! Placeat voluptates
                esse ut optio facilis!
              </p>
              <a href="about.html" className="btn btn-primary">
                Learn More
              </a>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
              <div className="img-place custom-img-1">
                <img src={bgdoctor} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
