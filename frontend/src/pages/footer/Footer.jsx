import React from "react";
import { FaFacebookF, FaTwitter, FaGlobe, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
    
      <div className="footer-container">
        <div className="footer-section about">
          <h2>ASCEND</h2>
          <p>
            We focus on the needs of small to middle market businesses to improve
            and grow their return.
          </p>
          <p>
            <span role="img" aria-label="headset">🎧</span> <span className="headSetText">Speak to our expert at </span> <br /><span className="phone-number">+1(313) 355-3295</span>
          </p>
        </div>

        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>2337 Cedar Knoll Dr, Troy, MI 48083, USA</p>
          <div className='footer_social'>
            <div className='footer_social_icon'>
              <a className="socialContainer containerOne" href="#">
                <FaInstagram className="socialSvg" />
              </a>
              <a className="socialContainer containerTwo" href="#">
                <FaTwitter className="socialSvg" />
              </a>
              <a className="socialContainer containerThree" href="#">
                <FaLinkedinIn className="socialSvg" />
              </a>
              <a className="socialContainer containerFour" href="#">
                <FaWhatsapp className="socialSvg" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section services">
          <h2>Get Started </h2>
          <ul>
            <li><a href="#">Forming an LLC</a></li>
            <li><a href="#">Incorporate in Delaware</a></li>
            <li><a href="#">Registered Agent Service</a></li>
          </ul>
        </div>

        <div className="footer-section company">
          <h2>Lean More</h2>
          <ul>
            <li><a href="#">Benefits of Incorporating</a></li>
            <li><a href="#">Incorporate 101</a></li>
            <li><a href="#">LLC vs. Corporation</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section support">
          <h2>Support</h2>
          <p>If you have a General enquiry, please drop me an email</p>
          <p>Email: <a href="mailto:support@motivo.com">info@ascendcorprate.com</a></p>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <div className="left_footer">
          <p>
            Copyright © 2024 . Powered By
            <Link to="/some-route">Go to Some Route</Link>
            <a href="https://www.nepaltechinnov.com/" target="_blank" rel="noopener noreferrer"> Nepal Tech Innovations Pvt. Ltd.</a>
          </p>

        </div>
        <div className="right_footer"> 
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Help & FQA</a></li>
            
          </ul>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
