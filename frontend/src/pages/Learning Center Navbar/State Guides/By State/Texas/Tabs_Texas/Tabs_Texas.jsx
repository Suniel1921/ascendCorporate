import React, { useState } from 'react';
import './Tabs_Texas.css';

import Corporation from './Content_Texas/Corporation';
import LLC from './Content_Texas/LLC';
import Business_Licenses from './Content_Texas/Business Licenses';


const Tabs_Texas = () => {
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
        <div className="tabs-Texas-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            Texas remains one of our most popular states for incorporation and LLC formation. With the second largest population in the United States, Texas has a thriving business community. Some of the largest U.S. companies, including Exxon Mobil and Dell, maintain their headquarters in Texas. This state also services many small businesses, particularly in major industries like agriculture and information technology.
            </p>
            
            <div className="tabs-Texas-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Texas-tab ${activeTab === tab.name ? 'tabs-Texas-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Texas-tab-indicator">
                <div className={`tabs-Texas-indicator tabs-Texas-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Texas-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Texas;
