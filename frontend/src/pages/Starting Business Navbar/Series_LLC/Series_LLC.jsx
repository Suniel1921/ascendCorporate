import React from 'react';
import "./Series_LLC.css";
import Tabs_Series_LLC from './Tabs_Series_LLC/Tabs_Series_LLC';


const Series_LLC = () => {
  return (
    <div className='Series_LLC_main_container'>
      <div className='top_main_hero_section_Series_LLC'>
        <img src="/img/hero-image-shaking-hands.jpg" alt="" className='top_Series_LLC_image' />
        <p className='image_over_paragraph_Series_LLC'>
        Series Limited Liability Company
        </p>
      </div>

      <div className="bottom_Series_LLC">
        <div className="left_side_Series_LLC">
          <Tabs_Series_LLC />
        </div>
        <div className="right_side_Series_LLC">
          <h3 className='right_h3_Series_LLC'>Let's get to it.</h3>
          <p>Create your non-profit organization today.</p>
          <button className="Series_LLC_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Series_LLC;
