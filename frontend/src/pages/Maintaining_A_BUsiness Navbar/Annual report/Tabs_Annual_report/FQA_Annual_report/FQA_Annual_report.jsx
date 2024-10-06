import React from 'react';
import "./FQA_Annual_report.css";

const FQA_Annual_Report = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-annual-report-container" id="top">
            <ul className="fwa-annual-report-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-annual-report-question fwa-annual-report-list-item">
                    What is an Annual Report?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-annual-report-question fwa-annual-report-list-item">
                    What is the purpose of filing an Annual Report?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-annual-report-question fwa-annual-report-list-item">
                    Are there other names for an Annual Report?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fwa-annual-report-question fwa-annual-report-list-item">
                    Is an Initial Report the same as an Annual Report?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fwa-annual-report-question fwa-annual-report-list-item">
                    What is the difference between an Annual Report and a Franchise Tax?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fwa-annual-report-question fwa-annual-report-list-item">
                    Are Annual Report requirements the same in all states?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fwa-annual-report-question fwa-annual-report-list-item">
                    Will my Annual Report due date be the same every year?
                </li>
                <li onClick={() => scrollToSection('Question_8')} className="fwa-annual-report-question fwa-annual-report-list-item">
                    What happens if I ignore or miss my Annual Report due date?
                </li>
                <li onClick={() => scrollToSection('Question_9')} className="fwa-annual-report-question fwa-annual-report-list-item">
                    Can I make amendments to my company information when I file my Annual Report?
                </li>
            </ul>

            <div id="Question_1" className="fwa-annual-report-section">
                <h3>What is an Annual Report?</h3>
                <p>
                    Most entities are subject to regular reporting requirements to the federal government, state jurisdiction, and/or local jurisdictions in which business is transacted. The definition of an annual report is a required filing due to the Secretary of State, usually a listing of directors, officers and some financial information.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-annual-report-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-annual-report-section">
                <h3>What is the purpose of filing an Annual Report?</h3>
                <p>
                    The purpose of filing an annual or biennial report is to provide the jurisdiction with current information on the company's structure (officers, directors, members, registered agent, etc.) and finances (authorized shares, issued shares, stated capital, paid in capital, etc.) In many states the amount of a company's franchise tax due is often determined by the information provided by the company on its annual report.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-annual-report-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-annual-report-section">
                <h3>Are there other names for an Annual Report?</h3>
                <p>
                    All states are different, and although the Annual Report is similar in all states, the state may actually call it something different. Some examples are:
                </p>
                <ul>
                    <li>Delaware - Annual Franchise Tax Report</li>
                    <li>California - Statement of Information</li>
                    <li>Nevada - Annual List</li>
                    <li>Oklahoma - Annual Certificate</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-annual-report-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fwa-annual-report-section">
                <h3>Is an Initial Report the same as an Annual Report?</h3>
                <p>
                    An initial report is the same as an Annual Report; however, it is usually due soon after forming a business entity, and is in addition to an Annual Report filing.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-annual-report-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fwa-annual-report-section">
                <h3>What is the difference between an Annual Report and a Franchise Tax?</h3>
                <p>
                    Distinguishing an Annual Report from a Franchise Tax Report can be confusing, since the name of the annual report in some states is called an Annual Franchise Tax Report. The name of the report doesn't always indicate exactly what it is, so you'll need to know the state office you're required to file with. All states are different, and in some states you may need to file an Annual Franchise Tax with the Secretary of State (similar to an Annual Report), and in others you may need to file a Franchise Tax with the Department of Taxation or Franchise Department.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-annual-report-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="fwa-annual-report-section">
                <h3>Are Annual Report requirements the same in all states?</h3>
                <p>
                    No. Each state has its own requirements regarding Annual Reports. Not only are Annual Report requirements dependent on the individual state laws, but they are also dependent on other factors such as the date of registration, entity type, and other state regulations.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-annual-report-back-to-top">Back to Top</p>
            </div>
            <div id="Question_7" className="fwa-annual-report-section">
                <h3>Will my Annual Report due date be the same every year?
                </h3>
                <p>
                    It depends on the state laws where you'll file your Annual Report. States have the ability to change the requirements surrounding Annual Reports at any time, with or without notice. To be safe, always ensure that you've researched the most up to date state requirements, so you don't miss the filing deadline.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-annual-report-back-to-top">Back to Top</p>
            </div>
            <div id="Question_8" className="fwa-annual-report-section">
                <h3>What happens if I ignore or miss my Annual Report due date?</h3>
                <p>
                    Missing an Annual Report due date can have major consequences. A company's good standing status and even its rights to exist can be jeopardized by ignoring annual report requirements. A company may also incur monetary penalties for not filing their report on time. If you are late to file your annual report, depending on the state, you'll have to pay penalty fees and reinstatement fees, both of which are much higher than the price of actually filing the annual report for the first time.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-annual-report-back-to-top">Back to Top</p>
            </div>
            <div id="Question_9" className="fwa-annual-report-section">
                <h3>Can I make amendments to my company information when I file my Annual Report?</h3>
                <p>
                    It depends on the state. Some states allow a corporation to amend it's list of officers and directors, or change the stock structure.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-annual-report-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Annual_Report;
