import React from 'react';
import "./Alaska.css";
import Tabs_Alaska from "./Tabs_Alaska/Tabs_Alaska"

const Alaska = () => {
  return (
    <div className='Alaska_main_container'>
      <div className='top_main_hero_section_Alaska'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Alaska_image' />
        <p className='image_over_paragraph_Alaska'>
        Alaska
        </p>
      </div>

      <div className="bottom_Alaska">
        <div className="left_side_Alaska">
          <Tabs_Alaska/>
        </div>
        <div className="right_side_Alaska">
          <h3 className='right_h3_Alaska'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Alaska_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Alaska;
