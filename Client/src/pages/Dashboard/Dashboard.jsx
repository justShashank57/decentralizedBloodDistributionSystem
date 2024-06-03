import "./Dashboard.css";
import React from "react";
import { useState } from "react";
import SentRequest from "./SendRequest";
import Avatar from "@mui/material/Avatar";
// import RecivedRequest from "./RecivedRequest";

export default function Dashboard({ user }) {
  const [roles, setroles] = useState("Admin");
  const [userAge, setuserAge] = useState(24);
  const [userName, setuserName] = useState(
    `${user && user.firstName} ${user && user.lastName}` || "om"
  );
  const [userEmail, setuserEmail] = useState(
    `${user && user.email}` || "test@gmail.com"
  );
  const [userMobile, setuserMobile] = useState(
    `${user && user.number}` || 123456
  );
  const [userAddress, setuserAddress] = useState(
    `${user && user.city}` || "address"
  );
  const [userBloodGroup, setuserBloodGroup] = useState(
    `${user && user.bloodGroup}` || "A+"
  );

  return (
    <>
      <div className="dashboard">
        <div className="user-detail">
          <div className="detail-card">
            <Avatar sx={{ width: 50, height: 50 }} />
            <div>
              <span style={{ fontSize: "20px", letterSpacing: "2px" }}>
                {userName.toUpperCase()}
              </span>
              <div className="details">
                <div>
                  <p>Age: {userAge}</p>
                  <p>Mobile: {userMobile}</p>
                </div>
                <div>
                  <p>Address: {userAddress}</p>
                  <p>Email: {userEmail}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="user-card">
            <div
              className="blur-card"
              style={{ filter: `${roles.length === 2 ? "none" : "blur(5px)"}` }}
            >
              <div
                id="card-vector1"
                style={{
                  backgroundImage: `url(${"/assets/Vector_1.png"})`,
                }}
              ></div>
              <div
                id="card-vector2"
                style={{
                  backgroundImage: `url(${"/assets/Vector_2.png"})`,
                }}
              ></div>
              <div className="user-card-details">
                <p style={{ fontSize: "12px" }}>bronze</p>
                <p>{userName.toUpperCase()}</p>
                <p>1234 5678</p>
                <p>{userBloodGroup}</p>
              </div>
              <img className="logo2" src={"/assets/logo2.png"} />
            </div>
            <div
              id="block-card"
              style={{ display: `${roles.length === 2 ? "none" : "block"}` }}
            >
              <h3>BE DONOR</h3>
              <p>Become a donor to activate card</p>
            </div>
          </div>
        </div>
        <div className="non-donor">
          <div>
            <h1
              style={{
                color: "#FF5C00",
                margin: "0 0 0",
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Be A Hero - It’s In Your Blood
            </h1>
            <span style={{ color: "#8F8F8F" }}>
              {roles.length === 2 ? "Thanks for being" : "Register to be"} a
              blood donor, give blood and save lives.
            </span>
          </div>
          {roles.length === 2 ? (
            <button id="donor-btn">DONATE BLOOD</button>
          ) : (
            <button id="donor-btn">BE DONOR</button>
          )}
        </div>
        {roles.length === 2 && (
          <div className="blood-service">
            <p className="section-title">BLOOD NEEDED BY</p>
            <div id="needed-card">{/* <RecivedRequest /> */}</div>
          </div>
        )}
        <div className="blood-service">
          <p className="section-title">REQUEST STATUS</p>
          <div id="status-table">
            <SentRequest />
          </div>
        </div>
      </div>
    </>
  );
}
