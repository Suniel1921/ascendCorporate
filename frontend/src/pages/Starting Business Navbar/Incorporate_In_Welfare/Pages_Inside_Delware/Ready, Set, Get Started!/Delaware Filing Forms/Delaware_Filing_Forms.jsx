import React from 'react';
import './Delaware_Filing_Forms.css';
import SidebarLeft from '../../SidebarLeft/SidebarLeft';

function Delaware_Filing_Forms() {
    // MainContent component
    const MainContent = () => {
        return (
            <div className="Delaware_Filing_Forms-main-content">
                <p>
                Starting a business in Delaware is a great choice! Many LLCs and corporations choose to call Delaware home because of the many business benefits the state offers. The process to start a Delaware corporation or LLC can be daunting, but Ascend can make it easy. We'd be happy to do all the legwork for you – just contact us for more information!
                </p>
                <h2>
                Delaware Corporation Filing
                </h2>
                <p>
                To complete a Delaware corporation filing, there are several corporate forms the state of Delaware will require. A new corporation is required to file with the Delaware Division of Corporations. Ascend will help you choose a business name that isn't already in use by another company. We can quickly research existing companies and then reserve the name you desire.
                </p>
                <p>
                Next, Delaware corporate filing forms need to be submitted to the state. We can help you fill out these corporation forms for the state of Delaware and insure that no essential information is missed. These will be submitted to the state of Delaware along with applicable filing fees.
                </p>
                <p>
                You are also required to designate a registered agent that has a physical address in the state of Delaware. If your business is not physically located in Delaware, you cannot be your own registered agent. Ascend, who is headquartered in Delaware, specializes in Registered Agent services and can receive any legal paperwork your company might be served. We then help explain and the service of process and are here to provide answers for any questions you might have.
                </p>
                <p>
                Once your Delaware corporate filing is submitted and approved, you'll receive a Delaware Certificate of Incorporation. This document is important for opening bank accounts in the business name and obtaining financing for your company. To maintain your corporation, you'll file a Delaware corporation annual report and pay a franchise tax each year.
                </p>

                <h2>Delaware LLC Filing</h2>
                <p>
                The first step to filing an LLC in Delaware is to decide if you are going to be a single-entity LLC or have multiple members. The filing questionnaire for an LLC is different than a corporation, but we make it easy by having an online order form to help you meet Delaware LLC filing requirements. Just answer the questions listed, and we will complete the forms and file your LLC for you.
                </p>
                <p>
                A Delaware LLC operating agreement is not required under state law, but having one is strongly recommended. If your LLC has more than one member, an operating agreement will clearly and legally define each member's role, responsibilities, and ownership share in the company.
                </p>
                <p>
                Once your Delaware LLC forms are completed and submitted, you'll receive a Delaware LLC Certificate of Good Standing. This document is essential when you decide to open bank accounts or obtain financing for your business. To maintain your LLC in Delaware, you simply need to pay the annual taxes each year. There is no LLC annual report requirement. 
                </p>
                <p>
                Ascend has helped thousands of companies with incorporating in Delaware and our established relationship with the Delaware Secretary of State allows us to provide the best service in the industry. Contact us today to start your Delaware corporation or LLC!
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
            <div className="Delaware_Filing_Forms-cta">
                <h2>Let's get to it.</h2>
                <p>Create your corporation or limited liability company today.</p>
                <button>Get Started</button>
            </div>
        );
    };


    const TopMainDelaware_Filing_Forms = () => {
        return (
            <div>
                <div className='top_main_image_Delaware_Filing_Forms'>
                    <img src="/img/delaware_hub_subpage_hero_bg.jpg" alt="" className='top_Delaware_Filing_Forms_image' />
                    <p className='image_over_paragraph_Delaware_Filing_Forms'>
                    Incorporating in Delaware: Costs, Tax Rates, and LLC Fees
                    </p>
                </div>
            </div>
        );
    };

    return (
        <>
            <TopMainDelaware_Filing_Forms />
            <div className="Delaware_Filing_Forms-app">

                {/* <Sidebar /> */}
                <SidebarLeft />
                <div className="Delaware_Filing_Forms-content-area">
                    <MainContent />
                    <CallToAction />
                </div>
            </div>
        </>
    );
}

export default Delaware_Filing_Forms;
