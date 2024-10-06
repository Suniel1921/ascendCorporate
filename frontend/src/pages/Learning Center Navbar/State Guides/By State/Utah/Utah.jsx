import React from 'react';
import "./Utah.css";
import Tabs_Utah from "./Tabs_Utah/Tabs_Utah"

const Utah = () => {
  return (
    <div className='Utah_main_container'>
      <div className='top_main_hero_section_Utah'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Utah_image' />
        <p className='image_over_paragraph_Utah'>
        Utah
        </p>
      </div>

      <div className="bottom_Utah">
        <div className="left_side_Utah">
          <Tabs_Utah/>
        </div>
        <div className="right_side_Utah">
          <h3 className='right_h3_Utah'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Utah_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Utah;
