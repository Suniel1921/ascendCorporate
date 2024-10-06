import React from 'react';
import "./Employer_ID_Number.css";
import Tabs_Eni from './Tabs_Eni/Tabs_Eni';

const Employer_ID_Number = () => {
  return (
    <div className='ein-container'> 
      <h2 className="ein-heading">
        Employer Identification Number (EIN)
      </h2>
      <div className="ein-bottom-container">
        <div className="ein-left-container">
          <p>
          Corporations, most LLCs, and all businesses with employees must have this IRS-issued identifier.
          </p>
          <Tabs_Eni/>
        </div>
        <div className="ein-right-container">
          <h3 className='ein-right-h3'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="ein-button-full">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Employer_ID_Number;
