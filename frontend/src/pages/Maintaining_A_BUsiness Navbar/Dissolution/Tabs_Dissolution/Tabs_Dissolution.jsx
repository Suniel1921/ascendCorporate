import React, { useState } from 'react';
import "./Tabs_Dissolution.css";
import FQA_Dissolution from './FQA_Dissolution/FQA_Dissolution';

const Tabs_Dissolution = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-Dissolution-container">
            <h2>Going out of business? Be sure to terminate your corporation the right way.</h2>
            <div className="tabs-Dissolution-tabs">
                <div
                    className={`tabs-Dissolution-tab ${activeTab === 'Overview' ? 'tabs-Dissolution-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-Dissolution-tab ${activeTab === 'FAQs' ? 'tabs-Dissolution-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-Dissolution-tab-indicator">
                <div className={`tabs-Dissolution-indicator ${activeTab === 'Overview' ? 'tabs-Dissolution-overview' : 'tabs-Dissolution-faqs'}`}></div>
            </div>
            <div className="tabs-Dissolution-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                            Businesses close for many reasons, but it's not enough for corporations or LLCs to simply shut their doors. If you have gone out of business, you need to officially dissolve your corporation or LLC with the state.
                        </p>

                        <p>
                            Until the Secretary of State's office is aware that your company is no longer in operation, you are still liable for annual report filings, franchise tax payments and other obligations.
                        </p>

                        <p>
                            It's critical that you formally dissolve your company, because letting it lapse or allowing the state to dissolve it involuntarily could create a number of problems, including:
                        </p>

                        <ul>
                            <li>Personal liability for judgments against the business</li>
                            <li>Expensive state-assessed penalties and fees</li>
                            <li>Unnecessary registered agent service payments</li>
                        </ul>

                        <p>
                            The best way to put a stop to these obligations is to file Articles of Dissolution with the state. By doing so, you will end your company's existence in your state of incorporation. Formal dissolution also gives you the chance to tie up other loose ends, such as ending your obligation to maintain a registered agent service.
                        </p>

                        <h2>Ascend can help.</h2>

                        <p>
                            Ascend can help you prepare and file your Articles of Dissolution. Simply contact us, provide us with payment information and some basic details about your company, and we will file the paperwork and send you the official documentation when it's ready.
                        </p>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Dissolution />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Dissolution;
