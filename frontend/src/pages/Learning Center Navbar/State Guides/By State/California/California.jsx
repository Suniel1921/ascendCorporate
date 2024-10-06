import React from 'react';
import "./California.css";
import Tabs_California from "./Tabs_California/Tabs_California"

const California = () => {
  return (
    <div className='California_main_container'>
      <div className='top_main_hero_section_California'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_California_image' />
        <p className='image_over_paragraph_California'>
        California
        </p>
      </div>

      <div className="bottom_California">
        <div className="left_side_California">
          <Tabs_California/>
        </div>
        <div className="right_side_California">
          <h3 className='right_h3_California'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="California_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default California;
