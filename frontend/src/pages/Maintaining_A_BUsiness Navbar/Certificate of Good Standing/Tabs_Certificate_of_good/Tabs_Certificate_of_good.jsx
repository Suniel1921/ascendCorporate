import React, { useState } from 'react';
import './Tabs_Certificate_of_good.css';
import FQA_Tabs_Certificate_of_good from './FQA_Tabs_Certificate_of_good/FQA_Tabs_Certificate_of_good';

const Tabs_Certificate_of_good = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-certificate-of-good-container">
            <div className="tabs-certificate-of-good-tabs">
                <div
                    className={`tabs-certificate-of-good-tab ${activeTab === 'Overview' ? 'tabs-certificate-of-good-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-certificate-of-good-tab ${activeTab === 'FAQs' ? 'tabs-certificate-of-good-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-certificate-of-good-tab-indicator">
                <div className={`tabs-certificate-of-good-indicator ${activeTab === 'Overview' ? 'tabs-certificate-of-good-overview' : 'tabs-certificate-of-good-faqs'}`}></div>
            </div>
            <div className="tabs-certificate-of-good-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                            A Certificate of Good Standing, also called a "Certificate of Existence" or "Certificate of Authorization," is a state-issued document that shows that your corporation or limited liability company (LLC) has met its statutory requirements and is authorized to do business in that state. Think of it as a kind of 'snapshot' of your business's compliance status.
                        </p>
                        <p>
                            Among other things, a Certificate of Good Standing confirms that your business:
                        </p>
                        <ul>
                            <li>Is up-to-date on its state fee payments</li>
                            <li>Has filed an annual report</li>
                            <li>Has paid its franchise taxes</li>
                        </ul>
                        <p>
                            There's a good chance you'll need to secure a Certificate of Good Standing from time to time during the life of your business. Many companies request a Certificate of Good Standing occasionally for their own records. A Certificate of Good Standing may also be required by:
                        </p>
                        <ul>
                            <li>State governments, if you're applying for foreign qualification there</li>
                            <li>Lenders, when you're trying to obtain financing</li>
                            <li>Banks, for certain transactions</li>
                            <li>Potential business partners or investors</li>
                        </ul>
                        <p>
                            You may need to present your Certificate of Good Standing in order to renew specific licenses or permits, and a Certificate of Good Standing is also important evidence when it comes time to sell your business. In addition, if you are looking to register to do business in additional states, those states may ask for a copy of your Certificate of Good Standing.
                        </p>
                        <h2>
                            ASCEND can help.
                        </h2>
                        <p>
                        ASCEND can order Certificates of Good Standing from the Secretary of State in all 50 states and the District of Columbia. By obtaining a Certificate of Good Standing, you can be sure that your business has satisfied its annual report, franchise tax, and other obligations. Provide us with some basic information about your company, and we'll order your Certificate of Good Standing from the Secretary of State on your behalf.
                        </p>
                        <h2>
                        Learn More
                        </h2>
                        <p>
                        Get more details about the value of your Certificate of Good Standing by visiting our Frequently Asked Questions section.
                        </p>
                        <h3>
                        Call us at 98000000 to get started.
                        </h3>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                        <FQA_Tabs_Certificate_of_good />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Certificate_of_good;
