import React from 'react';
import "./Dissolution.css";
import Tabs_Dissolution from './Tabs_Dissolution/Tabs_Dissolution';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Dissolution = () => {
  return (
    <div className='Dissolution-container'>
      <h2 className="Dissolution-heading">
      Dissolution
      </h2>
      <div className="Dissolution-bottom-container">
        <div className="Dissolution-left-container">

        <Tabs_Dissolution/>

        </div>
        <div className="Dissolution-right-container">
          <h3 className='Dissolution-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="Dissolution-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Dissolution;
