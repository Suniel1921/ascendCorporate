import React, { useState } from 'react';
import './Tabs_West_Virginia.css';

import Corporation from './Content_West_Virginia/Corporation';
import LLC from './Content_West_Virginia/LLC';
import Business_Licenses from './Content_West_Virginia/Business Licenses';


const Tabs_West_Virginia = () => {
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
        <div className="tabs-West_Virginia-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 37<sup>th</sup> largest population in the United States, West Virginia services both large and small businesses. West Virginia's major industries include coal and oil drilling. Regardless of your industry, we can help you take advantage of West Virginia's business services.
            </p>
            
            <div className="tabs-West_Virginia-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-West_Virginia-tab ${activeTab === tab.name ? 'tabs-West_Virginia-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-West_Virginia-tab-indicator">
                <div className={`tabs-West_Virginia-indicator tabs-West_Virginia-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-West_Virginia-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_West_Virginia;
