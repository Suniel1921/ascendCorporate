import React from 'react';
import "./Oklahoma.css";
import Tabs_Oklahoma from "./Tabs_Oklahoma/Tabs_Oklahoma"

const Oklahoma = () => {
  return (
    <div className='Oklahoma_main_container'>
      <div className='top_main_hero_section_Oklahoma'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Oklahoma_image' />
        <p className='image_over_paragraph_Oklahoma'>
        Oklahoma
        </p>
      </div>

      <div className="bottom_Oklahoma">
        <div className="left_side_Oklahoma">
          <Tabs_Oklahoma/>
        </div>
        <div className="right_side_Oklahoma">
          <h3 className='right_h3_Oklahoma'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Oklahoma_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Oklahoma;
