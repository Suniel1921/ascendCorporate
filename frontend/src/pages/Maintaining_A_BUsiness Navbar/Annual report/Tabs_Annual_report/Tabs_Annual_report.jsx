import React, { useState } from 'react';
import "./Tabs_Annual_report.css";
import FQA_Annual_report from './FQA_Annual_report/FQA_Annual_report';

const Tabs_Annual_Report = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-annual-report-container">
            <h2>
                The painless way to maintain your company's good standing.
            </h2>
            <div className="tabs-annual-report-tabs">
                <div
                    className={`tabs-annual-report-tab ${activeTab === 'Overview' ? 'tabs-annual-report-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-annual-report-tab ${activeTab === 'FAQs' ? 'tabs-annual-report-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-annual-report-tab-indicator">
                <div className={`tabs-annual-report-indicator ${activeTab === 'Overview' ? 'tabs-annual-report-overview' : 'tabs-annual-report-faqs'}`}></div>
            </div>
            <div className="tabs-annual-report-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>Preparing and filing annual reports for your company demands time, diligence and expense. Deadlines and filing requirements vary from state to state, and with annual reminders becoming a less-common courtesy, it's easy to be left in the dark about when your annual reports are due. Save time and reduce your chances of filing mishaps by outsourcing your annual report needs to Ascend </p>



                        <div className="video-frame-container">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/3TfyvM26SyU"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h2>
                        With Ascend Annual Report Prep and Filing services we'll:
                        </h2>
                        <p>
                        By filing an annual report, you're providing the Secretary of State with updated information about your business. The details of your annual report may vary from state to state, but typically include information about your corporation or LLC such as:
                        </p>

                        <ul>
                            <li>Conduct an initial audit to ensure you are in good standing</li>
                            <li>Track filing deadlines for your annual reports</li>
                            <li>Prepare annual reports on your behalf and file the completed documents</li>
                            <li>Update your company information in the CSCNavigator® platform</li>
                            
                        </ul>

                        <p>Our Annual Report specialists will prepare and submit all of your annual report paperwork to the offices of the Secretary of State. We contact you 30-60 days prior to your Annual Report due date to complete the filing, ensuring you meet your state requirements on time.</p>
                        <h2>
                        Ascend Annual Report Preparation and Filing services will allow you to:
                        </h2>
                        <ul>
                            <li>Eliminate unreliable tracking methods</li>
                            <li>Reduce the risk of missed filings and loss of good standing</li>
                            <li>Avoid the cost of reinstatement fees, penalties and interest, and even the expense of cutting and mailing checks.</li>
                        </ul>
                        <p>
                        By letting Ascend take care of your day-to-day annual report needs, you'll have time to focus on other, more ambitious business goals.
                        </p>
                        
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_Annual_report />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Annual_Report;
