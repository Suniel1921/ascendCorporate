import React from 'react';
import "./Rhode_Island.css";
import Tabs_Rhode_Island from "./Tabs_Rhode_Island/Tabs_Rhode_Island"

const Rhode_Island = () => {
  return (
    <div className='Rhode_Island_main_container'>
      <div className='top_main_hero_section_Rhode_Island'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Rhode_Island_image' />
        <p className='image_over_paragraph_Rhode_Island'>
        Rhode Island
        </p>
      </div>

      <div className="bottom_Rhode_Island">
        <div className="left_side_Rhode_Island">
          <Tabs_Rhode_Island/>
        </div>
        <div className="right_side_Rhode_Island">
          <h3 className='right_h3_Rhode_Island'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Rhode_Island_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Rhode_Island;
