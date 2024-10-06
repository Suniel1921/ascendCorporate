import React from 'react';
import "./Arkansas.css";
import Tabs_Arkansas from "./Tabs_Arkansas/Tabs_Arkansas"

const Arkansas = () => {
  return (
    <div className='Arkansas_main_container'>
      <div className='top_main_hero_section_Arkansas'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Arkansas_image' />
        <p className='image_over_paragraph_Arkansas'>
        Arkansas
        </p>
      </div>

      <div className="bottom_Arkansas">
        <div className="left_side_Arkansas">
          <Tabs_Arkansas/>
        </div>
        <div className="right_side_Arkansas">
          <h3 className='right_h3_Arkansas'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Arkansas_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Arkansas;
