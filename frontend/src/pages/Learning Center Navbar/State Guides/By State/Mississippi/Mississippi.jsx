import React from 'react';
import "./Mississippi.css";
import Tabs_Mississippi from "./Tabs_Mississippi/Tabs_Mississippi"

const Mississippi = () => {
  return (
    <div className='Mississippi_main_container'>
      <div className='top_main_hero_section_Mississippi'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Mississippi_image' />
        <p className='image_over_paragraph_Mississippi'>
        Mississippi
        </p>
      </div>

      <div className="bottom_Mississippi">
        <div className="left_side_Mississippi">
          <Tabs_Mississippi/>
        </div>
        <div className="right_side_Mississippi">
          <h3 className='right_h3_Mississippi'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Mississippi_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Mississippi;
