import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Maintaining_a_Business.css";

const MaintainingABusiness = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState({}); // Keep track of open accordions in each section

  const handleAccordionClick = (section, index) => {
    setOpenAccordionIndex((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index, // Toggle accordion in specific section
    }));
  };

  const Accordion = ({ title, content, link, isOpen, onClick }) => {
    return (
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={onClick}
          style={{ color: isOpen ? 'red' : 'black' }}
        >
          <h3>{title}</h3>
          <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
            {isOpen ? '-' : '+'}
          </div>
        </div>
        {isOpen && (
          <div className="accordion-content">
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
    <div className='MaintainingABusiness_main_container'>
      <div className='top_main_hero_section_maintaining_business'>
        <img src="/img/hero-image-collaborate.jpg" alt="" className='top_maintaining_business' />
        <p className='image_over_paragraph_maintaining_business'>
          Maintaining a Business
        </p>
      </div>

      <div className='bottom_MaintainingABusiness'>
        <h3>Ascend is just the beginning.</h3>
        <p className='MaintainingABusiness_paragraph'>
          Now that your business is off the ground, check out these other great resources from Ascend to help you grow and manage your business. Let us focus on the details so you can focus on running a profitable business. As your long-term partner, we'll stand by you as your needs evolve.
        </p>

        <div className="arrow-button">
          <span>Compliance</span>
        </div>

        {/* Compliance Section */}
        <div className="accordion-section">
          <Accordion
            title="Annual Reports"
            content="Depending on the state in which you formed your corporation or LLC, you may need to file an annual report. And it's not something to overlook–your company's good standing depends on it. Let Ascend manage your annual report. We'll not only save you time, but also ensure you meet your state's requirements to avoid errors and costly fees."
            link="/Annual_report"
            isOpen={openAccordionIndex['compliance'] === 0}
            onClick={() => handleAccordionClick('compliance', 0)}
          />
          <Accordion
            title="Business Licenses & Permits"
            content="There are more than 150,000 filing jurisdictions across the U.S. Do you know which licenses and permits your state requires? Ascend can make getting the right licenses and permits easy."
            link="/Business_Licenses"
            isOpen={openAccordionIndex['compliance'] === 1}
            onClick={() => handleAccordionClick('compliance', 1)}
          />
          <Accordion
            title="Bylaws & Operating Agreements"
            content="All corporations must create corporate bylaws outlining the organization and day-to-day operations. And limited liability companies (LLCs) in many states are required to create an operating agreement, which provides a framework for business operations. No matter where your company is located, Ascend can help you create a document tailored to your specific needs."
            link="/By_Laws_operating_Agreements"
            isOpen={openAccordionIndex['compliance'] === 2}
            onClick={() => handleAccordionClick('compliance', 2)}
          />
          <Accordion
            title="CSCNavigator®"
            content="As part of Ascend's Registered Agent service, you have free access to CSCNavigator, a state-of-the-art online online tool that provides you with alerts when filings are due, a calendar of required filings, order status and related documents, the ability to view and pay invoices, current business standing with the state, and more."
            link="/CSC_Navigator"
            isOpen={openAccordionIndex['compliance'] === 3}
            onClick={() => handleAccordionClick('compliance', 3)}
          />
          <Accordion
            title="Registered Agent Service"
            content="A registered agent is the state's way of communicating with a corporation or LLC, and it helps to ensure your business maintains compliance. An individual can act as a registered agent, but we recommend using an experienced service provider–like Ascend–that can provide reliability, economy, and discretion."
            link="/Registered_Agent_Service"
            isOpen={openAccordionIndex['compliance'] === 4}
            onClick={() => handleAccordionClick('compliance', 4)}
          />
          <Accordion
            title="Corporate & LLC Kits"
            content="Ascend offers a convenient tool to help you to maintain records for your corporation or LLC. Our Corporate Compliance Kit provides the ideal storage place for all your important business documents, with dedicated sections for banks, accountants, and lawyers that make it easy to organize and retrieve information."
            link="/Corporate_and_LLC_Kits"
            isOpen={openAccordionIndex['compliance'] === 5}
            onClick={() => handleAccordionClick('compliance', 5)}
          />
          <Accordion
            title="Certificate of Good Standing"
            content="A Certificate of Good Standing is a state-issued document that shows your corporation or limited liability company (LLC) is authorized to do business in that state. Ascend can order Certificates of Good Standing from the Secretary of State in all 50 states and the District of Columbia. By obtaining a Certificate of Good Standing, you can be sure your business has satisfied its annual report, franchise tax, and other obligations."
            link="/Certificate_of_Good_Standing"
            isOpen={openAccordionIndex['compliance'] === 6}
            onClick={() => handleAccordionClick('compliance', 6)}
          />
          <Accordion
            title="Certified Copies"
            content="Business owners occasionally need to get copies of their most important state-filed documents. Ascend can help you get true and correct copies of your important business records."
            link="/Certified_Copies"
            isOpen={openAccordionIndex['compliance'] === 7}
            onClick={() => handleAccordionClick('compliance', 7)}
          />
          <Accordion
            title="Stock & Membership Certificates"
            content="Stock certificates are official documents issued by a corporation to its shareholders. LLCs have a similar document called a membership certificate. We can create customized stock or membership certificates on behalf of your business."
            link="/Stock_And_Membership"
            isOpen={openAccordionIndex['compliance'] === 8}
            onClick={() => handleAccordionClick('compliance', 8)}
          />
          <Accordion
            title="Written Consent"
            content=" Resolutions made by of the board of directors, shareholders or LLC members of your company can be approved in one of two ways: by having a vote at a meeting or through a written consent document. We can provide you with a written consent that you can use to approve important business decisions."
            link="/Written_Consent"
            isOpen={openAccordionIndex['compliance'] === 9}
            onClick={() => handleAccordionClick('compliance', 9)}
          />
        </div>

        <div className="arrow-button">
          <span>IRS Filings</span>
        </div>

        {/* IRS Filings Section */}
        <div className="accordion-section">
          <Accordion
            title="Employer Identification Number (EIN)"
            content="Much like a Social Security Number, an Employer Identification Number (EIN) is a federal nine-digit number that identifies a business entity. Ascend can obtain an EIN from the IRS on your business's behalf. The process is fast, easy and cost-effective."
            link="/Employer_ID_Number"
            isOpen={openAccordionIndex['irs_filings'] === 0}
            onClick={() => handleAccordionClick('irs_filings', 0)}
          />
          <Accordion
            title="S Corporation Election – Form 2553"
            content="Filing for S Corporation status may provide tax benefits to your business. Ascend offers services that provide you with tax consultation, assistance in completing the proper forms, and answers to your tax-related questions."
            link="/Scrop_Election"
            isOpen={openAccordionIndex['irs_filings'] === 1}
            onClick={() => handleAccordionClick('irs_filings', 1)}
          />
          <Accordion
            title="Nonprofit 501(C) Status"
            content="Our customers typically seek 501(c) tax-exempt status with the Internal Revenue Service (IRS) when they form a nonprofit corporation. Not sure how to get started? We can help."
            link="/NonProfit_501_Status"
            isOpen={openAccordionIndex['irs_filings'] === 2}
            onClick={() => handleAccordionClick('irs_filings', 2)}
          />
          <Accordion
            title="LLC Tax Status Election (Form 8832)"
            content="It's important to have the best available tax classification for your LLC in order to maximize your tax savings. By filing Form 8832 with the IRS, you can choose a tax status for your entity besides the default status that was automatically assigned. Ascend can help walk you through the process."
            link="/LLC_Tax_Status_Election"
            isOpen={openAccordionIndex['irs_filings'] === 3}
            onClick={() => handleAccordionClick('irs_filings', 3)}
          />

        </div>

        <div className="arrow-button">
          <span>Other Filings</span>
        </div>

        {/* Other Filings Section */}
        <div className="accordion-section">
          <Accordion
            title="Register a Business Name"
            content="A Doing Business As (DBA) filing allows corporations, LLCs, nonprofits, and other business entities to do business under a name different than the one that appears on their original incorporation documents. Ascend can complete DBA registration for you, which could offer your business better visibility, enhanced credibility, and other benefits."
            link="/DBA_Business_Name"
            isOpen={openAccordionIndex['other_filings'] === 0}
            onClick={() => handleAccordionClick('other_filings', 0)}
          />
          <Accordion
            title="Register in Additional States"
            content="If your business has offices, employees, or advertises in states outside of your company's home state, chances are you'll need to qualify your company in that state. Ascend can provide guidelines to help you understand whether you need to qualify your business and help you file the necessary paperwork to obtain a Certificate of Authority."
            link="/Register_in_Additional_States"
            isOpen={openAccordionIndex['other_filings'] === 1}
            onClick={() => handleAccordionClick('other_filings', 1)}
          />
          <Accordion
            title="Delaware E-Filing"
            content="We offer an annual service to help you meet Delaware state franchise tax and annual report requirements and keep your company in good standing."
            link="/Delaware_E_Filing"
            isOpen={openAccordionIndex['other_filings'] === 2}
            onClick={() => handleAccordionClick('other_filings', 2)}
          />
          <Accordion
            title="Amendments"
            content="Whenever your business makes fundamental changes to its records, you must notify the Secretary of State by filing what are known as Articles of Amendment (for corporations) and Certificate of Amendment (for LLCs). We can help you update your records the right way."
            link="/Amendments"
            isOpen={openAccordionIndex['other_filings'] === 3}
            onClick={() => handleAccordionClick('other_filings', 3)}
          />

          <Accordion
            title="Entity Conversion"
            content="Need to change your business from an LLC to a corporation (or vice versa)? We can help you with the conversion process."
            link="/Entity_Conversion"
            isOpen={openAccordionIndex['other_filings'] === 4}
            onClick={() => handleAccordionClick('other_filings', 4)}
          />
          <Accordion
            title="Dissolution"
            content="Businesses close for many reasons, but it's not enough for corporations or LLCs to simply shut their doors. If you have gone out of business, you need to officially dissolve your corporation or LLC with the state. Ascend can help you prepare and file your Articles of Dissolution to ensure you terminate your business the right way."
            link="/Dissolution"
            isOpen={openAccordionIndex['other_filings'] === 5}
            onClick={() => handleAccordionClick('other_filings', 5)}
          />
          <Accordion
            title="Reinstatement"
            content="Companies that fail to meet their annual filing obligations risk losing their good standing. If your company has been voided or dissolved by the state for failure to meet its good standing requirements, Ascend can help reinstate it. We'll pinpoint the reasons your business has fallen out of good standing and help you take the needed actions to return it to full status."
            link="/Reinstatement"
            isOpen={openAccordionIndex['other_filings'] === 6}
            onClick={() => handleAccordionClick('other_filings', 6)}
          />

        </div>
        <div className="arrow-button">
          <span>Other Filings</span>
        </div>

        <h4 className='bottom_h4_maintaining'>
          Mail Forwarding Service
        </h4>
        <p className='bottom_paragraph_maintainig'>
          We offer a secure, private mailbox for all your company correspondence.
          <Link to="/Mail_Forwarding_Service" className="accordion-link">
                More…
          </Link>
        </p>
        <h2 className='bottom_h2_maintaining'>
          No Dumb Questions
        </h2>
        <p className='bottom_paragraph_maintainig'>
          Get your questions answered and learn more about starting your business by calling <b>980000000</b>
        </p>
      </div>
    </div>
  );
};

export default MaintainingABusiness;
