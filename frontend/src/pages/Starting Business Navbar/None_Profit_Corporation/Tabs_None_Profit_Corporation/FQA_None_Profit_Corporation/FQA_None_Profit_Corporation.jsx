import React from 'react';
import './FQA_None_Profit_Corporation.css'; // Updated the renamed CSS file

const FQA_None_Profit_Corporation = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fqa-none-profit-corporation-container" id="top">
            {/* <h2>Registered Agent FAQs</h2> */}
            <ul className="fqa-none-profit-corporation-list">
                <li onClick={() => scrollToSection('Question_1')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    What is a nonprofit corporation?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    How do I qualify for Tax-Exempt Status as a Nonprofit?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    What are the benefits of forming a nonprofit corporation?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    Should I incorporate my nonprofit association?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    Do I need an attorney to form a nonprofit corporation?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    What are the steps to form a nonprofit corporation?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    What documents are required to form a nonprofit corporation?
                </li>
                <li onClick={() => scrollToSection('Question_8')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    Does my nonprofit need to register with the state in order to fundraise?
                </li>
                <li onClick={() => scrollToSection('Question_9')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    What must a 501(c)(3) organization do to be classified as a publicly supported organization (rather than as a private foundation)?
                </li>
                <li onClick={() => scrollToSection('Question_10')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    Can I still be a nonprofit if I don't apply for tax-exempt status?
                </li>
                <li onClick={() => scrollToSection('Question_11')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    Where should I form my nonprofit?
                </li>
                <li onClick={() => scrollToSection('Question_12')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    Is a nonprofit corporation required to have a registered agent?
                </li>
                <li onClick={() => scrollToSection('Question_13')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    After I form my nonprofit, how do I remain in compliance?
                </li>
                <li onClick={() => scrollToSection('Question_14')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    What's the difference between a public charity and a private foundation?
                </li>
                <li onClick={() => scrollToSection('Question_15')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    What are the common tax forms for charities?
                </li>
                <li onClick={() => scrollToSection('Question_16')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    Are there limitations on the activities in which my tax-exempt organization can engage?
                </li>
                <li onClick={() => scrollToSection('Question_17')} className="fqa-none-profit-corporation-question fqa-none-profit-corporation-list-item">
                    How many directors are nonprofit corporations required to have?
                </li>

            </ul>

            <div id="Question_1" className="fqa-none-profit-corporation-section">
                <h3>What is a nonprofit corporation?</h3>
                <p>
                    Educational, scientific, religious, and charitable organizations typically form nonprofit corporations to provide limited liability for the people involved in their management. Incorporating your nonprofit association can help you to establish the legal protection that separates the personal savings and possessions of those involved in the nonprofit from the activities of the corporation.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_2" className="fqa-none-profit-corporation-section">
                <h3>How do I qualify for Tax-Exempt Status as a Nonprofit?</h3>
                <p>
                    Though other types of nonprofit organizations exist, most of our customers seek 501(c)(3) tax-exempt status with the Internal Revenue Service (IRS). Ascend can help you form a nonprofit corporation in any state or the District of Columbia and assist you in obtaining your tax-exempt status with the IRS.
                </p>


                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>


            <div id="Question_3" className="fqa-none-profit-corporation-section">
                <h3>What are the benefits of forming a nonprofit corporation?</h3>
                <p>
                    Nonprofit corporations that qualify for 501(c)(3) status enjoy the following advantages:
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

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_4" className="fqa-none-profit-corporation-section">
                <h3>Should I incorporate my nonprofit association?</h3>
                <p>
                    4 Reasons to Incorporate your Nonprofit Association:
                </p>
                <ol>
                    <li>A nonprofit corporation enjoys exemption from corporate income taxes on profits from activities related to their purpose.</li>
                    <li>Qualifying for a tax exemption is harder for associations than for corporations. Without tax-exempt status, your group is unlikely to qualify for many public and private grants.</li>
                    <li>Donors can deduct gifts to your group on their federal and state tax income returns once your organization becomes a tax-exempt nonprofit corporation.</li>
                    <li>Members and directors of nonprofit corporations are generally protected from personal liability, meaning that their own money, houses, and cars aren't at risk. That's not true for an unincorporated association.</li>
                </ol>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fqa-none-profit-corporation-section">
                <h3>Do I need an attorney to form a nonprofit corporation?</h3>
                <p>
                    No. You can prepare and file necessary paperwork yourself, or you can use Ascend to incorporate your nonprofit. If you are unsure whether incorporating will benefit your nonprofit, please call us at 800-818-6082. Our Business Specialists are happy to provide you with the information you need to make the best decision.
                </p>


                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="fqa-none-profit-corporation-section">
                <h3>What are the steps to form a nonprofit corporation?</h3>
                <p>
                    8 Steps to Form a Nonprofit Organization:
                </p>
                <ol>
                    <li>Choose a business name.</li>
                    <li>Incorporate online or by phone with Ascend</li>
                    <li>Apply for your IRS tax exemption.</li>
                    <li>Apply for a state tax exemption.</li>
                    <li>Draft bylaws.</li>
                    <li>Appoint directors.</li>
                    <li>Hold a meeting of the board.</li>
                    <li>Obtain any necessary licenses and permits.</li>
                </ol>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_7" className="fqa-none-profit-corporation-section">
                <h3>What documents are required to form a nonprofit corporation?</h3>
                <p>
                    Typically Articles of Incorporation or a Certificate of Incorporation is filed with the Secretary of State (or equivalent office).
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_8" className="fqa-none-profit-corporation-section">
                <h3>Does my nonprofit need to register with the state in order to fundraise?</h3>
                <p>
                    Most states require that nonprofits register in a state before soliciting donations from residents of that state, and some states require registration if the nonprofit can receive donations from within that state (e.g., over the Internet), even if the nonprofit does not directly solicit donations from that state. In addition, the IRS requires disclosure of all states in which a nonprofit is registered on Form 990 if the nonprofit has income of more than $25,000 per year. Penalties for failure to register can include being forced to give back donations or facing criminal charges. Ascend can assist you in registering in those states in which you intend to solicit donations.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_9" className="fqa-none-profit-corporation-section">
                <h3>What must a 501(c)(3) organization do to be classified as a publicly supported organization (rather than as a private foundation)?</h3>
                <p>
                    A nonprofit organization that receives substantial portions of its income either from governmental sources or from direct contributions from the general public may qualify as a publicly supported organization under section 509(a) of the Internal Revenue Code. This designation leads to less regulation, exemption from certain taxes that private charities must pay, and other benefits. However, due to the complexity of the laws and regulations governing designation as a publicly supported organization, Ascend recommends that any nonprofit interested in this designation seek legal and tax counsel to provide the necessary advice.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_10" className="fqa-none-profit-corporation-section">
                <h3>Can I still be a nonprofit if I don't apply for tax-exempt status?</h3>
                <p>
                    Yes
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_11" className="fqa-none-profit-corporation-section">
                <h3>Where should I form my nonprofit?</h3>
                <p>
                    Most individuals or groups form nonprofit corporations in the state in which they will primarily operate. Advantages of forming a nonprofit corporation in your home state include:
                </p>
                <ul>
                    <li>Fewer complications, if you only plan to operate the nonprofit in your home state</li>
                    <li>No need to pay franchise taxes and file annual reports in more than one state</li>
                    <li>Less cost</li>
                </ul>
                <p>
                    Many companies conduct business throughout the United States and abroad. A nonprofit corporation with business locations in multiple states may form in a single state, then register to do business in other states. This means that nonprofit corporations must formally register, file annual reports, and pay annual fees in every state in which they conduct business.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_12" className="fqa-none-profit-corporation-section">
                <h3>Is a nonprofit corporation required to have a registered agent?</h3>
                <p>
                    State laws require all nonprofit corporations to maintain a registered address with the Secretary of State in each state where they do business. The person or company located at that address, known as the Registered Agent, must remain available during all business hours. A Registered Agent receives and forwards important legal documents and state correspondence on behalf of the business.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_13" className="fqa-none-profit-corporation-section">
                <h3>After I form my nonprofit, how do I remain in compliance?</h3>
                <p>
                    All corporations are generally required to file annual reports and pay franchise fees to the state in which they're incorporated; however, nonprofits are often exempt from paying franchise fees. In addition, nonprofits are generally required to annually renew their registration in any state in which they are registered. Nonprofits are also subject to various laws and regulations regarding their tax-exempt status. Ascend cannot provide legal or tax advice regarding the tax-exempt status or maintenance of your nonprofit corporation.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_14" className="fqa-none-profit-corporation-section">
                <h3>What's the difference between a public charity and a private foundation?</h3>
                <p>
                    Every exempt charitable organization is classified as either a public charity or a private foundation. They are distinguishable primarily by the level of public involvement in their activities.
                </p>
                <p>
                    Generally, organizations that are classified as public charities have an active program of fundraising and receive contributions from many sources (including the general public, governmental agencies, corporations, private foundations or other public charities). Examples include: churches, hospitals, schools, colleges and universities.
                </p>
                <p>
                    By contrast, private foundations typically have a single major source of funding (usually gifts from one family or corporation rather than funding from many sources). Many offer grants to other charitable organizations and to individuals, rather than operate charitable programs.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_15" className="fqa-none-profit-corporation-section">
                <h3>What are the common tax forms for charities?</h3>
                <p>
                    Common tax forms for charities are:
                </p>
                <ul>
                    <li>Form 990, Return of Organization Exempt from Income Tax</li>
                    <li>Form 990-EZ, Short Form Return of Organization Exempt from Income Tax</li>
                    <li>Form 1023, Application for Recognition of Exemption for 501(c)(3) Charitable Organizations</li>
                    <li>Form 1024, Application for Recognition of Exemption for 501(a) Organizations</li>
                    <li>Form 1120, U.S. Income Tax Return for Certain Political Organizations</li>
                </ul>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_16" className="fqa-none-profit-corporation-section">
                <h3>Are there limitations on the activities in which my tax-exempt organization can engage?</h3>
                <p>
                    Yes, depending upon the nature of its exemption, your tax-exempt corporation may jeopardize its tax-exempt status if it engages in certain activities. For example, section 501(c)(3) charitable organizations may not intervene in political campaigns or conduct substantial lobbying activities. Consult an attorney for more specific information about your organization.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_17" className="fqa-none-profit-corporation-section">
                <h3>How many directors are nonprofit corporations required to have?</h3>
                <p>
                Some states only require one director, but the majority of states require a minimum of three directors.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-none-profit-corporation-back-to-top">Back to Top</p>
            </div>

            {/* Continue updating the rest of the sections similarly */}
        </div>
    );
};

export default FQA_None_Profit_Corporation;
