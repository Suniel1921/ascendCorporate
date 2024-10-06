import React from 'react';
import './FAQs.css'; // Import the CSS file

const FAQs = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="faq-container" id="top">
            <h2>Registered Agent FAQs</h2>
            <ul className="faq-list">
                <li onClick={() => scrollToSection('what-is-registered-agent')} className="faq-question faq-list-item">
                    What is a Registered Agent?
                </li>
                <li onClick={() => scrollToSection('what-is-service-of-process')} className="faq-question faq-list-item">
                    What is service of process?
                </li>
                <li onClick={() => scrollToSection('can-i-be-my-own-agent')} className="faq-question faq-list-item">
                    Can I be my own Registered Agent?
                </li>
                <li onClick={() => scrollToSection('what-will-incorporate-do')} className="faq-question faq-list-item">
                    What will Ascend do as my Registered Agent?
                </li>
            </ul>

            <div id="what-is-registered-agent" className="faq-section">
                <h3>What is a Registered Agent?</h3>
                <p>
                    Corporations and LLCs must designate someone to receive official state correspondence and legal notices, called service of process. Most states refer to this delegate as a "Registered Agent." Some states also use the terms "statutory agent" or "resident agent."
                </p>
                <p>
                    In most states, a Registered Agent must:
                </p>
                <ul className="faq-sublist">
                    <li className="faq-sublist-item">Remain available during normal business hours to receive legal documents.</li>
                    <li className="faq-sublist-item">Maintain a physical address located in the state where the business is registered.</li>
                    <li className="faq-sublist-item">List their name and address in public records.</li>
                    <li className="faq-sublist-item">Promptly forward state correspondence and legal notices to the business.</li>
                </ul>
                <p>
                    Many business owners opt to use a third-party Registered Agent service like Ascend to avoid any inconvenience and protect their privacy. For instance, can you guarantee that you will never leave that address during business hours? Do you want a process server or sheriff to deliver your legal documents in front of your customers or neighbors?
                </p>
                <p>
                    Trust Ascend as your Statutory Agent to receive and forward your legal notices discreetly, promptly, and affordably.
                </p>
                <p onClick={() => scrollToSection('top')} className="back-to-top">Back to Top</p>
            </div>

            <div id="what-is-service-of-process" className="faq-section">
                <h3>What is service of process?</h3>
                <p>
                    "Service of process" might sound like a complicated legal term that applies only to large businesses, when in fact, it affects businesses of all sizes:
                </p>
                <ul className="faq-sublist">
                    <li className="faq-sublist-item">"Service" refers to the delivery of legal documents. Types of service might include mail, fax, e-mail, or personal delivery.</li>
                    <li className="faq-sublist-item">"Process" refers to legal documents. Companies normally think of documents related to a lawsuit, like a summons or complaint, as "process." However, process also includes wage garnishments, subpoenas for records, official state correspondence, and other requests common in the course of business.</li>
                </ul>
                <p>
                    Together, the words "service of process" simply mean the delivery of legal documents. All states require corporations and LLCs formed in that state to maintain an address in that state for service of process, usually known as the registered address.
                </p>
                <p>
                    Failure to respond to certain correspondence from the state can result in the suspension or termination of your company. Failure to respond to a legal notice can result in a default judgment against your company, which means that a party that has sued your company can receive the relief it was seeking without the court ever hearing your side of the argument.
                </p>
                <p onClick={() => scrollToSection('top')} className="back-to-top">Back to Top</p>
            </div>

            <div id="can-i-be-my-own-agent" className="faq-section">
                <h3>Can I be my own Registered Agent?</h3>
                <p>
                    Generally, a company may appoint an individual from that company to serve as its registered agent. However in order to do so, the individual must:
                </p>
                <ul className="faq-sublist">
                    <li className="faq-sublist-item">Remain available during normal business hours.</li>
                    <li className="faq-sublist-item">Maintain a physical registered office address located in the state where the business registered and any states where the company is doing business.</li>
                    <li className="faq-sublist-item">List his or her name and address in public records.</li>
                </ul>
                <p>
                    For the sake of privacy and convenience, the majority of businesses choose to appoint a third-party Registered Agent like Ascend to handle service of process.
                </p>
                <p onClick={() => scrollToSection('top')} className="back-to-top">Back to Top</p>
            </div>

            <div id="what-will-incorporate-do" className="faq-section">
                <h3>What will Ascend do as my Registered Agent?</h3>
                <p>
                    As the Registered Agent for your LLC or corporation, we will receive and forward legal documents and state notices on your company's behalf. We maintain a nationwide network of offices to receive legal documents during normal business hours. When we receive legal documents on behalf of your business, we will summarize the vital information on a cover sheet and forward the paperwork to you promptly.
                </p>
                <p onClick={() => scrollToSection('top')} className="back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FAQs;
