import React from 'react';
import "./Virginia.css";
import Tabs_Virginia from "./Tabs_Virginia/Tabs_Virginia"

const Virginia = () => {
  return (
    <div className='Virginia_main_container'>
      <div className='top_main_hero_section_Virginia'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Virginia_image' />
        <p className='image_over_paragraph_Virginia'>
        Virginia
        </p>
      </div>

      <div className="bottom_Virginia">
        <div className="left_side_Virginia">
          <Tabs_Virginia/>
        </div>
        <div className="right_side_Virginia">
          <h3 className='right_h3_Virginia'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Virginia_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Virginia;
