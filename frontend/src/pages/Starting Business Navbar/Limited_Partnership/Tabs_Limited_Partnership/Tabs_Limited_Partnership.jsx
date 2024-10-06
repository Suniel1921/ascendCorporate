import React, { useState } from 'react';
import './Tabs_Limited_Partnership.css'; // Updated the CSS file name
import FQA_Limited_Partnership from './FQA_Limited_Partnership/FQA_Limited_Partnership';

const Tabs_Limited_Partnership = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-limited-partnership-container">
            <h2>
            The entity of choice to achieve certain business objectives.
            </h2>
            <div className="tabs-limited-partnership-tabs">

                <div
                    className={`tabs-limited-partnership-tab ${activeTab === 'Overview' ? 'tabs-limited-partnership-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-limited-partnership-tab ${activeTab === 'FAQs' ? 'tabs-limited-partnership-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-limited-partnership-tab-indicator">
                <div className={`tabs-limited-partnership-indicator ${activeTab === 'Overview' ? 'tabs-limited-partnership-overview' : 'tabs-limited-partnership-faqs'}`}></div>
            </div>
            <div className="tabs-limited-partnership-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        A limited partnership (LP) is much like a general partnership, but with a few significant differences.
                        </p>
                        <p>
                        Management of a limited partnership rests with the "general partner," who also bears unlimited liability for the company's debt and obligations. A limited partnership allows for any number of "limited partners," whose liability is limited to the total amount of their investment in the company.
                        </p>
                        <p>
                        Limited partners are sometimes referred to as "silent partners" - in other words, they can make investments in the company but have no voting power or control over its day-to-day operations. They can be a valuable source of capital in this business structure.
                        </p>
                        <p>
                        Limited partnership is the entity of choice for many law, accounting and finance firms. It's also a popular among businesses that focus on time-restricted projects, such as real estate and film production companies.
                        </p>
                        <p>
                        Advantages of a limited partnership include:  
                        </p>
                        <ul>
                            <li><b>Personal asset protection:</b> The limited partnership structure offers liability protection up to the amount of the investment for the company's limited partners.</li>
                            <li><b>Pass-through taxation:</b> A limited partnership's income is not taxed at the business level; instead, business profit and loss are "passed through" to the partners for reporting on their personal tax returns.</li>
                            <li><b>Full oversight:</b> The general partner has complete management control of the limited partnership.</li>
                            <li><b>Investment potential:</b> Limited partnerships can generate capital investments by adding more limited partners.</li>

                        </ul>

                        <p>
                        It is important to note that certain issues must be addressed in the formation of an LP that can affect the limited liability provided by the LP, such as the role of the limited partners and the effect of the death, bankruptcy or insolvency of the GP or LP on the continued existence of the LP.
                        </p>
                        
                        <h2>
                            Ascend Can Help
                        </h2>
                        <p>
                        Ascend can help you register your limited partnership (LP) with the state. Simply describe your business objectives and provide some basic facts about your company and we'll complete your paperwork and return it to you once the formation has been approved.
                        </p>


                        <h2>
                            Ready to create your company?
                        </h2>
                        <button className="tabs-limited-partnership-overview-button">Get Started</button>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Limited_Partnership />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Limited_Partnership;
