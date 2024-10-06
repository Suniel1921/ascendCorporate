import React, { useState } from 'react';
import './Tabs_Arizona.css';

import Corporation from './Content_Arizona/Corporation';
import LLC from './Content_Arizona/LLC';
import Business_Licenses from './Content_Arizona/Business Licenses';


const Tabs_Arizona = () => {
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
        <div className="tabs-Arizona-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 16<sup>th</sup> largest population in the United States, Arizona services both large and small businesses. Arizona's major industries include tourism, mining, and manufacturing. Regardless of your industry, we can help you take advantage of Arizona's business services.
            </p>
            
            <div className="tabs-Arizona-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Arizona-tab ${activeTab === tab.name ? 'tabs-Arizona-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Arizona-tab-indicator">
                <div className={`tabs-Arizona-indicator tabs-Arizona-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Arizona-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Arizona;
