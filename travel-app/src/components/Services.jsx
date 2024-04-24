import React from "react";
import Header from "./Header";
import flight from "../assets/img/flight.jpeg";
import hotel from "../assets/img/hotel.jpeg";
import Vacation from "../assets/img/vacation.jpeg";
import travel_insurance from "../assets/img/travel_insurance.jpeg";
import travel_resource from "../assets/img/travel_resource.jpeg";
import customer_support from "../assets/img/customer_support.jpeg";
import Footer from "./Footer";

const Services = () => {
  return (
    <div>
      <Header />
      <section className="services mt-2" id="services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>Unlock unforgettable experiences with our services, crafted to elevate every aspect of your journey.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 services-box" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <img
                      src={Vacation}
                      width={40}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="title">
                    <a href="#">Vacation Packages</a>
                  </h4>
                  <p className="description">
                    We provide you the best package within a short time explore
                    more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services-box" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <img src={hotel} width={40} alt="" className="img-fluid" />
                  </div>
                  <h4 className="title">
                    <a href="#">Hotel Reservations</a>
                  </h4>
                  <p className="description">
                    You can easily book your according to your budget hotel by
                    our website.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services-box" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <img src={flight} width={40} alt="" className="img-fluid" />
                  </div>
                  <h4 className="title">
                    <a href="#">Flight Booking</a>
                  </h4>
                  <p className="description">
                    We book all kind of national or international ticket for
                    your destinaion.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services-box" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <img
                      src={travel_insurance}
                      width={40}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="title">
                    <a href="#">Travel Insurance</a>
                  </h4>
                  <p className="description">
                    We safeguard your travel plans with comprehensive travel
                    insurance coverage.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services-box" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <img
                      src={travel_resource}
                      width={40}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="title">
                    <a href="#">Travel Resources</a>
                  </h4>
                  <p className="description">
                    Dive into our curated collection of travel resources
                    designed to inspire and inform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services-box" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-body">
                  <div className="icon">
                    <img
                      src={customer_support}
                      width={40}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="title">
                    <a href="#">Customer Support</a>
                  </h4>
                  <p className="description">
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
