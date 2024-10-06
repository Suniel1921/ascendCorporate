import React, { useState } from 'react';
import "./Tabs_Reinstatement.css";
import FQA_Reinstatement from './FQA_Reinstatement/FQA_Reinstatement';

const Tabs_Reinstatement = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-Reinstatement-container">
            <h2>Return your company to good standing.</h2>
            <div className="tabs-Reinstatement-tabs">
                <div
                    className={`tabs-Reinstatement-tab ${activeTab === 'Overview' ? 'tabs-Reinstatement-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-Reinstatement-tab ${activeTab === 'FAQs' ? 'tabs-Reinstatement-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-Reinstatement-tab-indicator">
                <div className={`tabs-Reinstatement-indicator ${activeTab === 'Overview' ? 'tabs-Reinstatement-overview' : 'tabs-Reinstatement-faqs'}`}></div>
            </div>
            <div className="tabs-Reinstatement-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        Companies that fail to meet their annual filing obligations risk losing their good standing. If you've forgotten to file the right forms or delayed payment, individual states can take action against your business by dissolving your corporation or limited liability company (LLC) and revoking its status.
                        </p>

                        <p>
                        Your corporation or LLC's status can be revoked for a number of reasons, including:
                        </p>

                        <ul>
                            <li>Failure to file annual reports</li>
                            <li>Failure to pay franchise taxes</li>
                            <li>Failure to pay certain state fees</li>
                        </ul>

                        <p>
                        What's more, when your company or LLC loses its status, you also lose the legal protections afforded by that status, exposing shareholders or LLC members to personal liability.
                        </p>

                        <h2>Ascend can help.</h2>

                        <p>
                            Ascend can help restore your company to good standing after it has been voided or dissolved by the state for failure to meet its good standing requirements.
                        </p>

                        <p>
                        We'll pinpoint the reasons your business has fallen out of good standing and help you take the needed actions to return it to full status.
                        </p>

                        <p>
                        When you work with Ascend, our reinstatement experts will:
                        </p>

                        <ul>
                            <li>Identify any outstanding state fees your business owes</li>
                            <li>Obtain the correct reinstatement forms on your behalf</li>
                            <li>Review your completed reinstatement forms</li>
                            <li>Submit your reinstatement forms to the relevant state agencies</li>
                            <li>Notify you once your company is reinstated</li>
                        </ul>

                        <p>
                        It's important to realize that if your business has been voided for some time, another entity may have taken its name. As part of the reinstatement process, Ascend will check to make sure your business name is still available.
                        </p>

                        <p>
                            Ascend doesn't offer corporate reinstatement services in California, Georgia, New Jersey, or New York. Ascend can provide you with forms for a Texas reinstatement, but you must obtain tax clearance on your own through the Texas Comptroller's Office before returning the forms to Ascend for filing. Businesses should contact their state tax departments directly for assistance with tax clearance.
                        </p>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Reinstatement />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Reinstatement;
