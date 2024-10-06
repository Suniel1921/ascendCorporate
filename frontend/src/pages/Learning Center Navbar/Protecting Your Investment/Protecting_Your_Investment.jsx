import React from 'react';
import './Protecting_Your_Investment.css';
import { useNavigate } from 'react-router-dom';

const Protecting_Your_Investment = () => {
  const navigate = useNavigate();


  return (
    <div className="protecting-your-investment_container">
      <h1 className="protecting-your-investment_heading">Protecting Your Investment</h1>

      <div className="protecting-your-investment_main">
        <div className="protecting-your-investment_left">
        <h2 className="protecting-your-investment_subheading">Protect your most important assets
        </h2>
          <p className="protecting-your-investment_paragraph">
            Don't leave your creative, intellectual, and personal property to chance. Ensure the foundation of your business is secure by following these steps:
          </p>
          
          <ol>
            <li>
              <b>Establish employment agreements.</b> Ensure that your employees are forbidden from revealing any restricted records, formulas, or intellectual property.
            </li>
            <li>
              <b>Apply for trademarks, patents & copyrights.</b> Document your ownership and obtain legal protection to safeguard your ideas and your brand.
            </li>
            <li>
              <b>Secure your information.</b> Restrict access to paper files and apply password protection and back up methods to protect important electronic records.
            </li>
            <li>
              <b>Sign confidentiality agreements.</b> Keep company information from becoming public knowledge by establishing nondisclosure agreements.
            </li>
            <li>
              <b>Incorporate your business.</b> Don't put your house, car, savings, and other personal possessions at risk. Limit your personal liability by incorporating or forming an LLC.
            </li>
          </ol>

          <p>
          Regardless of the size of their company, responsible business owners protect their most valuable assets. Ascend can help you incorporate or form an LLC online, or by phone, in minutes.
          </p>

          <h3>
            Ready to create your company?
          </h3>
          <button className="protecting-your-investment_button_full_left" onClick={()=>navigate('/quote-pricing')}>Get Started</button>
          {/* <ComparisonChart/> */}

        </div>

        <div className="protecting-your-investment_right">
          <h3 className='right_h3'>Ready to Incorporate?</h3>
          <p>Get started today and secure your business future.</p>
          <button className="protecting-your-investment_button_full" onClick={()=>navigate('/quote-pricing')}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Protecting_Your_Investment;
