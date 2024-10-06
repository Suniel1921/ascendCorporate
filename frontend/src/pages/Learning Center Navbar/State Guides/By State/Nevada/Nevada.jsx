import React from 'react';
import "./Nevada.css";
import Tabs_Nevada from "./Tabs_Nevada/Tabs_Nevada"

const Nevada = () => {
  return (
    <div className='Nevada_main_container'>
      <div className='top_main_hero_section_Nevada'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Nevada_image' />
        <p className='image_over_paragraph_Nevada'>
        Nevada
        </p>
      </div>

      <div className="bottom_Nevada">
        <div className="left_side_Nevada">
          <Tabs_Nevada/>
        </div>
        <div className="right_side_Nevada">
          <h3 className='right_h3_Nevada'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Nevada_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Nevada;
