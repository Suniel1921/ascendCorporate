import React from 'react';
import "./By_Laws_operating_Agreements.css";
import Tabs_By_Laws from './Tabs_By_Laws/Tabs_By_Laws';


const By_Laws_operating_Agreements = () => {
  return (
    <div className='bylaws-container'>
      <h2 className="bylaws-heading">
        What are Corporation Bylaws and LLC Operating Agreements?
      </h2>
      <div className="bylaws-bottom-container">
        <div className="bylaws-left-container">
          
          <Tabs_By_Laws/>

          
        </div>
        <div className="bylaws-right-container">
          <h3 className='bylaws-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="bylaws-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default By_Laws_operating_Agreements;
