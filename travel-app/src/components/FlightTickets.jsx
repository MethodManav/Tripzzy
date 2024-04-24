import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import success_img from "../assets/img/book_success.png";
import axios from "axios";

const FlightTickets = () => {
  const user_id = localStorage.getItem("User_id");
  const [myticket, setticket] = useState([""]);
  useEffect(() => {
    showmyticket();
  }, []);
  const showmyticket = async () => {
    try {
      const url = "http://localhost:3000/api/v1/tripzzy/booking/myticket";
      const headers = {
        user_id: user_id,
      };
      const options = {
        headers: headers,
      };
      const res = await axios.get(url, options);
      setticket(res.data.myticket);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />
      <section className="tickets">
        {myticket.map((value, index) => (
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="card">
                  <div className="card-body">
                    <div className="flight_book_details">
                      <div className="flight_book_details_box">
                        <div className="d-flex ps-2 align-items-center">
                          <div className="from me-4">
                            <span>From</span>
                            <h5>
                              <b>{value.from}</b>
                            </h5>
                          </div>
                          <i class="fas fa-arrow-right me-4"></i>
                          <div className="to">
                            <span>To</span>
                            <h5>
                              <b>{value.to}</b>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <table class="table">
                        <tbody>
                          <tr>
                            <th>First Name</th>
                            <td>{value.firstname}</td>
                          </tr>
                          <tr>
                            <th>Last Name</th>
                            <td>{value.lastname}</td>
                          </tr>
                          <tr>
                            <th>Email ID</th>
                            <td>{value.email}</td>
                          </tr>
                          <tr>
                            <th>Phone Number</th>
                            <td>{value.phone}</td>
                          </tr>
                          <tr>
                            <th>Gender</th>
                            <td>{value.gender}</td>
                          </tr>
                          <tr>
                            <th>Passport Number</th>
                            <td>{value.passport}</td>
                          </tr>
                          <tr>
                            <th>Departure Date</th>
                            <td>{value.date}</td>
                          </tr>
                          <tr>
                            <th>Seat </th>
                            <td>{value.classtype}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card">
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default FlightTickets;
