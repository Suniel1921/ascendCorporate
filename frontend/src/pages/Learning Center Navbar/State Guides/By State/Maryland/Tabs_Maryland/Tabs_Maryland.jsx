import React, { useState } from 'react';
import './Tabs_Maryland.css';

import Corporation from './Content_Maryland/Corporation';
import LLC from './Content_Maryland/LLC';
import Business_Licenses from './Content_Maryland/Business Licenses';


const Tabs_Maryland = () => {
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
        <div className="tabs-Maryland-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 19<sup>th</sup> largest population in the United States, Maryland services both large and small businesses. Maryland's major industries include transportation, raw materials, and government services. Regardless of your industry, we can help you take advantage of Maryland's business services.
            </p>
            
            <div className="tabs-Maryland-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Maryland-tab ${activeTab === tab.name ? 'tabs-Maryland-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Maryland-tab-indicator">
                <div className={`tabs-Maryland-indicator tabs-Maryland-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Maryland-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Maryland;
