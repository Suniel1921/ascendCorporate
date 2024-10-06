import React, { useState } from 'react';
import './Tabs_Louisiana.css';

import Corporation from './Content_Louisiana/Corporation';
import LLC from './Content_Louisiana/LLC';
import Business_Licenses from './Content_Louisiana/Business Licenses';


const Tabs_Louisiana = () => {
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
        <div className="tabs-Louisiana-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 25<sup>th</sup> largest population in the United States, Louisiana services both large and small businesses. Louisiana's major industries include oil and gas, chemicals, and agriculture. Regardless of your industry, we can help you take advantage of Louisiana's business services.
            </p>
            
            <div className="tabs-Louisiana-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Louisiana-tab ${activeTab === tab.name ? 'tabs-Louisiana-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Louisiana-tab-indicator">
                <div className={`tabs-Louisiana-indicator tabs-Louisiana-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Louisiana-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Louisiana;
