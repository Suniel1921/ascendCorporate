import React from 'react';
import "./Limited_Partnership.css";
import Tabs_Limited_Partnership from './Tabs_Limited_Partnership/Tabs_Limited_Partnership';


const Limited_Partnership = () => {
  return (
    <div className='Limited_Partnership_main_container'>
      <div className='top_main_hero_section_Limited_Partnership'>
        <img src="/img/hero-image-shaking-hands.jpg" alt="" className='top_Limited_Partnership_image' />
        <p className='image_over_paragraph_Limited_Partnership'>
        Limited Partnership
        </p>
      </div>

      <div className="bottom_Limited_Partnership">
        <div className="left_side_Limited_Partnership">
          <Tabs_Limited_Partnership />
        </div>
        <div className="right_side_Limited_Partnership">
          <h3 className='right_h3_Limited_Partnership'>Let's get to it.</h3>
          <p>Create your non-profit organization today.</p>
          <button className="Limited_Partnership_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Limited_Partnership;
