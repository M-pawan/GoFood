import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { POST_LOG_IN } from "../apiRoutes";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      });
      const response = await fetch(POST_LOG_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: data,
      });
      const result = await response.json();
      console.log(result);
      if (!result.success) {
        alert("Enter Valid Credentials");
      } else {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", result.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <section className="vh-100  gradient-custom-4">
      <form onSubmit={handleSubmit}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5">
                  <div className="mb-md-5 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <label htmlFor="email" className="form-label fw-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <label htmlFor="password" className="form-label fw-bold">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block btn-lg gradient-custom-4 fw-bold"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="m-3 btn btn-danger">
                        Sign Up
                      </Link>
                    </p>

                    {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>

    /* <div className="container py-5 h-100">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/signup" className="m-3 btn btn-danger">
          Sign Up
        </Link>
      </form>
    </div> */
  );
}
