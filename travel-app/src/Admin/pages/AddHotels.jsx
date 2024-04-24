import React from "react";

const AddHotels = () => {
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Hotels</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Add Hotel</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="col-lg-12 mt-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hotel Details</h5>
                <div className="row mb-3 d-flex align-items-end">
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Hotel Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Flight Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Hotel Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Flight Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        No. of Rooms
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name=""
                        placeholder="1"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Room Types
                      </label>
                      <select name="" className="form-select" id="">
                        <option value="">Select Room Type</option>
                        <option value="">Standard</option>
                        <option value="">Deluxe</option>
                        <option value="">Suite</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Room Capacity
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name=""
                        placeholder="2"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Room Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name=""
                        placeholder="2"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Hotel Contact No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="2"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Amenities
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="2"
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
                      />
                    </div>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="form-group mt-2">
                      <button className="btn btn-success">Submit</button>
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

export default AddHotels;
