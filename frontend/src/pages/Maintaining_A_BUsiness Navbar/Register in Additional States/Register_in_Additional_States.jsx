import React from 'react';
import "./Register_in_Additional_States.css"
import Tabs_Register_in_Additional_States from './Tabs_Register_in_Additional_States/Tabs_Register_in_Additional_States';

const Register_in_Additional_States = () => {
  return (
    <div className='register-additional-states-container'>
      <h2 className="register-additional-states-heading">
        Register in Additional States
      </h2>
      <div className="register-additional-states-bottom-container">
        <div className="register-additional-states-left-container">

          <Tabs_Register_in_Additional_States />
        </div>
        <div className="register-additional-states-right-container">
          <h3 className='register-additional-states-right-h3'>Let's get to it.</h3>
          <p>Give us a call today to place your order.</p>
          <button className="register-additional-states-right-button-full">Get Started</button>
          
        </div>
      </div>
    </div>
  )
}

export default Register_in_Additional_States;
