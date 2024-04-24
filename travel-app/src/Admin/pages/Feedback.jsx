import axios from "axios";
import React, { useEffect, useState } from "react";

const Feedback = () => {
  const [feed, setfed] = useState([""]);

  useEffect(() => {
    getfeedback();
  }, []);
  const getfeedback = async () => {
    try {
      const url = "http://localhost:3000/api/v1/tripzzy/feedback/getFeedback";
      const headers = {
        username: "Manavbehera123@gmail.com",
      };
      const options = {
        headers: headers,
      };

      const res = await axios.get(url, options);
      const result = res.data.data;
      console.log(result);
      setfed(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Feedback Messages</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Feedback Message</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12 mt-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Table Data</h5>

                  <table
                    className="table table-striped table-bordered"
                    id="feedback"
                  >
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feed.map((value, index) => (
                        <tr>
                          <th scope="row">{value._id}</th>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                          <td>{value.subject}</td>
                          <td>{value.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Feedback;
