import React, { useState } from 'react';
import './Tabs_Business_Glossary.css';

import Content_A from './Content_Business_Glossary/Content_A';
import Content_B from './Content_Business_Glossary/Content_B';
import Content_C from './Content_Business_Glossary/Content_C';
import Content_D from './Content_Business_Glossary/Content_D';
import Content_EG from './Content_Business_Glossary/Content_EG';
import Content_HL from './Content_Business_Glossary/Content_HL';
import Content_M from './Content_Business_Glossary/Content_M';
import Content_NO from './Content_Business_Glossary/Content_NO';
import Content_P from './Content_Business_Glossary/Content_P';
import Content_QR from './Content_Business_Glossary/Content_QR';
import Content_S from './Content_Business_Glossary/Content_S';
import Content_TZ from './Content_Business_Glossary/Content_TZ';

const Tabs_Business_Glossary = () => {
    const [activeTab, setActiveTab] = useState('A');

    // Define your tabs dynamically (excluding Overview and FAQs)
    const tabs = [
        { name: 'A', content: <Content_A /> },
        { name: 'B', content: <Content_B /> },
        { name: 'C', content: <Content_C /> },
        { name: 'D', content: <Content_D /> },
        { name: 'E-G', content: <Content_EG /> },
        { name: 'H-L', content: <Content_HL /> },
        { name: 'M', content: <Content_M /> },
        { name: 'N-O', content: <Content_NO /> },
        { name: 'P', content: <Content_P /> },
        { name: 'Q-R', content: <Content_QR /> },
        { name: 'S', content: <Content_S /> },
        { name: 'T-Z', content: <Content_TZ /> },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-business-glossary-container">
            <p>
            Browse or search business terms in the online business glossary. Here you will find the definition of incorporate, information on business terms, both specific to incorporation and otherwise. Further expand your business vocabulary by using the cross-reference index.
            </p>
            <div className="tabs-business-glossary-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-business-glossary-tab ${activeTab === tab.name ? 'tabs-business-glossary-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-business-glossary-tab-indicator">
                <div className={`tabs-business-glossary-indicator tabs-business-glossary-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-business-glossary-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_Business_Glossary;
