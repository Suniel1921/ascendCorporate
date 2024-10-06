import React, { useState } from 'react';
import './Tabs_LLC_Tax_Status_Election.css';
import FQA_LLC_Tax_Status_Election from './FQA_LLC_Tax_Status_Election/FQA_LLC_Tax_Status_Election';


const Tabs_LLC_Tax_Status_Election = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-llc-tax-status-election-container">
            <h2>
            Get the best tax status for your Limited Liability Company.
            </h2>
            <div className="tabs-llc-tax-status-election-tabs">
                <div
                    className={`tabs-llc-tax-status-election-tab ${activeTab === 'Overview' ? 'tabs-llc-tax-status-election-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-llc-tax-status-election-tab ${activeTab === 'FAQs' ? 'tabs-llc-tax-status-election-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-llc-tax-status-election-tab-indicator">
                <div className={`tabs-llc-tax-status-election-indicator ${activeTab === 'Overview' ? 'tabs-llc-tax-status-election-overview' : 'tabs-llc-tax-status-election-faqs'}`}></div>
            </div>
            <div className="tabs-llc-tax-status-election-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        When you form a limited liability company (LLC), it is automatically assigned a "default" tax status unless you choose otherwise. One-member LLCs are generally taxed as sole proprietorships, and those with multiple members are taxed as partnerships.
                        </p>
                        <p>
                        It's important, though, to have the best-available tax classification for your limited liability company (LLC) in order to maximize your tax savings. So after weighing the options, you may decide that it's advantageous for your LLC to change its tax status. You can accomplish this by filing Internal Revenue Service Form 8832.
                        </p>
                        <p>
                        By filing Form 8832 with the IRS, you can choose a tax status for your entity besides the default status. According to your objectives, you can elect to have your LLC taxed as a sole proprietorship, partnership, c corporation or s corporation. In some cases, by changing its tax status, a company can save thousands of dollars in taxes each year.
                        </p>
                        <h2>
                        Learn more
                        </h2>
                        <p>
                        Find out more about business tax classifications by visiting our Frequently Asked Questions section.
                        </p>
                        <h3>
                        Call us at 98000000 to get started.
                        </h3>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                        <FQA_LLC_Tax_Status_Election/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_LLC_Tax_Status_Election;
