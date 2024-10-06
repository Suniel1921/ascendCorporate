import React, { useState } from 'react';
import './Tabs_Colorado.css';

import Corporation from './Content_Colorado/Corporation';
import LLC from './Content_Colorado/LLC';
import Business_Licenses from './Content_Colorado/Business Licenses';


const Tabs_Colorado = () => {
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
        <div className="tabs-Colorado-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 22<sup>nd</sup> largest population in the United States, Colorado services both large and small businesses. Colorado's major industries include technology, mining, and manufacturing. Regardless of your industry, we can help you take advantage of Colorado's business services.
            </p>
            
            <div className="tabs-Colorado-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Colorado-tab ${activeTab === tab.name ? 'tabs-Colorado-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Colorado-tab-indicator">
                <div className={`tabs-Colorado-indicator tabs-Colorado-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Colorado-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Colorado;
