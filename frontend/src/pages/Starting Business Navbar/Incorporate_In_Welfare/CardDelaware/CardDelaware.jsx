import React from 'react';
import { Link } from 'react-router-dom';
import './CardDelaware.css';

const CardDelaware = () => {
  return (
    <div className="card_delware-section">
      <div className="card_delware-columns-container">
        <div className="card_delware-column">
          <div className="card_delware-card">
            <img src="./img/delaware_hub_story1_bg.jpg" alt="" />
            <div className="card_delware-card-content">
              <p>Incorporate in Delaware</p>
            </div>
          </div>
          <div className="card_delware-info-section">
            <h3>Starting Out</h3>
            <ul>
              <li><Link to="/delware_welfare">Incorporate in Delaware</Link></li>
              <li><Link to="/FormingaDelawareLLC">Forming a Delaware LLC</Link></li>
              <li><Link to="/DelawareBusinessNameSearch">Delaware Business Name Search</Link></li>
              <li><Link to="/DelawareBusinessLicenses">Delaware Business Licenses</Link></li>
            </ul>
          </div>
        </div>
        <div className="card_delware-column">
          <div className="card_delware-card">
            <img src="./img/delaware_hub_story1_bg.jpg" alt="Why is Delaware the Best?" />
            <div className="card_delware-card-content">
              <p>Why is Delaware the Best?</p>
            </div>
          </div>
          <div className="card_delware-info-section">
            <h3>Why Delaware?</h3>
            <ul>
              <li><Link to="/AdvantagesofIncorporatinginDelwar">Advantages of Incorporating in Delaware</Link></li>
              <li><Link to="/HowToWhyIncorporateinDelaware">How To & Why Incorporate in Delaware</Link></li>
              <li><Link to="/DE_VS_NV">DE vs. NV</Link></li>
            </ul>
          </div>
        </div>
        <div className="card_delware-column">
          <div className="card_delware-card">
            <img src="./img/delaware_hub_story2_bg.jpg" alt="LLC in Delaware" />
            <div className="card_delware-card-content">
              <p>LLC in Delaware</p>
            </div>
          </div>
          <div className="card_delware-info-section">
            <h3>Ready, Set, Get Started!</h3>
            <ul>
              <li><Link to="#">Incorporate Your Business Today</Link></li>
              <li><Link to="/Fees_to_Start_a_Business_in_Delaware">Fees to Start a Business in Delaware</Link></li>
              <li><Link to="/Delaware_Filing_Forms">Delaware Filing Forms</Link></li>
              <li><Link to="/Formation_Registration">Formation/Registration</Link></li>
              <li><Link to="/Taxes">Taxes</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDelaware;
