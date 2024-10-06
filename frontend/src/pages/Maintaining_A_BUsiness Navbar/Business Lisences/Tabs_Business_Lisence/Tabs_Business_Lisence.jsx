import React, { useState } from 'react';
import "./Tabs_Business_Lisence.css";
import FQA_Business_License from './FQA_Business_lisence/FQA_Business_lisence';

const Tabs_Business_License = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-business-license-container">
            <div className="tabs-business-license-tabs">
                <div
                    className={`tabs-business-license-tab ${activeTab === 'Overview' ? 'tabs-business-license-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-business-license-tab ${activeTab === 'FAQs' ? 'tabs-business-license-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-business-license-tab-indicator">
                <div className={`tabs-business-license-indicator ${activeTab === 'Overview' ? 'tabs-business-license-overview' : 'tabs-business-license-faqs'}`}></div>
            </div>
            <div className="tabs-business-license-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p><b>Most state, county, and local governments require companies to have the right licenses and permits in place before they open their doors.</b>There are more than 150,000 filing jurisdictions across the country, all with their own requirements. Depending on your particular industry and where you operate, any number of licenses and permits may apply to your business.</p>
                        <p><b>Examples of commonly required licenses and permits include:</b></p>

                        <ul>
                            <li>General business licenses</li>
                            <li>Tax registrations</li>
                            <li>Health permits</li>
                            <li>State-issued occupational licenses</li>
                            <li>Liquor licenses</li>
                            <li>Lottery licenses</li>
                            <li>Reseller’s licenses</li>
                            <li>Zoning and land-use permits</li>
                            <li>Health department permits</li>
                        </ul>

                        <p>Failure to obtain and renew the correct business licenses and permits can result in fines, notices, and forced closure of your business.</p>
                        <p>
                            Understandably, many business owners find identifying and applying for the right business licenses and permits to be a time-consuming, complicated, and even an overwhelming process.
                        </p>
                        <h2>
                            Ascend can help.
                        </h2>
                        <p>
                            <b>Ascend can make getting the right business licenses and permits easy.</b>When you order our Business License Compliance Package, our compliance experts go to work identifying your business’s specific license, permit, and tax registration requirements. They gather the right applications and send you a customized packet of forms, instructions, and the right contact information for the relevant licensing authorities. Once you've received your paperwork, you simply fill it out and send it in.
                        </p>
                        <p>
                            If you do business in multiple locations, we can help you identify the special licenses, permits, and tax registrations required for each.
                        </p>
                        
                        <h2>Attaining a Business License in Different States</h2>
                        <ul>
                            <li>Delaeare</li>
                            <li>Nevada</li>
                            <li>Georgia</li>
                            <li>Maryland</li>
                            <li>Pennsylvaina</li>
                            <li>Connecticut</li>
                        </ul>
                        <h2>Call us at 9800000000 to get started.</h2>
                        {/* <button className="tabs-business-license-overview-button">Get Started</button> */}
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                        {/* <FQA_Business_License /> */}
                        <FQA_Business_License/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Business_License;
