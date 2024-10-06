import React, { useState } from 'react';
import './Tabs_DBA_Business_Name.css';
import FQA_DBA_Business_Name from './FQA_DBA_Business_Name/FQA_DBA_Business_Name';

const Tabs_DBA_Business_Name = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-dba-business-name-container">
            <h2>
            Doing business as (DBA) names
            </h2>
            <div className="tabs-dba-business-name-tabs">
                <div
                    className={`tabs-dba-business-name-tab ${activeTab === 'Overview' ? 'tabs-dba-business-name-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-dba-business-name-tab ${activeTab === 'FAQs' ? 'tabs-dba-business-name-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-dba-business-name-tab-indicator">
                <div className={`tabs-dba-business-name-indicator ${activeTab === 'Overview' ? 'tabs-dba-business-name-overview' : 'tabs-dba-business-name-faqs'}`}></div>
            </div>
            <div className="tabs-dba-business-name-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <h2>
                        Register your company's trade name the right way.
                        </h2>

                        <p>
                        State and local governments usually require companies to register any alternate names under which they do business. Called a Doing Business As (DBA) filing, this action allows your company to legally operate under a trade name, also known as an "assumed" or "fictitious" name.
                        </p>
                        <p>
                        By having a Doing Business As name, it's possible for sole proprietors and general partners to do business using a name other than the owners' personal name. In the case of c corporations, s corporations, limited liability companies (LLCs), nonprofits and some other formation types, a DBA filing allows them to do business under a name different than the one that appears on their original incorporation documents.
                        </p>
                        <p>
                        Here are a few practical examples of how DBA names are used:
                        </p>
                        <ul>
                            <li>Sole proprietors and general partners often choose to operate under a DBA name. For example, business owner John Smith might file the Doing Business As name "Smith Roofing."</li>
                            <li>Corporations and limited liability companies (LLCs) may register DBA names for specific lines of business. For example, Helen's Food Service Inc. might register the DBA "Helen's Catering."</li>
                        </ul>
                        <p>
                        By registering a DBA name for your business, you could enjoy:
                        </p>
                        <ul>
                            <li>better visibility for marketing purposes</li>
                            <li>enhanced credibility among suppliers and customers</li>
                            <li>an easier time opening business bank accounts</li>
                            <li>the ability to transact business under a different name on the Internet</li>
                        </ul>
                        <h2>
                            Ascend can help
                        </h2>
                        <p>
                            Ascend can file Doing Business As names for corporations, limited liability companies (LLCs), and some sole proprietorships and partnerships. Let us know that you'd like to register a DBA name and we'll send you the right application. You just sign and return it to us and we'll take it from there. Once the state or local government has accepted your request, we'll send you an approval notice. Your DBA name will then be part of the public record.
                        </p>
                        <h4>
                        Call us at 980000000 to get started.
                        </h4>
                        
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                       <FQA_DBA_Business_Name/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_DBA_Business_Name;
