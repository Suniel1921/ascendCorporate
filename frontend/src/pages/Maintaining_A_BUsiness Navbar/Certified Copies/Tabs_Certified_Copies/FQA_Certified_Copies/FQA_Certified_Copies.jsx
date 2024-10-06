import React from 'react';
import "./FQA_Certified_Copies.css";

const FQA_Certified_Copies = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-certified-copies-container" id="top">
            <ul className="fwa-certified-copies-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-certified-copies-question fwa-certified-copies-list-item">
                    What is a certified copy?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-certified-copies-question fwa-certified-copies-list-item">
                    What are some examples of documents I can get a certified copy of?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-certified-copies-question fwa-certified-copies-list-item">
                    What would I need a certified copy of business documents for?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fwa-certified-copies-question fwa-certified-copies-list-item">
                    What is the difference between a Certified Copy and a Certificate of Good Standing?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fwa-certified-copies-question fwa-certified-copies-list-item">
                    How can Ascend help me?
                </li>
            </ul>

            <div id="Question_1" className="fwa-certified-copies-section">
                <h3>What is a certified copy?</h3>
                <p>
                    A copy of a document on file with the state (such as Articles of Incorporation/Organization) that is certified by the state as being a true and correct copy. Most states attach a cover page bearing the state seal or the signature of the Secretary of State to a copy of the articles or certificate of formation.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-certified-copies-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-certified-copies-section">
                <h3>What are some examples of documents I can get a certified copy of?</h3>
                <ul>
                    <li>Formation Document - ex. Articles of Incorporation</li>
                    <li>Name Change Amendment</li>
                    <li>Annual Report</li>
                    <li>Certificate of Authority</li>
                    <li>And anything else filed with the Secretary of State</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-certified-copies-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-certified-copies-section">
                <h3>What would I need a certified copy of business documents for?</h3>
                <p>
                    Certified copies of documents are often requested by banks, lenders, potential business partners or investors and other state governments, if you want to register your company to do business in additional states. Also, companies often need certified copies of documents to replace lost or damaged documents.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-certified-copies-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fwa-certified-copies-section">
                <h3>What is the difference between a Certified Copy and a Certificate of Good Standing?</h3>
                <p>
                    A Certificate of Good Standing reflects the status of a company as of a particular date. A certified copy is a copy of a document that is already on file with the state (such as Articles of Incorporation) that the state certifies as true and correct.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-certified-copies-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fwa-certified-copies-section">
                <h3>How can Ascend help me?</h3>
                <p>
                    We have offices in each state. We can pull copies of any document filed with the Secretary of State for you and save you the hassle of having to work directly with the state.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-certified-copies-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Certified_Copies;
