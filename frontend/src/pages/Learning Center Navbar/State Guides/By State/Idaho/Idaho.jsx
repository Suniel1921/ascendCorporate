import React from 'react';
import "./Idaho.css";
import Tabs_Idaho from "./Tabs_Idaho/Tabs_Idaho"

const Idaho = () => {
  return (
    <div className='Idaho_main_container'>
      <div className='top_main_hero_section_Idaho'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Idaho_image' />
        <p className='image_over_paragraph_Idaho'>
        Idaho
        </p>
      </div>

      <div className="bottom_Idaho">
        <div className="left_side_Idaho">
          <Tabs_Idaho/>
        </div>
        <div className="right_side_Idaho">
          <h3 className='right_h3_Idaho'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Idaho_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Idaho;
