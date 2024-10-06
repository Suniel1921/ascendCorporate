import React from 'react';
import "./Mail_Forwarding_Service.css";
import Tabs_Mail_Forwarding_Service from './Tabs_Mail_Forwarding_Service/Tabs_Mail_Forwarding_Service';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Mail_Forwarding_Service = () => {
  return (
    <div className='Mail_Forwarding_Service-container'>
      <h2 className="Mail_Forwarding_Service-heading">
      Mail Forwarding Service
      </h2>
      <div className="Mail_Forwarding_Service-bottom-container">
        <div className="Mail_Forwarding_Service-left-container">

        <Tabs_Mail_Forwarding_Service/>

        </div>
        <div className="Mail_Forwarding_Service-right-container">
          <h3 className='Mail_Forwarding_Service-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="Mail_Forwarding_Service-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Mail_Forwarding_Service;
