import React, { useState } from 'react';
import './Tabs_Minnesota.css';

import Corporation from './Content_Minnesota/Corporation';
import LLC from './Content_Minnesota/LLC';
import Business_Licenses from './Content_Minnesota/Business Licenses';


const Tabs_Minnesota = () => {
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
        <div className="tabs-Minnesota-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 21<sup>st</sup> largest population in the United States, Minnesota services both large and small businesses. Minnesota's major industries include agriculture, forestry, and mining. Regardless of your industry, we can help you take advantage of Minnesota's business services.
            </p>
            
            <div className="tabs-Minnesota-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Minnesota-tab ${activeTab === tab.name ? 'tabs-Minnesota-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Minnesota-tab-indicator">
                <div className={`tabs-Minnesota-indicator tabs-Minnesota-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Minnesota-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Minnesota;
