import React from "react";

const Forgot = () => {
  return (
    <div>
      <div className="login_bg">
        <div className="container mt-4 forgot_container">
          <div className="forgot-panel">
              <div className="forgot-show">
                <h2 className="h2-title mb-5">Forgot Password</h2>
                <p>Enter your email below to recover your password.</p>
                <form action="" method="POST">
                  <label htmlFor="login" className="login-label">
                    <input
                      id="email"
                      type="text"
                      placeholder="Enter Email"
                      className="form-control login_page_inp"
                    />
                  </label>
                  <button className="button mt-4 mb-4" type="submit">
                  Reset Password
                  </button>
                </form>
                <div className="with_or mb-3">Or</div>
                <a href="/login" className="with_google">
                  <i className="fab fa-google me-2"></i>{" "}
                  <span>Login with Google</span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
