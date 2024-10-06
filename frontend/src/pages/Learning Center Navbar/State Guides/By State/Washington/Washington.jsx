import React from 'react';
import "./Washington.css";
import Tabs_Washington from "./Tabs_Washington/Tabs_Washington"

const Washington = () => {
  return (
    <div className='Washington_main_container'>
      <div className='top_main_hero_section_Washington'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Washington_image' />
        <p className='image_over_paragraph_Washington'>
        Washington
        </p>
      </div>

      <div className="bottom_Washington">
        <div className="left_side_Washington">
          <Tabs_Washington/>
        </div>
        <div className="right_side_Washington">
          <h3 className='right_h3_Washington'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Washington_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Washington;
