import React, { useState } from 'react';
import './Tabs_Nebraska.css';

import Corporation from './Content_Nebraska/Corporation';
import LLC from './Content_Nebraska/LLC';
import Business_Licenses from './Content_Nebraska/Business Licenses';


const Tabs_Nebraska = () => {
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
        <div className="tabs-Nebraska-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 38<sup>th</sup> largest population in the United States, Nebraska services both large and small businesses. Nebraska's major industries include agriculture, transportation, and manufacturing. Regardless of your industry, we can help you take advantage of Nebraska's business services.
            </p>
            
            <div className="tabs-Nebraska-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Nebraska-tab ${activeTab === tab.name ? 'tabs-Nebraska-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Nebraska-tab-indicator">
                <div className={`tabs-Nebraska-indicator tabs-Nebraska-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Nebraska-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Nebraska;
