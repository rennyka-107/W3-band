import React from "react";
import Input1 from "../Input1";

const Footer = () => {
  const footerSources = () => (
    <div className="footer-sources">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
      <p className="w3-medium">
        Powered by{" "}
        <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
      </p>
    </div>
  );

  const formSender = () => (
    <div className="form-sender">
      <form>
        <div className="form-div">
          <Input1 placeholder="Name" additionClassName="div-footer-input" />
          <Input1 placeholder="Email" additionClassName="div-footer-input" />
        </div>
        <Input1 placeholder="Message" additionClassName="div-footer-input" />
        <button className="button-1 btn-1-black btn-1-float-right">Send</button>
      </form>
    </div>
  );
  return (
    <div>
      <div className="contact">
        <p>CONTACT</p>
        <p>Fan? Drop a note!</p>
        <div className="contact-info">
          <div className="info">
            <div className="info-icon">
              <i className="fa fa-map-marker" />
              <i className="fa fa-phone" />
              <i className="fa fa-envelope" />
            </div>
            <div className="info-content">
              <span>Chicago, US</span>
              <span>Phone: +00 151515</span>
              <span>Email: mail@mail.com</span>
            </div>
          </div>
          {formSender()}
        </div>
      </div>
      <div className="footer-img" />
      {footerSources()}
    </div>
  );
};

export default Footer;
