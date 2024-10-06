import React from 'react';
import './FQA_Professional_Corporation.css'; // Updated the renamed CSS file

const FQA_Professional_Corporation = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fqa-professional-corporation-container" id="top">
            {/* <h2>Registered Agent FAQs</h2> */}
            <ul className="fqa-professional-corporation-list">
                <li onClick={() => scrollToSection('Question_1')} className="fqa-professional-corporation-question fqa-professional-corporation-list-item">
                    What are Professional Corporations (PCs) and Professional Limited Liability Companies (PLLCs)?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fqa-professional-corporation-question fqa-professional-corporation-list-item">
                    What is the appropriate name ending for a PC or PLLC?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fqa-professional-corporation-question fqa-professional-corporation-list-item">
                    How is a PC or PLLC taxed?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fqa-professional-corporation-question fqa-professional-corporation-list-item">
                    Do I need an attorney to form a PC or PLLC?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fqa-professional-corporation-question fqa-professional-corporation-list-item">
                    Are there any restrictions on who can own a PC or PLLC?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fqa-professional-corporation-question fqa-professional-corporation-list-item">
                    Where should I form my business?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fqa-professional-corporation-question fqa-professional-corporation-list-item">
                    Is a PC or PLLC required to have a registered agent?
                </li>
            </ul>

            <div id="Question_1" className="fqa-professional-corporation-section">
                <h3>
                    What are Professional Corporations (PCs) and Professional Limited Liability Companies (PLLCs)?
                </h3>
                <p>
                    If you have a license to practice law, accounting, medicine, architecture or another professional service, you may qualify to form a Professional Corporation (PC) or Professional Limited Liability Company (PLLC). These business structures can help licensed professionals protect their personal assets from lawsuits brought against their practice.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-professional-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_2" className="fqa-professional-corporation-section">
                <h3>What is the appropriate name ending for a PC or PLLC?</h3>
                <p>
                    You may need to follow industry-specific regulations for naming your company. Many states require certain endings to your business name, for example, "PC" for a Professional Corporation or "PLLC" for a Professional Limited Liability Company.
                </p>


                <p onClick={() => scrollToSection('top')} className="fqa-professional-corporation-back-to-top">Back to Top</p>
            </div>


            <div id="Question_3" className="fqa-professional-corporation-section">
                <h3>How is a PC or PLLC taxed?</h3>
                <p>
                    PCs are generally taxed like a c corporation, with the PC paying taxes at the corporate rate, which can lead to double taxation. PLLCs, on the other hand, are taxed like LLCs, which generally have pass-through taxation of the members. You may wish to consult with a tax advisor before forming either a PC or PLLC to determine the best tax treatment for your company.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-professional-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_4" className="fqa-professional-corporation-section">
                <h3>Do I need an attorney to form a PC or PLLC?</h3>
                <p>
                    No. You can prepare and file necessary paperwork yourself, or you can use Ascend to incorporate your business. If you are unsure whether incorporating will benefit your business, please call us at 800-818-6082. Our Business Specialists are happy to provide the information you need to make the right decision.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-professional-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fqa-professional-corporation-section">
                <h3>
                    Are there any restrictions on who can own a PC or PLLC?
                </h3>
                <p>
                    In most states, only individuals licensed to practice in the profession for which the PC or PLLC is being formed may be shareholders or members of the PC or PLLC.
                </p>


                <p onClick={() => scrollToSection('top')} className="fqa-professional-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="fqa-professional-corporation-section">
                <h3>Where should I form my business?</h3>
                <p>
                    Most companies form the PC or PLLC in the state in which they will primarily operate. Advantages of forming a PC or PLLC in your home state include:
                </p>
                <ul>
                    <li>Fewer complications, if you only plan to operate the business in your home state</li>
                    <li>No need pay franchise taxes or file annual reports in more than one state</li>
                    <li>Lower cost</li>
                </ul>

                <p>
                    Many companies conduct business throughout the United States and abroad. A PC or PLLC with business locations in multiple states may incorporate in a single state, then register (also referred to as qualify) to do business in other states. This means that the PC or PLLC must formally register, file annual reports and pay annual fees in every state in which they provide services. Note, however, that some states require a PC or PLLC to obtain a certificate or other authority from applicable state licensing agencies.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-professional-corporation-back-to-top">Back to Top</p>
            </div>

            <div id="Question_7" className="fqa-professional-corporation-section">
                <h3>Is a PC or PLLC required to have a registered agent?</h3>
                <p>
                    <b>Yes.</b> PC or PLLCs must designate someone to receive official state correspondence and legal notices, called service of process. Most states refer to this delegate as a "Registered Agent." Some states also use the terms "statutory agent" or "resident agent." Some states will not allow a business to serve as its own Registered Agent. Other states allow a company to designate an owner or director as its Registered Agent. However, that agent must:
                </p>

                <ul>
                    <li>
                        Remain available during normal business hours
                    </li>
                    <li>
                        Maintain a physical address located in the state where the business is registered, and any states where the company is doing business
                    </li>
                    <li>
                        List their name and address in public records
                    </li>
                </ul>

                <p>
                    Because of these requirements, most businesses choose to name a third-party Registered Agent, like Ascend.
                </p>

                <p>
                    Failure to respond to a legal notice can result in a default judgment against your company. This means that a court can order your business to pay significant penalties without hearing your side of the argument.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-professional-corporation-back-to-top">Back to Top</p>
            </div>

            {/* Continue updating the rest of the sections similarly */}
        </div>
    );
};

export default FQA_Professional_Corporation;
