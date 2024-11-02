import React from "react";
import "./S_Corporation.css";
import Tabs_S_corporation from "./Tabs_S_corporation/Tabs_S_corporation";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";
const S_Corporation = () => {
  return (
    <div className="S_corporation_main_container">
      <div className="top_main_hero_section_S_Corporaton">
        {/* <img src="/img/hero-image-conference-table.jpg" alt="" className='top_S_Corporaton_image' /> */}
        <img src="/img/s-cop.jpeg" alt="" className="top_S_Corporaton_image" />
        <p className="image_over_paragraph_S_Corporaton">
          What Is an S Corporation (S Corp)?
        </p>
      </div>

      <div className="bottom_S_Corporation">
        <div className="left_side_S_corporation">
          <Tabs_S_corporation />
        </div>
        {/* <div className="right_side_S_corporation">
          <h3 className="right_h3_S_corportion">Let's Ascend Incoperate</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="S_corporation_button_full">Get Started</button>
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

export default S_Corporation;
