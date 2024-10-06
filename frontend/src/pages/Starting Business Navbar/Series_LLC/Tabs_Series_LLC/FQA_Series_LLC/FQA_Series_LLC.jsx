import React from 'react';
import './FQA_Series_LLC.css'; // Updated the renamed CSS file

const FQA_Series_LLC = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fqa-series-llc-container" id="top">
            {/* <h2>Registered Agent FAQs</h2> */}
            <ul className="fqa-series-llc-list">
                <li onClick={() => scrollToSection('Question_1')} className="fqa-series-llc-question fqa-series-llc-list-item">
                What is a Series LLC?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fqa-series-llc-question fqa-series-llc-list-item">
                Which states have adopted Series LLCs?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fqa-series-llc-question fqa-series-llc-list-item">
                What are the advantages of a Series LLC?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fqa-series-llc-question fqa-series-llc-list-item">
                What are the disadvantages of a Series LLC?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fqa-series-llc-question fqa-series-llc-list-item">
                How is a Series LLC taxed?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fqa-series-llc-question fqa-series-llc-list-item">
                Do I need an attorney to form a Series LLC?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fqa-series-llc-question fqa-series-llc-list-item">
                Is a Series LLC required to have a registered agent?
                </li>
                <li onClick={() => scrollToSection('Question_8')} className="fqa-series-llc-question fqa-series-llc-list-item">
                After I form my business, how do I remain in compliance?
                </li>
            </ul>

            <div id="Question_1" className="fqa-series-llc-section">
                <h3>
                What is a Series LLC?
                </h3>
                <p>
                A few states now permit companies to form a business structure known as a Series LLC. This type of Limited Liability Company (LLC) can have multiple series, or groups of series, within the LLC, each with its own or common members, managers or LLC interests (i.e., ownership). In theory, an LLC can use each series to hold a separate asset, like property or investments. Each of the series can be segregated from the liabilities of the others, so that the creditors of one series within the LLC cannot reach the assets of another series within the LLC.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-series-llc-back-to-top">Back to Top</p>
            </div>
            <div id="Question_2" className="fqa-series-llc-section">
                <h3>Which states have adopted Series LLCs?</h3>
                <p>
                Ascend can help customers register a Series LLC in Delaware, Illinois, Iowa, Nevada, Oklahoma, Tennessee and Utah. In addition, the Commonwealth of Puerto Rico has adopted a Series LLC statute.
                </p>


                <p onClick={() => scrollToSection('top')} className="fqa-series-llc-back-to-top">Back to Top</p>
            </div>


            <div id="Question_3" className="fqa-series-llc-section">
                <h3>What are the advantages of a Series LLC?</h3>
                <ul>
                    <li>Reduces cost by forming only one business at the state level</li>
                    <li>May protect assets held by one series from judgments against another series</li>
                    <li>Often used to hold real estate or intangible assets (e.g., investment securities)</li>
                </ul>

                <p onClick={() => scrollToSection('top')} className="fqa-series-llc-back-to-top">Back to Top</p>
            </div>
            <div id="Question_4" className="fqa-series-llc-section">
                <h3>What are the disadvantages of a Series LLC?</h3>
                <p>
                It has not yet been tested by case law, particularly in regard to its applicability to real estate. There is the risk that some courts may not recognize the separateness of each series, or may use their authority to tear down the "walls" separating the entities. Customers should form this type of company under the guidance of an experienced attorney, who can help them properly structure the company, draft its operating agreement, and ensure that its assets are properly separated and recorded.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-series-llc-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fqa-series-llc-section">
                <h3>
                How is a Series LLC taxed??
                </h3>
                <p>
                The IRS has issued proposed regulations that would require the series to determine whether it will be taxed as a corporation (i.e., each series is a separate entity) or as a partnership (i.e., the series is disregarded for taxes). These regulations do not address how the LLC itself is to be taxed. It is possible, however, that the states in which Series LLCs may be formed may adopt different tax treatment for state tax purposes. If you are interested in setting up a Series LLC, in addition to consulting experienced legal counsel, you should also consult a tax advisor.
                </p>


                <p onClick={() => scrollToSection('top')} className="fqa-series-llc-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="fqa-series-llc-section">
                <h3>Do I need an attorney to form a Series LLC?</h3>
                <p>
                <b>No.</b> You can prepare and file necessary paperwork yourself, or you can use Ascend to form your Series LLC.
                </p>

                <p onClick={() => scrollToSection('top')} className="fqa-series-llc-back-to-top">Back to Top</p>
            </div>

            <div id="Question_7" className="fqa-series-llc-section">
                <h3>Is a Series LLC required to have a registered agent?</h3>

                <p>
                Yes. LLCs must designate someone to receive official state correspondence and legal notices, called service of process. Most states refer to this delegate as a "Registered Agent." Some states also use the terms "statutory agent" or "resident agent." Some states will not allow a business to serve as its own Registered Agent. Other states allow a company to designate an owner or director as its Registered Agent. However, that agent must:
                </p>

                <ul>
                    <li>Remain available during normal business hours</li>
                    <li>Maintain a physical address located in the state where the business registered, and any states where the company is doing business</li>
                    <li>List their name and address in public records</li>
                </ul>
                
                <p onClick={() => scrollToSection('top')} className="fqa-series-llc-back-to-top">Back to Top</p>
            </div>

            <div id="Question_8" className="fqa-series-llc-section">
                <h3>After I form my business, how do I remain in compliance?</h3>

                <p>
                Because the federal tax consequences and legal implications of a Series LLC remain uncertain, we recommend that customers consult qualified legal and tax professionals for help managing their Series LLC.
                </p>
                
                <p onClick={() => scrollToSection('top')} className="fqa-series-llc-back-to-top">Back to Top</p>
            </div>

            {/* Continue updating the rest of the sections similarly */}
        </div>
    );
};

export default FQA_Series_LLC;
