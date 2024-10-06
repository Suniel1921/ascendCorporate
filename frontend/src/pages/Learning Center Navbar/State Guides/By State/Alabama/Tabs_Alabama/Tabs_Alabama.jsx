import React, { useState } from 'react';
import './Tabs_Alabama.css';

import Corporation from './Content_Alabama/Corporation';
import LLC from './Content_Alabama/LLC';
import Business_Licenses from './Content_Alabama/Business Licenses';


const Tabs_Alabama = () => {
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
        <div className="tabs-Alabama-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            With the 23rd largest population in the United States, Alabama services both large and small businesses. Regardless of your industry, we can help you take advantage of Alabama's business services.
            </p>

            <p>
            If you want to incorporate or form an LLC in Alabama, we can form your new company with the Alabama Secretary of State. For other Alabama businesses, we offer services like "Doing Business As" (DBA) names and Employer Identification Number applications. We can also help you identify common business licensing requirements for virtually any of Alabama's 67 counties or numerous cities and towns.
            </p>
            <div className="tabs-Alabama-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Alabama-tab ${activeTab === tab.name ? 'tabs-Alabama-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Alabama-tab-indicator">
                <div className={`tabs-Alabama-indicator tabs-Alabama-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Alabama-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Alabama;
