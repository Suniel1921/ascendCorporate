import React from 'react';
import "./Vermont.css";
import Tabs_Vermont from "./Tabs_Vermont/Tabs_Vermont"

const Vermont = () => {
  return (
    <div className='Vermont_main_container'>
      <div className='top_main_hero_section_Vermont'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Vermont_image' />
        <p className='image_over_paragraph_Vermont'>
        Vermont
        </p>
      </div>

      <div className="bottom_Vermont">
        <div className="left_side_Vermont">
          <Tabs_Vermont/>
        </div>
        <div className="right_side_Vermont">
          <h3 className='right_h3_Vermont'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Vermont_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Vermont;
