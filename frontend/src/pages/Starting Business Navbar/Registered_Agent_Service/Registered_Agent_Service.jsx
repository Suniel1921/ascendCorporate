import React from 'react'
import "./Registered_Agent_Service.css";
import Tabs from "./Tabs/Tabs"

const Registered_Agent_Service = () => {
  return (
    <div className='main_registerd Service_container'>
      <h2 className="main_registered_heading">
      Registered Agent Service and Solutions
      </h2>
      <div className="bottom_register_container">
        <div className="left_register_container">
          <Tabs/>
        </div>
        <div className="right_register_container">
        <h3 className='right_h3_register'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Register_agent_button_full">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Registered_Agent_Service
