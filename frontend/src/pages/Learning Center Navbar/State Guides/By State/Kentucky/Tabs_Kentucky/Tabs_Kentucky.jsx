import React, { useState } from 'react';
import './Tabs_Kentucky.css';

import Corporation from './Content_Kentucky/Corporation';
import LLC from './Content_Kentucky/LLC';
import Business_Licenses from './Content_Kentucky/Business Licenses';


const Tabs_Kentucky = () => {
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
        <div className="tabs-Kentucky-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 26<sup>th</sup> largest population in the United States, Kentucky services both large and small businesses. Kentucky's major industries include agriculture and automobiles. Regardless of your industry, we can help you take advantage of Kentucky's business services.
            </p>
            
            <div className="tabs-Kentucky-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Kentucky-tab ${activeTab === tab.name ? 'tabs-Kentucky-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Kentucky-tab-indicator">
                <div className={`tabs-Kentucky-indicator tabs-Kentucky-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Kentucky-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Kentucky;
