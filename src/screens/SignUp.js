import React, { useState } from "react";
import { Link } from "react-router-dom";
import { POST_SIGN_UP } from "../apiRoutes";

export default function SignUp() {
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={handleChange}
          />
        </div>
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
        <div className="mb-3">
          <label htmlFor="geolocation" className="form-label fw-bold">
            Geolocation
          </label>
          <input
            type="text"
            className="form-control"
            id="geolocation"
            name="geolocation"
            value={credentials.geolocation}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
          Already A User
        </Link>
      </form>
    </div>
  );
}
