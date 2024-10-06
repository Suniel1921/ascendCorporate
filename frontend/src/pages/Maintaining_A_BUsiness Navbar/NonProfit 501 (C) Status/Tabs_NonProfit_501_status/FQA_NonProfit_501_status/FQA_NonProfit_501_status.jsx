import React from 'react';
import './FQA_NonProfit_501_status.css'; // Updated the renamed CSS file

const FQA_NonProfit_501_status = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="FQA_NonProfit_501_status-container" id="top">
            <h2>
                Nonprofit 501(C)Status FAQs
            </h2>
            <ul className="FQA_NonProfit_501_status-list">
                <li onClick={() => scrollToSection('Question_1')} className="FQA_NonProfit_501_status-question FQA_NonProfit_501_status-list-item">
                    What is Non Profit Tax Exemption?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="FQA_NonProfit_501_status-question FQA_NonProfit_501_status-list-item">
                    What are the benefits of forming a nonprofit corporation?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="FQA_NonProfit_501_status-question FQA_NonProfit_501_status-list-item">
                    Which form do I file?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="FQA_NonProfit_501_status-question FQA_NonProfit_501_status-list-item">
                    When do I need to file form 501c to receive tax-exempt status?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="FQA_NonProfit_501_status-question FQA_NonProfit_501_status-list-item">
                    How can Ascend help me?
                </li>

            </ul>

            <div id="Question_1" className="FQA_NonProfit_501_status-section">
                <h3>What is Non Profit Tax Exemption?</h3>
                <p>
                    Section 501(c) is a tax law provision granting exemption from the federal income tax to non-profit organizations.  There are different types of 501(c) organizations.  501(c) is the most common, but you can apply for tax exemption for any of the IRS accepted types of nonprofits.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_NonProfit_501_status-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="FQA_NonProfit_501_status-section">
                <h3>What are the benefits of forming a nonprofit corporation?</h3>
                <p>
                    Nonprofit corporations that qualify for 501(c)status enjoy the following advantages:
                </p>
                <ul>
                    <li>Personal asset protection and limited liability for directors and officers</li>
                    <li>Tax exemption from federal income tax as a charitable organization</li>
                    <li>Grant eligibility to receive private and public grants</li>
                    <li>The ability to receive tax-deductible donations from donors</li>
                    <li>Perpetual existence, even if a director leaves the business or passes away</li>
                    <li>Possible exemptions from property taxes</li>
                    <li>Application for special postage rates at a reduced cost</li>
                </ul>

                <p onClick={() => scrollToSection('top')} className="FQA_NonProfit_501_status-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="FQA_NonProfit_501_status-section">
                <h3>Which form do I file?</h3>
                <p>
                    For 501(c)tax exemption, you'll file IRS form 1023.  For other 501(c) exemptions, you'll file IRS form 1024.
                </p>

                <p onClick={() => scrollToSection('top')} className="FQA_NonProfit_501_status-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="FQA_NonProfit_501_status-section">
                <h3>When do I need to file form 501(c) to receive tax-exempt status?</h3>
                <p>
                    In order to receive tax-exempt status as a charitable organization retroactive to the formation date, the initial deadline to file an exemption application is 15 months from the end of the month in which the organization was formed. However, the IRS has granted an automatic extension of the application filing deadline of 12 months, so the due date is extended to a total of 27 months from the end of the month of formation. For organizations not filing an application within 27 months, the organization may apply for a longer discretionary extension through submitting "Schedule E" with the application. After the initial deadline, a company can still file for exemption under 501(c) at any time, but if not within the boundaries just mentioned, the tax-exempt status will not be valid until filed with the IRS.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_NonProfit_501_status-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="FQA_NonProfit_501_status-section">
                <h3>How Ascend can help me?</h3>
                <p>
                    We will obtain the information necessary to complete the 26 page form with the IRS. Next, we'll submit your filing to the IRS, along with any necessary supporting documents. Shortly after the submission, the IRS will respond with additional questions. We will assist you every step of the way in answering their questions, until your filing is complete.
                </p>

                <p onClick={() => scrollToSection('top')} className="FQA_NonProfit_501_status-back-to-top">Back to Top</p>
            </div>


        </div>
    );
};

export default FQA_NonProfit_501_status;
