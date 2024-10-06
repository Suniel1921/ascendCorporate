import React, { useState } from 'react';
import './Tabs_Arkansas.css';

import Corporation from './Content_Arkansas/Corporation';
import LLC from './Content_Arkansas/LLC';
import Business_Licenses from './Content_Arkansas/Business Licenses';


const Tabs_Arkansas = () => {
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
        <div className="tabs-Arkansas-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 32<sup>nd</sup> largest population in the United States, Arkansas services both large and small businesses. Arkansas' major industries include retail, food production, and health care. Regardless of your industry, we can help you take advantage of Arkansas' business services.
            </p>
            
            <div className="tabs-Arkansas-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Arkansas-tab ${activeTab === tab.name ? 'tabs-Arkansas-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Arkansas-tab-indicator">
                <div className={`tabs-Arkansas-indicator tabs-Arkansas-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Arkansas-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Arkansas;
