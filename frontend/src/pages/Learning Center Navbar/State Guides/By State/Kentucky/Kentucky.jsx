import React from 'react';
import "./Kentucky.css";
import Tabs_Kentucky from "./Tabs_Kentucky/Tabs_Kentucky"

const Kentucky = () => {
  return (
    <div className='Kentucky_main_container'>
      <div className='top_main_hero_section_Kentucky'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Kentucky_image' />
        <p className='image_over_paragraph_Kentucky'>
        Kentucky
        </p>
      </div>

      <div className="bottom_Kentucky">
        <div className="left_side_Kentucky">
          <Tabs_Kentucky/>
        </div>
        <div className="right_side_Kentucky">
          <h3 className='right_h3_Kentucky'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Kentucky_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Kentucky;
