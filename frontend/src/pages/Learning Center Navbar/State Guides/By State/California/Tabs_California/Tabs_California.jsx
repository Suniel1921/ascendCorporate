import React, { useState } from 'react';
import './Tabs_California.css';

import Corporation from './Content_California/Corporation';
import LLC from './Content_California/LLC';
import Business_Licenses from './Content_California/Business Licenses';
import TaxFees from './Content_California/Tax&fees';
import CertificatesForms from './CertificatesForms';
import DoingBusinessAs from './Content_California/DoingBusinessAs';
import NameSearch from './Content_California/NameSearch';


const Tabs_California = () => {
    const [activeTab, setActiveTab] = useState('Corporation');

    // Define your tabs dynamically (excluding Overview and FAQs)
    const tabs = [
        { name: 'Incorporate', content: <Corporation /> },
        { name: 'LLC', content: <LLC /> },
        { name: 'Taxes & Fees', content: <TaxFees/> },
        { name: 'Certificates & Forms', content: <CertificatesForms/> },
        { name: 'Name & Search', content: <NameSearch/> },
        { name: 'Doing Business As', content: <DoingBusinessAs/> },
        { name: 'Business License', content: <Business_Licenses /> },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-California-container">
            
            <div className="tabs-California-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabs-California-tab ${activeTab === tab.name ? 'tabs-California-active' : ''}`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tabs-California-tab-indicator">
                <div className={`tabs-California-indicator tabs-California-${activeTab.toLowerCase()}`}></div>
            </div>
            <div className="tabs-California-tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs_California;
