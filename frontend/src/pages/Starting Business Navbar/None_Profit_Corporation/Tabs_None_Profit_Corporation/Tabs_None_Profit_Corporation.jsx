import React, { useState } from 'react';
import './Tabs_None_Profit_Corporation.css'; // Updated the CSS file name
import FQA_None_Profit_Corporation from './FQA_None_Profit_Corporation/FQA_None_Profit_Corporation';

const Tabs_None_Profit_Corporation = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-none-profit-corporation-container">
            <h2>
                    Get liability protection and tax-exempt status benefits for your qualifying nonprofit organization.
                </h2>
            <div className="tabs-none-profit-corporation-tabs">
                
                <div
                    className={`tabs-none-profit-corporation-tab ${activeTab === 'Overview' ? 'tabs-none-profit-corporation-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-none-profit-corporation-tab ${activeTab === 'FAQs' ? 'tabs-none-profit-corporation-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-none-profit-corporation-tab-indicator">
                <div className={`tabs-none-profit-corporation-indicator ${activeTab === 'Overview' ? 'tabs-none-profit-corporation-overview' : 'tabs-none-profit-corporation-faqs'}`}></div>
            </div>
            <div className="tabs-none-profit-corporation-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>If your organization is involved primarily in educational, scientific, religious, or charitable endeavors, you'll probably want to form a nonprofit corporation for the liability protections and tax advantages this status provides.</p>
                        <h2>How to Start A Nonprofit Organization</h2>
                        <p>Incorporating your nonprofit will set legal protections in place that can keep you and your directors' personal assets separate from the company's liabilities. There are a number of other benefits to forming a nonprofit, as well.</p>
                        <p>
                            In general, nonprofit corporations enjoy the following benefits:
                        </p>
                        <ul>
                            <li><b>Limited liability protection. </b>Directors and officers are not personally liable for the organization's debts and liabilities.</li>
                            <li><b>Perpetual existence. </b>The corporation continues even if a director leaves the business or passes away.</li>
                            <li><b>Eligibility for grants. </b> Nonprofits may be eligible for certain public and private grants.</li>

                        </ul>
                        <p>
                            While nonprofits are bound by different state laws than for-profit enterprises, in general their formation processes are quite similar. Like a regular corporation, nonprofits must file Articles of Incorporation with the state in which they wish to incorporate.
                        </p>
                        <h2>
                            Nonprofit Tax Forms
                        </h2>
                        <p>n addition, the IRS requires nonprofit organizations seeking tax-exempt status to file Form 1023. Several states also require organizations to file for state-level tax-exemption. The nonprofit status most commonly sought by organizations is the Internal Revenue Service's 501(c) tax-exempt status. Organizations that qualify for 501(c) status enjoy the following advantages:
                        </p>

                        <ul>
                            <li><b>Tax-exempt status.</b>Qualifying nonprofits can apply for federal and state tax-exempt status</li>
                            <li><b>Enhanced credibility.</b>Potential donors may be more inclined to give to an organization that has an official nonprofit status
                            </li>
                            <li><b>Tax-deductible donations.</b> Donations made by individuals to the nonprofit corporation may be tax-deductible
                            </li>
                            <li><b>Possible exemption.</b> from certain property taxes.
                            </li>
                            <li><b>Reduced postage rates.</b>
                            </li>

                        </ul>
                        <h2>
                        Ascend Can Help Nonprofit Incorporation
                        </h2>
                        <p>
                        Ascend can help you form a nonprofit corporation in any state or the District of Columbia and assist your nonprofit by providing the forms necessary for it to obtain tax-exempt 501(c) status with the IRS.
                        </p>
                        <p>
                        It is important to remember that a 501(c) must satisfy certain conditions and requirements imposed by the IRS to obtain and maintain tax-exempt status. Ascend cannot provide legal or tax advice regarding these conditions and requirements and it may be necessary for your nonprofit to consult with other professionals, such as lawyers, accountants or tax advisors.
                        </p>
                        

                        <h2>
                            Ready to create your company?
                        </h2>
                        <button className="tabs-none-profit-corporation-overview-button">Get Started</button>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>

                        <FQA_None_Profit_Corporation />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_None_Profit_Corporation;
