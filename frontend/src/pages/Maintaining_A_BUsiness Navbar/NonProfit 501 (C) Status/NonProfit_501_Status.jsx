import React from 'react';
import "./NonProfit_501_Status.css"
import Tabs_NonProfit_501_status from './Tabs_NonProfit_501_status/Tabs_NonProfit_501_status';

const NonProfit_501_Status = () => {
  return (
    <div className='nonprofit-501-status-container'>
      <h2 className="nonprofit-501-status-heading">
      Application Requirements for 501(c) and 501(c)(3) Status
      </h2>
      <div className="nonprofit-501-status-bottom-container">
        <div className="nonprofit-501-status-left-container">

          <Tabs_NonProfit_501_status/>

        </div>
        <div className="nonprofit-501-status-right-container">
          <h3 className='nonprofit-501-status-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="nonprofit-501-status-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default NonProfit_501_Status;
