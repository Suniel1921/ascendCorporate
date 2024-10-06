import React, { useState } from 'react';
import './Tabs_South_Carolina.css';

import Corporation from './Content_South_Carolina/Corporation';
import LLC from './Content_South_Carolina/LLC';
import Business_Licenses from './Content_South_Carolina/Business Licenses';


const Tabs_South_Carolina = () => {
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
        <div className="tabs-South_Carolina-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 24<sup>th</sup> largest population in the United States, South Carolina services both large and small businesses. South Carolina's major industries include agriculture, textiles, and chemical products. Regardless of your industry, we can help you take advantage of South Carolina's business services.
            </p>
            
            <div className="tabs-South_Carolina-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-South_Carolina-tab ${activeTab === tab.name ? 'tabs-South_Carolina-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-South_Carolina-tab-indicator">
                <div className={`tabs-South_Carolina-indicator tabs-South_Carolina-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-South_Carolina-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_South_Carolina;
