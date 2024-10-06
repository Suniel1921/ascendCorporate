import React, { useState } from 'react';
import './Tabs_Michigan.css';

import Corporation from './Content_Michigan/Corporation';
import LLC from './Content_Michigan/LLC';
import Business_Licenses from './Content_Michigan/Business Licenses';


const Tabs_Michigan = () => {
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
        <div className="tabs-Michigan-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 8<sup>th</sup> largest population in the United States, Michigan services both large and small businesses. Michigan's major industries include information technology, life sciences, and manufacturing. Regardless of your industry, we can help you take advantage of Michigan's business services.
            </p>
            
            <div className="tabs-Michigan-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Michigan-tab ${activeTab === tab.name ? 'tabs-Michigan-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Michigan-tab-indicator">
                <div className={`tabs-Michigan-indicator tabs-Michigan-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Michigan-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Michigan;
