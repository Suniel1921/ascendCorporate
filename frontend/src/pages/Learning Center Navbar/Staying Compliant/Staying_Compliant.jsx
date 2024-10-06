import React from 'react';
import './Staying_Compliant.css';
import { Link, useNavigate } from 'react-router-dom';

const Staying_Compliant = () => {
  const navigate = useNavigate();


  return (
    <div className="Staying_Compliant_container">
      <h1 className="Staying_Compliant_heading">Staying Compliant</h1>

      <div className="Staying_Compliant_main">
        <div className="Staying_Compliant_left">
        <h2 className="Staying_Compliant_subheading">What is Business Compliance?</h2>
          <p className="Staying_Compliant_paragraph">
          As the owner of a corporation or LLC, you need to know and understand the legal aspects of starting and running a business. Compliance refers to all of the federal, state, and local rules required to keep your corporation or LLC in good standing with the state(s) where it conducts business.
          </p>
          <h2 className="Staying_Compliant_subheading">Understand the Consequences of Noncompliance</h2>
          <p className="Staying_Compliant_paragraph">
          Business owners must comply with ongoing government rules and regulations after incorporating or forming an LLC. You should understand the potential consequences of noncompliance to your business:
          </p>
          <ol>
            <li>When a corporation or LLC fails to meet government obligations, the state may revoke the company's good standing, levy penalties against it, or even dissolve the company.</li>
            <li>Additionally, when a business owner fails to follow the steps required to maintain their limited liability protection, the owner's personal assets will no longer be protected from lawsuits against the company. This is known as "piercing the corporate veil." This applies to both corporations and LLCs.</li>
          </ol>
          <h2 className="Staying_Compliant_subheading">Our Exclusive $75,000 Corporate Compliance Guarantee</h2>
          <p className="Staying_Compliant_paragraph">
          To provide peace of mind and to align with our commitment to quality service, every formation processed by Ascend comes with a $75,000 Corporate Compliance Guarantee. Ascend guarantees its services against filing defects negligently caused by Ascend for the life of your entity.
          </p>

          <h3>
            Ready to create your company?
          </h3>
          <button className="Staying_Compliant_button_full_left" onClick={()=>navigate('/quote-pricing')}>Get Started</button>
          {/* <ComparisonChart/> */}

        </div>

        <div className="Staying_Compliant_right">
          <h3 className='right_h3'>Ready to Incorporate?</h3>
          <p>Get started today and secure your business future.</p>
          <button className="Staying_Compliant_button_full" onClick={()=>navigate('/quote-pricing')}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Staying_Compliant;
