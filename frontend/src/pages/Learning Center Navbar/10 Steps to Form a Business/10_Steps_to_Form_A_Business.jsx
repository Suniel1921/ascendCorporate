import React from 'react';
import './10_Steps_to_Form_A_Business.css';
import { Link, useNavigate } from 'react-router-dom';

const Steps_to_Form_A_Business = () => {
  const navigate = useNavigate();


  return (
    <div className="Steps_to_Form_A_Business_container">
      <h1 className="Steps_to_Form_A_Business_heading">10 Steps to Form a Business</h1>

      <div className="Steps_to_Form_A_Business_main">
        <div className="Steps_to_Form_A_Business_left">
          <h2 className="Steps_to_Form_A_Business_subheading">Forming a business in the United States can be a confusing and stressful process, unless you're prepared and you've got a good idea of what you need to do. Ascend presents this guide to forming a business to help you along the way.</h2>
          
          <img src="/img/10-steps-to-form-a-business.png" />

          <h3>
            Ready to create your company?
          </h3>
          <button className="Steps_to_Form_A_Business_button_full_left" onClick={() => navigate('/quote-pricing')}>Get Started</button>
          {/* <ComparisonChart/> */}

        </div>

        <div className="Steps_to_Form_A_Business_right">
          <h3 className='right_h3'>Ready to Incorporate?</h3>
          <p>Get started today and secure your business future.</p>
          <button className="Steps_to_Form_A_Business_button_full" onClick={() => navigate('/quote-pricing')}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Steps_to_Form_A_Business;
