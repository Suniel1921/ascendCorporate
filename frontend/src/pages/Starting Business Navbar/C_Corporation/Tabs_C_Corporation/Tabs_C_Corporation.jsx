import React, { useState } from 'react';
import './Tabs_C_Corporation.css'; // Updated the CSS file name
import FQA_C_corporation from './FQA_S_Coroporation/FQA_C_Coroporation';



const Tabs_C_Corporation = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-c-corporation-container">
            <div className="tabs-c-corporation-tabs">
                <div
                    className={`tabs-c-corporation-tab ${activeTab === 'Overview' ? 'tabs-c-corporation-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-c-corporation-tab ${activeTab === 'FAQs' ? 'tabs-c-corporation-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-c-corporation-tab-indicator">
                <div className={`tabs-c-corporation-indicator ${activeTab === 'Overview' ? 'tabs-c-corporation-overview' : 'tabs-c-corporation-faqs'}`}></div>
            </div>
            <div className="tabs-c-corporation-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>It's the most common type of corporation in the U.S. – and with good reason. C corporations (c corps) offer unlimited growth potential through the sale of stocks, which means you can attract some very wealthy investors. Plus, there is no limit to the number of shareholders a c corp can have.</p>
                        <h2>Advantages of a C Corporation</h2>
                        <p>There are many benefits of a c corp. Below are just a few that stand out.</p>
                        <ul>
                            <li>Limited liability. This applies to directors, officers, shareholders, and employees.</li>
                            <li>Perpetual existence. Even if the owner leaves the company.</li>
                            <li>Enhanced credibility. Gain respect among suppliers and lenders.</li>
                            <li>Unlimited growth potential. The sky's the limit thanks to the sale of stock.</li>
                            <li>No shareholders limit. However, once the company has $10 million in assets and 500 shareholders, it is required to register with the SEC under the Securities Exchange Act of 1934.</li>
                            <li>Certain tax advantages. Enjoy tax-deductible business expenses.</li>
                        </ul>
                        <h2>
                        Disadvantages of a C Corporation
                        </h2>
                        
                        <p>Having unlimited growth comes with a few minor setbacks.</p>
                        <ul>
                            <li>Double taxation. It's inevitable as revenue is taxed at the company level and again as shareholder dividends.</li>
                            <li>Expensive to start. There are a lot of fees that come with filing the Articles of Incorporation. And corporations pay fees to the state in which they operate.</li>
                            <li>Regulations and formalities. C corps experience more government oversight than other companies due to complex tax rules and the protection provided to owners from being responsible for debts, lawsuits, and other financial obligations.</li>
                            <li>No deduction of corporate losses. Unlike an s corporation (s corp), shareholders can't deduct losses on their personal tax returns.</li>
                        </ul>
                        <h2>C Corporation vs. S Corporation</h2>
                        <p>
                        Both c and s corps offer limited liability protection. Both require Articles of Incorporation to be filed. And both comprise shareholders, directors, and officers. There are lots of similarities, but they differ in the complex realm of taxation and corporate ownership.
                        </p>
                        <p>
                        As we mentioned above, c corps are subject to double taxation while s corps are pass-through tax entities, allowing them to avoid being taxed at the corporate level and again on shareholders' personal income taxes.
                        </p>
                        <p>
                        When it comes to corporate ownership, c corps have no restriction on ownership, which goes back to our point about them having unlimited growth potential. But s corps don't have that luxury as they're restricted to no more than 100 shareholders. Also, s corps cannot be owned by a c corp, other s corps, LLCs, partnerships, or many trusts. But a c corp has no limits on who or what can be a shareholder. Compare corporations and LLCs with our business comparison chart.
                        </p>
                        <h2>
                        How to Form a C Corporation
                        </h2>
                        <ol>
                            <li>Choose a legal name and reserve it, if the Secretary of State in your state does that sort of thing (not all do).</li>
                            <li>Draft and file your Articles of Incorporation with your Secretary of State.</li>
                            <li>Issue stock certificates to the initial shareholders.</li>
                            <li>Apply for a business license and other certificates specific to your industry.</li>
                            <li>File Form SS-4 or apply online at the Internal Revenue Service website to obtain an Employer Identification Number (EIN).</li>
                            <li>Apply for any other ID numbers required by state and local government agencies. Requirements vary from one jurisdiction to another, but generally your business most likely will be required to pay unemployment, disability, and other payroll taxes – you will need tax ID numbers for those accounts in addition to your EIN.</li>
                            
                        </ol>

                        <h2>
                            Ready to create your company?
                        </h2>
                        <button className="tabs-c-corporation-overview-button">Get Started</button>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                        <FQA_C_corporation/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_C_Corporation;
