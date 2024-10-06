import React, { useState } from 'react';
import './Tabs_NonProfit_501_status.css';
import FQA_NonProfit_501_status from './FQA_NonProfit_501_status/FQA_NonProfit_501_status';


const Tabs_NonProfit_501_status = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-nonprofit-501-status-container">
            <h2 className='top_tabs-None-h2'>
                How to form a 501(c)(3) organization or nonprofit.
            </h2>
            <p className='top_tabs-None-p'>
                By forming a nonprofit corporation such as a 501(c)(3), you'll ensure limited liability for those people involved in its management. Incorporating your nonprofit organization can help you to establish the kind of legal protection that separates personal assets from the activities of the corporation
            </p>
            <div className="tabs-nonprofit-501-status-tabs">
                <div
                    className={`tabs-nonprofit-501-status-tab ${activeTab === 'Overview' ? 'tabs-nonprofit-501-status-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-nonprofit-501-status-tab ${activeTab === 'FAQs' ? 'tabs-nonprofit-501-status-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-nonprofit-501-status-tab-indicator">
                <div className={`tabs-nonprofit-501-status-indicator ${activeTab === 'Overview' ? 'tabs-nonprofit-501-status-overview' : 'tabs-nonprofit-501-status-faqs'}`}></div>
            </div>
            <div className="tabs-nonprofit-501-status-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                            Though other types of nonprofit organizations exist, our customers typically seek 501(c) tax-exempt status with the Internal Revenue Service (IRS).
                        </p>
                        <h2>
                            Our Signature 501(c) and 501(c)(3) Services includes the following:
                        </h2>
                        <ul>
                            <li>One hour, quick start welcome call with a nonprofit expert.</li>
                            <li>IRS Form 1023 application completion.</li>
                            <li>Additional Schedules completed, if required.</li>
                            <li>Narratives & Explanations (Your organization's programs and descriptions in a narrative format).</li>
                            <li>Completion of 3 year financial budget and projections.</li>
                            <li>IRS required Conflict of Interest Policy.</li>
                            <li>Review of Articles for required IRS language.</li>
                            <li>Completed IRS checklist.</li>
                            <li>Inventory of Documents completed.</li>
                            <li>5 day turnaround from order submission to IRS filing.</li>
                            <li>Completed application packet USPS priority mailed to IRS, postage paid: Packet includes: Form 1023 checklist, Form 2848 Power of Attorney, Form 1023 Application, Schedules A – H as required, Copy of Articles of Incorporation, Bylaws, Narratives and Explanations of programs and activities, Financial Data, copies of organization's marketing materials and fundraising efforts, scanned, ordered and labeled per IRS protocols.</li>
                            <li>Documents USPS priority mailed to you for review and signature.</li>
                            <li>A nonprofit advisor available to help you every step of the way.</li>
                        </ul>
                        <h2>
                            The Signature Package also includes these valuable services:
                        </h2>
                        <ul>
                            <li>Professional IRS representation and case management – Our team contacts the IRS on behalf of your organization. A completed form 2848 allows our team to receive IRS correspondence and respond to the IRS if the client is unavailable. You will never miss an important IRS notice or deadline.</li>
                            <li>Non Profit Advisor Academy – Immediate access to online educational program to help you start, fund and grow your nonprofit. The Academy is 7 modules each containing multiple lessons on crafting your mission statement, creating your organization's vision, defining values, selecting board members and officers, nonprofit governance, tax compliance and receipting of donations, fundraising and much more. You will receive invites to live monthly teleclasses, trainings and alerts of important changes in the tax code. All this is included with your Academy membership.</li>
                            <li>Drafting of IRS response letters – Most organizations will receive written questions from the IRS. It is not uncommon to receive dozens of technical questions that must be answered before your application will be approved. Our team will assist in drafting IRS response letters and speak directly with IRS examiner to expedite question and answer process.</li>
                            <li>100% Approval, Money Back Guarantee* – Our team will work with your business, for as long as it takes, to receive a positive letter of determination.</li>

                        </ul>
                        <p >
                            *Does not include IRS user fee or incorporation fees.
                        </p>
                        <h2>
                        Nonprofit Formation with Ascend.
                        </h2>
                        <p>
                        It is important to remember that a 501(c) must satisfy certain conditions and requirements imposed by the IRS to obtain and maintain tax-exempt status. Ascend cannot provide legal or tax advice regarding these conditions and requirements and it may be necessary for your nonprofit to consult with other professionals, such as lawyers, accountants or tax advisors.
                        </p>
                        <h2>
                        Learn more about 501(c) and 501(c)(3) Statuses
                        </h2>
                        <p>
                        Find out more about 501(c) status in our Frequently Asked Questions section.
                        </p>
                        <p>
                        DISCLAIMER – Ascend does not provide tax or legal advice and the information above should not be relied upon in making any tax or legal decision.
                        </p>
                        {/* <h2 className='heading_bottom'>
                            Learn More
                        </h2>
                        <p>
                            Find more details about bylaws and operating agreements in our Frequently Asked Questions section.
                        </p> */}
                        <h3>
                            Call us at 980000000 to get started.
                        </h3>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                        <FQA_NonProfit_501_status />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_NonProfit_501_status;
