import React from 'react';
import "./FQA_Entity_Conversion.css";

const FQA_Entity_Conversion = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-Entity_Conversion-container" id="top">
            <ul className="fwa-Entity_Conversion-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-Entity_Conversion-question fwa-Entity_Conversion-list-item">
                    What is a conversion?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-Entity_Conversion-question fwa-Entity_Conversion-list-item">
                    What are examples of conversions?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-Entity_Conversion-question fwa-Entity_Conversion-list-item">
                    Does my state allow conversion filings?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fwa-Entity_Conversion-question fwa-Entity_Conversion-list-item">
                    How can Ascend help me?
                </li>
            </ul>

            <div id="Question_1" className="fwa-Entity_Conversion-section">
                <h3>What is a conversion?</h3>
                <p>
                    A conversion is a formal filing with the Secretary of State to change an entity's legal status.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Entity_Conversion-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-Entity_Conversion-section">
                <h3>What are examples of conversions?</h3>

                <ul>
                    <li>Changing from an LLC to a Corporation</li>
                    <li>Changing from a Corporation to an LLC</li>
                    <li>Changing from a Limited Partnership to a Corporation</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-Entity_Conversion-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-Entity_Conversion-section">
                <h3>Does my state allow conversion filings?</h3>
                <p>
                    This varies by state. Please contact us so we can research your exact situation.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Entity_Conversion-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fwa-Entity_Conversion-section">
                <h3>How can Ascend help me?</h3>
                <p>
                    We will work with the Secretary of State so you don't need to. We have been in business since 1899 and our team has experience filing conversions for companies of all sizes. We will research your filing and identify what it will cost. In addition, we will help you complete the necessary documents and get them to you for signature (if necessary). Once you return them to us, we will file the conversion with the Secretary of State.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-Entity_Conversion-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Entity_Conversion;
