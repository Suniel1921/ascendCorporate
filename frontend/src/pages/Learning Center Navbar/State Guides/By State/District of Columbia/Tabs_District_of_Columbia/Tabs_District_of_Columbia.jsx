import React, { useState } from 'react';
import './Tabs_District_of_Columbia.css';

import Corporation from './Content_District_of_Columbia/Corporation';
import LLC from './Content_District_of_Columbia/LLC';
import Business_Licenses from './Content_District_of_Columbia/Business Licenses';


const Tabs_District_of_Columbia = () => {
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
        <div className="tabs-District_of_Columbia-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            The District of Columbia services both large and small businesses. Major industries in the District of Columbia include government and legal services. Regardless of your industry, we can help you take advantage of the District of Columbia's business services.
            </p>
            
            <div className="tabs-District_of_Columbia-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-District_of_Columbia-tab ${activeTab === tab.name ? 'tabs-District_of_Columbia-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-District_of_Columbia-tab-indicator">
                <div className={`tabs-District_of_Columbia-indicator tabs-District_of_Columbia-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-District_of_Columbia-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_District_of_Columbia;
