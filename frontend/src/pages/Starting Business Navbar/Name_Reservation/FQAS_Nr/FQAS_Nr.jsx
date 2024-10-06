import React from 'react';
import './FQAS_Nr.css'; // Import the CSS file

const FQAS_Nr = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fqas-nr-container" id="top">
            <h2>Name Reservation FAQs</h2>
            <ul className="fqas-nr-list">
                <li onClick={() => scrollToSection('What-is-an-Employer-Identification-Number-(EIN)?')} className="fqas-nr-question fqas-nr-list-item">
                    What is a name reservation?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fqas-nr-question fqas-nr-list-item">
                    How long will my business name remain reserved?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fqas-nr-question fqas-nr-list-item">
                    Are there any guidelines for naming my business?
                </li>
            </ul>

            <div id="What-is-an-Employer-Identification-Number-(EIN)?" className="fqas-nr-section">
                <h3>What is a name reservation?</h3>
                <p>
                A name reservation is a filing with the Secretary of State (or equivalent) office to hold a corporate name for a set period of time (that varies by state). Ascend can assist you in reserving a corporate name. In addition, we can do a preliminary name search before reserving a name or incorporating your business.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqas-nr-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fqas-nr-section">
                <h3>How long will my business name remain reserved?</h3>
                <p>
                The length of time varies from state to state, but in general it can be reserved for up to 120 days by applying with the appropriate state and paying the necessary filing fee.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqas-nr-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fqas-nr-section">
                <h3>Are there any guidelines for naming my business?</h3>
                <p>
                Yes, your business name must be distinguishable from already existing corporate names. Remember to choose a name that portrays a positive image of your company and is easy to associate with your line of business.
                </p>
                <p>
                Each state has its own guidelines, but most states require corporate indicators following the name of the business, such as "Corporation," "Incorporated," or an abbreviation such as "Inc." or "Corp," "Limited Liability Company" or "LLC," "Limited Partnership" or "LP" or "Limited Liability Partnership" or "LLP."
                </p>
                <p onClick={() => scrollToSection('top')} className="fqas-nr-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQAS_Nr;
