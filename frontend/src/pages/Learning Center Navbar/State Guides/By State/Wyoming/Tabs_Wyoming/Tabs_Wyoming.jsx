import React, { useState } from 'react';
import './Tabs_Wyoming.css';

import Corporation from './Content_Wyoming/Corporation';
import LLC from './Content_Wyoming/LLC';
import Business_Licenses from './Content_Wyoming/Business Licenses';


const Tabs_Wyoming = () => {
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
        <div className="tabs-Wyoming-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the smallest population in the United States, Wyoming still services both large and small businesses. Wyoming's major industries include mineral extraction and tourism. Regardless of your industry, we can help you take advantage of Wyoming's business services.
            </p>
            
            <div className="tabs-Wyoming-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Wyoming-tab ${activeTab === tab.name ? 'tabs-Wyoming-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Wyoming-tab-indicator">
                <div className={`tabs-Wyoming-indicator tabs-Wyoming-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Wyoming-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Wyoming;
