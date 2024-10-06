import React from 'react';
import "./None_Profit_Corporation.css";
import Tabs_None_Profit_Corporation from './Tabs_None_Profit_Corporation/Tabs_None_Profit_Corporation';


const None_Profit_Corporation = () => {
  return (
    <div className='none_profit_corporation_main_container'>
      <div className='top_main_hero_section_None_Profit_Corporation'>
        <img src="/img/hero-image-shaking-hands.jpg" alt="" className='top_None_Profit_Corporation_image' />
        <p className='image_over_paragraph_None_Profit_Corporation'>
        How to Start, Form & File a Nonprofit Organization
        </p>
      </div>

      <div className="bottom_None_Profit_Corporation">
        <div className="left_side_None_Profit_Corporation">
          <Tabs_None_Profit_Corporation/>
        </div>
        <div className="right_side_None_Profit_Corporation">
          <h3 className='right_h3_None_Profit_Corporation'>Let's get to it.</h3>
          <p>Create your non-profit organization today.</p>
          <button className="none_profit_corporation_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default None_Profit_Corporation;
