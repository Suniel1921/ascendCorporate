import React from 'react';
import "./Maine.css";
import Tabs_Maine from "./Tabs_Maine/Tabs_Maine"

const Maine = () => {
  return (
    <div className='Maine_main_container'>
      <div className='top_main_hero_section_Maine'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Maine_image' />
        <p className='image_over_paragraph_Maine'>
        Maine
        </p>
      </div>

      <div className="bottom_Maine">
        <div className="left_side_Maine">
          <Tabs_Maine/>
        </div>
        <div className="right_side_Maine">
          <h3 className='right_h3_Maine'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Maine_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Maine;
