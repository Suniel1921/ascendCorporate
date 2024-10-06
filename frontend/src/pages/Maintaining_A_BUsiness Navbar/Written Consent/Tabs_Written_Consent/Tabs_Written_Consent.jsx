import React, { useState } from 'react';
import "./Tabs_Written_Consent.css";
import FQA_Written_Consent from './FQA_Written_Consent/FQA_Written_Consent';

const Tabs_Written_Consent = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-written-consent-container">
            <div className="tabs-written-consent-tabs">
                <div
                    className={`tabs-written-consent-tab ${activeTab === 'Overview' ? 'tabs-written-consent-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-written-consent-tab ${activeTab === 'FAQs' ? 'tabs-written-consent-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-written-consent-tab-indicator">
                <div className={`tabs-written-consent-indicator ${activeTab === 'Overview' ? 'tabs-written-consent-overview' : 'tabs-written-consent-faqs'}`}></div>
            </div>
            <div className="tabs-written-consent-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                            Whenever your corporation or limited liability company undertakes certain important actions those actions must be memorialized in resolutions of the board of directors, shareholders or LLC members.
                        </p>

                        <p>
                            In general, these actions can be approved in one of two ways: by having owners, directors, or members vote on a resolution at a meeting, or, if the company does not hold a meeting, through a document known as a "written consent." To enact a change, a written consent is drafted and the company representatives who would have approved the resolution at a meeting sign the document in turn.
                        </p>

                        <p>
                            Written consents are important evidence for many business purposes, including opening company bank accounts.
                        </p>

                        <p>
                            They are typically needed when:
                        </p>

                        <ul>
                            <li>Changing LLC members or managers</li>
                            <li>Changing corporate officers or directors</li>
                            <li>Issuing stock to a new shareholder</li>
                            <li>Opening a company bank account</li>
                            <li>Merging the company with another company</li>
                            <li>Selling the business or a substantial portion of its assets</li>
                        </ul>

                        <h2>Ascend can help.</h2>

                        <p>
                            Ascend can provide you with a written consent that you can use to approve important business decisions. Provide us with some basic information about your company and let us know what change you need to document. We'll complete the written consent using the information you furnish and email the document to you. You simply print it, have it signed, and store it with your company records.
                        </p>

                        <p>
                            In the case of opening a business bank account, Ascend can provide you with a written consent document naming the authorized signers for that account.
                        </p>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Written_Consent />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Written_Consent;
