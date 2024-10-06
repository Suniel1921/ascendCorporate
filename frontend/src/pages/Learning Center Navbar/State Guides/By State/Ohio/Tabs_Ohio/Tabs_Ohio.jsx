import React, { useState } from 'react';
import './Tabs_Ohio.css';

import Corporation from './Content_Ohio/Corporation';
import LLC from './Content_Ohio/LLC';
import Business_Licenses from './Content_Ohio/Business Licenses';


const Tabs_Ohio = () => {
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
        <div className="tabs-Ohio-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 7<sup>th</sup> largest population in the United States, Ohio services both large and small businesses. Ohio's major industries include manufacturing, automobiles, and agriculture. Regardless of your industry, we can help you take advantage of Ohio's business services.
            </p>
            
            <div className="tabs-Ohio-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Ohio-tab ${activeTab === tab.name ? 'tabs-Ohio-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Ohio-tab-indicator">
                <div className={`tabs-Ohio-indicator tabs-Ohio-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Ohio-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Ohio;
