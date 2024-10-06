import React from 'react';
import "./Hawaii.css";
import Tabs_Hawaii from "./Tabs_Hawaii/Tabs_Hawaii"

const Hawaii = () => {
  return (
    <div className='Hawaii_main_container'>
      <div className='top_main_hero_section_Hawaii'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Hawaii_image' />
        <p className='image_over_paragraph_Hawaii'>
        Hawaii
        </p>
      </div>

      <div className="bottom_Hawaii">
        <div className="left_side_Hawaii">
          <Tabs_Hawaii/>
        </div>
        <div className="right_side_Hawaii">
          <h3 className='right_h3_Hawaii'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Hawaii_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hawaii;
