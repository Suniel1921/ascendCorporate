import React, { useState } from 'react';
import './Tabs_Iowa.css';

import Corporation from './Content_Iowa/Corporation';
import LLC from './Content_Iowa/LLC';
import Business_Licenses from './Content_Iowa/Business Licenses';


const Tabs_Iowa = () => {
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
        <div className="tabs-Iowa-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 30<sup>th</sup> largest population in the United States, Iowa services both large and small businesses. Iowa's major industries include agriculture and manufacturing. Regardless of your industry, we can help you take advantage of Iowa's business services.
            </p>
            
            <div className="tabs-Iowa-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Iowa-tab ${activeTab === tab.name ? 'tabs-Iowa-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Iowa-tab-indicator">
                <div className={`tabs-Iowa-indicator tabs-Iowa-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Iowa-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Iowa;
