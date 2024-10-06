import React from 'react';
import "./Massachusetts.css";
import Tabs_Massachusetts from "./Tabs_Massachusetts/Tabs_Massachusetts"

const Massachusetts = () => {
  return (
    <div className='Massachusetts_main_container'>
      <div className='top_main_hero_section_Massachusetts'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Massachusetts_image' />
        <p className='image_over_paragraph_Massachusetts'>
        Massachusetts
        </p>
      </div>

      <div className="bottom_Massachusetts">
        <div className="left_side_Massachusetts">
          <Tabs_Massachusetts/>
        </div>
        <div className="right_side_Massachusetts">
          <h3 className='right_h3_Massachusetts'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Massachusetts_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Massachusetts;
