import React, { useState } from 'react';
import './Tabs_Oklahoma.css';

import Corporation from './Content_Oklahoma/Corporation';
import LLC from './Content_Oklahoma/LLC';
import Business_Licenses from './Content_Oklahoma/Business Licenses';


const Tabs_Oklahoma = () => {
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
        <div className="tabs-Oklahoma-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 28<sup>th</sup> largest population in the United States, Oklahoma services both large and small businesses. Oklahoma's major industries include transportation, education, and manufacturing. Regardless of your industry, we can help you take advantage of Oklahoma's business services.
            </p>
            
            <div className="tabs-Oklahoma-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Oklahoma-tab ${activeTab === tab.name ? 'tabs-Oklahoma-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Oklahoma-tab-indicator">
                <div className={`tabs-Oklahoma-indicator tabs-Oklahoma-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Oklahoma-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Oklahoma;
