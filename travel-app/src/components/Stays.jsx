import React, { useEffect, useState } from "react";
import hotel1 from "../assets/img/hotel1.png";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";

const Bookings = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();
  const navigation = useNavigate();
  const gethotel = location.state.staylocation;
  const getindate = location.state.checkindate;
  const getoutdate = location.state.checkoutdate;
  const getguest = location.state.numberguest;

  console.log(gethotel);

  const handleClick = (index) => {
    setActiveButton(index);
    // Add your logic for handling the click event here
  };
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(50000);

  const handleSliderChange = (event) => {
    if (event.target.id === "min") {
      setMinValue(parseInt(event.target.value));
    } else {
      setMaxValue(parseInt(event.target.value));
    }
  };
  return (
    <div>
      <Header />
      {/* our services start */}
      <section className="bookings mt-2" id="bookings">
        <div className="container">
          <div className="section-title">
            <h2 className="mb-3">Find Stays</h2>
            <p>
              "Discover comfort and convenience in every stay with our
              personalized service approach."
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-3 mb-3" style={{ position: "relative" }}>
              <label htmlFor="" className="book_label book_label1">
                Enter Destination
              </label>
              <input
                type="text"
                className="book_input form-control"
                placeholder="Mumbai"
                id=""
              />
            </div>
            <div className="col-md-2 mb-3" style={{ position: "relative" }}>
              <label htmlFor="" className="book_label book_label2">
                Check In
              </label>
              <input
                type="date"
                className="book_input form-control"
                placeholder=""
                id=""
              />
            </div>
            <div className="col-md-2 mb-3" style={{ position: "relative" }}>
              <label htmlFor="" className="book_label book_label3">
                Check Out
              </label>
              <input type="date" className="book_input form-control" id="" />
            </div>
            <div className="col-md-3 mb-3" style={{ position: "relative" }}>
              <label htmlFor="" className="book_label book_label4">
                Rooms & Guests
              </label>
              {/* <input type="text" className="book_input form-select" id="" /> */}
              <select name="" className="book_input form-select" id="">
                <option>1 room,2 guests</option>
              </select>
            </div>
            <div className="col-md-1 mb-3 text-start">
              <button className="button2">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row gy-4 py-4">
            <div className="col-lg-4 col-md-5 text-start">
              <h4 className="filter-title">Filters</h4>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Price
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <div className="range-slider">
                        <div className="rangeValues">
                          ₹{minValue} - ₹{maxValue}
                        </div>
                        <input
                          id="min"
                          type="range"
                          min="1000"
                          max="50000"
                          step="500"
                          value={minValue}
                          onChange={handleSliderChange}
                        />
                        <input
                          id="max"
                          type="range"
                          min="1000"
                          max="50000"
                          step="500"
                          value={maxValue}
                          onChange={handleSliderChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Rating
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <div className="d-flex ratings">
                        {[0, 1, 2, 3, 4].map((index) => (
                          <button
                            key={index}
                            className={`button3 ${
                              activeButton === index ? "active" : ""
                            }`}
                            onClick={() => handleClick(index)}
                          >
                            {index}+
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Freebies
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapsee show"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0 p-0">
                        <li>
                          <input type="checkbox" name="" id="" /> Free breakfast
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Free parking
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Free internet
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Free airport
                          shuttle
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Free
                          cancellation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      Amenities
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    className="accordion-collapse collapsee show"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0 p-0">
                        <li>
                          <input type="checkbox" name="" id="" /> 24hr front
                          desk
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Air
                          conditioned
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Fitness
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Pool
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                <div className="col"></div>
                <div className="col-lg-10 col-auto">
                  <div className="card">
                    <div className="card-body find_stays">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="right_line">
                            <h4 className="titles">Hotels</h4>
                            <span>257 places</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="right_line">
                            <h4 className="titles">Lodge</h4>
                            <span>51 places</span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="">
                            <h4 className="titles">Resorts</h4>
                            <span>72 places</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-5">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-5 text-start">
                          <img className="stay_img" src={hotel1} alt="" />
                        </div>
                        <div className="col-xl-8 col-lg-7 col-md-7 py-2">
                          <div className="d-flex justify-content-between">
                            <h4 className="title">Hotel Ariana Residency</h4>
                            <span className="price">Price ₹ 6,142</span>
                          </div>
                          <p>
                            <i className="fa-solid fa-location-dot me-1"></i>
                            Opposite Apna Bazar, Dhake Colony, J.P. Road, Azad
                            Nagar, Andheri (West), Mumbai-400053
                          </p>
                          <div className="">
                            <div className="d-inline-block me-2">
                              <span>
                                <i className="fas fa-star"></i>
                              </span>
                              <span>
                                <i className="fas fa-star"></i>
                              </span>
                              <span>
                                <i className="fas fa-star"></i>
                              </span>
                              <span>
                                <i className="fas fa-star"></i>
                              </span>
                              <span>
                                <i className="fas fa-star"></i>
                              </span>
                            </div>
                            <span className="me-3">5 Star Hotel</span>{" "}
                            <span>
                              <b>20+</b> Aminities
                            </span>
                          </div>
                          <div className="py-2">
                            <button className="button3 me-1">4.2</button>
                            <b className="pe-1">Very Good</b>
                            <span>371 reviews</span>
                          </div>
                          <hr />
                          <div className="d-flex">
                            <button className="button3 me-2">
                              <i className="fas fa-heart"></i>
                            </button>
                            <a
                              className="button2 w-100 text-dark text-center"
                              href="/book_hotel"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button4 w-100 mt-4 stays_show_more_res"
                  >
                    Show more results
                  </button>
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

export default Bookings;
