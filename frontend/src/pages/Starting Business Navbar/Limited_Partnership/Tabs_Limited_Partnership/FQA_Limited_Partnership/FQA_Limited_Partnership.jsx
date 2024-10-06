import React from 'react';
import './FQA_Limited_Partnership.css'; // Updated the renamed CSS file

const FQA_Series_LLC = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fqa-limited-partnership-container" id="top">
            <ul className="fqa-limited-partnership-list">
                <li onClick={() => scrollToSection('Question_1')} className="fqa-limited-partnership-question fqa-limited-partnership-list-item">
                What is a Limited Partnership?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fqa-limited-partnership-question fqa-limited-partnership-list-item">
                What are the differences between a general partnership and a Limited Partnership?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fqa-limited-partnership-question fqa-limited-partnership-list-item">
                How are Limited Partnerships taxed?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fqa-limited-partnership-question fqa-limited-partnership-list-item">
                How many owners are required to form a Limited Partnership?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fqa-limited-partnership-question fqa-limited-partnership-list-item">
                Do I need an attorney to form a Limited Partnership?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fqa-limited-partnership-question fqa-limited-partnership-list-item">
                Is a Limited Partnership required to have a registered agent?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fqa-limited-partnership-question fqa-limited-partnership-list-item">
                After I form my Limited Partnership, how do I remain in compliance?
                </li>
            </ul>

            <div id="Question_1" className="fqa-limited-partnership-section">
                <h3>
                What is a Limited Partnership?
                </h3>
                <p>
                A Limited Partnership is a partnership consisting of a general partner, who manages the business and has unlimited personal liability for the debts and obligations of the Limited Partnership, and a limited partner, who has limited liability but cannot participate in management.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-limited-partnership-back-to-top">Back to Top</p>
            </div>
            <div id="Question_2" className="fqa-limited-partnership-section">
                <h3>What are the differences between a general partnership and a Limited Partnership?</h3>
                <p>
                A Limited Partnership offers protection from liability for the debts and obligations of the Limited Partnership to the limited partners. In a General Partnership, all of the partners are jointly and severally liable for the debts of the partnership.
                </p>


                <p onClick={() => scrollToSection('top')} className="fqa-limited-partnership-back-to-top">Back to Top</p>
            </div>


            <div id="Question_3" className="fqa-limited-partnership-section">
                <h3>How are Limited Partnerships taxed?</h3>
                <p>
                The Limited Partnership is taxed as a partnership. Each partner reports his or her share of profit or loss on his or her individual tax return.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-limited-partnership-back-to-top">Back to Top</p>
            </div>
            <div id="Question_4" className="fqa-limited-partnership-section">
                <h3>How many owners are required to form a Limited Partnership?</h3>
                <p>
                At least one.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-limited-partnership-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fqa-limited-partnership-section">
                <h3>
                Do I need an attorney to form a Limited Partnership?
                </h3>
                <p>
                No. You can prepare and file the necessary paperwork yourself, or you can use Ascend to help you form your Limited Partnership. If you are unsure whether forming a Limited Partnership will benefit your business, please call us at 800-818-6082. Our Business Specialists are happy to provide you with the information you need to decide whether to form a Limited Partnership.
                </p>


                <p onClick={() => scrollToSection('top')} className="fqa-limited-partnership-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="fqa-limited-partnership-section">
                <h3>Is a Limited Partnership required to have a registered agent?</h3>
                <p>
                Yes. Limited Partnerships must designate someone to receive official state correspondence and legal notices, called service of process. Most states refer to this delegate as a "Registered Agent." Some states also use the terms "statutory agent" or "resident agent." Some states will not allow a business to serve as its own Registered Agent. Other states allow a company to designate an owner or director as its Registered Agent. However, that agent must:
                </p>

                <ul>
                    <li>Remain available during normal business hours</li>
                    <li>Maintain a physical address located in the state where the business is registered, and any states where the company is doing business</li>
                    <li>List their name and address in public records</li>
                </ul>

                <p>
                Because of these requirements, most businesses choose to name a third-party Registered Agent like Ascend.
                </p>

                <p>
                Failure to respond to a legal notice can result in a default judgment against your company. This means that a court can order your business to pay significant penalties without hearing your side of the argument.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-limited-partnership-back-to-top">Back to Top</p>
            </div>

            <div id="Question_7" className="fqa-limited-partnership-section">
                <h3>After I form my Limited Partnership, how do I remain in compliance?</h3>

                <p>
                Most states require a Limited Partnership to pay an annual tax. The failure to pay that tax can result in the state terminating the Limited Partnership, exposing the limited partners to liability for the debts and obligations of the Limited Partnership. Additionally, there may be other compliance requirements, such as obtaining licenses with the city, county and or state.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqa-limited-partnership-back-to-top">Back to Top</p>
            </div>
            

            {/* Continue updating the rest of the sections similarly */}
        </div>
    );
};

export default FQA_Series_LLC;
