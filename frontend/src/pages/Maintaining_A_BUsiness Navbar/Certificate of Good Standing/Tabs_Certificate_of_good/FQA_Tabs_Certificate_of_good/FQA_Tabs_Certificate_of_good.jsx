import React from 'react';
import './FQA_Tabs_Certificate_of_good.css'; // Updated the renamed CSS file

const FQA_Tabs_Certificate_of_good = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="certificate-container" id="top">
            <ul className="certificate-list">
                <li onClick={() => scrollToSection('Question_1')} className="certificate-question certificate-list-item">
                    What is Good Standing?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="certificate-question certificate-list-item">
                    Why is Good Standing important?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="certificate-question certificate-list-item">
                    How do I maintain Good Standing?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="certificate-question certificate-list-item">
                    Is there a way to prove my company's Good Standing?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="certificate-question certificate-list-item">
                    When would I need a Certificate of Good Standing?
                </li>

            </ul>

            <div id="Question_1" className="certificate-section">
                <h3>What is Good Standing?</h3>
                <p>
                    A business entity is said to be in Good Standing if it has filed all appropriate paperwork with the Secretary of State (or equivalent agency) and it has paid all applicable annual fees that are due to renew its charter.
                </p>
                <p onClick={() => scrollToSection('top')} className="certificate-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="certificate-section">
                <h3>Why is Good Standing important?</h3>
                <p>
                    Maintaining good standing for your company is very important. Without it, a company may not be able to open a bank account, obtain financing, or apply for or renew business licenses and permits. In order to maintain good standing, a company must fully act in accordance with state law. A company can fall out of good standing if it fails to file its annual report or files it late or fails to pay any applicable annual fees to a state. Most importantly, preserving good corporate standing also protects the company's owner from personal liability for actions of the corporation or LLC.
                </p>
                <p onClick={() => scrollToSection('top')} className="certificate-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="certificate-section">
                <h3>How do I maintain Good Standing?</h3>
                <p>
                    You maintain Good Standing by ensuring compliance with your state's laws, including fulfilling any annual report or filing requirements for the state where the company was formed and registered to do business.
                </p>

                <p onClick={() => scrollToSection('top')} className="certificate-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="certificate-section">
                <h3>Is there a way to prove my company's Good Standing??</h3>
                <p>
                    Yes. A company can order a Certificate of Good Standing from the state. A Certificate of Good Standing can also be called a Certificate of Status or Certificate of Existence, depending on the state. The document would specify that the business maintains good corporate standing, has filed an annual report (if the state requires this) and has paid all state taxes and fees.
                </p>
                <p onClick={() => scrollToSection('top')} className="certificate-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="certificate-section">
                <h3>When would I need a Certificate of Good Standing?</h3>
                <p>
                    Typically an authorized director or officer will sign the bylaws. They should be stored in the corporate minute book along with directors' and shareholders' minutes and resolutions.
                </p>
                <p>
                    Financial institutions such as banks often request a Certificate of Good Standing. Also, if your company is looking to to expand into other states, your company will need to provide a a Certificate of Good Standing to those states in order to register to do business in those states.
                </p>
                <p onClick={() => scrollToSection('top')} className="certificate-back-to-top">Back to Top</p>
            </div>


        </div>
    );
};

export default FQA_Tabs_Certificate_of_good;
