import React from 'react';
import "./District_of_Columbia.css";
import Tabs_District_of_Columbia from "./Tabs_District_of_Columbia/Tabs_District_of_Columbia"

const District_of_Columbia = () => {
  return (
    <div className='District_of_Columbia_main_container'>
      <div className='top_main_hero_section_District_of_Columbia'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_District_of_Columbia_image' />
        <p className='image_over_paragraph_District_of_Columbia'>
        District of Columbia
        </p>
      </div>

      <div className="bottom_District_of_Columbia">
        <div className="left_side_District_of_Columbia">
          <Tabs_District_of_Columbia/>
        </div>
        <div className="right_side_District_of_Columbia">
          <h3 className='right_h3_District_of_Columbia'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="District_of_Columbia_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default District_of_Columbia;
