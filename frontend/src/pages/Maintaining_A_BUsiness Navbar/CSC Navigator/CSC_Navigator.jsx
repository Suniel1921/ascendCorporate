import React from 'react';
import { Link } from 'react-router-dom';
import "./CSC_Navigator.css";

const CSC_Navigator = () => {
  return (
    <div className='csc-navigator-container'>
      <h2 className="csc-navigator-heading">
        CSCNavigator® Online Compliance Tool
      </h2>
      <div className="csc-navigator-bottom-container">
        <div className="csc-navigator-left-container">
          <div className='csc-navigator-content'>
            <p>
              As part of your annual Registered Agent service, you have unlimited access to an online compliance dashboard to manage your business compliance needs. CSCNavigator is our premium, award-winning entity management platform used by Fortune 500® companies worldwide.
            </p>

            <h2>Do more with CSCNavigator.</h2>

            <ul>
              <li>View time-sensitive compliance deadlines on your calendar</li>
              <li>Track the status of an order</li>
              <li>Review invoices and make payments</li>
              <li>View corporate filings and service of process documents</li>
              <li>Live Chat with our support team</li>
            </ul>


            <h2>How can we help?</h2>
            <p>
              Check in with your account manager to stay on track. Our teams are ready to help you:
            </p>
            <ul>
              <li>Schedule a live demo of CSCNavigator</li>
              <li>Assess the compliance status of your entities</li>
              <li>Research business licenses</li>
              <li>File new formations</li>
              <li>Register foreign qualifications</li>
              <li>Prepare for time-sensitive filings</li>
            </ul>
          </div>
        </div>
        <div className="csc-navigator-right-container">
          <h3 className='csc-navigator-right-h3'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="csc-navigator-button-full">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default CSC_Navigator;