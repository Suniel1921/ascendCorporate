import React, { useState } from 'react';
import './Tabs_Washington.css';

import Corporation from './Content_Washington/Corporation';
import LLC from './Content_Washington/LLC';
import Business_Licenses from './Content_Washington/Business Licenses';


const Tabs_Washington = () => {
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
        <div className="tabs-Washington-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 14<sup>th</sup> largest population in the United States, Washington services both large and small businesses. Washington's major industries include manufacturing, technology, and tourism. Regardless of your industry, we can help you take advantage of Washington's business services.
            </p>
            
            <div className="tabs-Washington-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Washington-tab ${activeTab === tab.name ? 'tabs-Washington-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Washington-tab-indicator">
                <div className={`tabs-Washington-indicator tabs-Washington-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Washington-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Washington;
