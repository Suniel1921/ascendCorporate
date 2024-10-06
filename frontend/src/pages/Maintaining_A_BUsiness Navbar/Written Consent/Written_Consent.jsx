import React from 'react';
import "./Written_Consent.css";
import Tabs_Written_Consent from './Tabs_Written_Consent/Tabs_Written_Consent';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Written_Consent = () => {
  return (
    <div className='written-consent-container'>
      <h2 className="written-consent-heading">
      Keep your business records up-to-date.
      </h2>
      <div className="written-consent-bottom-container">
        <div className="written-consent-left-container">

        <Tabs_Written_Consent/>

        </div>
        <div className="written-consent-right-container">
          <h3 className='written-consent-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="written-consent-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Written_Consent;
