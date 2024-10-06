import React, { useState } from 'react';
import './Tabs_Eni.css'; // Updated the CSS file name
import FQAS_Eni from "../FQAS_Eni/FQAS_Eni"

const Tabs_Eni = () => { // Updated the component name
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-eni-container">
            <div className="tabs-eni-tabs">
                <div
                    className={`tabs-eni-tab ${activeTab === 'Overview' ? 'tabs-eni-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-eni-tab ${activeTab === 'FAQs' ? 'tabs-eni-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-eni-tab-indicator">
                <div className={`tabs-eni-indicator ${activeTab === 'Overview' ? 'tabs-eni-overview' : 'tabs-eni-faqs'}`}></div>
            </div>
            <div className="tabs-eni-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>Much like a Social Security Number, an Employer Identification Number (EIN) is a federal nine-digit number that identifies a business entity. The Internal Revenue Service (IRS) issues EINs and requires their use on all tax filings during the entire life of a business.</p>
                        <p>
                            <b>The IRS generally requires the following types of businesses to obtain an EIN:</b>
                        </p>
                        <ul>
                            <li>All corporations</li>
                            <li>All Limited Liability Companies (LLCs) with more than one member</li>
                            <li>Any business that hires employees, including sole proprietorships and single-member LLCs</li>
                        </ul>
                        <p>
                        Many nonprofit organizations, as well as trusts and certain co-ops, must also have an EIN. If a business has changed its formation type or emerged from bankruptcy, it is typically required to apply for a new Employer Identification Number (EIN).
                        </p>
                        <p>
                        For many business owners, obtaining an EIN is one of the first things they do after incorporating or forming an LLC. Along with tax filings, businesses often need an EIN in order to:
                        </p>
                        <ul>
                            <li>open business checking accounts</li>
                            <li>establish accounts with certain vendors</li>
                        </ul>
                        <p>
                        Sometimes you'll see the Employer Identification Number referred to as a Federal Tax Identification Number (TIN) or a Federal Employer Identification Number (FEIN). As a general rule, it's good for all businesses, with the exception of sole proprietorships without employees, to have an EIN. 
                        </p>
                        <h2>Ascend can help</h2>
                        <p>
                        Ascend can obtain an Employer Identification Number (EIN) from the IRS on your business's behalf. The process is fast, easy and cost-effective.
                        </p>
                        <h2>Learn More</h2>
                        
                        <p>
                        Get more details about your Employer Identification Number (EIN) in our Frequently Asked Questions section.
                        </p>
                        <h2>
                            Ready to sign up for our Registered Agent Services?
                        </h2>
                        <button className="tabs-eni-overview-button">Get Started</button>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <FQAS_Eni/>
                )}
            </div>
        </div>
    );
};

export default Tabs_Eni; // Updated the export name
