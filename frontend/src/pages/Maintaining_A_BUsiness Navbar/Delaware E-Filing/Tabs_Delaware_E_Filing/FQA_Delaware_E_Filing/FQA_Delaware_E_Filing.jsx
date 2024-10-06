import React from 'react';
import "./FQA_Delaware_E_Filing.css";

const FQA_Delaware_E_Filing = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-delaware-e-filing-container" id="top">
            <ul className="fwa-delaware-e-filing-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-delaware-e-filing-question fwa-delaware-e-filing-list-item">
                When is my annual report due?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-delaware-e-filing-question fwa-delaware-e-filing-list-item">
                I don't understand why I have to pay franchise taxes. My company is not a franchise.
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-delaware-e-filing-question fwa-delaware-e-filing-list-item">
                My company isn't doing business, so why do I have to pay?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fwa-delaware-e-filing-question fwa-delaware-e-filing-list-item">
                WWhy didn't I get a green form in the mail like I used to?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fwa-delaware-e-filing-question fwa-delaware-e-filing-list-item">
                I don't want to file my report online, I want to mail it in. How do I do that?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fwa-delaware-e-filing-question fwa-delaware-e-filing-list-item">
                Can you send me an annual report to file by mail?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fwa-delaware-e-filing-question fwa-delaware-e-filing-list-item">
                I don't want to list my officers and directors on my report. Can I list you instead?
                </li>
                <li onClick={() => scrollToSection('Question_8')} className="fwa-delaware-e-filing-question fwa-delaware-e-filing-list-item">
                Your site says I have a past-due balance. Why?
                </li>
            </ul>

            <div id="Question_1" className="fwa-delaware-e-filing-section">
                <h3>When is my annual report due?</h3>
                <p>
                Corporations must file annual reports and pay franchise taxes on or before March 1.
                </p>
                <p>
                LLCs must pay franchise taxes on or before June 1.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-delaware-e-filing-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-delaware-e-filing-section">
                <h3>I don't understand why I have to pay franchise taxes. My company is not a franchise.</h3>
                <p>
                The State of Delaware just uses the term "franchise tax" to refer to taxes for the privilege of being formed or incorporated in the state of Delaware. Every corporation and LLC has to pay them. 
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-delaware-e-filing-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-delaware-e-filing-section">
                <h3>My company isn't doing business, so why do I have to pay?</h3>
                <p>
                Regardless of whether they are actively doing business, all corporations and LLCs have to file reports and pay franchise taxes. If you don't plan to use your company at all in the future, we can help you to dissolve it with the State.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-delaware-e-filing-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fwa-delaware-e-filing-section">
                <h3>Why didn't I get a green form in the mail like I used to?</h3>
                <p>
                The State of Delaware no longer mails hard copy annual reports. Instead, Registered Agents forward a notification letter in December. We also send a follow up letter and two e-mails.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-delaware-e-filing-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fwa-delaware-e-filing-section">
                <h3>I don't want to file my report online, I want to mail it in. How do I do that?</h3>
                <p>
                You can't. Delaware requires that all reports be filed electronically.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-delaware-e-filing-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="fwa-delaware-e-filing-section">
                <h3>Can you send me an annual report to file by mail?</h3>
                <p>
                No. We can no longer print annual reports, and the state does not issue them. You must file them online, and we can help you.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-delaware-e-filing-back-to-top">Back to Top</p>
            </div>
            <div id="Question_7" className="fwa-delaware-e-filing-section">
                <h3>I don't want to list my officers and directors on my report. Can I list you instead?</h3>
                <p>
                No. Corporations must list all directors and at least one officer on their annual report, to comply with Delaware laws.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-delaware-e-filing-back-to-top">Back to Top</p>
            </div>
            <div id="Question_8" className="fwa-delaware-e-filing-section">
                <h3>Your site says I have a past-due balance. Why?</h3>
                <p>
                We pull the tax due amount directly from the State of Delaware's records. If you didn't file your report or paid your taxes late last year, our site will reflect the additional fees required by the state.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-delaware-e-filing-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Delaware_E_Filing;
