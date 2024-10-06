import React from 'react';
import "./Ohio.css";
import Tabs_Ohio from "./Tabs_Ohio/Tabs_Ohio"

const Ohio = () => {
  return (
    <div className='Ohio_main_container'>
      <div className='top_main_hero_section_Ohio'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Ohio_image' />
        <p className='image_over_paragraph_Ohio'>
        Ohio
        </p>
      </div>

      <div className="bottom_Ohio">
        <div className="left_side_Ohio">
          <Tabs_Ohio/>
        </div>
        <div className="right_side_Ohio">
          <h3 className='right_h3_Ohio'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Ohio_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Ohio;
