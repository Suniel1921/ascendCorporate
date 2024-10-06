import React from 'react';
import "./Montana.css";
import Tabs_Montana from "./Tabs_Montana/Tabs_Montana"

const Montana = () => {
  return (
    <div className='Montana_main_container'>
      <div className='top_main_hero_section_Montana'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_Montana_image' />
        <p className='image_over_paragraph_Montana'>
        Montana
        </p>
      </div>

      <div className="bottom_Montana">
        <div className="left_side_Montana">
          <Tabs_Montana/>
        </div>
        <div className="right_side_Montana">
          <h3 className='right_h3_Montana'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Montana_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Montana;
