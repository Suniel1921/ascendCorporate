import React from 'react';
import './FQA_Register_in_Additional_States.css'; // Updated the renamed CSS file

const FQA_Register_in_Additional_States = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="FQA_Register_in_Additional_States-container" id="top">
            <ul className="FQA_Register_in_Additional_States-list">
                <li onClick={() => scrollToSection('Question_1')} className="FQA_Register_in_Additional_States-question FQA_Register_in_Additional_States-list-item">
                    What is a qualification?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="FQA_Register_in_Additional_States-question FQA_Register_in_Additional_States-list-item">
                    How do I qualify in a foreign state?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="FQA_Register_in_Additional_States-question FQA_Register_in_Additional_States-list-item">
                    How do I know whether my company needs to qualify in a foreign state?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="FQA_Register_in_Additional_States-question FQA_Register_in_Additional_States-list-item">
                    What could happen to my business if my company doesn't qualify in a state where it does business?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="FQA_Register_in_Additional_States-question FQA_Register_in_Additional_States-list-item">
                    How Ascend can help?
                </li>
                
            </ul>

            <div id="Question_1" className="FQA_Register_in_Additional_States-section">
                <h3>What is a qualification?</h3>
                <p>
                If your corporation or Limited Liability Company (LLC) conducts business outside of the state where it was formed, then you may need to register your company in additional states-also referred to as "foreign" states. Ascend can assist you with this registration process, known as 'qualifying'.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_Register_in_Additional_States-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="FQA_Register_in_Additional_States-section">
                <h3>How do I qualify in a foreign state?</h3>
                <p>
                Requirements for qualification vary by state. Ascend can tell you what information you need in order to qualify. Ascend can help you to file the documents your company needs in all of the states where you do business.
                </p>

                <p onClick={() => scrollToSection('top')} className="FQA_Register_in_Additional_States-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="FQA_Register_in_Additional_States-section">
                <h3>How do I know whether my company needs to qualify in a foreign state?</h3>
                <p>
                A company needs to qualify in the states where it is "doing business," Generally, a company is doing business in a state if it has regular, repeated and continuous business contacts of a local nature in that state. Typically, a business is doing business in a state where it:
                </p>
                
                <ul>
                    <li>Has an office, employees, and advertises</li>
                    
                </ul>
                <p onClick={() => scrollToSection('top')} className="FQA_Register_in_Additional_States-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="FQA_Register_in_Additional_States-section">
                <h3>What could happen to my business if my company doesn't qualify in a state where it does business?</h3>
                <p>
                In some cases, a business can be liable to pay penalties or back taxes for the time period that they were doing business without qualification. Another downside is that in some cases, your company will not have access to the courts in that state. This means you will not be able to bring a lawsuit in that state. Almost all states impose penalties, and in some states these penalties can be applied against the officers and directors of the company. In one state, Louisiana, officers and directors not only face civil penalties for failing to qualify, but can face a prison sentence as well.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_Register_in_Additional_States-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="FQA_Register_in_Additional_States-section">
                <h3>How Ascend can help?</h3>
                <p>
                We have been in business since 1899 and our team has experience filing qualification documents in all 50 states. We will research your filing and identify what it will cost. In addition, we will complete the documents and return them to you so you can review and sign them (if necessary). Then we will file them with the Secretary of State, so you can focus your attention on running your business.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="FQA_Register_in_Additional_States-back-to-top">Back to Top</p>
            </div>

            
        </div>
    );
};

export default FQA_Register_in_Additional_States;
