import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Learning-center.css";

const Learningcenter = () => {
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
          style={{ color: isOpen ? 'red' : 'black' }} // Apply red color when active
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
    <div className='Learningcenter_main_container'>
      <div className='top_main_hero_section_learning_center'>
        <img src="/img/hero-image-notebook.jpg" alt="" className='top_learning_center' />
        <p className='image_over_paragraph_learning_center'>
          Learning Center
        </p>
      </div>

      <div className='bottom_Learning-center'>
        <h3>Knowledge is power.</h3>
        <p className='Learning-center_paragraph'>
          We know there is a lot to starting and maintaining a small business. That's why we've provided some resources to help with the process.
        </p>

        <div className="arrow-button">
          <span>Exploration</span>
        </div>

        {/* Exploration Section */}
        <div className="accordion-section">
          <Accordion
            title="Incorporation 101"
            content="Get the facts on incorporating your business. Regardless of their size, all businesses can benefit from incorporating."
            link="/Incorporation_101"
            isOpen={openAccordionIndex['exploration'] === 0}
            onClick={() => handleAccordionClick('exploration', 0)}
          />
          <Accordion
            title="How to Incorporate or Form a Limited Liability Company (LLC)"
            content="Ascend makes it easy for you to form a corporation or LLC in any state. Most small business owners decide to incorporate to protect personal assets, gain credibility, and save on taxes."
            link="/How_To_Incorporate"
            isOpen={openAccordionIndex['exploration'] === 1}
            onClick={() => handleAccordionClick('exploration', 1)}
          />
          <Accordion
            title="Benefits of Incorporating"
            content="The decision to incorporate is an important step in the life of a business. Weigh your options carefully and further investigate some of the added benefits of incorporation."
            link="/Benefits_of_Incorporating"
            isOpen={openAccordionIndex['exploration'] === 2}
            onClick={() => handleAccordionClick('exploration', 2)}
          />
          <Accordion
            title="Incorporate vs. LLC"
            content="Small business owners should consider the advantages of both a corporation and an LLC when forming a new company."
            link="/Corporation_VS_LLC"
            isOpen={openAccordionIndex['exploration'] === 3}
            onClick={() => handleAccordionClick('exploration', 3)}
          />
          <Accordion
            title="Business Comparison Chart"
            content="Before you begin the incorporation process, you'll need to choose a business structure. Review our Business Comparison Chart below for the advantages of forming a c corporation, s corporation, or LLC."
            link="/Business_Comparision_Chart"
            isOpen={openAccordionIndex['exploration'] === 4}
            onClick={() => handleAccordionClick('exploration', 4)}
          />
          <Accordion
            title="Business Glossary"
            content="Browse or search business terms in the online business glossary. Here you will find the definition of incorporate, information on business terms, both specific to incorporation and otherwise."
            link="/Business_Glossary"
            isOpen={openAccordionIndex['exploration'] === 5}
            onClick={() => handleAccordionClick('exploration', 5)}
          />
          <Accordion
            title="Protecting Your Investment"
            content="Don't leave your creative, intellectual, and personal property to chance. Ensure the foundation of your business is secure."
            link="/Protecting_Your_Investment"
            isOpen={openAccordionIndex['exploration'] === 6}
            onClick={() => handleAccordionClick('exploration', 6)}
          />
          <Accordion
            title="Our Services"
            content="We offer many services to help start and grown your small business."
            link="/Our_Services"
            isOpen={openAccordionIndex['exploration'] === 7}
            onClick={() => handleAccordionClick('exploration', 7)}
          />
          <Accordion
            title="Should I start a Delaware LLC?"
            content="When starting a business, there are some initial decisions that are key to helping create a foundation for a successful future. Among the most important: should you incorporate?"
            link="/Benefits_of_Delaware_LLC"
            isOpen={openAccordionIndex['exploration'] === 8}
            onClick={() => handleAccordionClick('exploration', 8)}
          />
          <Accordion
            title="How to Start a Franchise in 10 Steps"
            content=" this sound familiar? You’d like to start a business, and you are thinking of buying a franchise, but you are not sure where to start."
            link="/How_To_Start_a_Franchise_10_Steps"
            isOpen={openAccordionIndex['exploration'] === 9}
            onClick={() => handleAccordionClick('exploration', 9)}
          />
        </div>

        <div className="arrow-button">
          <span>Education</span>
        </div>

        {/* Education Section */}
        <div className="accordion-section">
          <Accordion
            title="Start-up Tasks"
            content="Ascend presents an educational video and listing of tasks to help you get your business started."
            link="/StartUp_Task"
            isOpen={openAccordionIndex['education'] === 0}
            onClick={() => handleAccordionClick('education', 0)}
          />
          <Accordion
            title="Staying Compliant"
            content="As the owner of a corporation or limited liability company (LLC), you need to know and understand the legal aspects of starting and running a business. Compliance refers to all of the federal, state, and local rules required to keep your corporation or LLC in good standing with the state(s) where it conducts business."
            link="/Staying_Compliant"
            isOpen={openAccordionIndex['education'] === 1}
            onClick={() => handleAccordionClick('education', 1)}
          />
          <Accordion
            title="Federal Requirements"
            content="To ensure that your business complies with government rules, familiarize yourself with requirements for employers and businesses in your industry."
            link="/Federal_Requirements"
            isOpen={openAccordionIndex['education'] === 2}
            onClick={() => handleAccordionClick('education', 2)}
          />
          <Accordion
            title="Top 10 Business Mistakes"
            content="Starting a new business takes time and planning. There are also some things you want to avoid when creating your company."
            link="/Top_10_Business_Mistakes"
            isOpen={openAccordionIndex['education'] === 3}
            onClick={() => handleAccordionClick('education', 3)}
          />
          <Accordion
            title="Writing a Business Plan"
            content="Every business needs a documented plan to help focus its direction, outline operations, and secure investors. Get prepared before you start your business to maximize your chances for success."
            link="/Writing_A_Business_Plan"
            isOpen={openAccordionIndex['education'] === 4}
            onClick={() => handleAccordionClick('education', 4)}
          />
          <Accordion
            title="Business Compliance: A Guide for Entrepreneurs"
            content="Business compliance is a catch-all term for how well a company’s follows the laws and regulations governing its business. Laws will vary depending on your industry, where your business is based, and how you’ve chosen to structure your company."
            link="/Business_Compliance_Guide"
            isOpen={openAccordionIndex['education'] === 5}
            onClick={() => handleAccordionClick('education', 5)}
          />
        </div>

        <div className="arrow-button">
          <span>Guides</span>
        </div>

        {/* Guides Section */}
        <div className="accordion-section">
          <Accordion
            title="10 Steps to Form a Business"
            content="Forming a business can be a confusing and stressful process, unless you're prepared and you've got a good idea of what you need to do."
            link="/10_Steps_to_Form_A_Business"
            isOpen={openAccordionIndex['guides'] === 0}
            onClick={() => handleAccordionClick('guides', 0)}
          />
          <Accordion
            title="State Guides"
            content="Most of our customers form their new companies in the state where they conduct the majority of their business."
            link="/State_Guides"
            isOpen={openAccordionIndex['guides'] === 1}
            onClick={() => handleAccordionClick('guides', 1)}
          />
          <Accordion
            title="Industry Specific Guides"
            content="Our industry guides contain case studies, industry specific FAQs, industry resources, and a listing of services we offer to help you successfully start and run your business."
            link="#"
            isOpen={openAccordionIndex['guides'] === 2}
            onClick={() => handleAccordionClick('guides', 2)}
          />
          <Accordion
            title="Tax Filings & Deductions"
            content="Corporations and Limited Liability Companies (LLCs) complete tax filings with the Internal Revenue Service (IRS) based on their tax classifications."
            link="#"
            isOpen={openAccordionIndex['guides'] === 3}
            onClick={() => handleAccordionClick('guides', 3)}
          />
          <Accordion
            title="Self Employment Taxes"
            content="Self employment taxes consist of Medicare and Social Security taxes. Self employed business owners must pay at least 15.3 percent of their earnings to cover these obligations, since they have no employer to withhold a portion of these taxes."
            link="#"
            isOpen={openAccordionIndex['guides'] === 4}
            onClick={() => handleAccordionClick('guides', 4)}
          />
          <Accordion
            title="How to Start an LLC"
            content="Is a Limited Liability Company (LLC) the right setup for your business?"
            link="#"
            isOpen={openAccordionIndex['guides'] === 5}
            onClick={() => handleAccordionClick('guides', 5)}
          />
          <Accordion
            title="Write A Business Plan, A Step-by-Step Guide"
            content="Inspiration has struck—and you’re ready to start a business! Before the excitement wears off, you think to yourself, “Where do I start?”"
            link="#"
            isOpen={openAccordionIndex['guides'] === 6}
            onClick={() => handleAccordionClick('guides', 6)}
          />
        </div>
        <h2 className='bottom_heading_learning'>No Dumb Questions</h2>

        <p className='Learning-center_paragraph'>
          Get your questions answered and learn more about starting your business by calling 9800000000.
        </p>

      </div>
    </div>
  );
};

export default Learningcenter;
