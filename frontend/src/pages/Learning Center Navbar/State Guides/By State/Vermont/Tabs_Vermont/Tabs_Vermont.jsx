import React, { useState } from 'react';
import './Tabs_Vermont.css';

import Corporation from './Content_Vermont/Corporation';
import LLC from './Content_Vermont/LLC';
import Business_Licenses from './Content_Vermont/Business Licenses';


const Tabs_Vermont = () => {
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
        <div className="tabs-Vermont-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the second smallest population in the United States, Vermont still services both large and small businesses. Vermont's major industries include tourism, quarrying, and manufacturing. Regardless of your industry, we can help you take advantage of Vermont's business services.
            </p>
            
            <div className="tabs-Vermont-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Vermont-tab ${activeTab === tab.name ? 'tabs-Vermont-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Vermont-tab-indicator">
                <div className={`tabs-Vermont-indicator tabs-Vermont-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Vermont-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Vermont;
