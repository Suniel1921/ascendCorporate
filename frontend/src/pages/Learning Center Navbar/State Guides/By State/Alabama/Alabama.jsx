import React from 'react';
import "./Alabama.css";
import Tabs_Alabama from "./Tabs_Alabama/Tabs_Alabama"

const Alabama = () => {
  return (
    <div className='Alabama_main_container'>
      <div className='top_main_hero_section_Alabama'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Alabama_image' />
        <p className='image_over_paragraph_Alabama'>
        Alabama
        </p>
      </div>

      <div className="bottom_Alabama">
        <div className="left_side_Alabama">
          <Tabs_Alabama/>
        </div>
        <div className="right_side_Alabama">
          <h3 className='right_h3_Alabama'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Alabama_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Alabama;
