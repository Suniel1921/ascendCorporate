import React from 'react';
import "./Missouri.css";
import Tabs_Missouri from "./Tabs_Missouri/Tabs_Missouri"

const Missouri = () => {
  return (
    <div className='Missouri_main_container'>
      <div className='top_main_hero_section_Missouri'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Missouri_image' />
        <p className='image_over_paragraph_Missouri'>
        Missouri
        </p>
      </div>

      <div className="bottom_Missouri">
        <div className="left_side_Missouri">
          <Tabs_Missouri/>
        </div>
        <div className="right_side_Missouri">
          <h3 className='right_h3_Missouri'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Missouri_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Missouri;
