import React from "react";
import "./info.css";
import { ShowRequestPost } from "../ShowBloodRequest/ShowRequest";
import { useNavigate } from "react-router-dom";

export const Info = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="info">
        <div>
          <div className="infotag">
            <p>Good To Know</p>
            <hr />
            <p>Helpful Information</p>
          </div>

          <div className="infoContainer">
            <section className="infoDetails">
              <div>
                <img src={"/assets/fact1.png"} alt="Fact" />
              </div>
              <p>
                1 unit of blood can <br />
                save up to 3 lives.
              </p>
            </section>
            <section className="infoDetails">
              <div>
                <img src={"/assets/fact2.png"} alt="Fact" />
              </div>
              <p>
                Blood cannot be manufactured; it can only come from volunteer
                donors.
              </p>
            </section>
            <section className="infoDetails">
              <div>
                <img src={"/assets/fact3.png"} alt="Fact" />
              </div>
              <p>
                Adults have around 10 units of blood in their body. 1 unit is
                given during a donation.
              </p>
            </section>
            <section className="infoDetails">
              <div>
                <img src={"/assets/fact4.png"} alt="Fact" />
              </div>
              <p>
                Globally arround 85 million blood components are transfused in a
                given year.
              </p>
            </section>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              id="readMore"
              onClick={(e) => {
                navigate("/about");
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
        <div>
          <ShowRequestPost />
        </div>
      </div>
    </>
  );
};
