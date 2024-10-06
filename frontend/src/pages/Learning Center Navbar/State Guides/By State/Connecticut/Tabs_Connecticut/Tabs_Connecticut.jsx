import React, { useState } from 'react';
import './Tabs_Connecticut.css';

import Corporation from './Content_Connecticut/Corporation';
import LLC from './Content_Connecticut/LLC';
import Business_Licenses from './Content_Connecticut/Business Licenses';


const Tabs_Connecticut = () => {
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
        <div className="tabs-Connecticut-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 29<sup>th</sup> largest population in the United States, Connecticut services both large and small businesses. Connecticut's major industries include insurance, agriculture, and manufacturing. Regardless of your industry, we can help you take advantage of Connecticut's business services.
            </p>
            
            <div className="tabs-Connecticut-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Connecticut-tab ${activeTab === tab.name ? 'tabs-Connecticut-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Connecticut-tab-indicator">
                <div className={`tabs-Connecticut-indicator tabs-Connecticut-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Connecticut-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Connecticut;
