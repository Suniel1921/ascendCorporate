import React from 'react';
import "./Illinois.css";
import Tabs_Illinois from "./Tabs_Illinois/Tabs_Illinois"

const Illinois = () => {
  return (
    <div className='Illinois_main_container'>
      <div className='top_main_hero_section_Illinois'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Illinois_image' />
        <p className='image_over_paragraph_Illinois'>
        Illinois
        </p>
      </div>

      <div className="bottom_Illinois">
        <div className="left_side_Illinois">
          <Tabs_Illinois/>
        </div>
        <div className="right_side_Illinois">
          <h3 className='right_h3_Illinois'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Illinois_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Illinois;
