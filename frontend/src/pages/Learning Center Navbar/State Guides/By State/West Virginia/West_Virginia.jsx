import React from 'react';
import "./West_Virginia.css";
import Tabs_West_Virginia from "./Tabs_West_Virginia/Tabs_West_Virginia"

const West_Virginia = () => {
  return (
    <div className='West_Virginia_main_container'>
      <div className='top_main_hero_section_West_Virginia'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_West_Virginia_image' />
        <p className='image_over_paragraph_West_Virginia'>
        West Virginia
        </p>
      </div>

      <div className="bottom_West_Virginia">
        <div className="left_side_West_Virginia">
          <Tabs_West_Virginia/>
        </div>
        <div className="right_side_West_Virginia">
          <h3 className='right_h3_West_Virginia'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="West_Virginia_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default West_Virginia;
