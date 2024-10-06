import React, { useState } from 'react';
import './Tabs_LLC.css'; // Updated the CSS file name
import FQA_LLC from "./FQA_LLC/FQA_LLC";

const Tabs_LLC = () => { // Updated the component name
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-llc-container">
            <div className="tabs-llc-tabs">
                <div
                    className={`tabs-llc-tab ${activeTab === 'Overview' ? 'tabs-llc-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-llc-tab ${activeTab === 'FAQs' ? 'tabs-llc-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-llc-tab-indicator">
                <div className={`tabs-llc-indicator ${activeTab === 'Overview' ? 'tabs-llc-overview' : 'tabs-llc-faqs'}`}></div>
            </div>
            <div className="tabs-llc-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <h2>What is an LLC?</h2>
                        <p>Simply put, an LLC is the least complex business structure. Unlike an s corp or c corp, the structure of an LLC is flexible. Starting an LLC also gives you the perk of pass-through taxes, limited liability (obviously), and legal protection for your personal assets. Plus the added benefit of looking more legit than the other guys.</p>
                        <h2>Advantages of startng an LLC</h2>
                        <p>
                            There are several advantages to creating an LLC, but here are a few that stand out.
                        </p>
                        <ul>
                            <li><b>Pass-through taxes.</b>There's no need to file a corporate tax return. LLC owners report their share of profit and loss on their individual tax returns, meaning you avoid double taxation.</li>
                            <li><b>No residency requirement.</b>Those who an LLC need not be U.S. citizens or permanent residents.</li>
                            <li><b>Legal protection.</b>Creating an LLC gives you limited liability for business debts and obligations.</li>

                            <li><b>Enhanced credibility. </b>Partners, suppliers, and lenders may look more favorably on your business when it's an LLC.</li>
                        </ul>
                        <p>
                            Compare LLCs and corporations with our business comparison chart.
                        </p>
                        <h2>
                            Disadvantages of Starting an LLC
                        </h2>
                        <p>
                            Creating an LLC is an attractive option, but there are a few hurdles.
                        </p>
                        <ul>
                            <li><b>Limited growth potential. </b>LLC owners cannot issue shares of stock to attract investors.
                            </li>
                            <li><b>Lack of uniformity. </b>An LLC can be treated differently in different states.</li>
                            <li><b>Self-employment tax.</b>LLC earnings can be subject to this kind of taxation</li>

                            <li><b>Tax recognition on appreciated assets.</b>This could happen if you convert an existing business to an LLC. One more way that extra taxation can occur.</li>
                        </ul>
                        <h2>Is Creating an LLC Right for Me?</h2>
                        <p>
                            It depends on your short-term and long-term business goals. We recommend that you think about where your business is now and how you want your business to grow before deciding whether starting an LLC is right for you.
                        </p>
                        <h2>How to Create an LLC (Limited Liability Company):</h2>
                        <ol>
                            <li>Choose a legal name and reserve it, if the Secretary of State in your state does that sort of thing (not all do).</li>
                            <li>Draft and file your Articles of Incorporation with your Secretary of State.</li>
                            <li>Decide who will run the business (managers or members).</li>
                            <li>Decide how many owners will be part of the LLC.</li>
                            <li>Apply for a business license and other certificates specific to your industry.</li>
                            <li>File Form SS-4 or apply online at the Internal Revenue Service website to obtain an Employer Identification Number (EIN).</li>
                            <li>Apply for any other ID numbers required by state and local government agencies. Requirements vary from one jurisdiction to another, but generally your business most likely will be required to pay unemployment, disability, and other payroll taxes – you will need tax ID numbers for those accounts in addition to your EIN.</li>
                        </ol>

                        <h2>
                            Ready to create your company?
                        </h2>
                        <button className="tabs-llc-overview-button">Get Started</button>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <FQA_LLC />
                )}
            </div>
        </div>
    );
};

export default Tabs_LLC; // Updated the export name
