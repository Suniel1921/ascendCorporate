import React from 'react';
import "./Tennessee.css";
import Tabs_Tennessee from "./Tabs_Tennessee/Tabs_Tennessee"

const Tennessee = () => {
  return (
    <div className='Tennessee_main_container'>
      <div className='top_main_hero_section_Tennessee'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Tennessee_image' />
        <p className='image_over_paragraph_Tennessee'>
        Tennessee
        </p>
      </div>

      <div className="bottom_Tennessee">
        <div className="left_side_Tennessee">
          <Tabs_Tennessee/>
        </div>
        <div className="right_side_Tennessee">
          <h3 className='right_h3_Tennessee'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Tennessee_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Tennessee;
