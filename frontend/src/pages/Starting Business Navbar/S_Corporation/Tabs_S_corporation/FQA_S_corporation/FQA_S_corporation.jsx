import React from 'react';
import './FQA_S_corporation.css'; // Updated the renamed CSS file

const FQA_S_corporation = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fqa-s-corporation-container" id="top">
            {/* <h2>Registered Agent FAQs</h2> */}
            <ul className="fqa-s-corporation-list">
                <li onClick={() => scrollToSection('Question_1')} className="fqa-s-corporation-question fqa-s-corporation-list-item">
                Do I need an attorney to form a corporation?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fqa-s-corporation-question fqa-s-corporation-list-item">
                What are the requirements to form an s corporation (s corp)?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fqa-s-corporation-question fqa-s-corporation-list-item">
                What is the cost of setting up an s corp?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fqa-s-corporation-question fqa-s-corporation-list-item">
                Is an s corp required to have a registered agent?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fqa-s-corporation-question fqa-s-corporation-list-item">
                What do I need to do after I form my s corp?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fqa-s-corporation-question fqa-s-corporation-list-item">
                What is the organizational structure of an s corp?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fqa-s-corporation-question fqa-s-corporation-list-item">
                Can an s corp own an LLC?
                </li>
                <li onClick={() => scrollToSection('Question_8')} className="fqa-s-corporation-question fqa-s-corporation-list-item">
                Can the personal asset protection provided by forming an s corp be taken away?
                </li>
                
            </ul>

            <div id="Question_1" className="fqa-s-corporation-section">
                <h3>Do I need an attorney to form a corporation?</h3>
                <p>
                No. You can prepare and file necessary paperwork yourself, or you can use Ascend to incorporate your business. If you are unsure whether incorporating will benefit your business, please call us at 800-818-6082. Our Business Specialists are happy to provide you with the information you need to make the right decision.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqa-s-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fqa-s-corporation-section">
                <h3>What are the requirements to form an s corp?</h3>
                <p>
                Ascend will guide you through the steps to incorporate your business either online or by telephone. We simplify the process of registering your new s corp
                </p>
                <ul>
                    <li>Form your s corp online or contact a Business Specialist at 9800000000.</li>
                    <li>We assign your order to a Business Specialist, who contacts you if there are any problems with the preliminary name search.</li>
                    <li>We complete Articles of Incorporation on your behalf. A few states require us to get your signature on the completed documents before submission. Normally, we submit documents directly to the state.</li>
                    <li>We forward the state approval notice to you (generally within 5-10 business days, but turnaround time varies by state).</li>
                    <li>You apply for s corp status through the IRS by filing Form 2553 (this form is included with your formation package).</li>
                </ul>
                
                <p onClick={() => scrollToSection('top')} className="fqa-s-corporation-back-to-top">Back to Top</p>
            </div>


            <div id="Question_3" className="fqa-s-corporation-section">
                <h3>What is the cost of setting up an S Corp?</h3>
                <p>
                The costs associated with setting up an s corp, LLC, and c corp are similar. However, there are other intangible factors you must take into account. Every s corp is unique and comes with its own set of advantages and disadvantages. Among the subchapter s corp requirements you must weigh when considering this particular status is that s corps must file articles of incorporation, keep a record of corporate minutes, hold shareholder and director meetings, as well as allow their shareholders to weigh in with a vote concerning company decisions. S corps can also only offer common stock to investors, making fund-raising more difficult. If you are still undecided as to the pros and cons of declaring your business an s corp, please contact Ascend to speak to someone who may be able to set you on the right path.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqa-s-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_4" className="fqa-s-corporation-section">
                <h3>Is an s corp required to have a registered agent?</h3>
                <p>
                Yes. State laws require all corporations to maintain a registered address with the Secretary of State in each state where they do business. The person or company located at that address, known as the registered agent, must remain available during all business hours. A registered agent receives and forwards important legal documents and state correspondence on behalf of the business.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqa-s-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fqa-s-corporation-section">
                <h3>What do I need to do after I form my s corp?</h3>
                <ul>
                    <li>Most states require s corps to file annual reports and pay franchise taxes to maintain their good standing. Failure to file annual reports and pay franchise taxes can result in fines, notices, and the inability to conduct business. You may be able to file many of these S Corp documents online. Ascend can help you ensure each of your forms are correctly filled out and submitted according to schedule.</li>
                    <li>State laws require s corps to hold annual meetings of shareholders and directors and record meeting minutes. Owners and directors of an s corp use corporate minutes to reflect changes in management and important corporate activities.</li>
                    <li>Additionally, almost all state, county, and local governments require s corps to complete business license, permit, and tax registration applications before beginning to operate.</li>
                </ul>
                
                <p onClick={() => scrollToSection('top')} className="fqa-s-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="fqa-s-corporation-section">
                <h3>What is the organizational structure of an s corp?</h3>
                <p>
                The company is owned by shareholders, who elect directors. The directors set a vision for the corporation and are responsible for the management of the corporation. The officers and managers hired by the directors are responsible for carrying out the vision on a day-to-day basis.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqa-s-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_7" className="fqa-s-corporation-section">
                <h3>Can an S Corp own an LLC?</h3>
                <p>
                An s corp can own an LLC. However, only single-member LLCs can own a stake in an s corp. One of the tax advantages of an s corp is similar to that of an LLC in that both can pass their profits and losses through to their personal income tax report each year.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqa-s-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_8" className="fqa-s-corporation-section">
                <h3>Can the personal asset protection provided by forming an s corp be taken away?</h3>
                <p>
                Generally the owners of a corporation cannot be held liable for the debts and obligations of the corporation. However, if owners treat the corporation as an extension of themselves – sometimes referred to as "disregarding the corporation form" – such as by commingling personal and corporate funds or making important decisions without holding board meetings or passing resolutions, then creditors can attempt to hold owners liable for the debts and obligations of the company-often called "piercing the corporate veil." The "corporate veil" can also be lost if a corporation is terminated by a state for failure to file required forms or pay required fees and taxes.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqa-s-corporation-back-to-top">Back to Top</p>
            </div>


            {/* Continue updating the rest of the sections similarly */}
        </div>
    );
};

export default FQA_S_corporation;
