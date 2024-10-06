import React, { useState } from 'react';
import './Tabs_New_Hampshire.css';

import Corporation from './Content_New_Hampshire/Corporation';
import LLC from './Content_New_Hampshire/LLC';
import Business_Licenses from './Content_New_Hampshire/Business Licenses';


const Tabs_New_Hampshire = () => {
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
        <div className="tabs-New_Hampshire-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 10<sup>th</sup> smallest population in the United States, New Hampshire still services both large and small businesses. New Hampshire's major industries include agriculture, manufacturing, and tourism. Regardless of your industry, we can help you take advantage of New Hampshire's business services.
            </p>
            
            <div className="tabs-New_Hampshire-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-New_Hampshire-tab ${activeTab === tab.name ? 'tabs-New_Hampshire-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-New_Hampshire-tab-indicator">
                <div className={`tabs-New_Hampshire-indicator tabs-New_Hampshire-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-New_Hampshire-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_New_Hampshire;
