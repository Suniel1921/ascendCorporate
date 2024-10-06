import React, { useState } from 'react';
import "./Tabs_Corporate_and_LLC_Kits.css";
import FQA_Corporate_and_LLC_Kits from './FQA_Corporate_and_LLC_Kits/FQA_Corporate_and_LLC_Kits';

const Tabs_Corporate_and_LLC_Kits = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-corporate-and-llc-kits-container">
            <div className="tabs-corporate-and-llc-kits-tabs">
                <div
                    className={`tabs-corporate-and-llc-kits-tab ${activeTab === 'Overview' ? 'tabs-corporate-and-llc-kits-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-corporate-and-llc-kits-tab ${activeTab === 'FAQs' ? 'tabs-corporate-and-llc-kits-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-corporate-and-llc-kits-tab-indicator">
                <div className={`tabs-corporate-and-llc-kits-indicator ${activeTab === 'Overview' ? 'tabs-corporate-and-llc-kits-overview' : 'tabs-corporate-and-llc-kits-faqs'}`}></div>
            </div>
            <div className="tabs-corporate-and-llc-kits-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                            Ascend offers a convenient tool to help you to maintain records for your corporation or limited liability company (LLC).
                        </p>

                        <p>
                            Our Corporate Compliance Kit gives you the ideal storage place for all your important business documents. Banks, lenders, accountants, and lawyers often request the documents stored in this kit, so we have provided sections for each, making it easy to organize and retrieve them all.
                        </p>

                        <p>
                            By ordering the Corporate Compliance Kit, you will have room for all your important company records, including:
                        </p>

                        <ul>
                            <li>Articles of Incorporation</li>
                            <li>Bylaws</li>
                            <li>Meeting minutes</li>
                            <li>Stock certificates</li>
                            <li>Stock transfer ledgers</li>
                            <li>Corporate resolutions</li>
                            <li>Written consents</li>
                            <li>Federal/state documents</li>
                            <li>Business licenses</li>
                        </ul>

                        <p>
                            Your Corporate Compliance Kit is customized with the name of your business. What's more, it comes with your very own company seal, emblazoned with your company's name, the state of incorporation and date of formation. Use this device to emboss and validate your important company papers.
                        </p>

                        <h2>
                            The tools you need to succeed
                        </h2>

                        <p>
                            Each Corporate Compliance Kit includes:
                        </p>

                        <ul>
                            <li>A zipper-bound binder personalized with your company name</li>
                            <li>Blank stock certificates for corporations and blank membership certificates for limited liability companies (LLCs) as well as detailed instructions for the contents of each tabbed section</li>
                            <li>A company seal to emboss your documents with your business name and the state and date of your company's formation</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Corporate_and_LLC_Kits />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Corporate_and_LLC_Kits;
