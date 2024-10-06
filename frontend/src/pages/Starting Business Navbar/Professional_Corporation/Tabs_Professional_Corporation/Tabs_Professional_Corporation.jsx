import React, { useState } from 'react';
import './Tabs_Professional_Corporation.css'; // Updated the CSS file name
import FQA_Professional_Corporation from './FQA_Professional_Corporation/FQA_Professional_Corporation';

const Tabs_Professional_Corporation = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-professional-corporation-container">
            <h2>
                Professional Corporations & Professional LLCs are business structures that are ideal for certain specialties.
            </h2>
            <div className="tabs-professional-corporation-tabs">

                <div
                    className={`tabs-professional-corporation-tab ${activeTab === 'Overview' ? 'tabs-professional-corporation-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-professional-corporation-tab ${activeTab === 'FAQs' ? 'tabs-professional-corporation-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-professional-corporation-tab-indicator">
                <div className={`tabs-professional-corporation-indicator ${activeTab === 'Overview' ? 'tabs-professional-corporation-overview' : 'tabs-professional-corporation-faqs'}`}></div>
            </div>
            <div className="tabs-professional-corporation-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>The Professional Corporation (PC) and Professional Limited Liability Company (PLLC) are the formations of choice for many business owners who work in accounting, law, medicine, architecture, engineering and related fields. These business entities can help licensed professionals protect their personal assets against lawsuits brought against their practices.</p>
                        <p>
                            State laws vary, but PCs and PLLCs usually share these characteristics:
                        </p>
                        <ul>
                            <li>Owners are generally required to be licensed in the same profession.</li>
                            <li>Proof of licensing is often required for state approval.</li>
                            <li>Industry-specific regulations may apply to your company name.</li>
                            <li>States may require entity-specific endings for your company name ("PC" for a Professional Corporation and "PLLC" for a Professional Limited Liability Company, for example).</li>

                        </ul>
                        <p>
                            It's important to note that by forming a Professional Corporation or Professional Limited Liability Company, owners are not free from personal liability for malpractice or other suits brought against them. However, these formation types do protect owners from the malpractice of other owners within the company. Be aware, too, that not all states recognize the PLLC entity.
                        </p>
                        <p>
                            In addition, PCs and PLLCs are taxed differently. PCs are generally taxed like a C-Corporation, with the PC paying taxes at the corporate rate, which can lead to double taxation. PLLCs, on the other hand, are taxed like LLCs, which generally have pass-through taxation of the members. You may wish to consult with a tax advisor before forming either a PC or PLLC to determine the best tax treatment for your company.
                        </p>

                        <p>
                            Forming these companies may also require additional steps on the part of the owners. Along with approval from the Secretary of State, professional entities often must seek approval of their formation documents from the state professional licensing body.
                        </p>
                        <h2>
                            Ascend Can Help
                        </h2>
                        <p>
                            Ascend can help doctors, lawyers, architects, accountants, engineers, and other licensed professionals form Professional Corporations and Professional Limited Liability Companies.
                        </p>
                        <p>
                            Provide us with some basic information about your profession and your business objectives and we will work with you to complete, file and seek approval for a Professional Company or Professional Limited Liability Company formation.
                        </p>


                        <h2>
                            Ready to create your company?
                        </h2>
                        <button className="tabs-professional-corporation-overview-button">Get Started</button>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Professional_Corporation />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Professional_Corporation;
