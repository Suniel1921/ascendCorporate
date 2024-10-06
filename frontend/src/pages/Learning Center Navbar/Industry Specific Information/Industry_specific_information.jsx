import React from "react";
import "./Industry_specific_information.css";

const Industry_specific_information = () => {
  return (
    <div className="Main_Industry_specific_information">
      <h1 className="Industry_specific_information_heading">
        LLC vs. Corporation: What's the Difference?
      </h1>
      <div className="Industry_specific_information_main">
        <div className="Industry_specific_information_left">
          <p className="Industry_specific_information_paragraph">
            As America's leading provider of business formation services in all
            50 states, Ascend can help you incorporate or form a
            limited liability company in just 10 minutes, at a lower cost than
            using an attorney.
          </p>
          <p className="Industry_specific_information_paragraph">
            Our industry guides contain case studies, industry specific FAQs,
            industry resources, and a listing of services we offer to help you
            successfully start and run your business.
          </p>
          <h2 className="Industry_specific_information_subheading">
            Select an Industry:
          </h2>
          <div className="list_industry_spaecific">
            <div className='llc_div_left'>
              <ul className='llc_list_industry'>
                <li>Accounting</li>
                <li>Arts & Entertainment</li>
                <li>Constuction & Contractors</li>
                <li>Consulting</li>
                <li>Franchise Business & Retails</li>
                <li>Health & Wellness</li>
                <li>Home Based Business</li>
              </ul>
            </div>
            <div className='llc_div_right'>
              <ul className='llc_list_industry'>
                <li>International Business</li>
                <li>Lawyers & Small Law Firms</li>
                <li>Nonporfit Organizatins</li>
                <li>Online Business</li>
                <li>Real Estates</li>
                <li>Transportation</li>
                <li>Women in BUsiness</li>
              </ul>
            </div>
          </div>
          <p className="Industry_specific_information_paragraph">
            Have questions? Business Specialists are standing by to answer your
            call. Call us at 855.236.4043, or contact us via email.
          </p>
        </div>
        <div className="Industry_specific_information_right">
          <h3>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="Industry_specific_information_button_full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Industry_specific_information;
