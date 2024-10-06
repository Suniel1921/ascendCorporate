import React from 'react';
import "./Connecticut.css";
import Tabs_Connecticut from "./Tabs_Connecticut/Tabs_Connecticut"

const Connecticut = () => {
  return (
    <div className='Connecticut_main_container'>
      <div className='top_main_hero_section_Connecticut'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Connecticut_image' />
        <p className='image_over_paragraph_Connecticut'>
        Connecticut
        </p>
      </div>

      <div className="bottom_Connecticut">
        <div className="left_side_Connecticut">
          <Tabs_Connecticut/>
        </div>
        <div className="right_side_Connecticut">
          <h3 className='right_h3_Connecticut'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Connecticut_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Connecticut;
