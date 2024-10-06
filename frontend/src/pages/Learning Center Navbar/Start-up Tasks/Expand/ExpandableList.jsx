import React, { useState } from "react";
import "./ExpandableList.css"; // Import CSS for styling

const ExpandableList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-list">
      <h2>10 Steps to Starting a Business with Ascend Incorporate LLC:</h2>
      <div className="div_list">
        <ol>
          <li className="list-item">
            Write a Business Plan:Start by defining clear goals and objectives
            for your new venture. Outline what you want to accomplish as the
            first step in launching your business.
          </li>
          <li className="list-item">
            Set Up a Legal Business Structure:Choose between an LLC or a
            corporation to protect your personal assets from business
            liabilities. This also provides added credibility and potential tax
            benefits.
          </li>
          <li className="list-item">
            Obtain Start-Up Capital: Secure the funding you need, whether
            through personal savings or loans. Lenders will often require a
            completed business plan before approving funding.
          </li>
          <button onClick={handleExpandClick} className="button_expand">
            {isExpanded ? "Collapse list..." : "Click to expand list..."}
          </button>
          {isExpanded && (
            <>
              <li className="list-item">
                Choose a Business Location: The success of your business can be
                influenced by its location, so select a site that supports your
                business goals.
              </li>
              <li className="list-item">
                Register Your Business Name: Make sure to register your chosen
                business name with the appropriate authorities to protect your
                brand.
              </li>
              <li className="list-item">
                Obtain Licenses and Permits: Depending on the type of business,
                you may need specific licenses and permits to operate legally.
              </li>
              <li className="list-item">
              Set Up Accounting and Record-Keeping Systems: Proper financial management is essential for success. Keep your finances organized from the start.
              </li>
              <li className="list-item">
              Hire Employees: If your business requires a team, begin the hiring process early to find the right talent.
              </li>
              <li className="list-item">
              Market Your Business: Develop a marketing strategy to attract and retain customers.
              </li>
              <li className="list-item">
              . Plan for Growth: Set long-term goals and consider strategies for expanding your business in the future.
              </li>
            </>
          )}
        </ol>
      </div>
    </div>
  );
};

export default ExpandableList;
