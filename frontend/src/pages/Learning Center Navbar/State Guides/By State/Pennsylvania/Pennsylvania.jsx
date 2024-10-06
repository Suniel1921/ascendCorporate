import React from 'react';
import "./Pennsylvania.css";
import Tabs_Pennsylvania from "./Tabs_Pennsylvania/Tabs_Pennsylvania"

const Pennsylvania = () => {
  return (
    <div className='Pennsylvania_main_container'>
      <div className='top_main_hero_section_Pennsylvania'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Pennsylvania_image' />
        <p className='image_over_paragraph_Pennsylvania'>
        Pennsylvania
        </p>
      </div>

      <div className="bottom_Pennsylvania">
        <div className="left_side_Pennsylvania">
          <Tabs_Pennsylvania/>
        </div>
        <div className="right_side_Pennsylvania">
          <h3 className='right_h3_Pennsylvania'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Pennsylvania_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Pennsylvania;
