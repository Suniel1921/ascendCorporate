import React, { useState } from 'react';
import './Tabs_Nevada.css';

import Corporation from './Content_Nevada/Corporation';
import LLC from './Content_Nevada/LLC';
import Business_Licenses from './Content_Nevada/Business Licenses';


const Tabs_Nevada = () => {
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
        <div className="tabs-Nevada-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            Nevada remains one of our most popular states for incorporation and LLC formation. With only the 35<sup>th</sup> largest population in the United States, Nevada has a thriving business community. Some of the largest U.S. companies, including Harrah's Entertainment, MGM Mirage, and Las Vegas Sands, maintain their headquarters in Nevada. This state also services many small businesses, particularly in major industries like tourism, mining, and manufacturing.
            </p>
            
            <div className="tabs-Nevada-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Nevada-tab ${activeTab === tab.name ? 'tabs-Nevada-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Nevada-tab-indicator">
                <div className={`tabs-Nevada-indicator tabs-Nevada-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Nevada-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Nevada;
