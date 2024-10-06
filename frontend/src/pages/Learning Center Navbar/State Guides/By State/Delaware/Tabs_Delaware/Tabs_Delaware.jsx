import React, { useState } from 'react';
import './Tabs_Delaware.css';

import Corporation from './Content_Delaware/Corporation';
import LLC from './Content_Delaware/LLC';
import Business_Licenses from './Content_Delaware/Business Licenses';


const Tabs_Delaware = () => {
    const [activeTab, setActiveTab] = useState('Corporation');

    // Define your tabs dynamically (excluding Overview and FAQs)
    const tabs = [
        { name: 'Corporation', content: <Corporation /> },
        { name: 'LLC', content: <LLC /> },
        { name: 'Business-Licenses', content: <Business_Licenses /> },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-Delaware-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            Over 1 million businesses call Delaware their legal home. More than half of the corporations that make up the Fortune 500® are incorporated in the State of Delaware. Before you start your business, navigate through the Delaware Corporation Knowledge Hub to learn more about the many advantages the state offers for businesses both small and large. Also, learn how Ascend is able to support you at every step of your business formation journey managing your paperwork and state filings so that you can focus on your business.
            </p>
            
            <div className="tabs-Delaware-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Delaware-tab ${activeTab === tab.name ? 'tabs-Delaware-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Delaware-tab-indicator">
                <div className={`tabs-Delaware-indicator tabs-Delaware-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Delaware-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Delaware;
