import React from 'react';
import './FQA_DBA_Business_Name.css'; // Updated the renamed CSS file

const FQA_DBA_Business_Name = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="FQA_DBA_Business_Name-container" id="top">
            <ul className="FQA_DBA_Business_Name-list">
                <li onClick={() => scrollToSection('Question_1')} className="FQA_DBA_Business_Name-question FQA_DBA_Business_Name-list-item">
                    Why would I file a DBA?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="FQA_DBA_Business_Name-question FQA_DBA_Business_Name-list-item">
                    What are the advantages of a DBA?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="FQA_DBA_Business_Name-question FQA_DBA_Business_Name-list-item">
                    Why would a sole proprietor need to file a DBA?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="FQA_DBA_Business_Name-question FQA_DBA_Business_Name-list-item">
                    Why would a Partnership need to file a DBA?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="FQA_DBA_Business_Name-question FQA_DBA_Business_Name-list-item">
                    Why would an LLC need to file a DBA?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="FQA_DBA_Business_Name-question FQA_DBA_Business_Name-list-item">
                    Why would a Corporation need to file a DBA?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="FQA_DBA_Business_Name-question FQA_DBA_Business_Name-list-item">
                    Are there any restrictions on DBA name filings?
                </li>
                <li onClick={() => scrollToSection('Question_8')} className="FQA_DBA_Business_Name-question FQA_DBA_Business_Name-list-item">
                    How do I file a DBA?
                </li>
                <li onClick={() => scrollToSection('Question_9')} className="FQA_DBA_Business_Name-question FQA_DBA_Business_Name-list-item">
                    Does a DBA require annual renewal?
                </li>
            </ul>

            <div id="Question_1" className="FQA_DBA_Business_Name-section">
                <h3>Why would I file a DBA?</h3>
                <p>
                If sole proprietors choose to operate a business under a name other than their personal name, they need to register that name with the state, county, city, or town in which the business operates.
                </p>
                <p>
                If you own a corporation or an LLC, you may choose to operate under a different name than the original legal name of your business. If so, you will need to register this alternate name in the state, county, city, or town where you conduct business.
                </p>
                <p>
                You will need to register your DBA name prior to opening a business bank account for your alternate name and before advertising or transacting business under another name.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_DBA_Business_Name-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="FQA_DBA_Business_Name-section">
                <h3>What are the advantages of a DBA?</h3>
                <p>
                Filing a DBA can allow you to:
                </p>
                <ul>
                    <li>Do business under a name other than your personal name</li>
                    <li>Do business under an additional name, if a corporation or LLC</li>
                    <li>Market an additional product or service under a different name</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="FQA_DBA_Business_Name-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="FQA_DBA_Business_Name-section">
                <h3>Why would a sole proprietor need to file a DBA?</h3>
                <p>
                Sole proprietors often file DBAs in order to do business under a name other than their personal names. For example, John Smith might register "Smith Plumbing" as a DBA.
                </p>
                <p>
                If you operate your business under a name other than your personal name, you will need to register your DBA with the appropriate state, county, city, or town office.
                </p>
                <p>
                    Ascend can help sole proprietors file DBAs with some state and local government offices.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_DBA_Business_Name-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="FQA_DBA_Business_Name-section">
                <h3>Why would a Partnership need to file a DBA?</h3>
                <p>
                To avoid doing business under only one partner's name, or under both names, partnerships often file DBA names with their state, county, city, or town government offices. For example, John Smith and Bob Jones might file the DBA, "Smith and Jones Enterprises."
                </p>
                <p>
                If you manage a partnership that operates under a DBA, you will need to register your DBA with the appropriate government office.
                </p>
                <p>
                    Ascend can help partnerships file DBAs with some state and local offices. Call us to learn more about registering your business name today.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_DBA_Business_Name-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="FQA_DBA_Business_Name-section">
                <h3>Why would an LLC need to file a DBA?</h3>
                <p>
                If your LLC will operate under a DBA name, it must register its DBA with the appropriate state, county, city, or town government office. An LLC might file a DBA to market a new product or service, or to simply operate under an additional name.
                </p>
                <p>
                Some state and local government offices refer to a DBA as a "trade name" or "assumed name," since these names usually reflect the company's line of business more accurately than its legal name. Let Ascend help your LLC register a DBA name.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_DBA_Business_Name-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="FQA_DBA_Business_Name-section">
                <h3>Why would a Corporation need to file a DBA?</h3>
                <p>
                Corporations often file DBAs for additional business names. A corporation might file a DBA to market a new product or service under a unique name. In other cases, corporations simply operate under more than one name.
                </p>
                <p>
                If your corporation will use a DBA in its home state or any other state, it must register the DBA with the appropriate government office at the state, county, city, or town level. We can help your corporation register a DBA name today.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_DBA_Business_Name-back-to-top">Back to Top</p>
            </div>
            <div id="Question_7" className="FQA_DBA_Business_Name-section">
                <h3>Are there any restrictions on DBA name filings?</h3>
                <p>
                In many states, more than one business can file the same DBA name at the local level. However, a DBA cannot include a corporate indicator such as "Inc." or an LLC indicator such as "LLC," unless the business is a corporation or LLC.
                </p>
                <p>
                Corporations and LLCs can sometimes file DBAs that include "Inc." or "LLC," depending upon the laws of the particular state, county, city, or town.
                </p>
                <p>
                There is no limit to the number of DBA names you can register. You can file as many DBAs as your business needs.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_DBA_Business_Name-back-to-top">Back to Top</p>
            </div>
            <div id="Question_8" className="FQA_DBA_Business_Name-section">
                <h3>How do I file a DBA?</h3>
                <p>
                If you own a corporation or LLC, Ascend can help you file a DBA with the appropriate state, county, or local office for a service fee of $150 plus government fees.
                </p>
                <p>
                If you conduct business as a sole proprietor or partnership, our services depend upon the location of your business. Please contact us for more information about the services we offer in your area. In some cases, we can help sole proprietors and partnerships file DBAs.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_DBA_Business_Name-back-to-top">Back to Top</p>
            </div>
            <div id="Question_9" className="FQA_DBA_Business_Name-section">
                <h3>Does a DBA require annual renewal?</h3>
                <p>
                State and local offices have unique rules for DBA expiration. While some state and local governments require businesses to renew DBA filings, others do not. If your business must renew its DBA registration, your state or local government office typically sends a renewal notice to the business.
                </p>
                <p>
                Depending upon the location of your business, we may offer DBA renewal services in your area. Get help renewing your DBA name by contacting us at 9800000000.
                </p>
                <p onClick={() => scrollToSection('top')} className="FQA_DBA_Business_Name-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_DBA_Business_Name;
