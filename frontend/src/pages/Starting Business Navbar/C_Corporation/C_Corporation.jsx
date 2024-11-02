import React from "react";
import "./C_Corporation.css";
// import Tabs_C_corporation from './Tabs_C_corporation/Tabs_C_corporation';
import Tabs_C_corporation from "./Tabs_C_Corporation/Tabs_C_Corporation";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";

const C_Corporation = () => {
  return (
    <div className="C_corporation_main_container">
      <div className="top_main_hero_section_C_Corporation">
        {/* <img src="/img/hero-image-conference-table.jpg" alt="" className='top_C_Corporation_image' /> */}
        <img src="/img/c-cop.jpeg" alt="" className="top_C_Corporation_image" />
        <p className="image_over_paragraph_C_Corporation">
          What Is a C Corporation (C Corp)?
        </p>
      </div>

      <div className="bottom_C_Corporation">
        <div className="left_side_C_corporation">
          {/* <Tabs_C_corporation /> */}
          <Tabs_C_corporation />
        </div>
        {/* <div className="right_side_C_corporation">
          <h3 className="right_h3_C_corporation">Let's Ascend Incoperate</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="C_corporation_button_full">Get Started</button>
        </div> */}

        <SideBarBox
          heading={"Let's Ascend Incoperate"}
          content={
            "Create your corporation or limited liability company today."
          }
          bttnLabel={"Get Started"}
          bttnLink={"/quote-pricing"}
        />
      </div>
    </div>
  );
};

export default C_Corporation;
