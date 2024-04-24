import React, { useState } from "react";
import tripzzy from "../assets/img/tripzzy_white-logo.png";
import "../login/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [loginusername, setloginusername] = useState("");
  const [loginpassword, setloginpassword] = useState("");

  const handlesignup = async () => {
    try {
      if (password == confirm) {
        const res = await axios.post(
          "http://localhost:3000/api/v1/tripzzy/user/signup",
          {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            username: username,
            password: password,
          }
        );
        alert("Sigin Up Successfully");
        navigate("/");
        console.log(res.data);
        localStorage.setItem("Token", res.data.token);
        localStorage.setItem("User_id", res.data.userId);
        localStorage.setItem("name", res.data.firstname);
      } else {
        alert("MisMatchPassword");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlesigin = async () => {
    console.log(loginusername);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/tripzzy/user/signin",
        {
          loginusername: loginusername,
          loginpass: loginpassword,
        }
      );
      alert("Login Successfully");
      navigate("/");
      console.log(res.data);
      localStorage.setItem("Token", res.data.token);
      localStorage.setItem("User_id", res.data.userId);
      localStorage.setItem("name", res.data.firstname);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRadioChange = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="login_bg">
      <div className="container mt-4">
        <a href="/" className="button1 back_to_login">
          Back to Dashboard
        </a>
        <div className="login_container">
          <div
            className={`login-info-box ${showLogin ? "visible" : ""}`}
            style={{
              display: showLogin ? "none" : "block",
            }}
          >
            <h2 className="info_title">Have an account?</h2>
            <p>Let's get jump into the adventure with tripzzy</p>
            <label htmlFor="log-reg-show" id="label-register">
              Login
            </label>
            <input
              type="radio"
              name="active-log-panel"
              id="log-reg-show"
              className=""
              checked={showLogin}
              onChange={handleRadioChange}
            />
            <img
              className="mt-4 info_img"
              src={tripzzy}
              width={150}
              height={70}
              alt=""
            />
          </div>

          <div
            className={`register-info-box ${showLogin ? "" : "visible"}`}
            style={{
              display: showLogin ? "block" : "none",
            }}
          >
            <h2 className="info_title">Don't have an account?</h2>
            <p>Let's get jump into the adventure with tripzzy</p>
            <label htmlFor="log-login-show" id="label-login">
              Register
            </label>
            <input
              type="radio"
              name="active-log-panel"
              id="log-login-show"
              className=""
              checked={!showLogin}
              onChange={handleRadioChange}
            />
            <img
              className="mt-4 info_img"
              src={tripzzy}
              width={150}
              height={70}
              alt=""
            />
          </div>

          <div className={`white-panel ${showLogin ? "" : "right-log"}`}>
            <div
              className="login-show"
              style={{
                opacity: showLogin ? 1 : 0,
                display: showLogin ? "block" : "none",
              }}
            >
              <h2 className="h2-title mb-5">Login Here</h2>

              <label htmlFor="login" className="login-label">
                <input
                  id="login"
                  type="text"
                  placeholder="Username"
                  className="form-control login_page_inp"
                  onChange={(e) => setloginusername(e.target.value)}
                />
              </label>
              <label htmlFor="passwd" className="login-label">
                <input
                  id="passwd"
                  type="password"
                  placeholder="Password"
                  className="form-control login_page_inp"
                  onChange={(e) => setloginpassword(e.target.value)}
                />
              </label>
              <label
                htmlFor=""
                className="login-label d-flex align-items-center"
              >
                <input
                  id="rememberme"
                  type="checkbox"
                  placeholder=""
                  className="me-1"
                />{" "}
                <span style={{ color: "#367588", fontSize: "15px" }}>
                  Remember Me
                </span>
              </label>
              <button className="button" onClick={handlesigin}>
                Sign In
              </button>

              <div className="lost-passwd">
                <a href="/forgot">Forgot your password?</a>
              </div>
              <div className="with_or mb-3">Or</div>
              <a href="#" className="with_google">
                <i className="fab fa-google me-2"></i>{" "}
                <span>Login with Google</span>
              </a>
            </div>
            <div
              className="register-show"
              style={{
                opacity: showLogin ? 0 : 1,
                display: showLogin ? "none" : "block",
              }}
            >
              <h2 className="h2-title">Sign Up</h2>
              <form action="" method="POST">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-6">
                    <label htmlFor="login" className="login-label">
                      <input
                        id="fname"
                        type="text"
                        placeholder="First Name"
                        className="form-control login_page_inp"
                        required
                        onChange={(e) => setfirstname(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <label htmlFor="passwd" className="login-label">
                      <input
                        id="lname"
                        type="text"
                        placeholder="Last Name"
                        className="form-control login_page_inp"
                        required
                        onChange={(e) => setlastname(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="passwd" className="login-label">
                      <input
                        id="phone_no"
                        type="tel"
                        placeholder="Phone No"
                        className="form-control"
                        required
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </label>
                  </div>
                </div>

                {/* <div className="row">
              <div className="col-md-6">
                <label htmlFor="city" className="login-label">
                  <select
                    id="country"
                    type="text"
                    placeholder="Country"
                    className="form-control form-select"
                  >
                    <option value="">--Select country--</option>
                  </select>
                </label>
              </div>
              <div className="col-md-6">
                <label htmlFor="state" className="login-label">
                  <select
                    id="state"
                    type="text"
                    placeholder="State"
                    className="form-control form-select"
                  >
                    <option value="">--Select state--</option>
                  </select>
                </label>
              </div>
            </div> */}
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="passwd" className="login-label">
                      <input
                        id="username"
                        type="text"
                        placeholder="User Name"
                        className="form-control login_page_inp"
                        required
                        onChange={(e) => setusername(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="passwd" className="login-label">
                      <input
                        id="pwd"
                        type="password"
                        placeholder="Password"
                        className="form-control login_page_inp"
                        required
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="passwd" className="login-label">
                      <input
                        id="con_pwd"
                        type="text"
                        placeholder="Confirm Password"
                        className="form-control login_page_inp"
                        required
                        onChange={(e) => setconfirm(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <button
                  className="button mb-2"
                  type="button"
                  onClick={handlesignup}
                >
                  Create Account
                </button>
                <div className="row">
                  <div className="col-md-12">
                    <div className="with_or mb-3">Or</div>
                    <a href="#" className="with_google">
                      <i className="fab fa-google me-2"></i>{" "}
                      <span>Login with Google</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
