import React from 'react';
import "./FQA_Mail_Forwarding_Service.css";

const FQA_Mail_Forwarding_Service = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-Mail_Forwarding_Service-container" id="top">
            <ul className="fwa-Mail_Forwarding_Service-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-Mail_Forwarding_Service-question fwa-Mail_Forwarding_Service-list-item">
                What is a Mail_Forwarding_Service?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-Mail_Forwarding_Service-question fwa-Mail_Forwarding_Service-list-item">
                Why would I file a Mail_Forwarding_Service?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-Mail_Forwarding_Service-question fwa-Mail_Forwarding_Service-list-item">
                How can Ascend help me?
                </li>
            </ul>

            <div id="Question_1" className="fwa-Mail_Forwarding_Service-section">
                <h3>What is a Mail_Forwarding_Service?</h3>
                <p>
                A Mail_Forwarding_Service is filed when a company has gone to an inactive or "void" status with their state of formation.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Mail_Forwarding_Service-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-Mail_Forwarding_Service-section">
                <h3>Why would I file a Mail_Forwarding_Service?</h3>
                <p>
                If your company has missed an important state filing such as an annual report, or if you have not paid a franchise tax, your company may fall out of good standing with the state. You would need to file a Mail_Forwarding_Service to return your company to good standing.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Mail_Forwarding_Service-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-Mail_Forwarding_Service-section">
                <h3>How can Ascend help me?</h3>
                <p>
                We will contact the Secretary of State for you. We will research your filing and identify how to reinstate your company, including the cost. In addition, we will help you complete the necessary documents, and get them to you for signature (if necessary). Once you return them to us, we will file the Mail_Forwarding_Service with the Secretary of State or other relevant state office.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Mail_Forwarding_Service-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Mail_Forwarding_Service;
