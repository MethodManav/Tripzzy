import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Flightbooking = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const fromCity = location.state.fromvalue;
  const toCity = location.state.ToValue;
  const token = localStorage.getItem("Token");
  const user_id = localStorage.getItem("User_id");
  console.log(user_id);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [classtype, setclass] = useState("");
  const [gender, setgender] = useState("");
  const [passport, setpassport] = useState("");
  const [date, setdate] = useState("");

  useEffect(() => {
    if (!token) {
      alert("Please Register Your Account ");
      navigation("/");
    }
  }, []);
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(phone);
  console.log(classtype);
  console.log(gender);
  console.log(passport);
  console.log(date);

  const handlepayment = async () => {
    console.log("hii");
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/tripzzy//booking/flightbooking",
        {
          user_id: user_id,
          firstname: firstname,
          lastname: lastname,
          gender: gender,
          phone: phone,
          email: email,
          classtype: classtype,
          passport: passport,
          date: date,
          from: fromCity,
          to: toCity,
        }
      );
      alert("Ticket Booked Successfully");
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <section className="flight_books">
        <div className="container">
          <div className="section-title">
            <h2>Booking Information</h2>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          required
                          onChange={(e) => setfirstname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Last Name
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={(e) => setlastname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Phone Number
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          onChange={(e) => setphone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Gender
                        </label>
                        <select
                          name=""
                          className="form-select"
                          id=""
                          required
                          onChange={(e) => setgender(e.target.value)}
                        >
                          <option value="">Select Your Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Passport Number
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Passport Number"
                          onChange={(e) => setpassport(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Departure Date
                        </label>
                        <input
                          required
                          type="date"
                          className="form-control"
                          placeholder=""
                          onChange={(e) => setdate(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Travel Class
                        </label>
                        <select
                          name=""
                          className="form-select"
                          id=""
                          required
                          onChange={(e) => setclass(e.target.value)}
                        >
                          <option value="">Select Your Class</option>
                          <option value="Economy">Economy Class</option>
                          <option value="Business">Business Class</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12 text-center">
                      <button
                        className="btn btn-primary mt-2"
                        onClick={handlepayment}
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card flightbook_details">
                    <div className="card-body">
                      <div className="card_title mb-3">
                        <h4>
                          <b>Flights</b>
                        </h4>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <span>From</span>
                          <h5>
                            <b>{fromCity}</b>
                          </h5>
                        </div>
                        <div className="col-lg-2">
                          <i class="fas fa-arrow-right"></i>
                        </div>
                        <div className="col-lg-3">
                          <span>To</span>
                          <h5>
                            <b>{toCity}</b>
                          </h5>
                        </div>
                      </div>
                      <br />
                      <div className="package-title mb-3">
                        <h5>Package Rules</h5>
                      </div>
                      <ul>
                        <li className="pb-2">
                          Free breakfast as per the Itinerary
                        </li>
                        <li className="pb-2">
                          Visit eight villages showcasing Polynesian culture{" "}
                        </li>
                        <li className="pb-2">
                          All toll tax, parking, fuel, and driver allowances{" "}
                        </li>
                        <li className="pb-2">
                          Comfortable and hygienic vehicle
                        </li>
                      </ul>
                      <div className="package-title">
                        <h5>Price</h5>
                      </div>
                      <div className="d-flex align-items-center">
                        <h4 style={{ color: "#366779" }}>₹ 20,500 </h4>
                        <span>/ Adult X 1</span>
                      </div>
                    </div>
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

export default Flightbooking;
