import React, { useState } from "react";

const AddFlights = () => {
  const [flight_id, setid] = useState("");
  const [flightname, setname] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [price, setprice] = useState("");
  const [rating, setrating] = useState("");
  const [date, setdate] = useState("");
  const [img, setimg] = useState("");
  console.log(img);
  const handlefligt = async () => {};
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Flights</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Add Flight</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="col-lg-12 mt-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Flight Details</h5>
                <div className="row mb-3 d-flex align-items-end">
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Flight Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Flight Name"
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        FlightID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="FlightID"
                        onChange={(e) => setid(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        From
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Mumbai"
                        onChange={(e) => setfrom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        To
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="password"
                        placeholder="Delhi"
                        onChange={(e) => setto(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Departure Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name=""
                        onChange={(e) => setdate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Price Per Person
                      </label>
                      <input
                        type="tele"
                        className="form-control"
                        name=""
                        onChange={(e) => setprice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Ratings
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name=""
                        onChange={(e) => setrating(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name=""
                        placeholder="2"
                        onChange={(e) => setimg(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="form-group mt-2">
                      <button className="btn btn-success" onClick={handlefligt}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddFlights;
