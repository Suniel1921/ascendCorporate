import React from "react";
import "./Process_box.css";

const Process_box = () => {
  return (
    <div className="widget-section">
      <div className="widget-container">
        <div className="processBG">
          <span className="process_redDot"></span>
          <p className="process">PROCESS</p>
        </div>

        <h2 className="widget-title">Our Basic Work Process.</h2>
        <p className="widget-description">
          Which is the same as saying through shrinking from toil and pain these
          perfectly simple and easy to distinguish.
        </p>

        <div className="widget-grid">
          <div className="widget-card">
            <h3 className="widget-step">01</h3>
            <h4 className="widget-subtitle">Plan for work</h4>
            <p className="widget-text">
              Our process applies techniques from a variety of disciplines
              distinction in detail and gives careful attention.
            </p>
            <a href="#" className="widget-link"></a>
          </div>

          <div className="widget-card">
            <h3 className="widget-step">02</h3>
            <h4 className="widget-subtitle">Implementation</h4>
            <p className="widget-text">
              Our process applies techniques from a variety of disciplines
              distinction in detail and gives careful attention.
            </p>
            <a href="#" className="widget-link"></a>
          </div>

          <div className="widget-card">
            <h3 className="widget-step">03</h3>
            <h4 className="widget-subtitle">Project Closure</h4>
            <p className="widget-text">
              Our process applies techniques from a variety of disciplines
              distinction in detail and gives careful attention.
            </p>
            <a href="#" className="widget-link"></a>
          </div>
          <div className="widget-card">
            <h3 className="widget-step">04</h3>
            <h4 className="widget-subtitle">Happy Clients</h4>
            <p className="widget-text">
              Our process applies techniques from a variety of disciplines
              distinction in detail and gives careful attention.
            </p>
            <a href="#" className="widget-link"></a>
          </div>
        </div>

        <p className="widget-footer">
          Bring them together and you overcome the ordinary.{" "}
          <a href="#" className="widget-footer-link">
            See what we do
          </a>
        </p>
      </div>
    </div>
  );
};

export default Process_box;
