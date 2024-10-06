import React from 'react';
import "./FQA_Scrop_Election.css";

const FQA_Scorp_Election = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="FQA_Scorp_Election_container" id="top">
            <ul className="FQA_Scorp_Election_list">
                <li onClick={() => scrollToSection('Question_1')} className="FQA_Scorp_Election_question FQA_Scorp_Election_list_item">
                    What is an S Corporation?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="FQA_Scorp_Election_question FQA_Scorp_Election_list_item">
                    How does pass-through taxation work?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="FQA_Scorp_Election_question FQA_Scorp_Election_list_item">
                    What is Form 2553?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="FQA_Scorp_Election_question FQA_Scorp_Election_list_item">
                    When do I submit Form 2553 to the IRS?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="FQA_Scorp_Election_question FQA_Scorp_Election_list_item">
                    How can Ascend help me?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="FQA_Scorp_Election_question FQA_Scorp_Election_list_item">
                    Can an LLC be taxed as an S Corporation?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="FQA_Scorp_Election_question FQA_Scorp_Election_list_item">
                    Are there other IRS S Corp Tax Forms I should be aware of?
                </li>
            </ul>

            <div id="Question_1" className="FQA_Scorp_Election_section">
                <h3>What is an S Corporation?</h3>
                <p>
                    An S Corporation is a corporation that can take advantage of pass through taxation. Pass through taxation is when each shareholder reports their share of the company's profit or loss on their individual tax returns.
                </p>
                <p>
                    S Corporation shareholders must be U.S. citizens, the company must be a domestic corporation, must have only one class of stock, the shareholders must be individuals or their estates or certain tax-exempt entities or trusts (i.e., not another corporate entity) and the number of shareholders of an S-Corporation cannot exceed 100 (with family members eligible for treatment as a single shareholder). To qualify as an S-Corporation for federal tax purposes the company must make an S-Corporation election through Internal Revenue Service Form 2553.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_Scorp_Election_back_to_top">Back to Top</p>
            </div>

            <div id="Question_2" className="FQA_Scorp_Election_section">
                <h3>How does pass-through taxation work?</h3>
                <p>
                    For the typical C-Corporation, the income of the corporation is taxed at the applicable corporate tax rate, and dividends distributed to shareholders are taxed as ordinary income; a situation often referred to as "double-taxation". With an S-Corporation, the income of the company flows through directly to the shareholders and is treated as a shareholder distribution, which is not generally subject to payroll taxes. It is important to note that shareholders employed by an S-Corporation must show regular income, which is taxed as wage income.
                </p>

                <p onClick={() => scrollToSection('top')} className="FQA_Scorp_Election_back_to_top">Back to Top</p>
            </div>

            <div id="Question_3" className="FQA_Scorp_Election_section">
                <h3>What is Form 2553?</h3>
                <p>
                    This s corp form is filed with the IRS to elect S Corporation status.
                </p>

                <p onClick={() => scrollToSection('top')} className="FQA_Scorp_Election_back_to_top">Back to Top</p>
            </div>

            <div id="Question_4" className="FQA_Scorp_Election_section">
                <h3>When do I submit Form 2553 to the IRS?</h3>
                <p>
                    This is one of the s corporation forms that is due within 75 days of the Date of Formation, within 75 days of a new tax year, or any time during the year preceding the year the election is to be effective.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_Scorp_Election_back_to_top">Back to Top</p>
            </div>

            <div id="Question_5" className="FQA_Scorp_Election_section">
                <h3>How can Ascend help me?</h3>
                <p>
                    We can help you to complete the tax form. If you aren't 100% sure if the 2553 election is what you want, you have the opportunity to speak with an accountant who can provide you with helpful information so you can make the best decision for you.
                </p>

                <p onClick={() => scrollToSection('top')} className="FQA_Scorp_Election_back_to_top">Back to Top</p>
            </div>

            <div id="Question_6" className="FQA_Scorp_Election_section">
                <h3>Can an LLC be taxed as an S Corporation?</h3>
                <p>
                    This is an option. You may wish to elect to have your LLC taxed as an S-Corporation if your LLC is making regular distributions to members, particularly members who are not employed by the LLC. If you are interested, we can put you in touch with an accountant prior to filing a Form 2553, and the accountant can help you make the decision that is right for you.
                </p>

                <p onClick={() => scrollToSection('top')} className="FQA_Scorp_Election_back_to_top">Back to Top</p>
            </div>
            <div id="Question_7" className="FQA_Scorp_Election_section">
                <h3>Are there other IRS S Corp Tax Forms I should be aware of?</h3>
                <p>
                    While IRS Form 2553 is required for the election of your business as an s corporation, there are a few other s corp-specific forms you should be aware of including the IRS s corp extension form. Also know as Form 7004, the IRS s corp extension form, gives a business entity a longer span of time to file their business income taxes, information, or additional returns. Another form to be aware of is Form 1120s, the Income Tax Return for an s corporation.
                </p>

                <p onClick={() => scrollToSection('top')} className="FQA_Scorp_Election_back_to_top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Scorp_Election;
