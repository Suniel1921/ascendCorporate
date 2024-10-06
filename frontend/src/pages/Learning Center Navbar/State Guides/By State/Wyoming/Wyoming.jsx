import React from 'react';
import "./Wyoming.css";
import Tabs_Wyoming from "./Tabs_Wyoming/Tabs_Wyoming"

const Wyoming = () => {
  return (
    <div className='Wyoming_main_container'>
      <div className='top_main_hero_section_Wyoming'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Wyoming_image' />
        <p className='image_over_paragraph_Wyoming'>
        Wyoming
        </p>
      </div>

      <div className="bottom_Wyoming">
        <div className="left_side_Wyoming">
          <Tabs_Wyoming/>
        </div>
        <div className="right_side_Wyoming">
          <h3 className='right_h3_Wyoming'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Wyoming_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Wyoming;
