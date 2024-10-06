import React from 'react';
import "./FQA_Business_lisence.css";

const FQA_Business_License = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fwa-business-license-container" id="top">
            <ul className="fwa-business-license-list">
                <li onClick={() => scrollToSection('Question_1')} className="fwa-business-license-question fwa-business-license-list-item">
                    What is a Business License?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fwa-business-license-question fwa-business-license-list-item">
                    Why do I need a Business License?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fwa-business-license-question fwa-business-license-list-item">
                    What type of licenses would I need for a retail business?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fwa-business-license-question fwa-business-license-list-item">
                    What type of license or permit would I need for my home-based business?
                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fwa-business-license-question fwa-business-license-list-item">
                    What types of licenses or permits would I need as an employer?
                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fwa-business-license-question fwa-business-license-list-item">
                    How do I get a Business License?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fwa-business-license-question fwa-business-license-list-item">
                    What does the Business License Compliance Package consist of?
                </li>
                <li onClick={() => scrollToSection('Question_8')} className="fwa-business-license-question fwa-business-license-list-item">
                    What if my business operates in multiple locations?
                </li>
                <li onClick={() => scrollToSection('Question_9')} className="fwa-business-license-question fwa-business-license-list-item">
                    What could happen if I fail to obtain a Business License?
                </li>
                <li onClick={() => scrollToSection('Question_10')} className="fwa-business-license-question fwa-business-license-list-item">
                    How do I renew an existing Business License?
                </li>
            </ul>

            <div id="Question_1" className="fwa-business-license-section">
                <h3>What is a Business License?</h3>
                <p>
                A business license is a permit or registration required by the federal, state, county, or local government to conduct business. Besides the basic operating permits, business owners should investigate other possible licensing requirements based on their location and industry. Conducting business without the proper licenses and permits may result in penalties, notices, and the inability to operate.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fwa-business-license-section">
                <h3>Why do I need a Business License?</h3>
                <p>
                Many state, county, and local governments require companies to obtain licenses and permits before they begin to conduct business. To operate a business successfully, business owners must comply with government licensing requirements. To meet licensing requirements, a business may need to register with the city, the county, and the state.
                </p>
                <p>
                Registration requirements often vary by location. For example, some areas require a permit from the fire department before opening for business. Local authorities can have zoning restrictions that could affect your business. Many companies do not need federal licenses, but companies that do must satisfy these requirements. We can identify what licensing requirements may apply at the federal, state, county, and local level.
                </p>

                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fwa-business-license-section">
                <h3>What type of licenses would I need for a retail business?</h3>
                <p>
                If you sell goods or services, you will likely need to collect and pay state and local sales tax. Almost all states require a retail business to obtain a sales tax permit, among other licenses. For example, if your business buys and transports cars in Broward County Florida, in addition to a state of Florida business license, you may need to obtain:
                </p>
                
                <ul>
                    <li>Application to Collect And/Or Report Tax</li>
                    <li>Application for a License as a Motor Vehicle, Mobile Home, or Recreational Dealer</li>
                    <li>Motor Vehicle Dealer Surety Bond Form</li>
                    <li>Tax Application for the Certificate of Use</li>
                    <li>Local Business and Tax Registration</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fwa-business-license-section">
                <h3>What type of license or permit would I need for my home-based business?</h3>
                <p>
                Much of the time, home-based businesses need local permits rather than state or federal licenses. The rules governing small businesses vary by location. Some areas have local signage regulations for installing a sign on your home's exterior. Local zoning laws may require you to obtain a license to run a business from your home, often called a home occupation permit. For example, if your business sells products on the Internet in El Dorado County, California, you may need to obtain:
                </p>
                <ul>
                    <li>California's Seller's Permit Application</li>
                    <li>Business License Application</li>
                    <li>Home Occupation Application</li>
                    <li>Business License Fee document</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>

            <div id="Question_5" className="fwa-business-license-section">
                <h3>What types of licenses or permits would I need as an employer?</h3>
                <p>
                Employers may need to file Income Tax Withholding registration forms. Requirements vary depending on the type and location of the business. For example, if you own a food stand in Orange County, California and have two employees, you may need to obtain the following permits in order to meet California business license requirements:
                </p>
                <ul>
                    <li>California's Seller's Permit Application</li>
                    <li>Business License Application</li>
                    <li>Home Occupation Application</li>
                    <li>Business License Fee document</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>

            <div id="Question_6" className="fwa-business-license-section">
                <h3>How do I get a business license?</h3>
                <ul>
                    <li>Order online or call a Business License Specialist at 800-818-6082 (toll-free). Our hours of operation are Monday - Friday from 8 a.m. to 8 p.m. Eastern Time and Saturday - Sunday from 9 a.m. to 6 p.m. Eastern time.</li>
                    <li>We gather the license, permit, and tax registration applications identified for your business.</li>
                    <li>We send you a customized packet of forms, instructions, and the contact information for the licensing authorities.</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>
            <div id="Question_7" className="fwa-business-license-section">
                <h3>What does the Business License Compliance Package consist of?</h3>
                <p>
                The Business License Compliance Package includes:
                </p>
                <ul>
                    <li>An overview of the licenses, permits, and tax registrations identified for your business.</li>
                    <li>Licensing authority contact information, including name, address, and telephone number.</li>
                    <li>The license and permit applications and associated documents.</li>
                    <li>Detailed instructions on how to complete the applications and where to return them in order to obtain licenses and permits.</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>
            <div id="Question_8" className="fwa-business-license-section">
                <h3>What if my business operates in multiple locations?</h3>
                <p>
                If your business operates in more than one town, city, county, or state, you may need multiple licenses. Each Business License Compliance Package includes the business license applications and forms identified for your business in one state, county, and town or city. If you plan to conduct business in multiple locations, please contact a Business Specialist at 9800000000 (toll-free) or 9800000000 to order a package that covers more than one location. Additional fees may apply. Some of the states that are commonly home to firms doing business in more than one state are:
                </p>
                <ul>
                    <li>California</li>
                    <li>Delaware</li>
                    <li>Florida</li>
                    <li>New York</li>
                    <li>Texas</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>

            <div id="Question_9" className="fwa-business-license-section">
                <h3>What could happen if I fail to obtain a business license?</h3>
                <p>
                Failure to register your company with the appropriate government agency could result in fines, notices, and the inability to conduct business. Business owners should identify all licensing requirements that may apply to their business before beginning to operate.
                </p>
                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>
            <div id="Question_10" className="fwa-business-license-section">
                <h3>How do I renew an existing Business License?</h3>
                <p>You will most likely need to renew business licenses annually. State and local government offices typically send renewal notices for licenses, permits, and tax registrations directly to the licensee. If your company receives a notice, consult the instructions from your licensing agency for renewal information.</p>
                <p onClick={() => scrollToSection('top')} className="fwa-business-license-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_Business_License;
