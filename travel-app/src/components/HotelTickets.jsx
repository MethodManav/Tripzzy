import React from "react";
import success_img from "../assets/img/book_success.png";
import Header from "./Header";
import Footer from "./Footer";

const HotelTickets = () => {
  return (
    <div>
      <Header />
      <section className="tickets">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="card">
                <div className="card-body">
                  <div className="flight_book_box">
                    <div className="flight_booked_success d-flex align-items-center">
                      <div className="book_success_img me-4">
                        <img src={success_img} alt="" />
                      </div>
                      <div className="book_success_text">
                        <h4>
                          <b>Your hotel room has been booked successfully!</b>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="flight_book_details">
                    <div className="flight_book_details_box">
                      <div className="d-flex ps-2 align-items-center">
                        <div className="hotel-name me-4">
                          <h5>
                            <b>Hotel Ariana Residency</b>
                          </h5>
                          <p><i class="fas fa-hotel"></i> &nbsp;Opposite Apna Bazar, Dhake Colony, J.P. Road, Azad Nagar, Andheri (West), Mumbai-400053</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <table class="table">
                      <tbody>
                        <tr>
                          <th>First Name</th>
                          <td>John</td>
                        </tr>
                        <tr>
                          <th>Last Name</th>
                          <td>Doe</td>
                        </tr>
                        <tr>
                          <th>Email ID</th>
                          <td>john12@gmail.com</td>
                        </tr>
                        <tr>
                          <th>Room Type</th>
                          <td>Deluxe</td>
                        </tr>
                        <tr>
                          <th>No.of Rooms</th>
                          <td>1</td>
                        </tr>
                        <tr>
                          <th>Guests</th>
                          <td>3</td>
                        </tr>
                        <tr>
                          <th>Check In</th>
                          <td>10/05/2024</td>
                        </tr>
                        <tr>
                          <th>Check Out</th>
                          <td>11/05/2024</td>
                        </tr>
                        <tr>
                          <th>ID Proof</th>
                          <td>5674 4512 9078</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card">
                <div className="card-body">
                  <div className="book_details_title">
                    <h5>
                      <b>Booking Details</b>
                    </h5>
                  </div>
                  <hr />
                  <div className="book_details_text tour_booking_amount_area">
                    <ul className="p-0 tour_booking_amount_area1">
                      <li className="d-flex justify-content-between py-2">
                        <span>Booking ID:</span>
                        <span>#RB5783GH</span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span>Booking Date:</span>
                        <span>10 May 2024</span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span>Room No:</span>
                        <span>401</span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span>Booking status:</span>
                        <span>Success</span>
                      </li>
                    </ul>
                    <hr />
                    <ul className="p-0 tour_booking_amount_area2">
                      <li className="d-flex justify-content-between py-2">
                        <span>Adult Price X 1</span>
                        <span>₹ 20,500</span>
                      </li>
                      <li className="d-flex justify-content-between py-2">
                        <span>Tax</span>
                        <span>10%</span>
                      </li>
                    </ul>
                    <hr />
                    <ul className="p-0 mb-0">
                      <li
                        className="d-flex justify-content-between py-2 ticket_total_amt"
                        style={{ color: "#8b3eea" }}
                      >
                        <h5>
                          <b>Total Amount</b>
                        </h5>
                        <h5>
                          <b>₹ 20,500</b>
                        </h5>
                      </li>
                    </ul>
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

export default HotelTickets;
