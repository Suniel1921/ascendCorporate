import React from 'react';
import "./FQA_Amendments.css";

const FQA_Amendments = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-amendments-container" id="top">
            <ul className="fwa-amendments-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-amendments-question fwa-amendments-list-item">
                    What is an amendment?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-amendments-question fwa-amendments-list-item">
                    What are examples of documents that may be amended?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-amendments-question fwa-amendments-list-item">
                    Why would I file an amendment?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fwa-amendments-question fwa-amendments-list-item">
                    What information can be amended?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fwa-amendments-question fwa-amendments-list-item">
                    How can Ascend help?
                </li>
            </ul>

            <div id="Question_1" className="fwa-amendments-section">
                <h3>What is an amendment?</h3>
                <p>
                    An amendment is a formal filing with the Secretary of State to make changes to a previously filed document.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-amendments-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-amendments-section">
                <h3>What are examples of documents that may be amended?</h3>
                <p>
                    Any document that was previously filed with the Secretary of State (or equivalent office)
                </p>

                <ul>
                    <li>The Articles of Incorporation/Organization (initial formation documents)</li>
                    <li>Annual Reports</li>
                    <li>Previously filed amendments</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-amendments-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-amendments-section">
                <h3>Why would I file an amendment?</h3>
                <p>
                    State laws require businesses to notify the Secretary of State when their Articles of Incorporation/Organization change.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-amendments-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fwa-amendments-section">
                <h3>What information can be amended?</h3>
                <p>
                    The most popular amendment is to change the name of a company. In addition to this, the filing of Articles of Amendment can change the following information, if it is listed on the original formation document:
                </p>

                <ul>
                    <li>Business address</li>
                    <li>Names and/or addresses of directors and members</li>
                    <li>Business purpose</li>
                    <li>Number of authorized shares</li>
                    <li>Registered Agent name and address</li>
                    <li>Other information included in the Articles of Incorporation</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-amendments-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fwa-amendments-section">
                <h3>How Ascend help?</h3>
                <p>
                    We will deal with the Secretary of State so you don't need to. We have been in business since 1899 and our team has experience filing amendments for companies of all shapes and sizes. We will research your filing and identify what it will cost. In addition, we will prepare the documents and get them to you for signature (if necessary). Once you return them to us, we will file the amendment with the Secretary of State.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-amendments-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Amendments;
