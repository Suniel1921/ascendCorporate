import React, { useState } from 'react';
import './Tabs_New_York.css';

import Corporation from './Content_New_York/Corporation';
import LLC from './Content_New_York/LLC';
import Business_Licenses from './Content_New_York/Business Licenses';


const Tabs_New_York = () => {
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
        <div className="tabs-New_York-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            New York remains one of our most popular states for incorporation and LLC formation. With the third largest population in the United States, New York has a thriving business community. Some of the largest U.S. companies, including Citigroup, Verizon Communications, and Merrill Lynch, maintain their headquarters in New York. This state also services many small businesses, particularly in major industries like finance and communication.
            </p>
            
            <div className="tabs-New_York-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-New_York-tab ${activeTab === tab.name ? 'tabs-New_York-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-New_York-tab-indicator">
                <div className={`tabs-New_York-indicator tabs-New_York-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-New_York-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_New_York;
