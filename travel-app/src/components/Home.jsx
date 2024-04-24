import React, { useEffect } from "react";
import dest1 from "../assets/img/destinations/dest1.png";
import china from "../assets/img/destinations/china.png";
import darjeeling from "../assets/img/destinations/darjeeling.png";
import thailand from "../assets/img/destinations/thailand.png";
import malaysia from "../assets/img/destinations/malaysia.png";
import gangtok from "../assets/img/destinations/gangtok.png";
import australia from "../assets/img/destinations/australia.png";
import london from "../assets/img/destinations/london.png";
import usa from "../assets/img/destinations/usa.png";
import jaipur from "../assets/img/destinations/jaipur.png";
import mumbai from "../assets/img/destinations/mumbai.png";
import varanasi from "../assets/img/destinations/varanasi.png";
import jodhpur from "../assets/img/destinations/jodhpur.png";
import banglore from "../assets/img/destinations/banglore.png";
import pushkar from "../assets/img/destinations/pushkar.png";
import rishikesh from "../assets/img/destinations/rishikesh.png";
import udaiipur from "../assets/img/destinations/udaiipur.png";
import hyderabad from "../assets/img/destinations/hyderabad.png";
import flightImg from "../assets/img/flights_img.jpg";
import hoteltImg from "../assets/img/hotels_img.jpg";
import ram_mandir from "../assets/img/ram_mandir.png";
import gateway_india from "../assets/img/gateway_india.png";
import ladakh from "../assets/img/ladakh.png";
import nainital from "../assets/img/nainital.png";
import backpack1 from "../assets/img/backpack1.jpg";
import backpack2 from "../assets/img/backpack2.jpg";
import backpack3 from "../assets/img/backpack3.jpg";
import backpack4 from "../assets/img/backpack4.jpg";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Destinations = () => {
  useEffect(() => {
    handlevisitors();
  }, []);

  const handlevisitors = async () => {
    const res = await axios.get("http://localhost:3000/api/v1/tripzzy/user/");
  };
  return (
    <div>
      <Header />
      <section className="destinations mt-2" id="destinations">
        <div className="container">
          <div className="section-title">
            <h2>Top Destinations</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="row">
            <div className="col-md-6 destination-item">
              <div className="destination-wrap">
                <img src={dest1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4 destination-item">
                  <div className="destination-wrap">
                    <img src={china} className="img-fluid" alt="" />
                    <div className="destination-info">
                      <h3>China</h3>
                    </div>
                  </div>
                  <div className="destination-wrap">
                    <img src={darjeeling} className="img-fluid" alt="" />
                    <div className="destination-info">
                      <h3>Darjeeling</h3>
                    </div>
                  </div>
                  <div className="destination-wrap">
                    <img src={malaysia} className="img-fluid" alt="" />
                    <div className="destination-info">
                      <h3>Malaysia</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 destination-item">
                  <div className="destination-wrap">
                    <img src={gangtok} className="img-fluid" alt="" />
                    <div className="destination-info">
                      <h3>Gangtok</h3>
                    </div>
                  </div>
                  <div className="destination-wrap">
                    <img src={thailand} className="img-fluid" alt="" />
                    <div className="destination-info">
                      <h3>Thailand</h3>
                    </div>
                  </div>
                  <div className="destination-wrap">
                    <img src={australia} className="img-fluid" alt="" />
                    <div className="destination-info">
                      <h3>Australia</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 destination-item">
                  <div className="destination-wrap">
                    <img src={london} className="img-fluid" alt="" />
                    <div className="destination-info">
                      <h3>London</h3>
                    </div>
                  </div>
                  <div className="destination-wrap">
                    <img src={usa} className="img-fluid" alt="" />
                    <div className="destination-info">
                      <h3>USA</h3>
                    </div>
                  </div>
                  <div className="destination-btn">
                    <button className="btn btn-dark">View All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="plan_trip">
        <div className="container">
          <div className="sub-title pb-4">
            <h2>Plan your perfect trip</h2>
            <p>Search Flights & Places Hire to our most popular destinations</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src={jaipur}
                        className="img-fluid places_img"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="trip-place-info">
                        <h4>Jaipur</h4>
                        <span>Flights</span>
                        <span className="list-style-dot">- Hotels</span>
                        <span className="list-style-dot">- Resorts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src={mumbai}
                        className="img-fluid places_img"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="trip-place-info">
                        <h4>Mumbai</h4>
                        <span>Flights</span>
                        <span className="list-style-dot">- Hotels</span>
                        <span className="list-style-dot">- Resorts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src={varanasi}
                        className="img-fluid places_img"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="trip-place-info">
                        <h4>Varanasi</h4>
                        <span>Flights</span>
                        <span className="list-style-dot">- Hotels</span>
                        <span className="list-style-dot">- Resorts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src={jodhpur}
                        className="img-fluid places_img"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="trip-place-info">
                        <h4>Jodhpur</h4>
                        <span>Flights</span>
                        <span className="list-style-dot">- Hotels</span>
                        <span className="list-style-dot">- Resorts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src={banglore}
                        className="img-fluid places_img"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="trip-place-info">
                        <h4>Banglore</h4>
                        <span>Flights</span>
                        <span className="list-style-dot">- Hotels</span>
                        <span className="list-style-dot">- Resorts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src={pushkar}
                        className="img-fluid places_img"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="trip-place-info">
                        <h4>Pushkar</h4>
                        <span>Flights</span>
                        <span className="list-style-dot">- Hotels</span>
                        <span className="list-style-dot">- Resorts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src={rishikesh}
                        className="img-fluid places_img"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="trip-place-info">
                        <h4>Rishikesh</h4>
                        <span>Flights</span>
                        <span className="list-style-dot">- Hotels</span>
                        <span className="list-style-dot">- Resorts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src={udaiipur}
                        className="img-fluid places_img"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="trip-place-info">
                        <h4>Udaipur</h4>
                        <span>Flights</span>
                        <span className="list-style-dot">- Hotels</span>
                        <span className="list-style-dot">- Resorts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src={hyderabad}
                        className="img-fluid places_img"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="trip-place-info">
                        <h4>Hyderabad</h4>
                        <span>Flights</span>
                        <span className="list-style-dot">- Hotels</span>
                        <span className="list-style-dot">- Resorts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flights_hotels">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="flights_hotels_wrap">
                <img src={flightImg} alt="" className="img-fluid w-100" />
                <div className="flight_hotels_info">
                  <h2>Flights</h2>
                  <p>
                    Search Flights & Places Hire to our most popular
                    destinations
                  </p>
                  <a className="btn show_more" href="/flights">
                    Show Flights
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="flights_hotels_wrap">
                <div className="flights_hotels_img position-relative overflow-hidden">
                  <img src={hoteltImg} alt="" className="img-fluid w-100" />
                </div>
                <div className="flight_hotels_info">
                  <h2>Hotels</h2>
                  <p>
                    Search hotels & Places Hire to our most popular destinations
                  </p>
                  <a className="btn show_more" href="/stays">
                    Show Hotels
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fallinto_travles">
        <div className="container">
          <div className="sub-title pb-4">
            <h2>Fall into travel</h2>
            <p>
              Going somewhere to celebrate this season? Whether you’re going
              home or somewhere to roam, we’ve got the travel tools to get you
              to your destination.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="fallinto_travles_wrap">
                <img src={ram_mandir} alt="" className="img-fluid w-100" />
                <div className="fallinto_travles_info">
                  <div className="row">
                    <div className="col-md-8 text-start z-1">
                      <h4>Ram Mandir</h4>
                      <p>Ayodhya</p>
                    </div>
                    <div className="col-md-4 text-end z-1">
                      <h5> ₹ 3610</h5>
                    </div>
                    <div className="col-md-12 z-1">
                      <button className="button2 w-100 fw-bold">Book</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="fallinto_travles_wrap">
                <img src={gateway_india} alt="" className="img-fluid w-100" />
                <div className="fallinto_travles_info">
                  <div className="row">
                    <div className="col-md-8 text-start z-1">
                      <h4>Gateway of India</h4>
                      <p>Mumbai</p>
                    </div>
                    <div className="col-md-4 text-end z-1">
                      <h5> ₹ 5376</h5>
                    </div>
                    <div className="col-md-12 z-1">
                      <button className="button2 w-100 fw-bold">Book</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="fallinto_travles_wrap">
                <img src={ladakh} alt="" className="img-fluid w-100" />
                <div className="fallinto_travles_info">
                  <div className="row">
                    <div className="col-md-8 text-start z-1">
                      <h4>Ladakh</h4>
                      <p>Indian Himalayas</p>
                    </div>
                    <div className="col-md-4 text-end z-1">
                      <h5> ₹ 6971</h5>
                    </div>
                    <div className="col-md-12 z-1">
                      <button className="button2 w-100 fw-bold">Book</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="fallinto_travles_wrap">
                <img src={nainital} alt="" className="img-fluid w-100" />
                <div className="fallinto_travles_info">
                  <div className="row">
                    <div className="col-md-8 text-start z-1">
                      <h4>Nainital</h4>
                      <p>Uttarakhand</p>
                    </div>
                    <div className="col-md-4 text-end z-1">
                      <h5> ₹ 8950</h5>
                    </div>
                    <div className="col-md-12 z-1">
                      <button className="button2 w-100 fw-bold">Book</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fallinto_travles">
        <div className="container">
          <div className="row shri_lanka text-start">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-8">
                  <h2>
                    <strong>
                      Backpacking <br /> Shri Lanka
                    </strong>
                  </h2>
                </div>
                <div className="col-md-4">
                  <span className="pt-2">from</span> <br />
                  <b style={{ fontSize: "18px" }}>₹ 7000</b>
                </div>
                <div className="col-md-12">
                  <p className="pt-1" style={{ fontSize: "16px" }}>
                    Traveling is a unique experience as it's the best way to
                    unplug from the pushes and pulls of daily life. It helps us
                    to forget about our problems, frustrations, and fears at
                    home. During our journey, we experience life in different
                    ways. We explore new places, cultures, cuisines, traditions,
                    and ways of living.
                  </p>
                </div>
                <div className="col-md-12">
                  <button className="button2  fw-bold">Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="shri_lanka_img position-relative overflow-hidden">
                    <img src={backpack1} alt="" className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="shri_lanka_img position-relative overflow-hidden">
                    <img src={backpack2} alt="" className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="shri_lanka_img position-relative overflow-hidden">
                    <img src={backpack3} alt="" className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="shri_lanka_img position-relative overflow-hidden">
                    <img src={backpack4} alt="" className="img-fluid w-100" />
                  </div>
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

export default Destinations;
