import React, { useState } from 'react';
import './Tabs_Massachusetts.css';

import Corporation from './Content_Massachusetts/Corporation';
import LLC from './Content_Massachusetts/LLC';
import Business_Licenses from './Content_Massachusetts/Business Licenses';


const Tabs_Massachusetts = () => {
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
        <div className="tabs-Massachusetts-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            Massachusetts has implemented regulatory reforms to reduce red tape and increase the ease of doing business in the state. The state is home to a diverse group of innovation-based industries, both traditional, such as health care, higher education, technology, financial services and tourism, and emerging, such as life sciences, clean energy and the creative economy. Massachusetts' economy is the twelfth-largest in the nation, and some of the country's largest companies are headquartered here, including Liberty Mutual, Staples, Raytheon, Mass Mutual and TJX. Small businesses are also an important part of the state's economy: 607,000 small businesses employ more than 1.4 million workers in Massachusetts.
            </p>
            
            <div className="tabs-Massachusetts-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Massachusetts-tab ${activeTab === tab.name ? 'tabs-Massachusetts-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Massachusetts-tab-indicator">
                <div className={`tabs-Massachusetts-indicator tabs-Massachusetts-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Massachusetts-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Massachusetts;
