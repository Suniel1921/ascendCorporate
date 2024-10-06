import React, { useState } from 'react';
import './Tabs_Illinois.css';

import Corporation from './Content_Illinois/Corporation';
import LLC from './Content_Illinois/LLC';
import Business_Licenses from './Content_Illinois/Business Licenses';


const Tabs_Illinois = () => {
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
        <div className="tabs-Illinois-container">
            <h2>LLC, Business License, Incorporation</h2>

            <p>
            Illinois is home to the nation's largest inland transportation hub and port, and home to more than 30 Fortune 500 companies, including Boeing, Walgreens and McDonald's. Hundreds of others maintain headquarters in the State. There are also more than 500,000 small businesses who choose to incorporate in Illinois. Illinois' economy is the fifth largest in the nation and 19th largest in the world, and its high-tech and start-up economy has been ranked among the top ten nationwide.
            </p>
            
            <div className="tabs-Illinois-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-Illinois-tab ${activeTab === tab.name ? 'tabs-Illinois-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-Illinois-tab-indicator">
                <div className={`tabs-Illinois-indicator tabs-Illinois-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-Illinois-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Illinois;
