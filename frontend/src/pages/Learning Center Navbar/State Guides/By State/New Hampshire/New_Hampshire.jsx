import React from 'react';
import "./New_Hampshire.css";
import Tabs_New_Hampshire from "./Tabs_New_Hampshire/Tabs_New_Hampshire"

const New_Hampshire = () => {
  return (
    <div className='New_Hampshire_main_container'>
      <div className='top_main_hero_section_New_Hampshire'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_New_Hampshire_image' />
        <p className='image_over_paragraph_New_Hampshire'>
        New Hampshire
        </p>
      </div>

      <div className="bottom_New_Hampshire">
        <div className="left_side_New_Hampshire">
          <Tabs_New_Hampshire/>
        </div>
        <div className="right_side_New_Hampshire">
          <h3 className='right_h3_New_Hampshire'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="New_Hampshire_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default New_Hampshire;
