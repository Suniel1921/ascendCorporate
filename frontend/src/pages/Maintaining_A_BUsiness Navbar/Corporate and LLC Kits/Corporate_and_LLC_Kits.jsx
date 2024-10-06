import React from 'react';
import "./Corporate_and_LLC_Kits.css";
import Tabs_Corporate_and_LLC_Kits from './Tabs_Corporate_and_LLC_Kits/Tabs_Corporate_and_LLC_Kits';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Corporate_and_LLC_Kits = () => {
  return (
    <div className='corporate-and-llc-kits-container'>
      <h2 className="corporate-and-llc-kits-heading">
      Corporate and LLC Kits
      </h2>
      <div className="corporate-and-llc-kits-bottom-container">
        <div className="corporate-and-llc-kits-left-container">

        <Tabs_Corporate_and_LLC_Kits/>

        </div>
        <div className="corporate-and-llc-kits-right-container">
          <h3 className='corporate-and-llc-kits-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="corporate-and-llc-kits-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Corporate_and_LLC_Kits;
