import React from 'react';
import "./Wisconsin.css";
import Tabs_Wisconsin from "./Tabs_Wisconsin/Tabs_Wisconsin"

const Wisconsin = () => {
  return (
    <div className='Wisconsin_main_container'>
      <div className='top_main_hero_section_Wisconsin'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Wisconsin_image' />
        <p className='image_over_paragraph_Wisconsin'>
        Wisconsin
        </p>
      </div>

      <div className="bottom_Wisconsin">
        <div className="left_side_Wisconsin">
          <Tabs_Wisconsin/>
        </div>
        <div className="right_side_Wisconsin">
          <h3 className='right_h3_Wisconsin'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Wisconsin_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Wisconsin;
