import React, { useState } from 'react';
import './Tabs_North_Carolina.css';

import Corporation from './Content_North_Carolina/Corporation';
import LLC from './Content_North_Carolina/LLC';
import Business_Licenses from './Content_North_Carolina/Business Licenses';


const Tabs_North_Carolina = () => {
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
        <div className="tabs-North_Carolina-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            North Carolina has the tenth-largest population in the nation, and the ninth-largest GDP. Twenty-one North Carolina companies are among the country's largest 1000, including Bank of America, Martin Marietta Materials, Reynolds American, Lowe's and LabCorp. The state is nationally recognized for its competitive business climate, including in such industries as aerospace, automotive, biotechnology, energy, financial services and information and communications technology. The state is home to more than 800,000 small businesses that represent 98 percent of the state's employers and employ some 1.5 million workers.
            </p>
            
            <div className="tabs-North_Carolina-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-North_Carolina-tab ${activeTab === tab.name ? 'tabs-North_Carolina-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-North_Carolina-tab-indicator">
                <div className={`tabs-North_Carolina-indicator tabs-North_Carolina-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-North_Carolina-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_North_Carolina;
