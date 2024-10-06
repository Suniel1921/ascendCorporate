import React from 'react';
import "./Delaware_E_Filing.css";
import Tabs_Delaware_E_Filing from './Tabs_Delaware_E_Filing/Tabs_Delaware_E_Filing';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Delaware_E_Filing = () => {
  return (
    <div className='delaware-e-filing-container'>
      <h2 className="delaware-e-filing-heading">
      Delaware E-Filing
      </h2>
      <div className="delaware-e-filing-bottom-container">
        <div className="delaware-e-filing-left-container">

        <Tabs_Delaware_E_Filing/>

        </div>
        <div className="delaware-e-filing-right-container">
          <h3 className='delaware-e-filing-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="delaware-e-filing-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Delaware_E_Filing;
