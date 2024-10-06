import React, { useState } from 'react';
import './Tabs_Pennsylvania.css';

import Corporation from './Content_Pennsylvania/Corporation';
import LLC from './Content_Pennsylvania/LLC';
import Business_Licenses from './Content_Pennsylvania/Business Licenses';


const Tabs_Pennsylvania = () => {
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
        <div className="tabs-Pennsylvania-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            Pennsylvania remains one of our most popular states for incorporation and LLC formation. With the sixth largest population in the United States, Pennsylvania has a thriving business community. Some of the largest U.S. companies, including Sunoco and Comcast, maintain their headquarters in Pennsylvania. This state also services many small businesses, particularly in major industries like manufacturing, education, and agriculture.
            </p>
            
            <div className="tabs-Pennsylvania-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Pennsylvania-tab ${activeTab === tab.name ? 'tabs-Pennsylvania-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Pennsylvania-tab-indicator">
                <div className={`tabs-Pennsylvania-indicator tabs-Pennsylvania-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Pennsylvania-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Pennsylvania;
