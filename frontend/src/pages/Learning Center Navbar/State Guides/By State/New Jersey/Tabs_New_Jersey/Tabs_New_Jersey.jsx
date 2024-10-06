import React, { useState } from 'react';
import './Tabs_New_Jersey.css';

import Corporation from './Content_New_Jersey/Corporation';
import LLC from './Content_New_Jersey/LLC';
import Business_Licenses from './Content_New_Jersey/Business Licenses';


const Tabs_New_Jersey = () => {
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
        <div className="tabs-New_Jersey-container">
            <h2>LLC, Business License, Incorporation</h2>
            
            <div className="tabs-New_Jersey-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-New_Jersey-tab ${activeTab === tab.name ? 'tabs-New_Jersey-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-New_Jersey-tab-indicator">
                <div className={`tabs-New_Jersey-indicator tabs-New_Jersey-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-New_Jersey-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_New_Jersey;
