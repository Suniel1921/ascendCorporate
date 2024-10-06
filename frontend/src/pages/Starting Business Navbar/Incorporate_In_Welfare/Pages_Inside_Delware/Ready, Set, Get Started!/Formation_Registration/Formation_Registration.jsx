import React from 'react';
import './Formation_Registration.css';
import SidebarLeft from '../../SidebarLeft/SidebarLeft';

function Formation_Registration() {
    // MainContent component
    const MainContent = () => {
        return (
            <div className="Formation_Registration-main-content">
                <p>
                    Choosing to form a Delaware LLC or corporation is a good business decision. The next stage is to determine exactly what steps are needed. Delaware LLC formation and Delaware corporation formation are two different processes, so the first decision you'll need to make is to decide which type of company you are creating. Each business structure has its own unique set of advantages. Be confident in your decision as to which structure is best for your business needs now or in the future.
                </p>
                <p>
                    Do you need help forming your LLC or incorporating in Delaware? Ascend has helped thousands of companies with incorporating in Delaware. Our long standing relationship with the Delaware Secretary of State allows us to provide the best service and quickest turnaround in the industry. Contact us today!
                </p>
                <h2>
                    Delaware LLC Formation
                </h2>

                <p>
                    <strong>Step 1:</strong>
                    The first step in forming an LLC in Delaware is to choose your company name. You'll want to make sure that the name is not already in use by another company. Ascend can quickly search to make sure your name is available, and reserve it for you.
                </p>
                <p><strong>Step 2:</strong>
                    You'll need to decide if you want to have multiple members in your LLC or a single-entity. Then, we can help you file the questionnaire required by the state. We provide an easy online form you can fill out, and we complete the forms and file your LLC for you.
                </p>
                <p><strong>Step 3:</strong>
                    You'll also likely want a Delaware LLC operating agreement. It's not required by law, but if your LLC has more than one member, the operating agreement clearly and legally defines each member's role and investment in the company.
                </p>
                <p><strong>Step 4:</strong>
                    Finally, you'll need to choose a registered agent. Ascend acts as the registered agent for many businesses, and we'd be happy to help you as well. We would receive any state or legal paperwork your company might be served. We then help explain the service of process and are here to provide answers for any questions you might have.
                </p>


                <p>
                    For further detail on how to form an LLC in Delaware, simply visit the Delaware LLC page. Once these steps are complete, you'll receive the Delaware LLC Certificate of Formation which will verify your Delaware LLC registration. To remain in good standing, you'll need to pay yearly franchise fees. Great job!
                </p>



                <div className="img_Formation_registration">
                    <div className='left_Formation_registration_img'>
                        <img src="./img/delaware_hub_story2_bg.jpg" alt="" className='image_Formation_registration_NV' />
                    </div>
                    <div className='right_DE_VS_NV_img'>
                        <img src="./img/delaware_hub_divider_img3.jpg" alt="" className='image_Formation_registration_NV' />
                    </div>
                </div>

                <h2>
                    Steps to Delaware Corporation Formation
                </h2>

                <p>
                    <strong>Step 1:</strong>
                    Just as with an LLC, you'll want to choose a name. Ascend will take care of checking the Delaware corporate registry to make sure that name is available. We can also reserve it for you.
                </p>
                <p><strong>Step 2:</strong>
                    You'll need to fill out a variety of forms that will be filed with the state in order to incorporate in Delaware. The forms will vary depending on what type of corporation you are filing. We can help you fill out these corporate forms and ensure that no essential information is missed. These will be submitted to the state of Delaware along with applicable filing fees.
                </p>
                <p><strong>Step 3:</strong>
                    You'll need a registered agent for your Delaware corporation. If you are not physically located in Delaware, you cannot be your own registered agent. However, Ascend would be happy to fulfill this service for you, and does so for thousands of companies in Delaware. We will receive any paperwork necessary on your behalf and forward it to you quickly and efficiently.
                </p>



                <p>
                    Once these steps are complete, your paperwork will be filed with the Delaware Division of Corporations. Once it is approved and fees are paid, you'll receive a Delaware Certificate of Incorporation. To maintain your corporation, you'll file a Delaware corporate annual report and pay a franchise tax each year.
                </p>
                <p>
                    Looking for help with the steps of incorporating or forming an LLC in Delaware? Ascend has years of experience helping companies begin in Delaware. We can walk you through the whole process. Contact us today!
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
            <div className="Formation_Registration-cta">
                <h2>Let's get to it.</h2>
                <p>Create your corporation or limited liability company today.</p>
                <button>Get Started</button>
            </div>
        );
    };


    const TopMainFormation_Registration = () => {
        return (
            <div>
                <div className='top_main_image_Formation_Registration'>
                    <img src="/img/delaware_hub_subpage_hero_bg.jpg" alt="" className='top_Formation_Registration_image' />
                    <p className='image_over_paragraph_Formation_Registration'>
                        Incorporating in Delaware: Costs, Tax Rates, and LLC Fees
                    </p>
                </div>
            </div>
        );
    };

    return (
        <>
            <TopMainFormation_Registration />
            <div className="Formation_Registration-app">

                {/* <Sidebar /> */}
                <SidebarLeft />
                <div className="Formation_Registration-content-area">
                    <MainContent />
                    <CallToAction />
                </div>
            </div>
        </>
    );
}

export default Formation_Registration;
