import React from 'react';
import "./North_Carolina.css";
import Tabs_North_Carolina from "./Tabs_North_Carolina/Tabs_North_Carolina"

const North_Carolina = () => {
  return (
    <div className='North_Carolina_main_container'>
      <div className='top_main_hero_section_North_Carolina'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_North_Carolina_image' />
        <p className='image_over_paragraph_North_Carolina'>
        North Carolina
        </p>
      </div>

      <div className="bottom_North_Carolina">
        <div className="left_side_North_Carolina">
          <Tabs_North_Carolina/>
        </div>
        <div className="right_side_North_Carolina">
          <h3 className='right_h3_North_Carolina'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="North_Carolina_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default North_Carolina;
