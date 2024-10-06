import React from 'react';
import "./Colorado.css";
import Tabs_Colorado from "./Tabs_Colorado/Tabs_Colorado"

const Colorado = () => {
  return (
    <div className='Colorado_main_container'>
      <div className='top_main_hero_section_Colorado'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Colorado_image' />
        <p className='image_over_paragraph_Colorado'>
        Colorado
        </p>
      </div>

      <div className="bottom_Colorado">
        <div className="left_side_Colorado">
          <Tabs_Colorado/>
        </div>
        <div className="right_side_Colorado">
          <h3 className='right_h3_Colorado'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Colorado_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Colorado;
