import React from 'react';
import "./South_Carolina.css";
import Tabs_South_Carolina from "./Tabs_South_Carolina/Tabs_South_Carolina"

const South_Carolina = () => {
  return (
    <div className='South_Carolina_main_container'>
      <div className='top_main_hero_section_South_Carolina'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_South_Carolina_image' />
        <p className='image_over_paragraph_South_Carolina'>
        South Carolina
        </p>
      </div>

      <div className="bottom_South_Carolina">
        <div className="left_side_South_Carolina">
          <Tabs_South_Carolina/>
        </div>
        <div className="right_side_South_Carolina">
          <h3 className='right_h3_South_Carolina'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="South_Carolina_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default South_Carolina;
