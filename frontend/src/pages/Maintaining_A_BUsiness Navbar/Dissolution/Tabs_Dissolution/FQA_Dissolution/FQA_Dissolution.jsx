import React from 'react';
import "./FQA_Dissolution.css";

const FQA_Dissolution = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-Dissolution-container" id="top">
            <ul className="fwa-Dissolution-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-Dissolution-question fwa-Dissolution-list-item">
                    What is a dissolution filing?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-Dissolution-question fwa-Dissolution-list-item">
                    When would I file a dissolution?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-Dissolution-question fwa-Dissolution-list-item">
                    Why would I need to dissolve my business?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fwa-Dissolution-question fwa-Dissolution-list-item">
                    What is required to dissolve a business?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fwa-Dissolution-question fwa-Dissolution-list-item">
                    How can Ascend help me?
                </li>
            </ul>

            <div id="Question_1" className="fwa-Dissolution-section">
                <h3>What is a dissolution filing?</h3>
                <p>
                    A business dissolution refers to the formal termination or closure of a business.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Dissolution-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-Dissolution-section">
                <h3>When would I file a dissolution?</h3>
                <p>
                    When you have decided to no longer conduct business. You should check with your accountant regarding possible tax implications.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Dissolution-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-Dissolution-section">
                <h3>Why would I need to dissolve my business?</h3>
                <p>
                    It's critical that you formally dissolve your company, because letting it lapse or allowing the state to dissolve it involuntarily could create a number of problems, including:
                </p>
                <ul>
                    <li>Personal liability for judgments against the business</li>
                    <li>Expensive state-assessed penalties and fees</li>
                    <li>Unnecessary registered agent service payments</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-Dissolution-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fwa-Dissolution-section">
                <h3>What is required to dissolve a business?</h3>
                <p>
                    First, companies must approve the dissolution of the business. Once this is agreed upon, the business must then file a Certificate of Dissolution with the state. In addition, you must file an annual return for the year you go out of business. If you have employees, you must file the final employment tax returns, in addition to making final federal tax deposits of these taxes.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Dissolution-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fwa-Dissolution-section">
                <h3>How Ascend help me?</h3>
                <p>
                    We will deal with the Secretary of State so you don't need to. Our team has experience filing dissolutions for companies of all shapes and sizes. We will research your filing and identify what it will cost. In addition, we will prepare the documents and get them to you for signature (if necessary). Once you return them to us, we will file the dissolution with the Secretary of State.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Dissolution-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Dissolution;
