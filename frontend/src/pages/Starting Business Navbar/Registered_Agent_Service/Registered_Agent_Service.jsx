import React from "react";
import "./Registered_Agent_Service.css";
import Tabs from "./Tabs/Tabs";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";

const Registered_Agent_Service = () => {
  return (
    <div className="main_registerd Service_container">
      <h2 className="main_registered_heading">
        Registered Agent Service and Solutions
      </h2>
      <div className="bottom_register_container">
        <div className="left_register_container">
          <Tabs />
        </div>

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

export default Registered_Agent_Service;
