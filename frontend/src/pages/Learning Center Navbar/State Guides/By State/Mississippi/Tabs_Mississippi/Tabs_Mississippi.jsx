import React, { useState } from 'react';
import './Tabs_Mississippi.css';

import Corporation from './Content_Mississippi/Corporation';
import LLC from './Content_Mississippi/LLC';
import Business_Licenses from './Content_Mississippi/Business Licenses';


const Tabs_Mississippi = () => {
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
        <div className="tabs-Mississippi-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 31<sup>st</sup> largest population in the United States, Mississippi services both large and small businesses. Mississippi's major industries include lumber and agriculture. Regardless of your industry, we can help you take advantage of Mississippi's business services.
            </p>
            
            <div className="tabs-Mississippi-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Mississippi-tab ${activeTab === tab.name ? 'tabs-Mississippi-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Mississippi-tab-indicator">
                <div className={`tabs-Mississippi-indicator tabs-Mississippi-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Mississippi-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Mississippi;
