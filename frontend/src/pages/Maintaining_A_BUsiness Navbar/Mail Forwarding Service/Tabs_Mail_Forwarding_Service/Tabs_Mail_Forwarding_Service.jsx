import React, { useState } from 'react';
import "./Tabs_Mail_Forwarding_Service.css";
import FQA_Mail_Forwarding_Service from './FQA_Mail_Forwarding_Service/FQA_Mail_Forwarding_Service';

const Tabs_Mail_Forwarding_Service = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-Mail_Forwarding_Service-container">
            <h2>A secure mailbox for all your company correspondence</h2>
            <div className="tabs-Mail_Forwarding_Service-tabs">
                <div
                    className={`tabs-Mail_Forwarding_Service-tab ${activeTab === 'Overview' ? 'tabs-Mail_Forwarding_Service-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-Mail_Forwarding_Service-tab ${activeTab === 'FAQs' ? 'tabs-Mail_Forwarding_Service-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-Mail_Forwarding_Service-tab-indicator">
                <div className={`tabs-Mail_Forwarding_Service-indicator ${activeTab === 'Overview' ? 'tabs-Mail_Forwarding_Service-overview' : 'tabs-Mail_Forwarding_Service-faqs'}`}></div>
            </div>
            <div className="tabs-Mail_Forwarding_Service-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        Ascend can provide your company with a dedicated post office box for receipt of all your business mail. We receive, collect and forward your mail to you in weekly batches.
                        </p>

                        <p>
                        Our Mail Forwarding Service offers a reliable, confidential way to receive your business' mail. You'll never again have to worry about missing important pieces of business correspondence.
                        </p>

                        <p>
                            Ascend's Mail Forwarding Service is provided through our Delaware offices.
                        </p>

                        <h2>Pick your option.</h2>

                        <p>
                           Ascend offers two types of mail forwarding service: 
                        </p>

                        <ul>
                            <li><b>Domestic Mail Forwarding Service:</b> We forward your letters by first-class mail at the end of each business week. This service does not include packages, express or bulk mail, or magazines.</li>
                            <li><b>International Mail Forwarding Service:</b> This service also includes international delivery of letter mail. The same mail forwarding procedures and restrictions apply.</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Mail_Forwarding_Service />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Mail_Forwarding_Service;
