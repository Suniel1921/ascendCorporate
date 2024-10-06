import React from 'react';
import './FQA_LLC_Tax_Status_Election.css'; // Updated the renamed CSS file

const FQA_LLC_Tax_Status_Election = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="FQA_LLC_Tax_Status_Election-container" id="top">
            <ul className="FQA_LLC_Tax_Status_Election-list">
                <li onClick={() => scrollToSection('Question_1')} className="FQA_LLC_Tax_Status_Election-question FQA_LLC_Tax_Status_Election-list-item">
                What is Form 8832?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="FQA_LLC_Tax_Status_Election-question FQA_LLC_Tax_Status_Election-list-item">
                Do I have to file this?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="FQA_LLC_Tax_Status_Election-question FQA_LLC_Tax_Status_Election-list-item">
                Why would I file the 8832?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="FQA_LLC_Tax_Status_Election-question FQA_LLC_Tax_Status_Election-list-item">
                When do I file the 8832?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="FQA_LLC_Tax_Status_Election-question FQA_LLC_Tax_Status_Election-list-item">
                How can Ascend help?
                </li>
                
                
            </ul>

            <div id="Question_1" className="FQA_LLC_Tax_Status_Election-section">
                <h3>What is Form 8832?</h3>
                <p>
                Form 8832 is the Entity Classification Election form from the IRS. It is filed to elect a tax status other than the default status for your entity. For example, an LLC can elect to be taxed as a C Corporation.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_LLC_Tax_Status_Election-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="FQA_LLC_Tax_Status_Election-section">
                <h3>Do I have to file Form 8832?</h3>
                <p>
                No, this is an optional form that is filed if you would like your LLC to be taxed as a corporation. After it is filed, your LLC will file a corporate tax return and be subject to corporate tax rates.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="FQA_LLC_Tax_Status_Election-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="FQA_LLC_Tax_Status_Election-section">
                <h3>Why would I file the 8832?</h3>
                <p>
                LLCs by default have pass-through taxation, where profits and losses are reported on the members personal tax returns. C Corporations are subject to corporate tax rates and shareholders are taxed on dividends received. This is referred to as "double taxation". We recommend consulting an accountant to see what is best for your business.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="FQA_LLC_Tax_Status_Election-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="FQA_LLC_Tax_Status_Election-section">
                <h3>When do I file Form 8832?</h3>
                <p>
                Form 8832 is filed within 75 days of the formation of your company. If you miss this timeframe, the IRS allows it to be filed in the first 75 days of each fiscal year.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_LLC_Tax_Status_Election-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="FQA_LLC_Tax_Status_Election-section">
                <h3>How can Ascend help?</h3>
                <p>
                We will:
                </p>
                <ul>
                    <li>Help you complete Form 8832</li>
                    <li>Provide detailed instructions for mailing to the IRS</li>
                    <li>Provide a 30-minute tax consultation with an Accountant</li>
                    <li>Review Form 8832 and your specific tax situation</li>
                    <li>Offer help with any other tax related questions</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="FQA_LLC_Tax_Status_Election-back-to-top">Back to Top</p>
            </div>

            
            
        </div>
    );
};

export default FQA_LLC_Tax_Status_Election;
