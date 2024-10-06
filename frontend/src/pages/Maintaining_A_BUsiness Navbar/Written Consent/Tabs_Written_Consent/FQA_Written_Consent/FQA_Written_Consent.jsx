import React from 'react';
import "./FQA_Written_Consent.css";

const FQA_Written_Consent = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-written-consent-container" id="top">
            <ul className="fwa-written-consent-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-written-consent-question fwa-written-consent-list-item">
                What is a Written Consent?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-written-consent-question fwa-written-consent-list-item">
                Why should I complete Written Consents?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-written-consent-question fwa-written-consent-list-item">
                Do I have to keep written consents for my business?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fwa-written-consent-question fwa-written-consent-list-item">
                What is the difference between a Written Consent and a Resolution?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fwa-written-consent-question fwa-written-consent-list-item">
                What Written Consents does Ascend provide?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fwa-written-consent-question fwa-written-consent-list-item">
                After I receive my written consent form from Ascend, are there any additional steps?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fwa-written-consent-question fwa-written-consent-list-item">
                After I purchase my written consent form from Ascend, can I make changes to it?
                </li>
            </ul>

            <div id="Question_1" className="fwa-written-consent-section">
                <h3>What is a Written Consent?</h3>
                <p>
                Written Consents are internal documents that are often used by directors in a corporation, or members or managers in a limited liability company (LLC), to grant consent to a decision or action, in writing. Part of adhering to corporate or LLC formalities is to keep track of all of the important decisions made by the company. A written consent typically takes the place of meeting minutes in order to record a final decision. The written consent is signed by all directors (or in some cases, by the sole shareholder) in a corporation or by the members and/or managers in an LLC, to show that they all have agreed to have the company take certain actions. The consent should be maintained with all other important corporate documents so that it can be referred to in the future.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-written-consent-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-written-consent-section">
                <h3>Why should I complete Written Consents?</h3>
                <ul>
                    <li>Some states may require meetings of the board of directors of a corporation in order for certain corporate actions to be approved, and a written consent takes the place of that meeting.</li>
                    <li>They provide a paper trail for your business, showing all of the important decisions regarding the company that have been made, along with the approval of the other directors in a corporation or members or managers in an LLC.</li>
                    <li>They help keep shareholders or members informed of decisions regarding the company.</li>
                    <li>They may need to be provided to owners, the IRS, the courts, creditors, suppliers or other parties.</li>
                    <li>They may be requested with the rest of your corporate or LLC compliance items in the event of a sale of the company.</li>
                    <li>They provide evidence that corporate formalities have been followed should anybody ever attempt to pierce the corporate veil.</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-written-consent-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-written-consent-section">
                <h3>Do I have to keep written consents for my business?</h3>
                <p>
                No, unless specifically stated in the incorporation or governing document for your company. But it is highly beneficial to keep written consents for the reasons discussed above. Consents provide a record that could help to protect your corporate veil in the event of a lawsuit or tax audit.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-written-consent-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fwa-written-consent-section">
                <h3>What is the difference between a Written Consent and a Resolution?</h3>
                <p>
                The difference between a Written Consent and a Corporate Resolution is that a Written Consent is used when no meeting has occurred in order for the board or the members or managers of an LLC to approve corporate activity, whereas a corporate resolution is used in conjunction with a meeting (in the minutes) for directors or members or managers to approve a corporate activity.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-written-consent-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fwa-written-consent-section">
                <h3>What Written Consents does Ascend provide?</h3>
                <p>
                Ascend can provide you with the following forms to meet your specific needs:
                </p>

                <ul>
                    <li>Consent to open a bank account</li>
                    <li>Consents to appoint, remove and replace members, managers, directors or officers</li>
                    <li>Consent to issue stock</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-written-consent-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="fwa-written-consent-section">
                <h3>After I receive my written consent form from Ascend, are there any additional steps?</h3>
                <p>
                <b>Yes</b>, after you receive your written consent form all of the appropriate parties (directors or members or managers) will need to sign the document. At that point you will typically file the document with your corporate records, and also make a copy if you have to provide it to someone else (such as a bank).
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-written-consent-back-to-top">Back to Top</p>
            </div>
            <div id="Question_7" className="fwa-written-consent-section">
                <h3>After I purchase my written consent form from Ascend, can I make changes to it?</h3>
                <p>
                <b>Yes.</b> This form is merely a draft that you can modify to meet you company’s needs. We will send you the Written Consent as a Microsoft Word document that you can edit. Remember, this is your internal documentation, so you should document what you feel is necessary for your company.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-written-consent-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Written_Consent;
