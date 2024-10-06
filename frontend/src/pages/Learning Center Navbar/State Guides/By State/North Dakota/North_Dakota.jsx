import React from 'react';
import "./North_Dakota.css";
import Tabs_North_Dakota from "./Tabs_North_Dakota/Tabs_North_Dakota"

const North_Dakota = () => {
  return (
    <div className='North_Dakota_main_container'>
      <div className='top_main_hero_section_North_Dakota'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_North_Dakota_image' />
        <p className='image_over_paragraph_North_Dakota'>
        North Dakota
        </p>
      </div>

      <div className="bottom_North_Dakota">
        <div className="left_side_North_Dakota">
          <Tabs_North_Dakota/>
        </div>
        <div className="right_side_North_Dakota">
          <h3 className='right_h3_North_Dakota'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="North_Dakota_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default North_Dakota;
