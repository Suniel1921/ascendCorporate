import React, { useState } from 'react';
import './Tabs_By_Laws.css';
import FQA_By_Laws from './FQA_By_Laws/FQA_By_Laws';
// import FQA_C_corporation from './FQA_S_Coroporation/FQA_C_Coroporation';

const Tabs_By_Laws = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-by-laws-container">
            <div className="tabs-by-laws-tabs">
                <div
                    className={`tabs-by-laws-tab ${activeTab === 'Overview' ? 'tabs-by-laws-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-by-laws-tab ${activeTab === 'FAQs' ? 'tabs-by-laws-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-by-laws-tab-indicator">
                <div className={`tabs-by-laws-indicator ${activeTab === 'Overview' ? 'tabs-by-laws-overview' : 'tabs-by-laws-faqs'}`}></div>
            </div>
            <div className="tabs-by-laws-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                            Bylaws include the rules and regulations that govern your corporation. Each state has its own requirements for what items must be included in the bylaws.
                        </p>
                        <p>
                            Among a number of other details, corporate bylaws generally contain:
                        </p>
                        <ul>
                            <li>the structure of the organization</li>
                            <li>the duties and responsibilities of a corporation's members</li>
                            <li>details about the board of directors</li>
                            <li>information about when and where directors' and shareholders' meetings will be held</li>
                            <li>a list of committees</li>
                        </ul>
                        <p>
                            Much the same, limited liability companies (LLCs) in many states are required to create an LLC operating agreement; a document that provides a framework for their operation.
                        </p>
                        <p>
                            LLC operating agreements typically contain information about:
                        </p>
                        <ul>
                            <li>members' percentages of ownership</li>
                            <li>members' rights and responsibilities</li>
                            <li>members' voting powers</li>
                            <li>allocation of profits and losses</li>
                            <li>management details</li>
                            <li>the fiduciary duties of members and managers</li>
                        </ul>
                        <p>
                            Corporations and LLCs aren't required to file their bylaws or operating agreements with the Secretary of State. Still, you should have them in place as soon as you've incorporated or formed your LLC, because these documents are often requested by:
                        </p>
                        <ul>
                            <li>lenders, when you're trying to obtain financing</li>
                            <li>banks, when you're opening a business checking account</li>
                            <li>potential business partners or investors</li>
                            <li>attorneys and accountants</li>
                        </ul>
                        <h2>
                            Ascend can help.
                        </h2>
                        <p>
                            No matter what state your business is headquartered in, Ascend can provide you with an operating agreement that is specially tailored to your company. For the same fee, we can also help you with bylaws for your corporation in any state.
                        </p>
                        <p>
                            Provide us with basic information about your company's owners, management, and purpose. We will then input that information into a standard bylaws or operating agreement template for your company. Once we've completed your bylaws or operating agreement, we'll send it to you by email. You can then print it and keep it with your company records. Unfortunately, Ascend cannot provide you with legal advice in the preparation of your bylaws or operating agreement and you should consult an attorney if you need legal advice.
                        </p>
                        <h2 className='heading_bottom'>
                            Learn More
                        </h2>
                        <p>
                        Find more details about bylaws and operating agreements in our Frequently Asked Questions section.
                        </p>
                        <h3>
                        Call us at 980000000 to get started.
                        </h3>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                        {/* <FQA_C_corporation /> */}
                        <FQA_By_Laws/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_By_Laws;
