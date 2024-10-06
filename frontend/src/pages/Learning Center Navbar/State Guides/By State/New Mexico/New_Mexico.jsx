import React from 'react';
import "./New_Mexico.css";
import Tabs_New_Mexico from "./Tabs_New_Mexico/Tabs_New_Mexico"

const New_Mexico = () => {
  return (
    <div className='New_Mexico_main_container'>
      <div className='top_main_hero_section_New_Mexico'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_New_Mexico_image' />
        <p className='image_over_paragraph_New_Mexico'>
        New Mexico
        </p>
      </div>

      <div className="bottom_New_Mexico">
        <div className="left_side_New_Mexico">
          <Tabs_New_Mexico/>
        </div>
        <div className="right_side_New_Mexico">
          <h3 className='right_h3_New_Mexico'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="New_Mexico_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default New_Mexico;
