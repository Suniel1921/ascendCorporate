import React, { useState } from 'react';
import './Tabs_Rhode_Island.css';

import Corporation from './Content_Rhode_Island/Corporation';
import LLC from './Content_Rhode_Island/LLC';
import Business_Licenses from './Content_Rhode_Island/Business Licenses';


const Tabs_Rhode_Island = () => {
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
        <div className="tabs-Rhode_Island-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the eighth smallest population in the United States, Rhode Island still services both large and small businesses. Rhode Island's major industries include health care, education, and manufacturing. Regardless of your industry, we can help you take advantage of Rhode Island's business services.
            </p>
            
            <div className="tabs-Rhode_Island-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Rhode_Island-tab ${activeTab === tab.name ? 'tabs-Rhode_Island-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Rhode_Island-tab-indicator">
                <div className={`tabs-Rhode_Island-indicator tabs-Rhode_Island-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Rhode_Island-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Rhode_Island;
