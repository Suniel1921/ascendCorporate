import React from 'react';
import "./FQA_Corporate_and_LLC_Kits.css";

const FQA_Corporate_and_LLC_Kits = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-corporate-and-llc-kits-container" id="top">
            <ul className="fwa-corporate-and-llc-kits-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-corporate-and-llc-kits-question fwa-corporate-and-llc-kits-list-item">
                What is a Corporate Kit?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-corporate-and-llc-kits-question fwa-corporate-and-llc-kits-list-item">
                What are the benefits of having a Corporate Kit?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-corporate-and-llc-kits-question fwa-corporate-and-llc-kits-list-item">
                What is a Corporate Seal?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fwa-corporate-and-llc-kits-question fwa-corporate-and-llc-kits-list-item">
                Why do I need a Corporate Seal?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fwa-corporate-and-llc-kits-question fwa-corporate-and-llc-kits-list-item">
                Why a Corporate Kit is Important?
                </li>
            </ul>

            <div id="Question_1" className="fwa-corporate-and-llc-kits-section">
                <h3>What is a Corporate Kit?</h3>
                <p>
                A Corporate Kit is typically a 3-ring binder with tabs where you will store all of your most important organizational documents. Storing your documents in the right area of this binder will allow you to easily refer to documents and present them to necessary parties.
                </p>
                <p>
                This Corporate Kit may also be referred to as a Corporate Records Book for a corporation or an LLC Records Binder for an LLC.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-corporate-and-llc-kits-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-corporate-and-llc-kits-section">
                <h3>What are the benefits of having a Corporate Kit?</h3>
                <p>
                The Corporate Kit provides a place to store all of your important company records. Over time, you will refer to these documents again and again and be able to easily present them to appropriate parties when requested. Furthermore, the corporate seal will make your documents look more professional to associates and customers in your day to day activities.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-corporate-and-llc-kits-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-corporate-and-llc-kits-section">
                <h3>What is a Corporate Seal?</h3>
                <p>
                A corporate seal is a handheld stamp. It is used by a Corporation or LLC to emboss documents with your company' name, state and year of incorporation. This seal also gives your documents a more professional appearance.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-corporate-and-llc-kits-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fwa-corporate-and-llc-kits-section">
                <h3>Why do I need a Corporate Seal?</h3>
                <p>
                Having a corporate seal is not required, but along with giving a professional appearance, the seal is often used to stamp documents to signify that they are official company documents.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-corporate-and-llc-kits-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fwa-corporate-and-llc-kits-section">
                <h3>Why a Corporate Kit is Important?</h3>
                <p>
                Anyone that forms a corporation, LLC, or other business entity needs to be able to quickly locate key organizational documents. You will refer to the key organizational documents for your corporation or LLC again and again throughout the life of your business.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-corporate-and-llc-kits-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Corporate_and_LLC_Kits;
