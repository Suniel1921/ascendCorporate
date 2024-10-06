import React from 'react';
import "./Arizona.css";
import Tabs_Arizona from "./Tabs_Arizona/Tabs_Arizona"

const Arizona = () => {
  return (
    <div className='Arizona_main_container'>
      <div className='top_main_hero_section_Arizona'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Arizona_image' />
        <p className='image_over_paragraph_Arizona'>
        Arizona
        </p>
      </div>

      <div className="bottom_Arizona">
        <div className="left_side_Arizona">
          <Tabs_Arizona/>
        </div>
        <div className="right_side_Arizona">
          <h3 className='right_h3_Arizona'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Arizona_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Arizona;
