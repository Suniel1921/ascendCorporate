import React, { useState } from 'react';
import './Tabs_Oregon.css';

import Corporation from './Content_Oregon/Corporation';
import LLC from './Content_Oregon/LLC';
import Business_Licenses from './Content_Oregon/Business Licenses';


const Tabs_Oregon = () => {
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
        <div className="tabs-Oregon-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 27<sup>th</sup> largest population in the United States, Oregon services both large and small businesses. Oregon's major industries include agriculture, timber, and technology. Regardless of your industry, we can help you take advantage of Oregon's business services.
            </p>
            
            <div className="tabs-Oregon-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Oregon-tab ${activeTab === tab.name ? 'tabs-Oregon-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Oregon-tab-indicator">
                <div className={`tabs-Oregon-indicator tabs-Oregon-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Oregon-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Oregon;
