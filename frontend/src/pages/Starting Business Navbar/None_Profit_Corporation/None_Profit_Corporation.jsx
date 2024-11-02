import React from "react";
import "./None_Profit_Corporation.css";
import Tabs_None_Profit_Corporation from "./Tabs_None_Profit_Corporation/Tabs_None_Profit_Corporation";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";

const None_Profit_Corporation = () => {
  return (
    <div className="none_profit_corporation_main_container">
      <div className="top_main_hero_section_None_Profit_Corporation">
        {/* <img src="/img/hero-image-shaking-hands.jpg" alt="" className='top_None_Profit_Corporation_image' /> */}
        <img
          src="https://images.pexels.com/photos/973226/pexels-photo-973226.jpeg"
          alt=""
          className="top_None_Profit_Corporation_image"
        />
        <p className="image_over_paragraph_None_Profit_Corporation">
          How to Start, Form & File a Nonprofit Organization
        </p>
      </div>

      <div className="bottom_None_Profit_Corporation">
        <div className="left_side_None_Profit_Corporation">
          <Tabs_None_Profit_Corporation />
        </div>
        {/* <div className="right_side_None_Profit_Corporation">
          <h3 className="right_h3_None_Profit_Corporation">
            Let's Ascend Incoperate
          </h3>
          <p>Create your non-profit organization today.</p>
          <button className="none_profit_corporation_button_full">
            Get Started
          </button>
        </div> */}
        <SideBarBox
          heading={"Let's Ascend Incoperate"}
          content={"Create your non-profit organization today."}
          bttnLabel={"Get Started"}
          bttnLink={"/quote-pricing"}
        />
      </div>
    </div>
  );
};

export default None_Profit_Corporation;
