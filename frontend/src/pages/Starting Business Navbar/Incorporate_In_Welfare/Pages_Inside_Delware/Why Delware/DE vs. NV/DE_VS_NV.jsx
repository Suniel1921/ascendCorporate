import React from 'react';
import './DE_VS_NV.css';
import SidebarLeft from '../../SidebarLeft/SidebarLeft';

function DE_VS_NV() {
    // MainContent component
    const MainContent = () => {
        return (
            <div className="DE_VS_NV-main-content">
                <p>
                    Choosing to form a corporation or LLC is a big step – congratulations! The next step is deciding where the business should be formed. Two of the most popular states to choose are Nevada and Delaware, which have similar formation requirements and advantages over other states. However, when examined closer, there are important differences that you should consider before making a final decision.
                </p>

                <h2>Benefits of Incorporation in Delaware vs. Nevada

                </h2>
                <p>
                    Both states have important benefits for new companies. However, Delaware has a long head start over Nevada in the incorporation race. More than 50 percent of Fortune 500 companies, and over one million business entities, have made Delaware their home.
                </p>
                <p>
                    If you want to know why so many corporations choose to set up in Delaware, remember these 3 legislative landmarks:
                </p>
                <ul>
                    <li>The General Corporation Law: Changeable by design, this fine-tuned statue is biased against regulation. Nationwide, it led the way to limiting the liability of corporate directors and officers, providing relief from high-cost insurance. Many provisions also exist to ensure that companies run smoothly.</li>
                    <li>Delaware's Court of Chancery: Established in 1792, this jury-free court boasts a long, written history of decisional corporate law. Former Chief Justice William Rehnquist described the court as one that "allows business planners to order their affairs to avoid lawsuits." The Court of Chancery does not handle tort or criminal cases, which allows it to operate quickly.</li>
                    <li>The Division of Corporations: Run by the Delaware Secretary of State's office, this unique government agency actually makes a profit. One reason: It's set up to run much like the businesses it serves. Open until midnight, the agency handles one hour, two hour, same day and 24-hour turnarounds for important documents.
                    </li>


                </ul>

                <div className="img_DE_VS_NV">
                    <div className='left_DE_VS_NV_img'>
                        <img src="./img/delaware_hub_story2_bg.jpg" alt="" className='image_DE_VS_NV' />
                    </div>
                    <div className='right_DE_VS_NV_img'>
                        <img src="./img/delaware_hub_divider_img3.jpg" alt="" className='image_DE_VS_NV' />
                    </div>
                </div>

                <h2>
                    Other Considerations for Nevada vs. Delaware Incorporation


                </h2>

                <p>
                    Some other factors to consider if you are thinking about forming your corporation or LLC in Delaware or Nevada:
                </p>
                <ul>
                    <li>Both states have no corporate or personal income tax if the business operates outside the state.</li>
                    <li>Nevada is one of only five states that requires business owners to have a business license before they can file to form their company. Delaware does not have this requirement.</li>
                    <li>Nevada business law was based on the Delaware model. While that's a great start, the state doesn't have the case history or experience in dealing with business issues that Delaware does.</li>
                    <li>Both Nevada and Delaware allow for "series LLCs," a unique designation that allows companies to further divide and protect a variety of assets without having to form additional entities. A series LLC allows for multiple members or business lines to be grouped under a common banner.</li>
                    <li>Delaware corporations require both a Franchise Tax and an Annual Report fee, while LLCs only require a Franchise Tax. Nevada does not require a Franchise Tax for either entity but does require an Annual Report and the Business License fee for both LLCs and corporations.</li>
                </ul>


                <p>
                    Need more help determining which state is best for you to form your company? Ascend can help. We have formation specialist that can walk you through the process step-by-step, giving guidance and making sure you don't miss anything along the way. Contact us for more information!
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
            <div className="DE_VS_NV-cta">
                <h2>Let's get to it.</h2>
                <p>Create your corporation or limited liability company today.</p>
                <button>Get Started</button>
            </div>
        );
    };


    const TopMainDE_VS_NV = () => {
        return (
            <div>
                <div className='top_main_image_DE_VS_NV'>
                    <img src="/img/delaware_hub_subpage_hero_bg.jpg" alt="" className='top_DE_VS_NV_image' />
                    <p className='image_over_paragraph_DE_VS_NV'>
                        Forming an LLC or Corporation in Delaware vs. Nevada
                    </p>
                </div>
            </div>
        );
    };

    return (
        <>
            <TopMainDE_VS_NV />
            <div className="DE_VS_NV-app">

                {/* <Sidebar /> */}
                <SidebarLeft />
                <div className="DE_VS_NV-content-area">
                    <MainContent />
                    <CallToAction />
                </div>
            </div>
        </>
    );
}

export default DE_VS_NV;
