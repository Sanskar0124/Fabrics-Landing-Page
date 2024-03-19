import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="https://github.com/Sanskar0124/Fabrics-Landing-Page/blob/master/assets/images/company-logo/logo.png?raw=true" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to create the perfect living  <br />
            environment for everyone through our fabrics.
          </span>
        </div>

        {/* <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
