import React from 'react';
import './Writing_A_Business_Plan.css';
import { Link, useNavigate } from 'react-router-dom';

const Writing_A_Business_Plan = () => {
  const navigate = useNavigate();


  return (
    <div className="Writing_A_Business_Plan_container">
      <h1 className="Writing_A_Business_Plan_heading">Writing a Business Plan</h1>

      <div className="Writing_A_Business_Plan_main">
        <div className="Writing_A_Business_Plan_left">

          <h2 className="Writing_A_Business_Plan_subheading">What Goes in a Business Plan?</h2>

          <p className='Writing_A_Business_Plan_paragraph'>
            Every business needs a documented plan to help focus its direction, outline operations, and secure investors. Get prepared before you start your business to maximize your chances for success.
          </p>


          <h2 className="Writing_A_Business_Plan_subheading">10 Essential Elements of a Business Plan</h2>

          <ol>
            <li>
              <b>Cover Page.</b> Include a short identification and a description of your business activities.
            </li>
            <li>
              <b>Table of Contents.</b> This allows lenders, investors, or partners to reference a specific section of your plan.
            </li>
            <li>
              <b>Executive Summary.</b> Provide a total overview of your plan and outline the steps you will take to start and grow your business.
            </li>
            <li>
              <b>Business Background.</b> Don't forget to highlight your skills and experience in your industry.
            </li>
            <li>
              <b>Marketing Plan.</b> Describe the products and services you offer, your market and pricing strategy, and plans to advertise your business.
            </li>
            <li>
              <b>Action Plan.</b> Outline your specific action items to create and deliver your products and services.
            </li>
            <li>
              <b>Financial Management, Statements & Projections.</b> Include your sources of startup capital, monthly budget, anticipated expenditures, expected return on investment (ROI), projected balance sheets, and accounting strategies.
            </li>
            <li>
              <b>Operations.</b> Describe your hiring procedures and expected costs for insurance, leasing, and equipment.
            </li>
            <li>
              <b>Closing Statement.</b> Restate your goals.
            </li>
            <li>
              <b>Appendix.</b> Include statistical analyses, sample marketing materials, and resumes.
            </li>
          </ol>

          <h3>
            Ready to create your company?
          </h3>
          <button className="Writing_A_Business_Plan_button_full_left" onClick={() => navigate('/quote-pricing')}>Get Started</button>
          {/* <ComparisonChart/> */}

        </div>

        <div className="Writing_A_Business_Plan_right">
          <h3 className='right_h3'>Ready to Incorporate?</h3>
          <p>Get started today and secure your business future.</p>
          <button className="Writing_A_Business_Plan_button_full" onClick={() => navigate('/quote-pricing')}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Writing_A_Business_Plan;
