import React, { useState } from 'react';
import './Tabs_Maine.css';

import Corporation from './Content_Maine/Corporation';
import LLC from './Content_Maine/LLC';
import Business_Licenses from './Content_Maine/Business Licenses';


const Tabs_Maine = () => {
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
        <div className="tabs-Maine-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 40<sup>th</sup> largest population in the United States, Maine services both large and small businesses. Maine's major industries include agriculture, tourism, and fishing. Regardless of your industry, we can help you take advantage of Maine's business services.
            </p>
            
            <div className="tabs-Maine-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Maine-tab ${activeTab === tab.name ? 'tabs-Maine-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Maine-tab-indicator">
                <div className={`tabs-Maine-indicator tabs-Maine-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Maine-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Maine;
