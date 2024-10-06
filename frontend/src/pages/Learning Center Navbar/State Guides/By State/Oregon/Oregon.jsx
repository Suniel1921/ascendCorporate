import React from 'react';
import "./Oregon.css";
import Tabs_Oregon from "./Tabs_Oregon/Tabs_Oregon"

const Oregon = () => {
  return (
    <div className='Oregon_main_container'>
      <div className='top_main_hero_section_Oregon'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Oregon_image' />
        <p className='image_over_paragraph_Oregon'>
        Oregon
        </p>
      </div>

      <div className="bottom_Oregon">
        <div className="left_side_Oregon">
          <Tabs_Oregon/>
        </div>
        <div className="right_side_Oregon">
          <h3 className='right_h3_Oregon'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Oregon_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Oregon;
