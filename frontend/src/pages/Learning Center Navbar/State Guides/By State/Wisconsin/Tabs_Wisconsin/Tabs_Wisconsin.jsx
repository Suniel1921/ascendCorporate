import React, { useState } from 'react';
import './Tabs_Wisconsin.css';

import Corporation from './Content_Wisconsin/Corporation';
import LLC from './Content_Wisconsin/LLC';
import Business_Licenses from './Content_Wisconsin/Business Licenses';


const Tabs_Wisconsin = () => {
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
        <div className="tabs-Wisconsin-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 20<sup>th</sup> largest population in the United States, Wisconsin services both large and small businesses. Wisconsin's major industries include manufacturing, agriculture, and health care. Regardless of your industry, we can help you take advantage of Wisconsin's business services.
            </p>
            
            <div className="tabs-Wisconsin-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Wisconsin-tab ${activeTab === tab.name ? 'tabs-Wisconsin-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Wisconsin-tab-indicator">
                <div className={`tabs-Wisconsin-indicator tabs-Wisconsin-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Wisconsin-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Wisconsin;
