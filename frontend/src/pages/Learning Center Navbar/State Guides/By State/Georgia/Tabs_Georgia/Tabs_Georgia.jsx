import React, { useState } from 'react';
import './Tabs_Georgia.css';

import Corporation from './Content_Georgia/Corporation';
import LLC from './Content_Georgia/LLC';
import Business_Licenses from './Content_Georgia/Business Licenses';


const Tabs_Georgia = () => {
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
        <div className="tabs-Georgia-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 9<sup>th</sup> largest population in the United States, Georgia services both large and small businesses. Georgia's major industries include freight, beverages, and textiles. Regardless of your industry, we can help you take advantage of Georgia's business services.
            </p>
            
            <div className="tabs-Georgia-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Georgia-tab ${activeTab === tab.name ? 'tabs-Georgia-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Georgia-tab-indicator">
                <div className={`tabs-Georgia-indicator tabs-Georgia-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Georgia-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Georgia;
