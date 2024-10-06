import React from 'react';
import "./Maryland.css";
import Tabs_Maryland from "./Tabs_Maryland/Tabs_Maryland"

const Maryland = () => {
  return (
    <div className='Maryland_main_container'>
      <div className='top_main_hero_section_Maryland'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Maryland_image' />
        <p className='image_over_paragraph_Maryland'>
        Maryland
        </p>
      </div>

      <div className="bottom_Maryland">
        <div className="left_side_Maryland">
          <Tabs_Maryland/>
        </div>
        <div className="right_side_Maryland">
          <h3 className='right_h3_Maryland'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Maryland_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Maryland;
