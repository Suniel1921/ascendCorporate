import React, { useState } from 'react';
import './Tabs_Utah.css';

import Corporation from './Content_Utah/Corporation';
import LLC from './Content_Utah/LLC';
import Business_Licenses from './Content_Utah/Business Licenses';


const Tabs_Utah = () => {
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
        <div className="tabs-Utah-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 34<sup>th</sup> largest population in the United States, Utah services both large and small businesses. Utah's major industries include mining, cattle ranching, and salt production. Regardless of your industry, we can help you take advantage of Utah's business services.
            </p>
            
            <div className="tabs-Utah-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Utah-tab ${activeTab === tab.name ? 'tabs-Utah-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Utah-tab-indicator">
                <div className={`tabs-Utah-indicator tabs-Utah-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Utah-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Utah;
