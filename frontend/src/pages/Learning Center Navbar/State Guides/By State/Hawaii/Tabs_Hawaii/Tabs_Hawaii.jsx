import React, { useState } from 'react';
import './Tabs_Hawaii.css';

import Corporation from './Content_Hawaii/Corporation';
import LLC from './Content_Hawaii/LLC';
import Business_Licenses from './Content_Hawaii/Business Licenses';


const Tabs_Hawaii = () => {
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
        <div className="tabs-Hawaii-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 42<sup>nd</sup> largest population in the United States, Hawaii services both large and small businesses. Hawaii's major industries include tourism and agriculture. Regardless of your industry, we can help you take advantage of Hawaii's business services.
            </p>
            
            <div className="tabs-Hawaii-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Hawaii-tab ${activeTab === tab.name ? 'tabs-Hawaii-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Hawaii-tab-indicator">
                <div className={`tabs-Hawaii-indicator tabs-Hawaii-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Hawaii-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Hawaii;
