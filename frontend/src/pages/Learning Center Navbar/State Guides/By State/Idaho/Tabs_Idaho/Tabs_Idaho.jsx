import React, { useState } from 'react';
import './Tabs_Idaho.css';

import Corporation from './Content_Idaho/Corporation';
import LLC from './Content_Idaho/LLC';
import Business_Licenses from './Content_Idaho/Business Licenses';


const Tabs_Idaho = () => {
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
        <div className="tabs-Idaho-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 39<sup>th</sup> largest population in the United States, Idaho services both large and small businesses. Idaho's major industries include technology, manufacturing, and agriculture. Regardless of your industry, we can help you take advantage of Idaho's business services.
            </p>
            
            <div className="tabs-Idaho-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Idaho-tab ${activeTab === tab.name ? 'tabs-Idaho-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Idaho-tab-indicator">
                <div className={`tabs-Idaho-indicator tabs-Idaho-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Idaho-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Idaho;
