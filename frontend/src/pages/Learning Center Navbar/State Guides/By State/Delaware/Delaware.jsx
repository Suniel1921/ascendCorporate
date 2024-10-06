import React from 'react';
import "./Delaware.css";
import Tabs_Delaware from "./Tabs_Delaware/Tabs_Delaware"

const Delaware = () => {
  return (
    <div className='Delaware_main_container'>
      <div className='top_main_hero_section_Delaware'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Delaware_image' />
        <p className='image_over_paragraph_Delaware'>
        Delaware
        </p>
      </div>

      <div className="bottom_Delaware">
        <div className="left_side_Delaware">
          <Tabs_Delaware/>
        </div>
        <div className="right_side_Delaware">
          <h3 className='right_h3_Delaware'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Delaware_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Delaware;
