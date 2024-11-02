// import React, { useState } from 'react';
// import './About_us.css';
// import Image_1 from './Image_1.png'; // Main image
// import Image_2 from './Image_2.jpg'; // Circle image

// // Accordion Component
// const Accordion = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="accordion">
//       <div className="accordion-header" onClick={toggleAccordion}>
//         <h3>{title}</h3>
//         <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
//           {isOpen ? '-' : '+'}
//         </div>
//       </div>
//       {isOpen && <div className="accordion-content">{content}</div>}
//     </div>
//   );
// };

// const About_us = () => {
//   return (
//     <div className='about_main'>

//       <div className="collage-container about_main_left">
//         <div className="image-wrapper">
//           <img src={Image_1} alt="Main" />
//         </div>

//       </div>
//       <div className="about_main_right">
//         {/* Content for the right side */}
//         <div className="aboutBG">
//             <span className="about_redDot"></span>
//             <p className="about">ABOUT US</p>
//           </div>
//         <h2 className='right_h2'>
//         We Provide Professional
//         <br />
//          Advice to Businesses.
//         </h2>
//         <p className='right_p'>
//         We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences, and print materials. Install any demo, plugin or template in a matter of seconds.
//         </p>
//         {/* Accordion added here */}
//         <Accordion
//           title="Learn More"
//           content="Here is some additional information that expands when you click the accordion."
//         />
//         <Accordion
//           title="Learn More"
//           content="Here is some additional information that expands when you click the accordion."
//         />
//         <Accordion
//           title="Learn More"
//           content="Here is some additional information that expands when you click the accordion."
//         />
//           <Accordion
//           title="Learn More"
//           content="Here is some additional information that expands when you click the accordion."
//         />
//       </div>
//     </div>
//   );
// };

// export default About_us;

import React, { useState } from "react";
import "./About_us.css";
import Image_1 from "/img/Image_1.png"; // Main image

import { Link } from "react-router-dom";

// Accordion Component
const Accordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={onClick}
        style={{ color: isOpen ? "red" : "black" }} // Apply red color when active
      >
        <h3>{title}</h3>
        <div className={`accordion-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const About_us = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0); // Index of the open accordion

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index); // Toggle the accordion
  };

  return (
    <div className="about_main">
      <div className="collage-container about_main_left">
        <div className="image-wrapper">
          <img src={Image_1} alt="Main" />
        </div>
      </div>
      <div className="about_main_right">
        <div className="aboutBG">
          <span className="about_redDot"></span>
          <p className="about">ABOUT US</p>
        </div>
        <h2 className="right_h2">Pick a business type.</h2>
        <p className="right_p">
          Decide how you want to incorporate and register your company.
        </p>
        {/* Accordion Components */}
        <Accordion
          title="Limited liability company (LLC)"
          content={
            <>
              The perfect first step. An LLC is a great way to start a new
              company. Incorporating your business this way protects your
              personal assets, and gives your business legitimacy. Learn more
              about it.
              <br />
              <Link to="/limited-liability-company">
                {" "}
                Get more information.
              </Link>
              .
            </>
          }
          isOpen={openAccordionIndex === 0} // Only open if this accordion is the active one
          onClick={() => handleAccordionClick(0)}
        />
        <Accordion
          title="C Corporation (C corp)"
          content={
            <>
              Hello, Wall Street. In addition to personal asset protection, the
              C corp structure also creates unlimited growth potential. Once
              you're incorporated, you can issue any class of stock to any
              number of investors.
              <br />
              <Link to="/c-corporation"> Get more information.</Link>
            </>
          }
          isOpen={openAccordionIndex === 1} // Only open if this accordion is the active one
          onClick={() => handleAccordionClick(1)}
        />
        <Accordion
          title="S Corporation (S corp)"
          content={
            <>
              One big perk, but lots of strings. This structure exempts your
              incorporated company from federal income taxes, but at the cost of
              additional rules and limitations.
              <br />
              <Link to="/s-corporation"> Get more information.</Link>.
            </>
          }
          isOpen={openAccordionIndex === 2} // Only open if this accordion is the active one
          onClick={() => handleAccordionClick(2)}
        />
        <Accordion
          title="Nonprofit"
          content={
            <>
              You know who you are. When you're in business to do good, a
              nonprofit designation offers rock-solid personal asset protection,
              tax benefits, and more.
              <br />
              <Link to="/None_Profit_Corporation"> Get more information.</Link>.
            </>
          }
          isOpen={openAccordionIndex === 3} // Only open if this accordion is the active one
          onClick={() => handleAccordionClick(3)}
        />
      </div>
    </div>
  );
};

export default About_us;
