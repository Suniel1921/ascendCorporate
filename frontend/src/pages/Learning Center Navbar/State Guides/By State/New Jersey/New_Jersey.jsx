import React from 'react';
import "./New_Jersey.css";
import Tabs_New_Jersey from "./Tabs_New_Jersey/Tabs_New_Jersey"

const New_Jersey = () => {
  return (
    <div className='New_Jersey_main_container'>
      <div className='top_main_hero_section_New_Jersey'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_New_Jersey_image' />
        <p className='image_over_paragraph_New_Jersey'>
        New Jersey
        </p>
      </div>

      <div className="bottom_New_Jersey">
        <div className="left_side_New_Jersey">
          <Tabs_New_Jersey/>
        </div>
        <div className="right_side_New_Jersey">
          <h3 className='right_h3_New_Jersey'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="New_Jersey_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default New_Jersey;
