import React, { useState } from 'react';
import './Tabs_Virginia.css';

import Corporation from './Content_Virginia/Corporation';
import LLC from './Content_Virginia/LLC';
import Business_Licenses from './Content_Virginia/Business Licenses';


const Tabs_Virginia = () => {
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
        <div className="tabs-Virginia-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            Virginia has the twelfth-largest population in the nation, the tenth-largest GDP, and is home to 32 Fortune 1000 firms, as well as three companies on the Forbes list of "America's Largest Private Companies:" Mars, Performance Food Group and Hilton Worldwide. More than 40 firms headquartered in Virginia have annual revenues of over $1 billion, and more than 700 internationally-based companies from 45 countries have operations in Virginia, with more than $8.3 billion in investments. Virginia's targeted business sectors are diverse, and include food processing, aerospace, plastics & advanced materials, data centers, IT, life sciences, automotive, energy and distribution. Small business is also a critical component of Virginia's economy, with roughly 95 percent of the businesses in the Commonwealth classified as small businesses.
            </p>
            
            <div className="tabs-Virginia-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Virginia-tab ${activeTab === tab.name ? 'tabs-Virginia-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Virginia-tab-indicator">
                <div className={`tabs-Virginia-indicator tabs-Virginia-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Virginia-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Virginia;
