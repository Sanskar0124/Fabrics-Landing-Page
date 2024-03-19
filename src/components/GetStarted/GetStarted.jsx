import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Dolphin Furnishing India</span>
          <span className="secondaryText">
            Subscribe to receive irresistible price quotes from us.
            <br />
            Discover your perfect fabric residence today
          </span>
          <button className="button" href>
            <a href="https://enterprise.dolphinfurnishingindia.com/auth/sign-up" target="_blank">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
