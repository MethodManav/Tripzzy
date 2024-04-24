import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../assets/css/header.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import tripzzy_logo from "../assets/img/tripzzy_white-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [date, setdate] = useState("");
  const [classtype, setclasstype] = useState("");
  const location = useLocation();
  const navigation = useNavigate();
  const [showFlights, setShowFlights] = useState(true);

  const [hotellocation, sethotel] = useState("");
  const [indate, setindate] = useState("");
  const [outdate, setoutdate] = useState("");
  const [guest, setguest] = useState("");

  const handlesearch = () => {
    try {
      navigation("/flights", {
        state: {
          fromResult: valueFrom,
          toResult: valueTo,
          dateresult: date,
          classresult: classtype,
        },
      });
    } catch (error) {}
  };
  console.log(hotellocation);

  const handlehotelsearch = () => {
    try {
      navigation("/stays", {
        state: {
          staylocation: hotellocation,
          checkindate: indate,
          checkoutdate: outdate,
          numberguest: guest,
        },
      });
    } catch (error) {}
  };

  const tokendata = localStorage.getItem("Token");
  const namevalue = localStorage.getItem("Name");

  const toggleTable = (isFlights) => {
    setShowFlights(isFlights);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Dynamically change the banner title based on the current page
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/flight_bookings":
        return "MyTicket";
      case "/services":
        return "Services";
      case "/about":
        return "About Us";
      case "/contact":
        return "Contact Us";
      case "/book_flight":
        return "Book a Flight";
      default:
        return "Discover Your Next";
    }
  };

  // Conditionally render the query box based on the current page
  const renderQueryBox = () => {
    if (location.pathname === "/") {
      return (
        <div className="query_box">
          <div className="row">
            <div className="col-lg-12">
              <button
                className={`btn me-2 ${
                  showFlights ? "btn-info" : "btn-outline-info"
                }`}
                onClick={() => toggleTable(true)}
              >
                Flights
              </button>
              <button
                className={`btn ${
                  showFlights ? "btn-outline-info" : "btn-info"
                }`}
                onClick={() => toggleTable(false)}
              >
                Hotels
              </button>
            </div>
          </div>
          <form onSubmit={handlesearch}>
            <div
              className="row align-items-center justify-content-between mt-4"
              id="search_flights"
              style={{ display: showFlights ? "flex" : "none" }}
            >
              <div className="col-md-3 search_bar_container">
                <div className="input_box flight_search_box">
                  <label htmlFor="" className="control-label">
                    From
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Mumbai"
                    value={valueFrom}
                    autoComplete="on"
                    required
                    onChange={(e) => setValueFrom(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3 search_bar_container">
                <div className="input_box flight_search_box">
                  <label htmlFor="" className="control-label">
                    To
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Delhi"
                    value={valueTo}
                    required
                    onChange={(e) => setValueTo(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input_box flight_search_box">
                  <label htmlFor="" className="control-label">
                    Departure
                  </label>
                  <input
                    type="date"
                    name=""
                    className="form-control"
                    onChange={(e) => setdate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input_box flight_search_box">
                  <label htmlFor="" className="control-label">
                    Travel Class
                  </label>
                  <select
                    name=""
                    id=""
                    className="form-select"
                    onChange={(e) => setclasstype(e.target.value)}
                    required
                  >
                    <option value="">Select Your Class</option>
                    <option value="Economy">Economy Class</option>
                    <option value="Business">Business Class</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 text-center mt-4">
                <button className="btn button2">Search</button>
              </div>
            </div>
          </form>

          <form onSubmit={handlehotelsearch}>
            <div
              className="row align-items-center justify-content-between mt-4"
              id="search_hotels"
              style={{ display: !showFlights ? "flex" : "none" }}
            >
              <div className="col-md-3 search_bar_container">
                <div className="input_box flight_search_box">
                  <label htmlFor="" className="control-label">
                    Select Destination
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Mumbai"
                    autoComplete="on"
                    onChange={(e) => sethotel(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3 search_bar_container">
                <div className="input_box flight_search_box">
                  <label htmlFor="" className="control-label">
                    Check In
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id=""
                    placeholder="Delhi"
                    onChange={(e) => setindate(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input_box flight_search_box">
                  <label htmlFor="" className="control-label">
                    Check Out
                  </label>
                  <input
                    type="date"
                    name=""
                    className="form-control"
                    id=""
                    onChange={(e) => setoutdate(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input_box flight_search_box">
                  <label htmlFor="" className="control-label">
                    Guests & Rooms
                  </label>
                  <select
                    name=""
                    id=""
                    className="form-select"
                    onChange={(e) => setguest(e.target.value)}
                  >
                    <option value="Null">Select Your Room</option>
                    <option value="1 Room, 2 Guests">1 Room, 2 Guests</option>
                    <option value="1 Room, 3 Guests">1 Room, 3 Guests</option>
                    <option value="2 Room, 5 Guests">2 Room, 5 Guests</option>
                    <option value="2 Room, 7 Guests">2 Room, 7 Guests</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 text-center mt-4">
                <button className="btn button2">Search</button>
              </div>
            </div>
          </form>
        </div>
      );
    }
    return null; // Render nothing for other pages
  };

  return (
    <div>
      <div id="header" className={`fixed-top ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid ms-5 me-5">
            <a className="navbar-brand">
              <img
                src={tripzzy_logo}
                className="logo"
                width={100}
                height={50}
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll left_navbar">
                <li className="nav-item">
                  <a className="nav-link"></a>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/flight_bookings" ? "active" : ""
                    }`}
                    to="/flight_bookings"
                  >
                    <i className="fas fa-bed"></i> MyTicket
                  </Link>
                </li>
              </ul>
              <form className="" role="search">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll right_navbar">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      Destinations
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link">
                      Bookings
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/services" ? "active" : ""
                      }`}
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/contact" ? "active" : ""
                      }`}
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    {tokendata ? (
                      <div>
                        <a
                          className="nav-link nav-profile d-flex align-items-center pe-0"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          <span className="d-none d-md-block dropdown-toggle ps-2">
                            {namevalue}
                          </span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                          <li className="dropdown-header">
                            <h6>{namevalue}</h6>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>

                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="users-profile.html"
                            >
                              <i className="bi bi-person"></i>
                              <span>My Profile</span>
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>

                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              onClick={() => {
                                localStorage.removeItem("Token");
                                localStorage.removeItem("name");
                                localStorage.removeItem("User_id");
                                navigation("/");
                              }}
                            >
                              <i className="bi bi-box-arrow-right"></i>
                              <span>Sign Out</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <a href="/login" className="btn action_btn">
                        Sign In
                      </a>
                    )}
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* Header end */}

      {/* home start */}
      <section className="home" id="home">
        <div className="container-fluid">
          <div className="home_heading">
            {/* <h2>Discover your next</h2>
            <h1>Adventure</h1>
            <h3>Once a year, go someplace you've never been before.</h3> */}
            <h2>{getPageTitle()}</h2>
            <h1>
              {getPageTitle() === "Discover Your Next"
                ? "Adventure"
                : getPageTitle().replace("Find ", "")}
            </h1>
            <h3>Once a year, go someplace you've never been before.</h3>
          </div>
          {renderQueryBox()}
        </div>
      </section>
      {/* home end */}
    </div>
  );
};

export default Header;
