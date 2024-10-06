import React from 'react';
import "./Indiana.css";
import Tabs_Indiana from "./Tabs_Indiana/Tabs_Indiana"

const Indiana = () => {
  return (
    <div className='Indiana_main_container'>
      <div className='top_main_hero_section_Indiana'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Indiana_image' />
        <p className='image_over_paragraph_Indiana'>
        Indiana
        </p>
      </div>

      <div className="bottom_Indiana">
        <div className="left_side_Indiana">
          <Tabs_Indiana/>
        </div>
        <div className="right_side_Indiana">
          <h3 className='right_h3_Indiana'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Indiana_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Indiana;
