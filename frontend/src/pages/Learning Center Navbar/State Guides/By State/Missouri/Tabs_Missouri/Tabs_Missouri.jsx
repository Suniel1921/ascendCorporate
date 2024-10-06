import React, { useState } from 'react';
import './Tabs_Missouri.css';

import Corporation from './Content_Missouri/Corporation';
import LLC from './Content_Missouri/LLC';
import Business_Licenses from './Content_Missouri/Business Licenses';


const Tabs_Missouri = () => {
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
        <div className="tabs-Missouri-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 18<sup>th</sup> largest population in the United States, Missouri services both large and small businesses. Missouri's major industries include transportation, food processing, and chemicals. Regardless of your industry, we can help you take advantage of Missouri's business services.
            </p>
            
            <div className="tabs-Missouri-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Missouri-tab ${activeTab === tab.name ? 'tabs-Missouri-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Missouri-tab-indicator">
                <div className={`tabs-Missouri-indicator tabs-Missouri-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Missouri-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Missouri;
