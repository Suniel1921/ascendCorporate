import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Starting_A_Business.css";

const Starting_A_Business = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState({});

  const handleAccordionClick = (section, index) => {
    setOpenAccordionIndex((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  const Accordion = ({ title, content, link, isOpen, onClick }) => {
    return (
      <div className="starting-accordion">
        <div
          className="starting-accordion-header"
          onClick={onClick}
          style={{ color: isOpen ? 'red' : 'black' }}
        >
          <h3>{title}</h3>
          <div className={`starting-accordion-icon ${isOpen ? 'open' : ''}`}>
            {isOpen ? '-' : '+'}
          </div>
        </div>
        {isOpen && (
          <div className="starting-accordion-content">
            {content}
            {link && (
              <Link to={link} className="accordion-link">
                More…
              </Link>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='Starting_A_Business_main_container'>
      <div className='top_main_hero_section_starting_a_business'>
        <img src="/img/hero-image-open-sign-chair (1).jpg" alt="" className='top_starting_a_business' />
        <p className='image_over_paragraph_starting_a_business'>
          Starting a Business
        </p>
      </div>

      <div className='bottom_Starting_A_Business'>
        <h3>Take that first step.</h3>
        <p className='Starting_A_Business_paragraph'>
          Starting a business can be scary, but knowing what you need to make it happen makes things easier.
        </p>

        <div className="starting-arrow-button">
          <span>Getting Started</span>
        </div>

        {/* Exploration Section */}
        <div className="starting-accordion-section">
          <Accordion
            title="Business Entity Types"
            content="To get the most out of your small business, choose the right structure. Selecting the right type of company for your new business helps maximize your chances of financial and operational success."
            link="/Business_Entity_Types"
            isOpen={openAccordionIndex['exploration'] === 0}
            onClick={() => handleAccordionClick('exploration', 0)}
          />
          <Accordion
            title="Employer Identification Number (EIN)"
            content="Corporations, most LLCs, and all businesses with employees must have this IRS-issued identifier. Much like a Social Security Number, an Employer Identification Number (EIN) is a federal nine-digit number that identifies a business entity."
            link="/Employer_ID_Number"
            isOpen={openAccordionIndex['exploration'] === 1}
            onClick={() => handleAccordionClick('exploration', 1)}
          />
          <Accordion
            title="Business Licenses & Permits"
            content="Most state, county, and local governments require companies to have the right licenses and permits in place before they open their doors."
            link="/Business_Lisences"
            isOpen={openAccordionIndex['exploration'] === 2}
            onClick={() => handleAccordionClick('exploration', 2)}
          />
          <Accordion
            title="Name Reservations"
            content="A name reservation lets you hold a particular business name for later use and prevents other companies from registering that name without notice to you."
            link="/Name_Reservation"
            isOpen={openAccordionIndex['exploration'] === 3}
            onClick={() => handleAccordionClick('exploration', 3)}
          />
          <Accordion
            title="Register a Business Name"
            content="Many state and local governments require companies to register any alternate names under which they conduct business."
            link="/DBA_Business_Name"
            isOpen={openAccordionIndex['exploration'] === 4}
            onClick={() => handleAccordionClick('exploration', 4)}
          />
          <Accordion
            title="Registered Agent Service"
            content="Ensure you have a Registered Agent to receive legal documents and notifications on behalf of your business."
            link="/Registered_Agent_Service"
            isOpen={openAccordionIndex['exploration'] === 5}
            onClick={() => handleAccordionClick('exploration', 5)}
          />
          {/* Additional Accordions... */}
        </div>

        <div className="starting-arrow-button">
          <span>Business Entities</span>
        </div>

        {/* Education Section */}
        <div className="starting-accordion-section">
          <Accordion
            title="Limited Liability Company (LLC)"
            content="An LLC is a great choice for businesses that want the liability protection of a corporation with less paperwork."
            link="/Limited_Liability_Company"
            isOpen={openAccordionIndex['education'] === 0}
            onClick={() => handleAccordionClick('education', 0)}
          />
          <Accordion
            title="C Corporation"
            content="A C Corporation is the most common business entity. An ideal choice for businesses that want to attract investors."
            link="/C_Corporation"
            isOpen={openAccordionIndex['education'] === 1}
            onClick={() => handleAccordionClick('education', 1)}
          />
          <Accordion
            title="S Corporation"
            content="An S Corporation is a great choice for small businesses that want to avoid double taxation on business profits."
            link="/S_Corporation"
            isOpen={openAccordionIndex['education'] === 2}
            onClick={() => handleAccordionClick('education', 2)}
          />
          <Accordion
            title="Nonprofit Corporation"
            content="A Nonprofit business structure is the right choice for scientific, religious, educational or charitable endeavors."
            link="/None_Profit_Corporation"
            isOpen={openAccordionIndex['education'] === 3}
            onClick={() => handleAccordionClick('education', 3)}
          />
          <Accordion
            title="Professional Corporation"
            content="Some states allow Professional LLCs for licensed professionals, including doctors, accountants, lawyers, engineers, architects, and realtors."
            link="/Professional_Corporation"
            isOpen={openAccordionIndex['education'] === 4}
            onClick={() => handleAccordionClick('education', 4)}
          />
          <Accordion
            title="Series LLC"
            content="A Series LLC permits multiple members, managers, and business lines. Allowed in some states."
            link="/Series_LLC"
            isOpen={openAccordionIndex['education'] === 5}
            onClick={() => handleAccordionClick('education', 5)}
          />
          <Accordion
            title="Limited Partnership"
            content="A Limited Partnership provides some protection from liability for certain partners."
            link="/Limited_Partnership"
            isOpen={openAccordionIndex['education'] === 6}
            onClick={() => handleAccordionClick('education', 6)}
          />
          {/* Additional Accordions... */}
        </div>

        <h2 className='starting-bottom-heading'>Questions</h2>

        <p className='Starting_A_Business_paragraph'>
          Get your questions answered and learn more about starting your business by calling 9800000000.
        </p>

      </div>
    </div>
  );
};

export default Starting_A_Business;
