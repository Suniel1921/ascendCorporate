import React from 'react';
import "./Kansas.css";
import Tabs_Kansas from "./Tabs_Kansas/Tabs_Kansas"

const Kansas = () => {
  return (
    <div className='Kansas_main_container'>
      <div className='top_main_hero_section_Kansas'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Kansas_image' />
        <p className='image_over_paragraph_Kansas'>
        Kansas
        </p>
      </div>

      <div className="bottom_Kansas">
        <div className="left_side_Kansas">
          <Tabs_Kansas/>
        </div>
        <div className="right_side_Kansas">
          <h3 className='right_h3_Kansas'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Kansas_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Kansas;
