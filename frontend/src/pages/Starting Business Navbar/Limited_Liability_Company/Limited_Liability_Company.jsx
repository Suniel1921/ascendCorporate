import React from "react";
import "./Limited_Liability_Company.css";
import Tabs_LLC from "./Tabs_LLC/Tabs_LLC";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";
const Limited_Liability_Company = () => {
  return (
    <div className="LLC_main_container">
      <div className="top_main_hero_section_LLC">
        {/* <img src="/img/hero-image-collaborate.jpg" alt="" className='top_LLC_image' /> */}
        <img src="/img/llc-company.jpeg" alt="" className="top_LLC_image" />
        <p className="image_over_paragraph_LLC">
          What is an LLC (Limited Liability Company)?
        </p>
      </div>

      <div className="bottom_LLC">
        <div className="left_side_LLC">
          <Tabs_LLC />
        </div>
        {/* <div className="right_side_LLC">
          <h3 className="right_h3_LLC">Let's Ascend Incoperate</h3>
          <p>Create your non-profit organization today.</p>
          <button className="LLC_button_full">Get Started</button>
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

export default Limited_Liability_Company;
