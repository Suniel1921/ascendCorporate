import React, { useState } from 'react';
import "./Tabs_Certified_Copies.css";
import FQA_Certified_Copies from './FQA_Certified_Copies/FQA_Certified_Copies';

const Tabs_Certified_Copies = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-certified-copies-container">
            <h2>
            Get true and correct copies of your important business records.
            </h2>
            <div className="tabs-certified-copies-tabs">
                <div
                    className={`tabs-certified-copies-tab ${activeTab === 'Overview' ? 'tabs-certified-copies-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-certified-copies-tab ${activeTab === 'FAQs' ? 'tabs-certified-copies-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-certified-copies-tab-indicator">
                <div className={`tabs-certified-copies-indicator ${activeTab === 'Overview' ? 'tabs-certified-copies-overview' : 'tabs-certified-copies-faqs'}`}></div>
            </div>
            <div className="tabs-certified-copies-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        Business owners occasionally need to get copies of their most important state-filed documents, such as Articles of Incorporation and amendments.
                        </p>

                        <p>
                        Certified Copies are state-issued, exact copies of your original business documents. They're often accompanied by a title page bearing an official seal or the Secretary of State's signature, lending them additional proof of authenticity.
                        </p>

                        <p>
                            Maybe you've lost the original copy of your document or it's been damaged. Maybe you just want to have a duplicate to keep with your internal company records.
                            </p>

                        <p>
                        Having Certified Copies of your business documents on hand is also a crucial part of completing many business transactions.
                        </p>

                        <p>
                        Certified Copies of business documents may be requested by:
                        </p>

                        <ul>
                            <li>state governments, if you've applied for foreign qualification in those states</li>
                            <li>lenders, when you're trying to obtain financing</li>
                            <li>banks, in order to open a business checking account</li>
                            <li>potential business partners or investors</li>
                        </ul>

                        <p>
                        Along with their Articles of Incorporation, business owners typically need Certified Copies of:
                        </p>

                        <ul>
                            <li>Certificates of Formation</li>
                            <li>Certificates of Authority (evidence of foreign qualification)</li>
                            <li>Corporate dissolution or liquidation forms</li>
                            <li>DBA/fictitious name filings</li>
                        </ul>

                        <h2>
                        Ascend can help.
                        </h2>
                        
                        <p>
                        Ascend can help you purchase Certified Copies of your business documents filed in any state or the District of Columbia. Simply provide us with some basic information about your company, tell us what company documents you need Certified Copies of, and we'll place your order and have the documents shipped directly to you. Along with a service fee, individual state fees may apply.
                        </p>
                        
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Certified_Copies />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Certified_Copies;
