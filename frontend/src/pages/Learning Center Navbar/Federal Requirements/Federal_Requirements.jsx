import React from 'react';
import './Federal_Requirements.css';
import { Link, useNavigate } from 'react-router-dom';

const Federal_Requirements = () => {
  const navigate = useNavigate();


  return (
    <div className="Federal_Requirements_container">
      <h1 className="Federal_Requirements_heading">Federal Requirements</h1>

      <div className="Federal_Requirements_main">
        <div className="Federal_Requirements_left">
          <h2 className="Federal_Requirements_subheading">Research the Federal Regulations for Your Business</h2>
          <p className="Federal_Requirements_paragraph">
            Though the federal government does not regulate all business activities, some companies must satisfy requirements at the federal level. To ensure that your business complies with government rules, familiarize yourself with requirements for employers and businesses in your industry. The most common federal regulations for businesses include:
          </p>
          <ul>
            <li>
              <b>Employer Identification Number (EIN).</b> The Internal Revenue Service (IRS) requires all corporations, Limited Liability Companies operating as partnerships, and every employer to obtain an EIN. We can help you apply for an EIN, also called a federal Tax Identification Number (TIN). Get more information about our EIN services.
            </li>
            <li>
              <b>Tax Obligations for Businesses.</b> Small business owners need to understand their federal tax responsibilities. The IRS publishes a Tax Information For Businesses page at www.irs.gov that provides general information to business owners.
            </li>
            <li>
              <b>Business Licenses and Permits.</b> Some agencies require certain businesses to obtain a business license at the federal level. For example, companies in the transportation industry may need to register with the Federal Motor Carrier Safety Administration (FMCSA). Ascend can often obtain application materials for federal licenses as part of our Business License Compliance Package.
            </li>
            <li>
              <b>Labor Laws.</b> Businesses that hire employees must comply with numerous labor laws regarding wages, benefits, working conditions, and more. The U.S. Department of Labor publishes an Employment Law Guide to help employers meet these requirements.
            </li>
            <li>
              <b>Posting Requirements.</b> Depending upon whom they hire, businesses must display certain posters from the Occupational Safety and Health Administration, the Employment Standards Administration, and other departments. The U.S. Department of Labor has outlined posting requirements on their Web site.
            </li>
            <li>
              <b>Industry Regulations.</b> Specific industries have special requirements for conducting business. For example, farming companies must comply with environmental regulations. Construction businesses should identify and understand hazardous materials laws. If a federal agency governs your business activities, check with that agency for more information about your requirements. For an alphabetical listing of federal agencies, visit www.usa.gov.
            </li>
          </ul>

          <h3>
            Ready to create your company?
          </h3>
          <button className="Federal_Requirements_button_full_left" onClick={() => navigate('/quote-pricing')}>Get Started</button>
          {/* <ComparisonChart/> */}

        </div>

        <div className="Federal_Requirements_right">
          <h3 className='right_h3'>Ready to Incorporate?</h3>
          <p>Get started today and secure your business future.</p>
          <button className="Federal_Requirements_button_full" onClick={() => navigate('/quote-pricing')}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Federal_Requirements;
