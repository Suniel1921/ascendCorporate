import React from 'react';
import "./Business_Glossary.css";
import Tabs_Business_Glossary from "./Tabs_Business_Glossary/Tabs_Business_Glossary"

const Business_Glossary = () => {
  return (
    <div className='Business_Glossary_main_container'>
      <div className='top_main_hero_section_Business_Glossary'>
        <img src="/img/hero-image-conference-table.jpg" alt="" className='top_Business_Glossary_image' />
        <p className='image_over_paragraph_Business_Glossary'>
        Business Glossary
        </p>
      </div>

      <div className="bottom_Business_Glossary">
        <div className="left_side_Business_Glossary">
          <Tabs_Business_Glossary/>
        </div>
        <div className="right_side_Business_Glossary">
          <h3 className='right_h3_Business_Glossary'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Business_Glossary_button_full">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Business_Glossary;
