import React, { useState } from 'react';
import './Tabs_North_Dakota.css';

import Corporation from './Content_North_Dakota/Corporation';
import LLC from './Content_North_Dakota/LLC';
import Business_Licenses from './Content_North_Dakota/Business Licenses';


const Tabs_North_Dakota = () => {
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
        <div className="tabs-North_Dakota-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the third smallest population in the United States, North Dakota services both large and small businesses. North Dakota's major industries include agriculture, petroleum, and food processing. Regardless of your industry, we can help you take advantage of North Dakota's business services.
            </p>
            
            <div className="tabs-North_Dakota-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-North_Dakota-tab ${activeTab === tab.name ? 'tabs-North_Dakota-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-North_Dakota-tab-indicator">
                <div className={`tabs-North_Dakota-indicator tabs-North_Dakota-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-North_Dakota-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_North_Dakota;
