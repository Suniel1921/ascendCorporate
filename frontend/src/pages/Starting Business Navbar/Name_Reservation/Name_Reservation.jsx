import React from 'react';
import "./Name_Reservation.css";
import Tabs_Nr from './Tabs_Nr/Tabs_Nr';

const Name_Reservation = () => {
  return (
    <div className='ein-container'> 
      <h2 className="ein-heading">
        Corporate Name Check
      </h2>
      <div className="ein-bottom-container">
        <div className="ein-left-container">
          <p>
          Reserve your business name – choose a name for your company that sets it apart.
          </p>
          <Tabs_Nr/>
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

export default Name_Reservation;
