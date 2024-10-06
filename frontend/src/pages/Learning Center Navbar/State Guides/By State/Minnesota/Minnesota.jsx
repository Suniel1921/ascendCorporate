import React from 'react';
import "./Minnesota.css";
import Tabs_Minnesota from "./Tabs_Minnesota/Tabs_Minnesota"

const Minnesota = () => {
  return (
    <div className='Minnesota_main_container'>
      <div className='top_main_hero_section_Minnesota'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Minnesota_image' />
        <p className='image_over_paragraph_Minnesota'>
        Minnesota
        </p>
      </div>

      <div className="bottom_Minnesota">
        <div className="left_side_Minnesota">
          <Tabs_Minnesota/>
        </div>
        <div className="right_side_Minnesota">
          <h3 className='right_h3_Minnesota'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Minnesota_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Minnesota;
