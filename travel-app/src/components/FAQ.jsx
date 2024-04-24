import React from "react";
import Header from "./Header";
import faq from "../assets/img/faq.jpg";
import axios from "axios";

const FAQ = () => {
  return (
    <div>
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>We are here</p>
          </div>
        </div>
        <div className="container faq">
          <div className="row gy-4 faq-item">
            <div
              className="col-lg-5 order-2 order-lg-1 text-start mt-5"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <h3>Frequently Asked Questions</h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <div class="accordion faq-ques" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Do you offer travel insurance?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Yes, we do offer travel insurance. Our travel insurance
                      plans provide comprehensive coverage for various aspects
                      of your trip, including trip cancellation, trip
                      interruption, emergency medical expenses, lost luggage,
                      and more.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What payment methods are supported?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body"></div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can i specify a delivery date when ordering?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <div className="image-stack">
                {/* <img
                  src=""
                  className="stack-front img-fluid"
                /> */}
                <div className="front-faq-box text-start">
                  <h4 className="mb-3">
                    You need any help? get free consultation
                  </h4>
                  <div className="icon d-inline-flex align-items-center">
                    <i className="fas fa-phone-alt me-2"></i>
                    <div className="faq-info d-inline-flex flex-column">
                      <span>Have Any Questions</span>
                      <span>(00) 112 365 489</span>
                    </div>
                  </div>
                  <br />
                  <button className="btn contact_us">Contact Us</button>
                </div>
                <img src={faq} className="back-faq-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
