import React, { useState } from 'react';
import './Tabs_Florida.css';

import Corporation from './Content_Florida/Corporation';
import LLC from './Content_Florida/LLC';
import Business_Licenses from './Content_Florida/Business Licenses';


const Tabs_Florida = () => {
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
        <div className="tabs-Florida-container">
            
            <div className="tabs-Florida-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Florida-tab ${activeTab === tab.name ? 'tabs-Florida-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Florida-tab-indicator">
                <div className={`tabs-Florida-indicator tabs-Florida-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Florida-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Florida;
