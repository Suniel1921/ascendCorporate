import React from 'react';
import "./Entity_Conversion.css";
import Tabs_Entity_Conversion from './Tabs_Entity_Conversion/Tabs_Entity_Conversion';
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Entity_Conversion = () => {
  return (
    <div className='Entity_Conversion-container'>
      <h2 className="Entity_Conversion-heading">
      Entity Conversion
      </h2>
      <div className="Entity_Conversion-bottom-container">
        <div className="Entity_Conversion-left-container">

        <Tabs_Entity_Conversion/>

        </div>
        <div className="Entity_Conversion-right-container">
          <h3 className='Entity_Conversion-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            980000000
          </p>
          {/* <button className="Entity_Conversion-button-full">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default Entity_Conversion;
