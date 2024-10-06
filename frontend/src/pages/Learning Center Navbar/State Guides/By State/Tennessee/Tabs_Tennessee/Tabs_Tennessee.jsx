import React, { useState } from 'react';
import './Tabs_Tennessee.css';

import Corporation from './Content_Tennessee/Corporation';
import LLC from './Content_Tennessee/LLC';
import Business_Licenses from './Content_Tennessee/Business Licenses';


const Tabs_Tennessee = () => {
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
        <div className="tabs-Tennessee-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 17<sup>th</sup> largest population in the United States, Tennessee services both large and small businesses. Tennessee's major industries include textiles and agriculture. Regardless of your industry, we can help you take advantage of Tennessee's business services.
            </p>
            
            <div className="tabs-Tennessee-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Tennessee-tab ${activeTab === tab.name ? 'tabs-Tennessee-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Tennessee-tab-indicator">
                <div className={`tabs-Tennessee-indicator tabs-Tennessee-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Tennessee-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Tennessee;
