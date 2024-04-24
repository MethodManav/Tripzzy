import React, { useState } from "react";

const AddAdmin = () => {
  const [fields, setFields] = useState([{ id: 0, userName: "", password: "" }]);
  const [nextId, setNextId] = useState(1);

  const handleAddField = () => {
    setFields([...fields, { id: nextId, userName: "", password: "" }]);
    setNextId(nextId + 1);
  };

  const handleDeleteField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, event) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(updatedFields);
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

        <section className="section">
          <div className="col-lg-12 text-end mb-4">
            <button className="btn btn-primary fw-bold" onClick={handleAddField}>
              + Add
            </button>
          </div>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add Admin Form</h5>
                {fields.map((field) => (
                  <div className="row mb-3 d-flex align-items-end" key={field.id}>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          User Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="userName"
                          value={field.userName}
                          onChange={(e) => handleChange(field.id, e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={field.password}
                          onChange={(e) => handleChange(field.id, e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group mt-2">
                        <button className="btn btn-danger me-2" onClick={() => handleDeleteField(field.id)}>
                          <i className="fas fa-trash-alt"></i>
                        </button>
                        <button className="btn btn-success">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddAdmin;
