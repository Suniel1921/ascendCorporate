import React from 'react';
import "./Nebraska.css";
import Tabs_Nebraska from "./Tabs_Nebraska/Tabs_Nebraska"

const Nebraska = () => {
  return (
    <div className='Nebraska_main_container'>
      <div className='top_main_hero_section_Nebraska'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Nebraska_image' />
        <p className='image_over_paragraph_Nebraska'>
        Nebraska
        </p>
      </div>

      <div className="bottom_Nebraska">
        <div className="left_side_Nebraska">
          <Tabs_Nebraska/>
        </div>
        <div className="right_side_Nebraska">
          <h3 className='right_h3_Nebraska'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Nebraska_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Nebraska;
