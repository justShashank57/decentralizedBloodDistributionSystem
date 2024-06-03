import React from "react";
import donationIcon from "../../assets/donationIcon.png";
import "./about.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MoreOfUs from "../../Components/MoreAboutUS/MoreOfUs";
import MyGoogleMap from "../../Components/MyGoogleMap/GoogleMap";

const About = () => {
  return (
    <div className="aboutComp">
      <div className="aboutHero">
        <div className="aboutBody">
          <h1>About Section</h1>
          <p className="registerLine"></p>
          <p className="subHeading">HOME / ABOUT</p>
        </div>
      </div>
      <div className="missionSec">
        <h1>Our Mission</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <MoreOfUs />
      <div className="homeFooter">
        <img src={donationIcon} alt="" />
        <h1>Donate your blood and save a life.</h1>
      </div>
      <div className="collabSec">
        <h1>Our Collaborators</h1>
        <Carousel
          showStatus={false}
          showArrows={false}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
        >
          <div className="carousalContainer">
            <div className="">
              <img src="https://images.pexels.com/photos/11959111/pexels-photo-11959111.jpeg" />
            </div>
            <p className="legend">Government Of India</p>
          </div>
          <div className="carousalContainer">
            <div>
              <img src="https://images.unsplash.com/photo-1624417963912-8532660d9de8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <p className="legend">Government Of USA</p>
          </div>
          <div className="carousalContainer">
            <div>
              <img src="https://images.unsplash.com/photo-1469248620856-e8c981d98aff?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <p className="legend">Government Of Zuric</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
