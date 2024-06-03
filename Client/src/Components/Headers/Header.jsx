import { useEffect } from "react";
import { useState, useRef } from "react";
import "./header.css";

export const Header = () => {
  const header_height = useRef(null);
  const [Height, setHeight] = useState({});

  useEffect(() => {
    const height = header_height.current.offsetHeight + 300;
    setHeight({
      height: height + "px",
    });
  }, [header_height]);

  return (
    <>
      <svg
        style={Height}
        id="header_bg"
        className="homebg"
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient
            id="Gradient"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.75"
            fy="0.25"
          >
            <stop offset="0%" stopColor="#07365d" />
            <stop offset="100%" stopColor="#000717" />
          </radialGradient>
        </defs>
        <path d="M0,0 L0,55 Q250,65 500,55 L500,0 Z" fill="url(#Gradient)" />
        {/*fill="#e2fafa"*/}
      </svg>
      <div ref={header_height} id="header" className="header">
        <div className="title">
          <h1 style={{ fontSize: "45px" }}>
            EVERY BLOOD DONOR <br />
            IS A LIFE SAVER
          </h1>
          <p>
            <span>
              "Your greatness is <br />
              not what you have. <br />
              it's what you give"
              <br />
            </span>
          </p>
          <section className="serviceBtn">
            <button
              onClick={(e) => {
                window.open("/blood-search", "_self");
              }}
            >
              Find A Blood Donor &nbsp; &#10095;
            </button>
            <br />
            <button
              onClick={(e) => {
                window.open("/blood-request");
              }}
            >
              Post Blood Request &nbsp; &#10095;
            </button>
            <br />
            {/* <button>Service Organisation (Comming Soon)</button><br/> */}
          </section>
        </div>
        <div className="head_Img">
          <img className="bldrop" src={"/assets/bldrop.png"} alt="" />
          <img src={"/assets/hand.png"} alt="" />
        </div>
      </div>
    </>
  );
};
