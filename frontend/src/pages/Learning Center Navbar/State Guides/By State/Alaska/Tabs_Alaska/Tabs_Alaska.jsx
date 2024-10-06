import React, { useState } from 'react';
import './Tabs_Alaska.css';

import Corporation from './Content_Alaska/Corporation';
import LLC from './Content_Alaska/LLC';
import Business_Licenses from './Content_Alaska/Business Licenses';


const Tabs_Alaska = () => {
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
        <div className="tabs-Alaska-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the fourth smallest population in the United States, Alaska still services both large and small businesses. Alaska's major industries include oil production and fishing. Regardless of your industry, we can help you take advantage of Alaska's business services.
            </p>
            
            <div className="tabs-Alaska-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Alaska-tab ${activeTab === tab.name ? 'tabs-Alaska-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Alaska-tab-indicator">
                <div className={`tabs-Alaska-indicator tabs-Alaska-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Alaska-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Alaska;
