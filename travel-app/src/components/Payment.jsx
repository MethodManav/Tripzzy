import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Payment = () => {
  return (
    <div>
      <Header />
      <section className="payment" id="payment">
        <div className="container">
          <div className="section-title">
            <h2>Payment</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4>
                    <b>New Delhi - Mumbai</b>
                  </h4>
                  <div className="airline mt-3">
                    <h5>
                      <i class="fas fa-plane-departure me-2"></i> SpiceJet
                      Airline
                    </h5>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-3">
                      <h4>
                        <b>Delhi 21:00</b>
                      </h4>
                      <p>Sat 10 may 2024</p>
                      <span>Indira Gandhi International Airport</span>
                    </div>
                    <div className="col-lg-3">
                      <h4>
                        <b>Time</b>
                      </h4>
                      <p>2h 50m</p>
                    </div>
                    <div className="col-lg-3">
                      <h4>
                        <b>Mumbai 23:50</b>
                      </h4>
                      <p>Sat 10 may 2024</p>
                      <span>
                        Chhatrapati Shivaji Maharaj International Airport
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="row align-items-center">
                    <div className="col-lg-12 mb-3">
                      <h4>
                        <b>Price Details</b>
                      </h4>
                    </div>
                    <div className="col-lg-3">
                      <p>Base fare</p>
                    </div>
                    <div className="col-lg-3">
                      <p>₹ 4104</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <p>Taxes and Fees</p>
                    </div>
                    <div className="col-lg-3">
                      <p>₹ 1830</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <h5>
                        <b>Total Amount</b>
                      </h5>
                    </div>
                    <div className="col-lg-3">
                      <h5>
                        <b>₹ 20,500</b>
                      </h5>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4 text-center">
                      <button className="btn btn-primary me-2">Pay</button>
                      <button className="btn btn-danger">Cancel</button>
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

export default Payment;
