import React, { useState } from 'react';
import './Tabs_Montana.css';

import Corporation from './Content_Montana/Corporation';
import LLC from './Content_Montana/LLC';
import Business_Licenses from './Content_Montana/Business Licenses';


const Tabs_Montana = () => {
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
        <div className="tabs-Montana-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 7<sup>th</sup> smallest population in the United States, Montana still services both large and small businesses. Montana's major industries include agriculture, lumber, and tourism. Regardless of your industry, we can help you take advantage of Montana's business services.
            </p>
            
            <div className="tabs-Montana-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Montana-tab ${activeTab === tab.name ? 'tabs-Montana-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Montana-tab-indicator">
                <div className={`tabs-Montana-indicator tabs-Montana-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Montana-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Montana;
