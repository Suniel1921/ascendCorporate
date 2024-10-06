import React from 'react';
import "./Reinstatement.css";
import Tabs_Reinstatement from './Tabs_Reinstatement/Tabs_Reinstatement';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Reinstatement = () => {
  return (
    <div className='Reinstatement-container'>
      <h2 className="Reinstatement-heading">
      Reinstatement
      </h2>
      <div className="Reinstatement-bottom-container">
        <div className="Reinstatement-left-container">

        <Tabs_Reinstatement/>

        </div>
        <div className="Reinstatement-right-container">
          <h3 className='Reinstatement-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="Reinstatement-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Reinstatement;
