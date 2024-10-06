import React from 'react';
import './Top_10_Business_Mistakes.css';
import { Link, useNavigate } from 'react-router-dom';

const Top_10_Business_Mistakes = () => {
  const navigate = useNavigate();


  return (
    <div className="Top_10_Business_Mistakes_container">
      <h1 className="Top_10_Business_Mistakes_heading">Top 10 Business Mistakes</h1>

      <div className="Top_10_Business_Mistakes_main">
        <div className="Top_10_Business_Mistakes_left">
          <h2 className="Top_10_Business_Mistakes_subheading">10 Incorporation Mistakes to Avoid</h2>

          <ol>
            <li>
              <b>Thinking your business is too small to incorporate.</b> All business owners can benefit from the opportunity to separate and protect their personal assets from business debts. No business is too small to incorporate or form an LLC.
            </li>
            <li>
              <b>Not placing your order early enough.</b> If you need to meet a deadline, place your order early. We'll do our best to make the process of incorporating or forming an LLC fast and simple.
            </li>
            <li>
              <b>Choosing the wrong service company.</b> Finding the right service company may seem difficult. We make the decision easier with excellent customer service and a long history of expertise in our industry. Learn more about us.
            </li>
            <li>
              <b>Incorporating in Delaware or Nevada just because of their popularity.</b> Most of our customers benefit from forming a corporation or LLC in the state in which they will conduct the majority of their business. If your business expands into more than one state, we can help you with your Delaware or Nevada business registration as well as any other state.
            </li>
            <li>
              <b>Choosing the wrong business structure.</b> Few states permit companies to change from one business structure to another. Do your research first to determine the best structure for your business. Check out our Business Structure Comparison Chart for statistics on other business owners in your state and industry.
            </li>
            <li>
              <b>Not buying a package that includes everything you need.</b> Though you save money up front by choosing an inexpensive formation package, you may miss out on important services your business needs. Consider purchasing our premium formation package for a comprehensive bundle of services to get you started.
            </li>
            <li>
              <b>Naming yourself as your company's Registered Agent.</b> A Registered Agent must remain available during all business hours to receive important legal documents. Naming a third-party Registered Agent may also help enhance your business credibility. Let us take the worry out of this requirement by serving as your company's Registered Agent.
            </li>
            <li>
              <b>Being careless with the details of your order.</b> Don't let a simple error delay the formation of your new business. Make sure to review the information you provide us, especially the spelling of all names and addresses, for accuracy. Correcting information later usually requires additional fees.
            </li>
            <li>
              <b>Failing to satisfy business licensing requirements.</b> Don't forget about business licenses, permits, and tax registrations. Many states, counties and cities have different licensing requirements. If you need help, purchase our Business License Compliance Package.
            </li>
            <li>
              <b>Not taking care of your next steps.</b> Every successful business needs a plan. Be sure to keep your business in compliance.
            </li>
          </ol>

          <h2 className="Top_10_Business_Mistakes_subheading">Regardless of which business structure you choose, Ascend can help.</h2>

          <h3>
            Ready to create your company?
          </h3>
          <button className="Top_10_Business_Mistakes_button_full_left" onClick={() => navigate('/quote-pricing')}>Get Started</button>
          {/* <ComparisonChart/> */}

        </div>

        <div className="Top_10_Business_Mistakes_right">
          <h3 className='right_h3'>Ready to Incorporate?</h3>
          <p>Get started today and secure your business future.</p>
          <button className="Top_10_Business_Mistakes_button_full" onClick={() => navigate('/quote-pricing')}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Top_10_Business_Mistakes;
