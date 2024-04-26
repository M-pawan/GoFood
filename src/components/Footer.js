import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer
        className="text-center text-white gradient-custom-4"
        style={{ backgroundColor: " #0a4275" }}
      >
        {/* <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-outline-light btn-rounded"
              >
                Sign up!
              </button>
            </p>
          </section>
        </div> */}

        <div
          className="text-center p-3 fw-bold"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <h5>© 2024 GoFood, Inc</h5>
        </div>
      </footer>
      {/* <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          ></Link>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 GoFood, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"></ul>
      </footer> */}
    </div>
  );
}
