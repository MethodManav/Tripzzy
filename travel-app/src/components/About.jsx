import React from "react";
import Header from "./Header";
import about from "../assets/img/about_us.png";
import omkar from "../assets/img/team/omkar.jpg";
import manav from "../assets/img/team/manav.png";
import sanchit from "../assets/img/team/sanchit.jpg";
import udhav from "../assets/img/team/udhav.jpg";
import chintu from "../assets/img/team/chintu.jpg";
import FAQ from "./FAQ";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Header />
      <section className="about mt-2" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Us</h2>
            <p>Know what we are and what we do</p>
          </div>
        </div>
        <div className="container about_content">
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in">
              <img src={about} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-start text-start" data-aos="fade-up">
              <div className="content p-2">
                <h3>Learn more about us</h3>
                <p className="">
                  "Welcome to Tripzzy, your premier destination for hassle-free
                  travel planning. With unbeatable deals and a user-friendly
                  interface, we're your trusted companion from takeoff to
                  touchdown.".
                </p>
                <p>
                  Our travel website, Tripzzy , is dedicated to simplifying the
                  journey for travelers worldwide. Offering a comprehensive
                  range of services including flight bookings, hotel
                  reservations, and vacation packages, we pride ourselves on our
                  user-friendly interface and personalized recommendations.
                </p>
                <button className="btn about_learn_more mt-4">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team mt-2" id="team">
        <div className="container">
          <div className="section-title">
            <h2>Our Team</h2>
            <p>Know what we are and what we do</p>
          </div>
          <div className="row gy-5 justify-content-center">
            <div className="col-lg-4 col-md-6 team_member">
              <div className="team_member-img">
                <img src={omkar} className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team_member-info text-center">
                <h4>Jadhav Omkar</h4>
                <span>Frontend Developer</span>
                {/* <p>
                  Aliquam iure quaerat voluptatem praesentium possimus unde
                  laudantium vel dolorum distinctio dire flow
                </p> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 team_member">
              <div className="team_member-img">
                <img src={manav} className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team_member-info text-center">
                <h4>Behra Manav</h4>
                <span>Backend Developer</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 team_member">
              <div className="team_member-img">
                <img src={sanchit} className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team_member-info text-center">
                <h4>Jha Sanchit</h4>
                <span>Backend Developer</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 team_member">
              <div className="team_member-img">
                <img src={chintu} className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team_member-info text-center">
                <h4>Paliwal Chinmay</h4>
                <span>UX/UI Developer</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 team_member">
              <div className="team_member-img">
                <img src={udhav} className="img-fluid" alt="" />
                <div className="social">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team_member-info text-center">
                <h4>Jani Udhaav</h4>
                <span>Frontend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default About;
