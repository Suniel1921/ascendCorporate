import React from 'react';
import { Link } from 'react-router-dom';
import "./Stock_And_Membership.css";

const Stock_And_Membership = () => {
  return (
    <div className='stock-and-membership-container'>
      <h2 className="stock-and-membership-heading">
      Stock and Membership Certificates
      </h2>
      <div className="stock-and-membership-bottom-container">
        <div className="stock-and-membership-left-container">
          <div className='stock-and-membership-content'>
            <p>
            Stock certificates are official documents issued by a company to its shareholders that provide evidence of how much of an ownership stake they have in the corporation.
            </p>

            <p>
            While limited liability companies (LLCs) don't issue "stock," they use a similar document, called a membership certificate, which they issue to their members to show percentage of ownership. Typically, the founding owners of the LLC will designate how many membership units the LLC will issue.
            </p>

            <p>
            In general, both stock and membership certificates include the following information:
            </p>

            <ul>
              <li>Name of the corporation or LLC</li>
              <li>State where it was formed</li>
              <li>Number of stock or LLC membership units issued</li>
              <li>Recipient's name</li>
            </ul>

            <p>
            Stock and membership certificates serve as an important record for corporate ledgers and registers. They also help increase company reputability by providing owners with a piece of official documentation representing their ownership stake in the business.
            </p>

            <h2>Customized Stock or Membership Certificates</h2>

            <p>
            We can create customized stock or membership certificates on behalf of your business, bearing the name of your company as well as specific information about par value and shares or LLC membership units. By working with us, you'll save time, avoid confusion, and create a consistent appearance across your corporate documents.
            </p>


            <h2>Cost of Purchasing Stock or Membership Certificates from Ascend</h2>
            <p>
            The minimum purchase requirement is 20 certificates and you can receive discounts for ordering in a larger quantity. You can also purchase additional certificates for $0.50 each.
            </p>
            <ul>
              <li>S$30 for 20 certificates</li>
              <li>$45 for 50 certificates</li>
              <li>$75 for 100 certificates</li>
              <li>$145 for 250 certificates</li>
              <li>$270 for 500 certificates</li>
            </ul>
          </div>
        </div>
        <div className="stock-and-membership-right-container">
          <h3 className='stock-and-membership-right-h3'>Let's get to it.</h3>
          <p>Create your corporation or limited liability company today.</p>
          <button className="stock-and-membership-button-full">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Stock_And_Membership;