import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const navi = useNavigate();

  const handlefeed = async () => {
    console.log("running");
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/tripzzy/feedback/createfeedback",

        {
          name: name,
          email: email,
          subject: subject,
          message: message,
        }
      );

      alert("FeedBack Sent Successfully");
      navi("/");
    } catch (error) {
      console.log(error);
    }
  };

  const test = () => {
    console.log("hiiii");
  };
  return (
    <div>
      <Header />
      <section className="contact mt-2" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>
              Drop us a line through the form below and we'll get back to you
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 mt-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Our Address</h3>
                    <p>Surat, Gujarat</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="fas fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      jadhavom0408@gmail.com
                      <br />
                      Manavbehra123@gmail.com
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="fas fa-phone-alt"></i>
                    <h3>Call Us</h3>
                    <p>
                      +91 7016154689
                      <br />
                      +91 9016904802
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-3">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  onChange={(e) => setsubject(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                  onChange={(e) => setmessage(e.target.value)}
                ></textarea>
              </div>
              {/* <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}
              <div className="text-center mt-3">
                <a className="btn button5" onClick={handlefeed}>
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
