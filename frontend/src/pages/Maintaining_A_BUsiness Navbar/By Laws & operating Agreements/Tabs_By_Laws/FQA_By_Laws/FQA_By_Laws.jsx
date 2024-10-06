import React from 'react';
import './FQA_By_Laws.css'; // Updated the renamed CSS file

const FQA_By_Laws = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bylaws-container" id="top">
            <ul className="bylaws-list">
                <li onClick={() => scrollToSection('Question_1')} className="bylaws-question bylaws-list-item">
                What are bylaws?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="bylaws-question bylaws-list-item">
                What is an operating agreement?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="bylaws-question bylaws-list-item">
                Are bylaws and operating agreements required for my business?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="bylaws-question bylaws-list-item">
                Do I need to file my bylaws or operating agreement with the state?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="bylaws-question bylaws-list-item">
                Who should sign my bylaws or operating agreement?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="bylaws-question bylaws-list-item">
                Do I need an attorney to draft my bylaws or operating agreement?
                </li>
                
            </ul>

            <div id="Question_1" className="bylaws-section">
                <h3>What are bylaws?</h3>
                <p>
                Corporate bylaws refer to the document that includes the internal rules and regulations that govern a Corporation. Although this is an internal company document, each state may have different items that must be included in the bylaws, and other states may require the company's bylaws to expressly modify certain default rules (e.g., the scope of officer and director indemnification).
                </p>
                <p onClick={() => scrollToSection('top')} className="bylaws-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="bylaws-section">
                <h3>What is an operating agreement?</h3>
                <p>
                An operating agreement is a contract among the members and managers that governs the internal affairs of a limited liability company. It will include information such as the management of the LLC, distribution of income, how much each member (owner) contributed to the LLC, the purpose of the company, the fiduciary duties of the members and managers, the indemnification of members and managers, etc.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="bylaws-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="bylaws-section">
                <h3>Are bylaws and operating agreements required for my business?</h3>
                <p>
                Many states require a business to have bylaws or an operating agreement. Even though it is an internal document and therefore not filed with the state, it contains very important information related to the structure and management of the corporation or LLC.
                </p>
                <p>
                The following may ask for a copy of your bylaws/operating agreement:
                </p>
                <ul>
                    <li>A bank</li>
                    <li>An attorney</li>
                    <li>A person or business with which you are dealing</li>
                    <li>Stockholders or investors of a corporation or members or investors (LLC)</li>
                    <li>Title company</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="bylaws-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="bylaws-section">
                <h3>Do I need to file my bylaws or operating agreement with the state?</h3>
                <p>
                No, bylaws and operating agreements are not filed with any state office. They should be stored and remain readily available for shareholders, investors or members to review.


                </p>
                <p onClick={() => scrollToSection('top')} className="bylaws-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="bylaws-section">
                <h3>Who should sign my bylaws or operating agreement?</h3>
                <p>
                Typically an authorized director or officer will sign the bylaws. They should be stored in the corporate minute book along with directors' and shareholders' minutes and resolutions.
                </p>
                <p>
                All initial members of an LLC must sign the Operating Agreement once each member has confirmed that it is a reflection of their business arrangement. In addition, if a new member joins the LLC at a later time, the new member should sign an addendum, agreeing to the original terms of the Operating Agreement. Also, if a non-member manager is appointed under the Operating Agreement, that person should sign the Operating Agreement as well.
                </p>
                <p onClick={() => scrollToSection('top')} className="bylaws-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="bylaws-section">
                <h3>Do I need an attorney to draft my bylaws or operating agreement?</h3>
                <p>
                No, you have options. For example, regardless of the state in which you formed your LLC, Ascend can provide a form operating agreement for your business. For a $99 service fee, we will provide you with a form operating agreement based on the specific information that you provide. We will then store that document in your CSCNavigator® account and send you an email when it is ready.
                </p>
                <p>
                However, Ascend cannot provide you with legal advice regarding questions that may arise as you prepare the forms we provide you.
                </p>
                <p onClick={() => scrollToSection('top')} className="bylaws-back-to-top">Back to Top</p>
            </div>

            
        </div>
    );
};

export default FQA_By_Laws;
