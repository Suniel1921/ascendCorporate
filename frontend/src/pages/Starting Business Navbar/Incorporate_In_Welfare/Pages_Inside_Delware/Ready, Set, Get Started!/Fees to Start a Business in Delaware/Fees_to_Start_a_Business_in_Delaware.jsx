import React from 'react';
import './Fees_to_Start_a_Business_in_Delaware.css';
import SidebarLeft from '../../SidebarLeft/SidebarLeft';

function Fees_to_Start_a_Business_in_Delaware() {
    // MainContent component
    const MainContent = () => {
        return (
            <div className="Fees_to_Start_a_Business_in_Delaware-main-content">
                <p>
                Whenever you're thinking about taking a step in business, it's important to know how much it will cost. Delaware has a host of favorable business and taxation laws that make it a common place for companies to incorporate or form their limited liability company (LLC).
                </p>
                <p>
                When deciding whether to form your LLC, you'll want to consider all aspects of the costs of incorporating in Delaware, including formation fees and ongoing taxes.
                </p>
                <p>
                Our experts at Ascend will be happy to take care of the requirements to get your Delaware LLC or corporation up and running. We'll advise you of the cost and help you complete all requirements. Contact us today!
                </p>

                <h2>How Much Does It Cost to Incorporate in Delaware?</h2>
                <p>
                There are several fees to consider when incorporating or forming an LLC in Delaware, including:
                </p>
                <h3>
                Delaware Incorporation Fees
                </h3>
                <p>
                The state fee to incorporate in Delaware is a minimum of $89. This includes your Division of Corporation fees ($50), filing fee tax ($15 minimum), and the county fee ($24). This price is based on a corporation with 1,500 shares at no par value, so the filing fees will vary depending on the number of shares you desire and their par value.
                </p>
                <h3>
                Delaware LLC Filing Fees
                </h3>
                

                <p>
                Similarly, the Delaware LLC fees include $90 to the state for filing your Delaware LLC formation.
                </p>

                <h2>
                What Are the Ongoing Delaware Corporation Taxes and Fees?


                </h2>
                <p>
                The state of Delaware has an array of corporation tax benefits. Delaware has no state sales tax, and the state's franchise tax is low for small businesses. Non-residents do not pay personal income taxes in Delaware.
                </p>
                <h3>
                Delaware Corporation Annual Report Fees
                </h3>

                <p>
                All businesses incorporated in the Delaware are required to file an annual report and pay a franchise tax. The annual report filing fee for all non-exempt domestic corporations is $50, plus taxes. Delaware corporate tax filings are due no later than March 1 each year.
                </p>
                <h3>
                Delaware Corporation Tax Fees
                </h3>
                <p>
                The minimum Delaware corporation tax is $175 for corporations using the Authorized Shares method, and a minimum tax of $350 for corporations using the Assumed Par Value Capital method. All corporations using either method will have a maximum tax of $180,000. 
                </p>
                <p>
                Delaware corporate income tax payers owing $5,000 or more pay estimated taxes in quarterly installments, with 40% due June 1, 20% due September 1, 20% due December 1, and the remainder due March 1 of the following year. The penalty for not filing a completed annual report on or before March 1 is $125. An additional interest rate of 1.5% per month will be applied to any unpaid tax balance.
                </p>
                <h2>
                What Are the Ongoing Delaware LLC Taxes and Fees?
                </h2>
                <h3>
                Delaware Annual Tax Rate
                </h3>
                <p>
                LLCs in Delaware do not have to file an annual report, but they are required to pay an annual tax of $300. State of Delaware LLC tax payments are due on or before June 1 of each year. The penalty for non-payment or late payment is $200, with interest accruing on both the tax and the penalty at a rate of 1.5% per month.
                </p>
                <h3>
                Save Money and Time When Incorporating in Delaware
                </h3>
                <p>
                Filing on your own to attempt to reduce the fees associated with forming a Delaware corporation or LLC might seem like a good idea at first. But the additional time and stress created by going through the process yourself may wind up costing you in the long run. Potential errors can increase your costs to incorporate, and there is no one to turn to when you need important questions answered.
                </p>
                <p>
                The experts at Ascend will take care of the requirements and filing fees needed to get your Delaware corporation up and running. We'll let you know the total cost to incorporate in Delaware based on your individual situation, and you'll find our services to be affordable, and much less confusing than trying to do it yourself. Contact us today!
                </p>

                <h2>
                    Ready to Form Your LLC in Delaware?
                </h2>
                <button>Get Started</button>

            </div>
        );
    };

    // CallToAction component
    const CallToAction = () => {
        return (
            <div className="Fees_to_Start_a_Business_in_Delaware-cta">
                <h2>Let's get to it.</h2>
                <p>Create your corporation or limited liability company today.</p>
                <button>Get Started</button>
            </div>
        );
    };


    const TopMainFees_to_Start_a_Business_in_Delaware = () => {
        return (
            <div>
                <div className='top_main_image_Fees_to_Start_a_Business_in_Delaware'>
                    <img src="/img/delaware_hub_subpage_hero_bg.jpg" alt="" className='top_Fees_to_Start_a_Business_in_Delaware_image' />
                    <p className='image_over_paragraph_Fees_to_Start_a_Business_in_Delaware'>
                    Incorporating in Delaware: Costs, Tax Rates, and LLC Fees
                    </p>
                </div>
            </div>
        );
    };

    return (
        <>
            <TopMainFees_to_Start_a_Business_in_Delaware />
            <div className="Fees_to_Start_a_Business_in_Delaware-app">

                {/* <Sidebar /> */}
                <SidebarLeft />
                <div className="Fees_to_Start_a_Business_in_Delaware-content-area">
                    <MainContent />
                    <CallToAction />
                </div>
            </div>
        </>
    );
}

export default Fees_to_Start_a_Business_in_Delaware;
