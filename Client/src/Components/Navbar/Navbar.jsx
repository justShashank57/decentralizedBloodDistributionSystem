import React from "react";
import logo from "../../assets/navbar/logo.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="navbarSec">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="navMenus">
        <ul className="navList">
          <li
            className={`navLinks ${location.pathname == "/" ? "selected" : ""}`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className={`navLinks ${
              location.pathname == "/about" ? "selected" : ""
            }`}
            onClick={() => {
              navigate("/about");
            }}
          >
            About Us
          </li>
          <li
            className={`navLinks ${
              location.pathname == "/blood-request" ? "selected" : ""
            }`}
            onClick={() => {
              navigate("/blood-request");
            }}
          >
            Request For Blood
          </li>
          <li
            className={`navLinks ${
              location.pathname == "/blood-search" ? "selected" : ""
            }`}
            onClick={() => {
              navigate("/blood-search");
            }}
          >
            Search Inventory
          </li>
          {user === null ? (
            <>
              <button className="loginBtn">
                <a href="/login">Login</a>
              </button>
              <button className="newDonorBtn">
                <a href="/signup">New Donor</a>
              </button>
            </>
          ) : (
            <>
              <button
                className="newDonorBtn"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
