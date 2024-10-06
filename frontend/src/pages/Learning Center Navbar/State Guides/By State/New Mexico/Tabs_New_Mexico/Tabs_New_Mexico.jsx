import React, { useState } from 'react';
import './Tabs_New_Mexico.css';

import Corporation from './Content_New_Mexico/Corporation';
import LLC from './Content_New_Mexico/LLC';
import Business_Licenses from './Content_New_Mexico/Business Licenses';


const Tabs_New_Mexico = () => {
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
        <div className="tabs-New_Mexico-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 36<sup>th</sup> largest population in the United States, New Mexico services both large and small businesses. New Mexico's major industries include retail, construction, and technology. Regardless of your industry, we can help you take advantage of New Mexico's business services.
            </p>
            
            <div className="tabs-New_Mexico-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-New_Mexico-tab ${activeTab === tab.name ? 'tabs-New_Mexico-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-New_Mexico-tab-indicator">
                <div className={`tabs-New_Mexico-indicator tabs-New_Mexico-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-New_Mexico-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_New_Mexico;
