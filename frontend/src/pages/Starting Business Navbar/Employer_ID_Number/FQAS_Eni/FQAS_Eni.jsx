import React from 'react';
import './FQAS_Eni.css'; // Import the CSS file

const FQAS_Eni = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fqas-eni-container" id="top">
            <h2>Employer Identification Number (EIN) FAQs</h2>
            <ul className="fqas-eni-list">
                <li onClick={() => scrollToSection('What-is-an-Employer-Identification-Number-(EIN)?')} className="fqas-eni-question fqas-eni-list-item">
                What is an Employer Identification Number (EIN)?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fqas-eni-question fqas-eni-list-item">
                What is the difference between an EIN and a Federal Tax Identification Number?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fqas-eni-question fqas-eni-list-item">
                Do I need an EIN?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fqas-eni-question fqas-eni-list-item">
                How do I apply for an EIN?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fqas-eni-question fqas-eni-list-item">
                What if I lose my EIN?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fqas-eni-question fqas-eni-list-item">
                I already have an EIN, but now I am incorporating. Do I need a new one?
                </li>
            </ul>

            <div id="What-is-an-Employer-Identification-Number-(EIN)?" className="fqas-eni-section">
                <h3>What is an Employer Identification Number (EIN)?</h3>
                <p>
                Similar to an individual's Social Security Number, a federal Employer Identification Number (EIN) identifies a business for tax purposes. Also called a Federal Tax ID, the EIN is issued by the Internal Revenue Service (IRS).
                </p>
                <p>
                The IRS requires corporations, Limited Liability Companies (LLCs) operating as partnerships, and all employers to obtain an EIN. This number is used for all tax filings the business makes. Banks, lenders, and business partners may also request your EIN.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqas-eni-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fqas-eni-section">
                <h3>What is the difference between an EIN and a Federal Tax Identification Number?</h3>
                <p>
                None. An EIN and a Federal Tax Identification Number are the same, just different terminology for the same number.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqas-eni-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fqas-eni-section">
                <h3>Do I need an EIN?</h3>
                <p>
                The IRS usually requires corporations and Limited Liability Companies (LLCs) operating as partnerships to obtain an EIN. Any business that hires employees, including sole proprietorships and single-member LLCs, must also apply for an EIN.
                </p>
                <p>
                Banks may require an EIN in order to open a business checking account. Also, you may need to list your EIN on business license, permit, and tax registration applications.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqas-eni-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fqas-eni-section">
                <h3>How do I apply for an EIN?</h3>
                <p>
                For only $80 ($175 for non-U.S. residents), Ascend can process your EIN application.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqas-eni-back-to-top">Back to Top</p>
            </div>
            <div id="Question_5" className="fqas-eni-section">
                <h3>What if I lose my EIN?</h3>
                <p>
                If you misplaced an EIN previously issued by the Internal Revenue Service, you can either locate your copy of the IRS confirmation letter or web printout containing your EIN that the IRS issued after receiving your EIN application, or you can call the IRS at 800-829-4933. Make sure you have authority to request this information from the IRS. If you do not, the IRS will mail a confirmation letter containing the EIN to the taxpayer listed on the original application.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqas-eni-back-to-top">Back to Top</p>
            </div>
            <div id="Question_6" className="fqas-eni-section">
                <h3>I already have an EIN, but now I am incorporating. Do I need a new one?</h3>
                <p>
                You can visit the IRS website for more information on whether or not you will need a new EIN.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqas-eni-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQAS_Eni;
