import React from 'react';
import "./Professional_Corporation.css";
import Tabs_Professional_Corporation from './Tabs_Professional_Corporation/Tabs_Professional_Corporation';


const Professional_Corporation = () => {
  return (
    <div className='Professional_Corporation_main_container'>
      <div className='top_main_hero_section_Professional_Corporation'>
        <img src="/img/hero-image-shaking-hands.jpg" alt="" className='top_Professional_Corporation_image' />
        <p className='image_over_paragraph_Professional_Corporation'>
          Professional Corporations and Professional Limited Liability Companies
        </p>
      </div>

      <div className="bottom_Professional_Corporation">
        <div className="left_side_Professional_Corporation">
          <Tabs_Professional_Corporation />
        </div>
        <div className="right_side_Professional_Corporation">
          <h3 className='right_h3_Professional_Corporation'>Let's get to it.</h3>
          <p>Create your non-profit organization today.</p>
          <button className="Professional_Corporation_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Professional_Corporation;
