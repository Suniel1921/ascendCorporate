import React from 'react';
import "./Louisiana.css";
import Tabs_Louisiana from "./Tabs_Louisiana/Tabs_Louisiana"

const Louisiana = () => {
  return (
    <div className='Louisiana_main_container'>
      <div className='top_main_hero_section_Louisiana'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Louisiana_image' />
        <p className='image_over_paragraph_Louisiana'>
        Louisiana
        </p>
      </div>

      <div className="bottom_Louisiana">
        <div className="left_side_Louisiana">
          <Tabs_Louisiana/>
        </div>
        <div className="right_side_Louisiana">
          <h3 className='right_h3_Louisiana'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Louisiana_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Louisiana;
