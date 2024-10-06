import React, { useState } from 'react';
import './Tabs_Indiana.css';

import Corporation from './Content_Indiana/Corporation';
import LLC from './Content_Indiana/LLC';
import Business_Licenses from './Content_Indiana/Business Licenses';


const Tabs_Indiana = () => {
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
        <div className="tabs-Indiana-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 15<sup>th</sup> largest population in the United States, Indiana services both large and small businesses. Indiana's major industries include manufacturing, pharmaceuticals, and agriculture. Regardless of your industry, we can help you take advantage of Indiana's business services.
            </p>
            
            <div className="tabs-Indiana-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Indiana-tab ${activeTab === tab.name ? 'tabs-Indiana-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Indiana-tab-indicator">
                <div className={`tabs-Indiana-indicator tabs-Indiana-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Indiana-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Indiana;
