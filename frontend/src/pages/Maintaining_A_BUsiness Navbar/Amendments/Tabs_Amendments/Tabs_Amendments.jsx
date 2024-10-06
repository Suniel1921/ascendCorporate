import React, { useState } from 'react';
import "./Tabs_Amendments.css";
import FQA_Amendments from './FQA_Amendments/FQA_Amendments';

const Tabs_Amendments = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-amendments-container">
            <h2>Update your company records the right way.</h2>
            <div className="tabs-amendments-tabs">
                <div
                    className={`tabs-amendments-tab ${activeTab === 'Overview' ? 'tabs-amendments-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-amendments-tab ${activeTab === 'FAQs' ? 'tabs-amendments-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-amendments-tab-indicator">
                <div className={`tabs-amendments-indicator ${activeTab === 'Overview' ? 'tabs-amendments-overview' : 'tabs-amendments-faqs'}`}></div>
            </div>
            <div className="tabs-amendments-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                            Whenever your business makes fundamental changes to its records, you must notify the Secretary of State by filing what are known as Articles of Amendment (for corporations) and Certificate of Amendment (for LLCs).State laws require businesses to file an amendment with the Secretary of State any time the specifics of their Articles of Incorporation (for corporations) or Articles of Organization or Certificate of Formation (for LLCs), or Certificate of Authority (for businesses that are 'qualified') change.
                        </p>

                        <p>
                            These can include changes to:
                        </p>

                        <ul>
                            <li>Your business name</li>
                            <li>Your listed directors or members</li>
                            <li>The number of stock certificates your company issues</li>
                            <li>The par value of your company stock</li>
                            <li>Your business's purpose</li>
                        </ul>

                        <p>
                            By having your Articles of Amendment filed with the state, you're able to confirm that:
                        </p>

                        <ul>
                            <li>The company's representatives, including directors, members and shareholders, have consented to the change</li>
                            <li>The changes you've made meet the legal requirements of your state of formation</li>
                        </ul>

                        <h2>Ascend can help.</h2>

                        <p>
                            Ascend can file amendments to your Articles of Amendment in every state and the District of Columbia.

                            Simply tell us the amendment you'd like to file and we'll tell you the cost and filing procedure. We'll then provide you with the appropriate paperwork and fee breakdown. Once you've completed, signed, and returned the paperwork to us, we'll submit it to the state for approval. As soon as the state approves your application, we'll send you official evidence of the approval.
                        </p>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Amendments />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Amendments;
