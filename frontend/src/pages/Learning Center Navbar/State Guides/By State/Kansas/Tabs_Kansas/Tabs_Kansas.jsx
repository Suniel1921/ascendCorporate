import React, { useState } from 'react';
import './Tabs_Kansas.css';

import Corporation from './Content_Kansas/Corporation';
import LLC from './Content_Kansas/LLC';
import Business_Licenses from './Content_Kansas/Business Licenses';


const Tabs_Kansas = () => {
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
        <div className="tabs-Kansas-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 33<sup>rd</sup> largest population in the United States, Kansas services both large and small businesses. Kansas' major industries include agriculture, transportation, and manufacturing. Regardless of your industry, we can help you take advantage of Kansas business services.
            </p>
            
            <div className="tabs-Kansas-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Kansas-tab ${activeTab === tab.name ? 'tabs-Kansas-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Kansas-tab-indicator">
                <div className={`tabs-Kansas-indicator tabs-Kansas-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Kansas-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Kansas;
