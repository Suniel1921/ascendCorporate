import React from 'react';
import './FQA_LLC.css'; // Import the renamed CSS file

const FQA_LLC = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fqa-llc-container" id="top">
            {/* <h2>Registered Agent FAQs</h2> */}
            <ul className="fqa-llc-list">
                <li onClick={() => scrollToSection('Question_1')} className="fqa-llc-question fqa-llc-list-item">
                    How does an LLC help protect my personal assets?
                </li>
                <li onClick={() => scrollToSection('Question_2')} className="fqa-llc-question fqa-llc-list-item">
                    How are LLC profits taxed?
                </li>
                <li onClick={() => scrollToSection('Question_3')} className="fqa-llc-question fqa-llc-list-item">
                    How does an LLC compare to a C Corporation?
                </li>
                <li onClick={() => scrollToSection('Question_4')} className="fqa-llc-question fqa-llc-list-item">
                    How does an LLC compare to a S Corporation?                </li>
                <li onClick={() => scrollToSection('Question_5')} className="fqa-llc-question fqa-llc-list-item">
                    What is a Series LLC?                </li>
                <li onClick={() => scrollToSection('Question_6')} className="fqa-llc-question fqa-llc-list-item">
                    What state should I form my LLC in?
                </li>
                <li onClick={() => scrollToSection('Question_7')} className="fqa-llc-question fqa-llc-list-item">
                    How do I create an LLC?
                </li>
                <li onClick={() => scrollToSection('Question_8')} className="fqa-llc-question fqa-llc-list-item">
                    What do I need to do to maintain my LLC?
                </li>
                <li onClick={() => scrollToSection('Question_9')} className="fqa-llc-question fqa-llc-list-item">
                    Can I use Ascend as a Registered Agent?
                </li>
                <li onClick={() => scrollToSection('Question_10')} className="fqa-llc-question fqa-llc-list-item">
                    If I buy a package, but want to customize and add services, is that possible?
                </li>
                <li onClick={() => scrollToSection('Question_11')} className="fqa-llc-question fqa-llc-list-item">
                    I had some legal questions come up. Can you assist?
                </li>
            </ul>

            <div id="Question_1" className="fqa-llc-section">
                <h3>How does forming an LLC help protect my personal assets?</h3>
                <p>
                Unlike sole proprietorships and partnerships, an LLC allows the owner to separate and protect their personal assets from business debts and liabilities. A sole proprietor or general partner remains personally liable for business obligations, leaving their home, car, and personal savings at risk.
                </p>
                <p>
                    In contrast, starting an LLC creates a business structure separate from its owners. In a properly formed and managed LLC, only business assets remain at risk in a judgment against the company. Owners can protect their personal savings and possessions from business debts.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>

            <div id="Question_2" className="fqa-llc-section">
                <h3>How are LLC profits taxed?</h3>
                <p>
                Like a sole proprietorship or partnership, an LLC enjoys pass-through taxation. This means that owners (also known as "members") report their share of profits or losses in the company on their individual tax returns. The Internal Revenue Service (IRS) does not assess taxes on the company itself. This avoids the "double taxation" that general (c corporations) experience. In a c corporation, the IRS taxes profits at the corporate level and dividends at the shareholder level.
                </p>
                <p>
                When creating an LLC, owners need not distribute profits and losses in the LLC in proportion to ownership (pursuant to IRS guidelines). The owners of an LLC can agree to allocate the company's profits and losses among themselves however they see fit, not necessarily based on the percentage of the company each owner controls.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>

            <div id="Question_3" className="fqa-llc-section">
                <h3>How does an LLC compare to a C Corporation?</h3>
                <p>
                For many small business owners, a Limited Liability Company (LLC) offers advantages over a c corporation (also known as a "general" corporation). Creating an LLC combines the tax advantages of a sole proprietorship or partnership with the liability protection of a corporation.
                </p>
                <p>
                The IRS taxes the profits of a c corporation at corporate tax rates. Then, if the c corporation pays dividends to shareholders, the IRS taxes those dividends a second time at the personal income tax rates of the shareholders. The LLC business structure avoids this "double taxation." The Internal Revenue Service (IRS) does not consider an LLC itself a taxable entity. Instead, the company's earnings "pass through" to the owners, who report their share of profits or losses on their individual tax returns.
                </p>
                <p>
                Small business owners who want the flexible structure of an LLC but the advantages of corporate taxation can elect corporate taxation for their LLC. To elect corporate taxation, owners file Form 8832, "Tax Classification Election," with the IRS. Electing this status may also make an LLC eligible for certain deductions available only to corporations. For specific guidance, small business owners should consult their accountant or tax advisor regarding this election.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>

            <div id="Question_4" className="fqa-llc-section">
                <h3>How does an LLC compare to an S Corporation?</h3>
                <p>
                The Limited Liability Company (LLC) and the Subchapter S Corporation ("s corp") share the benefit of pass-through taxation. This means that owners in the company report their share of profits and losses on each owner's individual tax return. The Internal Revenue Service (IRS) assesses no separate tax on the company itself. In contrast, "double taxation" occurs when the IRS taxes both a c corporation's profit and dividends paid to shareholders.
                </p>
                <p>
                Despite the similarity of pass-through taxation, an LLC formation can offer advantages over an s corporation:
                </p>
                <ul>
                    <li>Not required to hold annual meetings or record meeting minutes (though we recommend it)</li>
                    <li>LLC owners need not worry about the formalities of issuing stock, since an LLC does not have stock</li>
                    <li>No limit to the number of owners</li>
                    <li>LLC owners need not be U.S. citizens or permanent residents</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>
            <div id="Question_5" className="fqa-llc-section">
                <h3>What is a Series LLC?</h3>
                <p>
                A Series LLC consists of a Limited Liability Company with more than one series of members, managers, or LLC interests. In some cases, a series LLC can have a separate business purpose or investment objective. For years, Delaware law has permitted an LLC to register separate series. Use of this structure remains uncommon due to uncertainty over federal income tax consequences. Advantages include:
                </p>
                <ul>
                    <li>The Series LLC permits separate liability-insulated divisions within a single entity.</li>
                    <li>A Series LLC could be used as a holding company owning intangible assets, or tangible assets such as real estate, or as an operating company conducting different lines of business.</li>
                    <li>The Series LLC reduces costs associated with forming and maintaining multiple LLCs.</li>
                    <li>Other states that have enacted statutes permitting the formation and registration of series LLCs include Illinois, Iowa, Nevada, Oklahoma, Tennessee and Utah. To form a series LLC, contact a Business Specialist at 800-818-6082 (toll-free) or 302-636-5440</li>
                </ul>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>
            <div id="Question_6" className="fqa-llc-section">
                <h3>What state should I form my LLC in?</h3>
                <p>
                Most businesses create an LLC in the state in which they primarily operate. Advantages of choosing your home state include:
                </p>
                <ul>
                    <li>Typically the least complicated option</li>
                    <li>Usually costs less than starting an LLC in a different state and registering with your home state</li>
                    <li>Avoids paying franchise taxes and filing annual reports in more than one state</li>
                </ul>
                <p>
                Many companies conduct business throughout the U.S. and abroad. An LLC with business locations in multiple states may form an LLC in a single state and then register to do business in the additional states. This means that companies must formally register, file annual reports, and pay annual fees to conduct business in multiple states.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>
            <div id="Question_7" className="fqa-llc-section">
                <h3>How do I create an LLC?</h3>
                <p>
                Ascend can walk you through the process of starting an LLC either online or by telephone. Customers usually find our LLC formation services less expensive than those of an attorney. We have multiple packages and options to choose from to meet your individual budget and needs.
                </p>
                <p>
                Creating an LLC takes less than 10 minutes. You simply need to choose a business structure, state, and your company name. We take care of the rest. Our experts have formed more than 300,000 businesses nationwide. 
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>
            <div id="Question_8" className="fqa-llc-section">
                <h3>What do I need to do to maintain my LLC?</h3>
                <p>
                Nearly all states require LLC owners to file annual reports or pay franchise taxes to maintain the company's good standing. The Secretary of State may forward a renewal notice directly to your company or to your Registered Agent. Failure to file reports and pay franchise taxes by the state deadline can result in fines, notices, and the inability to conduct business.
                </p>
                <p>
                State laws do not require an LLC to hold annual meetings or record meeting minutes. However, we recommend that LLCs update their records at least annually to reflect any changes in management or activities.
                </p>
                <p>
                Almost all state, county, and local governments require an LLC to complete business license, permit, and tax registration applications before beginning to operate. Learn more about how our Business License Compliance Package can help your company.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>
            <div id="Question_9" className="fqa-llc-section">
                <h3>Can I use Ascend as a Registered Agent?</h3>
                <p>
                Yes, you can! We are happy to receive your legal documents and forward them to the person you designate as your legal contact. By starting an LLC online and using Ascend as your registered agent, you are provided peace of mind. Simply choose Ascend as your Registered Agent during the checkout process.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>
            <div id="Question_10" className="fqa-llc-section">
                <h3>If I buy a package, but want to customize and add services, is that possible?</h3>
                <p>
                Absolutely! Our advanced services are available for an additional fee with any of the lower packages. The additional services and resources available include an LLC Operating Agreement, a Legal and Tax reference library, the filing of an Employer Identification Number (EIN) with the IRS, and more!
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>
            <div id="Question_11" className="fqa-llc-section">
                <h3>I had some legal questions come up. Can you assist?</h3>
                <p>
                Not with legal questions. Ascend does not provide legal advice. Please consult with an attorney for any legal issues that arise with your LLC or business operations.
                </p>
                <p onClick={() => scrollToSection('top')} className="fqa-llc-back-to-top">Back to Top</p>
            </div>
        </div>
    );
};

export default FQA_LLC;
