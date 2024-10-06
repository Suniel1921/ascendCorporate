import React from 'react';
import "./South_Dakota.css";
import Tabs_South_Dakota from "./Tabs_South_Dakota/Tabs_South_Dakota"

const South_Dakota = () => {
  return (
    <div className='South_Dakota_main_container'>
      <div className='top_main_hero_section_South_Dakota'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_South_Dakota_image' />
        <p className='image_over_paragraph_South_Dakota'>
        South Carolina
        </p>
      </div>

      <div className="bottom_South_Dakota">
        <div className="left_side_South_Dakota">
          <Tabs_South_Dakota/>
        </div>
        <div className="right_side_South_Dakota">
          <h3 className='right_h3_South_Dakota'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="South_Dakota_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default South_Dakota;
