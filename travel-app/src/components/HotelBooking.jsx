import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
const HotelBooking = () => {
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
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          ID Proof
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Adhaar/License Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Check In
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Check Out
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Rooms, Guests
                        </label>
                        <select name="" className="form-select" id="">
                          <option value="">1 Room, 1 Guests</option>
                          <option value="">1 Room, 2 Guests</option>
                          <option value="">1 Room, 3 Guests</option>
                          <option value="">2 Room, 4 Guests</option>
                          <option value="">2 Room, 7 Guests</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <button className="btn btn-success mt-2">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card flightbook_details">
                <div className="card-body">
                  <div className="card_title mb-3">
                    <h4>
                      <b>Hotels</b>
                    </h4>
                  </div>
                  <div className="package-title mb-3">
                    <h5>Hotel Facilities</h5>
                  </div>
                  <ul>
                    <li className="pb-2">
                      Free breakfast, lunch as per the Itinerary
                    </li>
                    <li className="pb-2">
                      Visit eight villages showcasing Polynesian culture{" "}
                    </li>
                    <li className="pb-2">
                      Complimentary Camel safari, Bonfire,
                    </li>
                    <li className="pb-2">Comfortable and hygienic rooms</li>
                  </ul>
                  <div className="package-title">
                    <h5>Price</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <h4 style={{ color: "#366779" }}>₹ 1500 </h4>
                    <span>/ Per person</span>
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

export default HotelBooking;
