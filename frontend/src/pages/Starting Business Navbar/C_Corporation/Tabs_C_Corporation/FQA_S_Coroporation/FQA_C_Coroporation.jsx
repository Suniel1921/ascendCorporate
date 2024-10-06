import React from 'react';
import './FQA_C_Coroporation.css';

const FQA_C_corporation = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fqa-c-corporation-container" id="top">
            <ul className="fqa-c-corporation-list">
                <li onClick={() => scrollToSection('Question_1')} className="fqa-c-corporation-question fqa-c-corporation-list-item">
                    Do I need an attorney to form a corporation?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fqa-c-corporation-question fqa-c-corporation-list-item">
                    What are the requirements to form a c corporation (c corp)?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fqa-c-corporation-question fqa-c-corporation-list-item">
                Is a c corp required to have a registered agent?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fqa-c-corporation-question fqa-c-corporation-list-item">
                What do I need to do after I form my c corp?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fqa-c-corporation-question fqa-c-corporation-list-item">
                What is the organizational structure of a c corp?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fqa-c-corporation-question fqa-c-corporation-list-item">
                Can a c corp own an LLC?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fqa-c-corporation-question fqa-c-corporation-list-item">
                Can a c corp own an s corporation (s corp)?
                </li>
                <li onClick={() => scrollToSection('Question_8')} className="fqa-c-corporation-question fqa-c-corporation-list-item">
                Can the personal asset protection provided by forming an c corp be taken away?
                </li>
            </ul>

            <div id="Question_1" className="fqa-c-corporation-section">
                <h3>Do I need an attorney to form a corporation?</h3>
                <p>No. You can prepare and file necessary paperwork yourself, or you can use Ascend to incorporate your business. If you are unsure if incorporating will benefit your business, please call us. Our Business Specialists are happy to answer your questions.</p>
                <p onClick={() => scrollToSection('top')} className="fqa-c-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_2" className="fqa-c-corporation-section">
                <h3>What forms are required to form a c corporation (c corp)?</h3>
                <p>Articles of Incorporation or Certificate of Incorporation, depending on the state.</p>
                <p onClick={() => scrollToSection('top')} className="fqa-c-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_3" className="fqa-c-corporation-section">
                <h3>Is a c corp required to have a registered agent?</h3>
                <p>Yes. State laws require all corporations to maintain a registered address with the Secretary of State in each state where they do business. The person or company located at that address, known as the Registered Agent, must remain available during all business hours. A Registered Agent receives and forwards important legal documents and state correspondence on behalf of the business.</p>
                <p onClick={() => scrollToSection('top')} className="fqa-c-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_4" className="fqa-c-corporation-section">
                <h3>What do I need to do after I form my c corp?</h3>
                <p>Most states require c corps to file annual reports and pay franchise taxes to maintain their good standing. Failure to file annual reports and pay franchise taxes can result in fines, notices, and the inability to conduct business.</p>
                <p>
                State laws require c corps to hold annual meetings of shareholders and directors and record meeting minutes. Owners and directors of a c corp use corporate minutes to reflect changes in management and important corporate activities.
                </p>
                <p>
                Ascend can assist you with all of your internal documentation needs. Additionally, almost all state, county, and local governments require c corps to complete business license, permit, and tax registration applications before beginning to operate.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-c-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_5" className="fqa-c-corporation-section">
                <h3>What is the organizational structure of a c corp?</h3>
                <p>The company is owned by shareholders, who elect directors. The directors set a vision for the corporation and are responsible for the management of the corporation. The officers and managers hired by the directors are responsible with carrying out the vision on a day-to-day basis.</p>
                <p onClick={() => scrollToSection('top')} className="fqa-c-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_6" className="fqa-c-corporation-section">
                <h3>Can a c corp own an LLC?</h3>
                <p>Since a c corp is its own legal identity (separate from that of its owner), a c corp can own an interest in an LLC.</p>
                <p onClick={() => scrollToSection('top')} className="fqa-c-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_7" className="fqa-c-corporation-section">
                <h3>Can a c corp own an s corporation (s corp)?</h3>
                <p>An s corp can own a c corp. However, a c corp cannot own an s corp. Much of this has to do with the structuring of a c corp vs an s corp. To learn more about what is an s corp and how it differs from a c corp, please visit the s corp page.</p>
                <p onClick={() => scrollToSection('top')} className="fqa-c-corporation-back-to-top">Back to Top</p>
            </div>
            <div id="Question_8" className="fqa-c-corporation-section">
                <h3>Can the personal asset protection provided by forming an c corp be taken away?</h3>
                <p>No. You can prepare and file necessary paperwork yourself, or you can use Ascend to incorporate your business. If you are unsure if incorporating will benefit your business, please call us. Our Business Specialists are happy to answer your questions.</p>
                <p>
                Ascend can assist your company maintain its "corporate veil" by providing you with required corporate forms and documents for you to complete and by assisting you with required state filings.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-c-corporation-back-to-top">Back to Top</p>
            </div>


            
        </div>
    );
};

export default FQA_C_corporation;
