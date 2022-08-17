import React from "react";
import doctor1 from "../../assets/img/doctors/doctor_1.jpg";
import doctor2 from "../../assets/img/doctors/doctor_2.jpg";
import doctor3 from "../../assets/img/doctors/doctor_3.jpg";

const Doctors = () => {
  return (
    <div className="page-section">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp">Our Doctors</h1>

        <div
          className="owl-carousel owl-theme wow fadeInUp"
          id="doctorSlideshow">
          <div className="item">
            <div className="card-doctor">
              <div className="header">
                <img src={doctor1} alt="" />
                <div className="meta">
                  <a href="/">
                    <span className="mai-call"></span>
                  </a>
                  <a href="/">
                    <span className="mai-logo-whatsapp"></span>
                  </a>
                </div>
              </div>
              <div className="body">
                <p className="text-xl mb-0">Dr. Stein Albert</p>
                <span className="text-sm text-grey">Cardiology</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-doctor">
              <div className="header">
                <img src={doctor2} alt="" />
                <div className="meta">
                  <a href="/">
                    <span className="mai-call"></span>
                  </a>
                  <a href="/">
                    <span className="mai-logo-whatsapp"></span>
                  </a>
                </div>
              </div>
              <div className="body">
                <p className="text-xl mb-0">Dr. Alexa Melvin</p>
                <span className="text-sm text-grey">Dental</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-doctor">
              <div className="header">
                <img src={doctor3} alt="" />
                <div className="meta">
                  <a href="/">
                    <span className="mai-call"></span>
                  </a>
                  <a href="/">
                    <span className="mai-logo-whatsapp"></span>
                  </a>
                </div>
              </div>
              <div className="body">
                <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                <span className="text-sm text-grey">General Health</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-doctor">
              <div className="header">
                <img src={doctor3} alt="" />
                <div className="meta">
                  <a href="/">
                    <span className="mai-call"></span>
                  </a>
                  <a href="/">
                    <span className="mai-logo-whatsapp"></span>
                  </a>
                </div>
              </div>
              <div className="body">
                <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                <span className="text-sm text-grey">General Health</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-doctor">
              <div className="header">
                <img src={doctor3} alt="" />
                <div className="meta">
                  <a href="/">
                    <span className="mai-call"></span>
                  </a>
                  <a href="/">
                    <span className="mai-logo-whatsapp"></span>
                  </a>
                </div>
              </div>
              <div className="body">
                <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                <span className="text-sm text-grey">General Health</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
