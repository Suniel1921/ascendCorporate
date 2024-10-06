import React from 'react';
import "./Amendments.css";
import Tabs_Amendments from './Tabs_Amendments/Tabs_Amendments';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Amendments = () => {
  return (
    <div className='amendments-container'>
      <h2 className="amendments-heading">
      Amendments
      </h2>
      <div className="amendments-bottom-container">
        <div className="amendments-left-container">

        <Tabs_Amendments/>

        </div>
        <div className="amendments-right-container">
          <h3 className='amendments-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="amendments-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Amendments;
