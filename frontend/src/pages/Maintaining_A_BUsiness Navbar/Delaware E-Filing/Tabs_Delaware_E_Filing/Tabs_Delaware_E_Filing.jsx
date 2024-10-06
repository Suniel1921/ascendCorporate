import React, { useState } from 'react';
import "./Tabs_Delaware_E_Filing.css";
import FQA_Delaware_E_Filing from './FQA_Delaware_E_Filing/FQA_Delaware_E_Filing';

const Tabs_Delaware_E_Filing = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-delaware-e-filing-container">
            <h2>Maintain your good standing the easy way.</h2>
            <div className="tabs-delaware-e-filing-tabs">
                <div
                    className={`tabs-delaware-e-filing-tab ${activeTab === 'Overview' ? 'tabs-delaware-e-filing-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-delaware-e-filing-tab ${activeTab === 'FAQs' ? 'tabs-delaware-e-filing-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-delaware-e-filing-tab-indicator">
                <div className={`tabs-delaware-e-filing-indicator ${activeTab === 'Overview' ? 'tabs-delaware-e-filing-overview' : 'tabs-delaware-e-filing-faqs'}`}></div>
            </div>
            <div className="tabs-delaware-e-filing-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <h3>Pay Your Delaware Taxes the Easy Way</h3>
                        <p>
                        Delaware corporations and Limited Liability Companies (LLCs) must pay annual franchise taxes to the state. Businesses incorporated in Delaware must also file an annual report. Ascend offers an annual service to help you meet these requirements and keep your company in good standing.
                        </p>

                        <p>
                        Contact a Business Specialist to place an order.
                        </p>

                        <h2>Interested in Annual Service?</h2>
                        <p>
                        If you're tired of having to research your filing requirements, fill out forms, write checks and track deadlines, Ascend has a solution. For our standard fee(s), we'll monitor your company's upcoming due dates and help you prepare and file your annual report(s).
                        </p>

                        <p>
                        Sign up for our annual service today and you can:
                        </p>

                        <ul>
                            <li>Stop worrying about whether you've filed on time (and in the right format).</li>
                            <li>Reduce the risk of missed filings and loss of good standing.</li>
                            <li>Avoid paying fees, fines, and interest due to late or missed filings.</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Delaware_E_Filing />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Delaware_E_Filing;
