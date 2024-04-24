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
    <div className="container">
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
    </div>
  );
}
