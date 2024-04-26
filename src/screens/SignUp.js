import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { POST_SIGN_UP } from "../apiRoutes";

export default function SignUp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      });
      const response = await fetch(POST_SIGN_UP, {
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
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <section className="vh-150  gradient-custom-4">
      <form onSubmit={handleSubmit}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label htmlFor="name" className="form-label fw-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      value={credentials.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label htmlFor="password" className="form-label fw-bold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label htmlFor="geolocation" className="form-label fw-bold">
                      Geolocation
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="geolocation"
                      name="geolocation"
                      value={credentials.geolocation}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-success btn-block btn-lg gradient-custom-4  fw-bold"
                    >
                      Register
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link to="/login" className="m-3 btn btn-danger">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>

    // <div className="container">
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3">
    //       <label htmlFor="name" className="form-label fw-bold">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         name="name"
    //         value={credentials.name}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="email" className="form-label fw-bold">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         name="email"
    //         value={credentials.email}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="password" className="form-label fw-bold">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="exampleInputPassword1"
    //         name="password"
    //         value={credentials.password}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="geolocation" className="form-label fw-bold">
    //         Geolocation
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="geolocation"
    //         name="geolocation"
    //         value={credentials.geolocation}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <button type="submit" className="m-3 btn btn-success">
    //       Submit
    //     </button>
    //     <Link to="/login" className="m-3 btn btn-danger">
    //       Already A User
    //     </Link>
    //   </form>
    // </div>
  );
}
