import React from "react";
import doctor1 from "../../assets/img/doctors/doctor_1.jpg";
import doctor2 from "../../assets/img/doctors/doctor_2.jpg";
import doctor3 from "../../assets/img/doctors/doctor_3.jpg";

const Doctorall = () => {
  return (
    <div class="page-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row">
              <div class="col-md-6 col-lg-4 py-3 wow zoomIn">
                <div class="card-doctor">
                  <div class="header">
                    <img src={doctor1} alt="" />
                    <div class="meta">
                      <a href="/">
                        <span class="mai-call"></span>
                      </a>
                      <a href="/">
                        <span class="mai-logo-whatsapp"></span>
                      </a>
                    </div>
                  </div>
                  <div class="body">
                    <p class="text-xl mb-0">Dr. Stein Albert</p>
                    <span class="text-sm text-grey">Cardiology</span>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 py-3 wow zoomIn">
                <div class="card-doctor">
                  <div class="header">
                    <img src={doctor2} alt="" />
                    <div class="meta">
                      <a href="/">
                        <span class="mai-call"></span>
                      </a>
                      <a href="/">
                        <span class="mai-logo-whatsapp"></span>
                      </a>
                    </div>
                  </div>
                  <div class="body">
                    <p class="text-xl mb-0">Dr. Alexa Melvin</p>
                    <span class="text-sm text-grey">Dental</span>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 py-3 wow zoomIn">
                <div class="card-doctor">
                  <div class="header">
                    <img src={doctor3} alt="" />
                    <div class="meta">
                      <a href="/">
                        <span class="mai-call"></span>
                      </a>
                      <a href="/">
                        <span class="mai-logo-whatsapp"></span>
                      </a>
                    </div>
                  </div>
                  <div class="body">
                    <p class="text-xl mb-0">Dr. Rebecca Steffany</p>
                    <span class="text-sm text-grey">General Health</span>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 py-3 wow zoomIn">
                <div class="card-doctor">
                  <div class="header">
                    <img src={doctor1} alt="" />
                    <div class="meta">
                      <a href="/">
                        <span class="mai-call"></span>
                      </a>
                      <a href="/">
                        <span class="mai-logo-whatsapp"></span>
                      </a>
                    </div>
                  </div>
                  <div class="body">
                    <p class="text-xl mb-0">Dr. Stein Albert</p>
                    <span class="text-sm text-grey">Cardiology</span>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 py-3 wow zoomIn">
                <div class="card-doctor">
                  <div class="header">
                    <img src={doctor2} alt="" />
                    <div class="meta">
                      <a href="/">
                        <span class="mai-call"></span>
                      </a>
                      <a href="/">
                        <span class="mai-logo-whatsapp"></span>
                      </a>
                    </div>
                  </div>
                  <div class="body">
                    <p class="text-xl mb-0">Dr. Alexa Melvin</p>
                    <span class="text-sm text-grey">Dental</span>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 py-3 wow zoomIn">
                <div class="card-doctor">
                  <div class="header">
                    <img src={doctor1} alt="" />
                    <div class="meta">
                      <a href="/">
                        <span class="mai-call"></span>
                      </a>
                      <a href="/">
                        <span class="mai-logo-whatsapp"></span>
                      </a>
                    </div>
                  </div>
                  <div class="body">
                    <p class="text-xl mb-0">Dr. Rebecca Steffany</p>
                    <span class="text-sm text-grey">General Health</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctorall;
