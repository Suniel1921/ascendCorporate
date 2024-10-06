import React, { useState } from 'react';
import './Tabs_South_Dakota.css';

import Corporation from './Content_South_Dakota/Corporation';
import LLC from './Content_South_Dakota/LLC';
import Business_Licenses from './Content_South_Dakota/Business Licenses';


const Tabs_South_Dakota = () => {
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
        <div className="tabs-South_Dakota-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the fifth smallest population in the United States, South Dakota still services both large and small businesses. South Dakota's major industries include retail, finance, and health care. Regardless of your industry, we can help you take advantage of South Dakota's business services.
            </p>
            
            <div className="tabs-South_Dakota-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-South_Dakota-tab ${activeTab === tab.name ? 'tabs-South_Dakota-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-South_Dakota-tab-indicator">
                <div className={`tabs-South_Dakota-indicator tabs-South_Dakota-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-South_Dakota-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_South_Dakota;
