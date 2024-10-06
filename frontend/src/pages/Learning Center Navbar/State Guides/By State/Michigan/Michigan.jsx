import React from 'react';
import "./Michigan.css";
import Tabs_Michigan from "./Tabs_Michigan/Tabs_Michigan"

const Michigan = () => {
  return (
    <div className='Michigan_main_container'>
      <div className='top_main_hero_section_Michigan'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Michigan_image' />
        <p className='image_over_paragraph_Michigan'>
        Michigan
        </p>
      </div>

      <div className="bottom_Michigan">
        <div className="left_side_Michigan">
          <Tabs_Michigan/>
        </div>
        <div className="right_side_Michigan">
          <h3 className='right_h3_Michigan'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Michigan_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Michigan;
