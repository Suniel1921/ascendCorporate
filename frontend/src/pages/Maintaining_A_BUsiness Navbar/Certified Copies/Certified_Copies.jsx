import React from 'react';
import "./Certified_Copies.css";
import Tabs_Certified_Copies from './Tabs_Certified_Copies/Tabs_Certified_Copies';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Certified_Copies = () => {
  return (
    <div className='certified-copies-container'>
      <h2 className="certified-copies-heading">
      Where Can I Get Certified Copies of Articles of Incorporation?
      </h2>
      <div className="certified-copies-bottom-container">
        <div className="certified-copies-left-container">

        <Tabs_Certified_Copies/>

        </div>
        <div className="certified-copies-right-container">
          <h3 className='certified-copies-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="certified-copies-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Certified_Copies;
