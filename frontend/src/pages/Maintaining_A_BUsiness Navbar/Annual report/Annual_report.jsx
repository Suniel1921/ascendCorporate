import React from 'react';
import "./Annual_report.css";
import Tabs_Annual_Report from './Tabs_Annual_report/Tabs_Annual_report';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Annual_Report = () => {
  return (
    <div className='annual-report-container'>
      <h2 className="annual-report-heading">
        Annual Report
      </h2>
      <div className="annual-report-bottom-container">
        <div className="annual-report-left-container">

        <Tabs_Annual_Report/>

        </div>
        <div className="annual-report-right-container">
          <h3 className='annual-report-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="annual-report-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Annual_Report;
