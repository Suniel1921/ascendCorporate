import React from 'react';
import "./Texas.css";
import Tabs_Texas from "./Tabs_Texas/Tabs_Texas"

const Texas = () => {
  return (
    <div className='Texas_main_container'>
      <div className='top_main_hero_section_Texas'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Texas_image' />
        <p className='image_over_paragraph_Texas'>
        Texas
        </p>
      </div>

      <div className="bottom_Texas">
        <div className="left_side_Texas">
          <Tabs_Texas/>
        </div>
        <div className="right_side_Texas">
          <h3 className='right_h3_Texas'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Texas_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Texas;
