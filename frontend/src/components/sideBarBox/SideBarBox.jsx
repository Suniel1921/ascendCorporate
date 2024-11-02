import React from "react";
import "./SideBarBox.css";
import { useNavigate } from "react-router-dom";
const SideBarBox = ({ heading, content, bttnLabel, bttnLink }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebox-wrapper">
        <h3 className="sidebox-heading">{heading}</h3>
        <p className="sidebox-content">{content}</p>
        <button className="" onClick={() => navigate(`${bttnLink}`)}>
          {bttnLabel}
        </button>
      </div>
    </>
  );
};

export default SideBarBox;
