import React from 'react';
import "./Florida.css";
import Tabs_Florida from "./Tabs_Florida/Tabs_Florida"

const Florida = () => {
  return (
    <div className='Florida_main_container'>
      <div className='top_main_hero_section_Florida'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Florida_image' />
        <p className='image_over_paragraph_Florida'>
        Florida
        </p>
      </div>

      <div className="bottom_Florida">
        <div className="left_side_Florida">
          <Tabs_Florida/>
        </div>
        <div className="right_side_Florida">
          <h3 className='right_h3_Florida'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Florida_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Florida;
