import React, { useState } from 'react';
import './Tabs_S_corporation.css'; // Updated the CSS file name
import FQA_LLC from '../../Limited_Liability_Company/Tabs_LLC/FQA_LLC/FQA_LLC';
import FQA_S_corporation from './FQA_S_corporation/FQA_S_corporation';
// import FQA_LLC from "./FQA_LLC/FQA_LLC"; // Keep this import as is if the component hasn't been renamed

const Tabs_S_corporation = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-s-corporation-container">
            <div className="tabs-s-corporation-tabs">
                <div
                    className={`tabs-s-corporation-tab ${activeTab === 'Overview' ? 'tabs-s-corporation-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-s-corporation-tab ${activeTab === 'FAQs' ? 'tabs-s-corporation-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-s-corporation-tab-indicator">
                <div className={`tabs-s-corporation-indicator ${activeTab === 'Overview' ? 'tabs-s-corporation-overview' : 'tabs-s-corporation-faqs'}`}></div>
            </div>
            <div className="tabs-s-corporation-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>It's kind of like the lite version of a c corporation (c corp). An s corp offers investment opportunities, perpetual existence, and that coveted protection of limited liability. But, unlike a c corp, s corps only have to file taxes yearly and they are not subject to double taxation. Read on if this sounds enticing for your business.</p>
                        <h2>S Corp Advantages</h2>
                        <p>Read 'em and weep.</p>
                        <ul>
                            <li>Limited liability. Company directors, officers, shareholders, and employees enjoy limited liability protection.</li>
                            <li>Pass-through taxation. Owners report their share of profit and loss on their individual tax returns.</li>
                            <li>Elimination of double taxation of income. Income is not taxed twice – once as corporate income and again as dividend income.</li>
                            <li>Investment opportunities. The company can attract investors through the sale of shares of stock.</li>
                            <li>Investment opportunities. The company can attract investors through the sale of shares of stock.</li>
                            <li>Once-a-year tax filing requirement. Versus c corps, which must file quarterly.</li>
                        </ul>
                        <h2>
                        S Corporation vs. C Corporation
                        </h2>
                        <p>
                        <b>What is an s corp?</b>
                        </p>
                        <p>As we described above, an s corp is something like the lite version of a c corp. That is, when you consider its growth potential and organizational structure.</p>
                        <p>
                        Every business that files for corporation is first classified as a c corp. Once that's complete, you have to then file for subchapter s corp status and meet all requirements for an s corp – namely, have fewer than 100 shareholders who are all individuals, not corporations; have only one class of stock; and be owned by U.S. citizens or resident aliens. All of which are pretty easy requirements for most small businesses.
                        </p>
                        <p>
                        Back to the perk of saving money. An s corp is not subject to double taxation as a c corp is. That means that an s corp's revenue is not taxed at the corporate level. It's only taxed when paid out as salaries or dividends to shareholders. That alone could save an s corp hundreds of thousands of dollars. For this reason, a c corp makes very little sense for a small business. But if you opt for an s corp, make sure you have a solid accountant as one mistake in filing can send your company back to c corp status, leaving it open to be taxed twice.
                        </p>
                        <h2>
                        How to Start and Form an S Corp
                        </h2>
                        <ol>
                            <li>Choose a legal name and reserve it, if the Secretary of State in your state does that sort of thing (not all do).</li>
                            <li>Draft and file your Articles of Incorporation with your Secretary of State.</li>
                            <li>Issue stock certificates to the initial shareholders.</li>
                            <li>Apply for a business license and other certificates specific to your industry.</li>
                            <li>File Form SS-4 or apply online at the Internal Revenue Service website to obtain an Employer Identification Number (EIN).</li>
                            <li>Apply for any other ID numbers required by state and local government agencies. Requirements vary from one jurisdiction to another, but generally your business most likely will be required to pay unemployment, disability, and other payroll taxes – you will need tax ID numbers for those accounts in addition to your EIN.</li>
                            <li>File the IRS form 2553 within 75 days of your corporation formation.</li>
                        </ol>

                        <h2>
                            Ready to create your company?
                        </h2>
                        <button className="tabs-s-corporation-overview-button">Get Started</button>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                        
                        {/* <FQA_LLC/> */}
                        <FQA_S_corporation/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_S_corporation;
