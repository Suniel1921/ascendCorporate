import React from 'react';
import "./Georgia.css";
import Tabs_Georgia from "./Tabs_Georgia/Tabs_Georgia"

const Georgia = () => {
  return (
    <div className='Georgia_main_container'>
      <div className='top_main_hero_section_Georgia'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Georgia_image' />
        <p className='image_over_paragraph_Georgia'>
        Georgia
        </p>
      </div>

      <div className="bottom_Georgia">
        <div className="left_side_Georgia">
          <Tabs_Georgia/>
        </div>
        <div className="right_side_Georgia">
          <h3 className='right_h3_Georgia'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Georgia_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Georgia;
