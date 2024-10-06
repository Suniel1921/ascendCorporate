import React, { useState } from 'react';
import "./Tabs_Entity_Conversion.css";
import FQA_Entity_Conversion from './FQA_Entity_Conversion/FQA_Entity_Conversion';

const Tabs_Entity_Conversion = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-Entity_Conversion-container">
            <h2>Need to change your business from an LLC to a corporation (or vice versa)?</h2>
            <div className="tabs-Entity_Conversion-tabs">
                <div
                    className={`tabs-Entity_Conversion-tab ${activeTab === 'Overview' ? 'tabs-Entity_Conversion-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-Entity_Conversion-tab ${activeTab === 'FAQs' ? 'tabs-Entity_Conversion-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-Entity_Conversion-tab-indicator">
                <div className={`tabs-Entity_Conversion-indicator ${activeTab === 'Overview' ? 'tabs-Entity_Conversion-overview' : 'tabs-Entity_Conversion-faqs'}`}></div>
            </div>
            <div className="tabs-Entity_Conversion-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        There are many reasons to change your entity type:
                        </p>

                        <ul>
                            <li>No longer need to issue stock</li>
                            <li>Seeking venture capital</li>
                            <li>Take advantage of specific tax benefits</li>
                            <li>Different management requirements for your company</li>
                        </ul>

                        <p>
                        Whatever the reason, Ascend can help you with the conversion process for our standard fee(s) plus mandatory state fees.
                        </p>

                        <h2>Place Your Conversion Order Now</h2>

                        <p>
                        To order a conversion filing, simply:
                        </p>

                        <ul>
                            <li>Provide us with basic information about your company and payment information.</li>
                            <li>We'll research the registration costs and provide the appropriate paperwork and fee breakdown.</li>
                            <li>You'll complete, sign, and return the paperwork to us for submission to the state.</li>
                            <li>Once the state approves your filing, we’ll send you the official evidence.</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Entity_Conversion />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Entity_Conversion;
