import React from 'react';
import { Link } from 'react-router-dom';
import "./Business_Entity_Types.css";

const Business_Entity_Types = () => {
  return (
    <div className='business-entity-types-container'> 
      <h2 className="business-entity-types-heading">
        Business Entity Types
      </h2>
      <div className="business-entity-types-bottom-container">
        <div className="business-entity-types-left-container">
          <div className='business-entity-types-content'>
            <p>
            To get the most out of your small business, choose the right structure. Selecting the right type of company or corporation for your new business helps maximize your chances of financial and operational success.
            </p>

            <p>
            Common types of business structures and corporations include C corporations, limited liability companies (LLC), partnerships, S corporations, and sole proprietorships. Learn more about each type of business or corporation:
            </p>

            <h2>Limited Liability Companies (LLCs)</h2>

            <ul>
                <li>Independent legal structures separate from their owners.</li>
                <li>Help separate your personal assets from your business debts.</li>
                <li>Taxed similarly to a sole proprietorship (if one owner) or a partnership (if multiple owners).</li>
                <li>No limit to the number of owners.</li>
                <li>Not required to hold annual meetings or record minutes.</li>
                <li>Governed by operating agreements.</li>
                <Link to="/Limited_Liability_Company">Read more about LLCs...</Link>
            </ul>


            <h2>C Corporations</h2>
            <ul>
                <li>Independent legal and tax structures separate from their owners.</li>
                <li>Help separate your personal assets from your business debts.</li>
                <li>No limit to the number of shareholders.</li>
                <li>Taxed on corporate profits and shareholder dividends.</li>
                <li>Must hold annual meetings and record meeting minutes.</li>
                <Link to="/C_Corporation">Learn more about C Corporations...</Link>
            </ul>

            <h2>S Corporations</h2>
            <ul>
                <li>Independent legal and tax structures separate from their owners.</li>
                <li>Help separate your personal assets from your business debts.</li>
                <li>Owners report their share of profit and loss in the company on their personal tax returns.</li>
                <li>Limits on number of shareholders, who must be U.S. citizens or residents.</li>
                <li>Must hold annual meetings and record meeting minutes.</li>
                <Link to="/S_Corporation">Read more about S Corporations...</Link>
            </ul>

            <h2>Partnerships</h2>
            <ul>
                <li>Partners remain personally liable for lawsuits filed against the business.</li>
                <li>Usually no state filing required to form a partnership.</li>
                <li>Easy to form and operate.</li>
                <li>Owners report their share of profit and loss in the company on their personal tax returns.</li>
                <Link to="Limited_Partnership">Read more about Partnerships...</Link>
            </ul>

            <h2>Sole Proprietorships</h2>
            <ul>
                <li>Owner remains personally liable for lawsuits filed against the business.</li>
                <li>No state filing required to form a sole proprietorship.</li>
                <li>Easy to form and operate.</li>
                <li>Owner reports business profit and loss on their personal tax return.</li>
            </ul>

            <p>
                Review our <Link to="/Business_Comparision_Chart">Business Comparision Chart</Link> for more details. Regardless of business structure you choose, Ascend can help you incorporate or form an LLC online or by phone for less than the cost of using an attorney.
            </p>

          </div>
        </div>
        <div className="business-entity-types-right-container">
          <h3 className='business-entity-types-right-h3'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="business-entity-types-button-full">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Business_Entity_Types;