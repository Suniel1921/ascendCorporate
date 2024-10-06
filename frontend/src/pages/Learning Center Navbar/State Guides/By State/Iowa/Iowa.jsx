import React from 'react';
import "./Iowa.css";
import Tabs_Iowa from "./Tabs_Iowa/Tabs_Iowa"

const Iowa = () => {
  return (
    <div className='Iowa_main_container'>
      <div className='top_main_hero_section_Iowa'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Iowa_image' />
        <p className='image_over_paragraph_Iowa'>
        Iowa
        </p>
      </div>

      <div className="bottom_Iowa">
        <div className="left_side_Iowa">
          <Tabs_Iowa/>
        </div>
        <div className="right_side_Iowa">
          <h3 className='right_h3_Iowa'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Iowa_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Iowa;
