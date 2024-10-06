import React, { useState } from 'react';
import "./Tabs_Scrop_Election.css";
import FQA_Scrop_Election from './FQA_Scrop_Election/FQA_Scrop_Election';

const Tabs_Scorp_Election = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-scorp-election-container">
            <h2>
            Elect S Corporation status for your C Corporation or LLC.
            </h2>
            <div className="tabs-scorp-election-tabs">
                <div
                    className={`tabs-scorp-election-tab ${activeTab === 'Overview' ? 'tabs-scorp-election-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-scorp-election-tab ${activeTab === 'FAQs' ? 'tabs-scorp-election-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-scorp-election-tab-indicator">
                <div className={`tabs-scorp-election-indicator ${activeTab === 'Overview' ? 'tabs-scorp-election-overview' : 'tabs-scorp-election-faqs'}`}></div>
            </div>
            <div className="tabs-scorp-election-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        In order to enjoy the best-possible tax savings for your business, you need to have the right tax classification. Many c corporations and LLCs elect to file for s corporation status because of the advantages this classification provides their businesses, including:
                        </p>
                        <ul>
                            <li>Pass-through taxation (the company's tax obligation is passed along to shareholders)
                            </li>
                            <li>Once-a-year tax filing requirement (vs. quarterly for a C Corporation)</li>
                        </ul>
                        <p>
                        In order to elect an s corporation status, companies must file the IRS S Corp Form 2553, "Election By a Small Business Corporation." Timing is critical with Form 2553. The s corp election deadline dictates that it must be filed within 75 days of your c corporation or LLC's anniversary of formation, or within 75 days of a new year. If you have questions about a potentially late s corp election, please speak with a representative from Ascend who may be able to help you.
                        </p>
                        <p>
                        Companies often find it worthwhile to file Form 2553 for the thousands of dollars in potential tax savings an S Corporation status can provide their C Corporation or LLC.
                        </p>
                        <h2>
                            Learn More
                        </h2>
                        <p>
                        Find out more about business tax classifications by visiting our Frequently Asked Questions section.
                        </p>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                        <FQA_Scrop_Election/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Scorp_Election;
