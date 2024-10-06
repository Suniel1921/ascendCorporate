import React from 'react';
import "./New_York.css";
import Tabs_New_York from "./Tabs_New_York/Tabs_New_York"

const New_York = () => {
  return (
    <div className='New_York_main_container'>
      <div className='top_main_hero_section_New_York'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_New_York_image' />
        <p className='image_over_paragraph_New_York'>
        New York
        </p>
      </div>

      <div className="bottom_New_York">
        <div className="left_side_New_York">
          <Tabs_New_York/>
        </div>
        <div className="right_side_New_York">
          <h3 className='right_h3_New_York'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="New_York_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default New_York;
