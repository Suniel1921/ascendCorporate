import React, { useState } from 'react';
import './Tabs_Series_LLC.css'; // Updated the CSS file name
import FQA_Series_LLC from './FQA_Series_LLC/FQA_Series_LLC';

const Tabs_Series_LLC = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-series-llc-container">
            <h2>
            A business structure with unique asset protections.
            </h2>
            <div className="tabs-series-llc-tabs">

                <div
                    className={`tabs-series-llc-tab ${activeTab === 'Overview' ? 'tabs-series-llc-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-series-llc-tab ${activeTab === 'FAQs' ? 'tabs-series-llc-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-series-llc-tab-indicator">
                <div className={`tabs-series-llc-indicator ${activeTab === 'Overview' ? 'tabs-series-llc-overview' : 'tabs-series-llc-faqs'}`}></div>
            </div>
            <div className="tabs-series-llc-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        Certain states allow companies to form a distinctive business structure called a "series Limited Liability Company (LLC)."
                        </p>
                        <p>
                        The series Limited Liability Company (LLC) takes its name from the fact that it can have multiple (a "series" of) members, managers, or business lines within it. Each series within the company can hold assets, have members, and pursue its own business objectives, all while enjoying protection from legal claims against other series within the company.
                        </p>
                        <p>
                        In short, a series LLC allows a company to separate and protect multiple assets without the need to form additional entities.
                        </p>
                        <p>
                        Reasons to form a series LLC include:
                        </p>
                        <ul>
                            <li>Reduced cost: Just one filing fee is required to form a series LLC, regardless of how many series it contains.</li>
                            <li>Asset protection: By design, the assets of each series are safe from judgments against the others, although bankruptcy may undermine this protection.</li>
                            <li>Versatility: A series LLC allows for variation in business purposes within it. This structure is often used to safeguard real estate or intangible assets.</li>

                        </ul>
                        
                        <h2>
                            Ascend Can Help
                        </h2>
                        <p>
                        The series LLC structure is permitted in a limited number of states. Ascend can help customers register a series LLC in:
                        </p>
                        <ul>
                            <li>Delaware</li>
                            <li>Illinois</li>
                            <li>Nevada</li>
                            <li>Oklahama</li>
                            <li>Tennessee</li>
                            <li>Utah</li>
                        </ul>
                        <p>
                        It's important to note that because the federal tax consequences and legal implications of a series LLC remain uncertain, we recommend that customers consult a qualified legal and tax professional for help managing their series LLC.
                        </p>


                        <h2>
                            Ready to create your company?
                        </h2>
                        <button className="tabs-series-llc-overview-button">Get Started</button>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Series_LLC />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Series_LLC;
