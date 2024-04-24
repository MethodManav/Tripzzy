import React, { useEffect, useState } from "react";
import hotel1 from "../assets/img/hotel1.png";
import emirates from "../assets/img/flights/emirates.png";
import indigo from "../assets/img/flights/indigo.png";
import qatar from "../assets/img/flights/qatar.png";
import spicejet from "../assets/img/flights/spicejet.png";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";

const Flights = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();
  const navigation = useNavigate();

  const getfromvalue = location.state.fromResult;
  const getToValue = location.state.toResult;
  const getdate = location.state.dateresult;
  const getclass = location.state.classresult;
  console.log(getclass);
  const handlebook = () => {
    try {
      navigation("/book_flight", {
        state: {
          fromvalue: getfromvalue,
          ToValue: getToValue,
        },
      });
    } catch (error) {}
  };
  console.log(getfromvalue);

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
  const [minTime, setMinTime] = useState(0);
  const [maxTime, setMaxTime] = useState(1440); // 24 hours in minutes

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const meridiem = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${displayHours}:${displayMinutes} ${meridiem}`;
  };

  const handleSliderChange2 = (event) => {
    if (event.target.id === "min") {
      setMinTime(parseInt(event.target.value));
    } else {
      setMaxTime(parseInt(event.target.value));
    }
  };
  return (
    <div>
      <Header />
      {/* our services start */}
      <section className="bookings mt-2" id="bookings">
        <div className="container">
          <div className="section-title">
            <h2 className="mb-3">Find Flights</h2>
            <p>
              "Embark on seamless journeys with our dedicated customer support."
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-2 mb-3" style={{ position: "relative" }}>
              <label htmlFor="" className="book_label book_label1">
                From
              </label>
              <input
                type="text"
                className="book_input form-control"
                value={getfromvalue}
                id=""
              />
            </div>
            <div className="col-md-2 mb-3" style={{ position: "relative" }}>
              <label htmlFor="" className="book_label book_label1">
                To
              </label>
              <input
                type="text"
                className="book_input form-control"
                value={getToValue}
              />
            </div>
            <div className="col-md-2 mb-3" style={{ position: "relative" }}>
              <label htmlFor="" className="book_label book_label2">
                Depart - Return
              </label>
              <input
                type="text"
                className="book_input form-control"
                placeholder="07 Nov 24 - 13 Nov 24"
                value={getdate}
              />
            </div>

            <div className="col-md-2 mb-3" style={{ position: "relative" }}>
              <label htmlFor="" className="book_label book_label4">
                Travel Class
              </label>
              <select
                name=""
                className="book_input form-select"
                value={getclass}
              >
                <option value={getclass}>{getclass}</option>
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
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Departure Time
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <div className="range-slider">
                        <div className="rangeValues">
                          {formatTime(minTime)} - {formatTime(maxTime)}
                        </div>
                        <input
                          id="min"
                          type="range"
                          min="0"
                          max="1440"
                          step="15"
                          value={minTime}
                          onChange={handleSliderChange2}
                        />
                        <input
                          id="max"
                          type="range"
                          min="0"
                          max="1440"
                          step="15"
                          value={maxTime}
                          onChange={handleSliderChange2}
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
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Rating
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
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
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      Airlines
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    className="accordion-collapse collapsee show"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0 p-0">
                        <li>
                          <input type="checkbox" name="" id="" /> Emirated
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Indigo
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Qatar
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Emirates
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
                      data-bs-target="#panelsStayOpen-collapseFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      Trips
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFive"
                    className="accordion-collapse collapsee show"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0 p-0">
                        <li>
                          <input type="checkbox" name="" id="" /> Round Trip
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> On Way
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> Multi-City
                        </li>
                        <li>
                          <input type="checkbox" name="" id="" /> My Dates Are
                          Flexible
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
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <div className="right_line">
                            <h4 className="titles">Cheapest</h4>
                            <span>₹5999 . 2h 18m</span>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="right_line">
                            <h4 className="titles">Best</h4>
                            <span>₹8599 . 2h 18m</span>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="right_line">
                            <h4 className="titles">Quickest</h4>
                            <span>₹8999 . 2h 18m</span>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="">
                            <span
                              className="titles other_sorts"
                              style={{ fontWeight: "600" }}
                            >
                              <i className="fas fa-bars"></i> Other Sort
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-5">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 text-start">
                          <img className="flights_img" src={emirates} alt="" />
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 py-2">
                          <div className="row">
                            <div className="col-md-9">
                              <div className="mb-2">
                                <button className="button3 me-1">4.2</button>
                                <b className="pe-1">Very Good</b>
                                <span>371 reviews</span>
                              </div>
                              <div className="d-flex align-items-baseline mb-1">
                                &nbsp;
                                <span className="me-4">
                                  <b>12:00 pm - 01:28 pm</b> <br />
                                  <span className="flight_emirates">
                                    {getfromvalue}
                                  </span>
                                </span>
                                <span className="me-4">non stop</span>
                                <span>
                                  <b>2h 28m</b>
                                  <br />
                                  <span className="flight_ewrbna">
                                    {getToValue}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="col-md-3 text-end">
                              <span className="starting_from">
                                starting from
                              </span>
                              <br />
                              <span className="start_from_price">₹1114</span>
                            </div>
                          </div>
                          <hr />
                          <div className="d-flex">
                            <button className="button3 me-2">
                              <i className="fas fa-heart"></i>
                            </button>
                            <a
                              className="button2 w-100 text-dark text-center"
                              onClick={handlebook}
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 text-start">
                          <img className="flights_img" src={indigo} alt="" />
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8">
                          <div className="row">
                            <div className="col-md-9">
                              <div className="mb-2">
                                <button className="button3 me-1">4.2</button>
                                <b className="pe-1">Very Good</b>
                                <span>400 reviews</span>
                              </div>
                              <div className="d-flex align-items-baseline mb-1">
                                &nbsp;
                                <span className="me-4">
                                  <b>02:02 pm - 04:30 pm</b> <br />
                                  <span className="flight_emirates">
                                    {getfromvalue}
                                  </span>
                                </span>
                                <span className="me-4">non stop</span>
                                <span>
                                  <b>2h 28m</b>
                                  <br />
                                  <span className="flight_ewrbna">
                                    {getToValue}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="col-md-3 text-end">
                              <span className="starting_from">
                                starting from
                              </span>
                              <br />
                              <span className="start_from_price">₹1054</span>
                            </div>
                          </div>
                          <hr />
                          <div className="d-flex">
                            <button className="button3 me-2">
                              <i className="fas fa-heart"></i>
                            </button>
                            <button
                              className="button2 w-100 text-dark text-center"
                              onClick={handlebook}
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 text-start">
                          <img className="flights_img" src={qatar} alt="" />
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8">
                          <div className="row">
                            <div className="col-md-9">
                              <div className="mb-2">
                                <button className="button3 me-1">4.2</button>
                                <b className="pe-1">Very Good</b>
                                <span>89 reviews</span>
                              </div>
                              <div className="d-flex align-items-baseline mb-1">
                                &nbsp;
                                <span className="me-4">
                                  <b>03:00 pm - 05:28 pm</b> <br />
                                  <span className="flight_emirates">
                                    {getfromvalue}
                                  </span>
                                </span>
                                <span className="me-4">non stop</span>
                                <span>
                                  <b>2h 28m</b>
                                  <br />
                                  <span className="flight_ewrbna">
                                    {getToValue}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="col-md-3 text-end">
                              <span className="starting_from">
                                starting from
                              </span>
                              <br />
                              <span className="start_from_price">₹3104</span>
                            </div>
                          </div>
                          <hr />
                          <div className="d-flex">
                            <button className="button3 me-2">
                              <i className="fas fa-heart"></i>
                            </button>
                            <a
                              className="button2 w-100 text-dark text-center"
                              onClick={handlebook}
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 text-start">
                          <img className="flights_img" src={spicejet} alt="" />
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8">
                          <div className="row">
                            <div className="col-md-9">
                              <div className="mb-2">
                                <button className="button3 me-1">4.2</button>
                                <b className="pe-1">Very Good</b>
                                <span>201 reviews</span>
                              </div>
                              <div className="d-flex align-items-baseline mb-1">
                                &nbsp;
                                <span className="me-4">
                                  <b>12:00 pm - 01:28 pm</b> <br />
                                  <span className="flight_emirates">
                                    {getfromvalue}
                                  </span>
                                </span>
                                <span className="me-4">non stop</span>
                                <span>
                                  <b>2h 28m</b>
                                  <br />
                                  <span className="flight_ewrbna">
                                    {getToValue}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="col-md-3 text-end">
                              <span className="starting_from">
                                starting from
                              </span>
                              <br />
                              <span className="start_from_price">₹2104</span>
                            </div>
                          </div>
                          <hr />
                          <div className="d-flex">
                            <button className="button3 me-2">
                              <i className="fas fa-heart"></i>
                            </button>
                            <a
                              className="button2 w-100 text-dark text-center"
                              onClick={handlebook}
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="button4 w-100 mt-4">
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

export default Flights;
