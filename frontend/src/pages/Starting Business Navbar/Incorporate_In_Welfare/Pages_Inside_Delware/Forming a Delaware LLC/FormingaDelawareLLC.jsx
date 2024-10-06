import React from 'react';
import './FormingaDelawareLLC.css';
import SidebarLeft from '../SidebarLeft/SidebarLeft';

function FormingaDelawareLLC() {
    // MainContent component
    const MainContent = () => {
        return (
            <div className="formingadelawarellc-main-content">
                <p>
                    What kind of business do you want to create? When looking at business types, many business owners choose to form a limited liability company (LLC), especially in the state of Delaware. Creating an LLC is a good way to "wall off" your personal assets from your company's liabilities. Forming an LLC is a better fit for many owners than a sole proprietorship or a general partnership.
                </p>
                <h2>Benefits of Forming an LLC</h2>
                <p>
                    There are many benefits of an LLC, including:
                </p>
                <ul>
                    <li>Pass-through taxes. Owners report their share of profit and loss on their individual tax returns.</li>
                    <li>Owners need not be U.S. citizens or permanent residents.</li>
                    <li>Owners have limited liability for business debts and obligations.</li>
                    <li>Partners, suppliers and lenders may look more favorably on your business when you've formed an LLC.</li>

                </ul>

                <div className="img_formingadelawarellc">
                    <div className='left_formingadelawarellc_img'>
                        <img src="./img/delaware_hub_divider_img0.jpg" alt="" className='image_formingadelawarellc' />
                    </div>
                    <div className='right_formingadelawarellc_img'>
                        <img src="./img/delaware_hub_divider_img4.jpg" alt="" className='image_formingadelawarellc' />
                    </div>
                </div>
                <h2>
                    Why a Delaware LLC?

                </h2>
                <p>
                    Delaware is one of the most popular states in which to form an LLC. In fact, nearly two-and-a-half times more LLCs than corporations are formed in the state of Delaware.
                </p>
                <p>
                    If you're interested in forming an LLC in Delaware, let us help! Ascend has helped thousands of businesses form their Delaware LLC, and our established relationship with the Delaware Secretary of State allows us to give you the best service in the industry. We can take care of the whole process. Get started now!
                </p>
                <p>
                    Starting an LLC in Delaware benefits your business in different ways. Large Delaware LLCs have greater benefits than small LLCs, but businesses of all sizes will see advantages to forming an LLC in Delaware. Some of the benefits of Delaware LLC formation include:
                </p>
                <ul>
                    <li>There is no state corporate income tax if a company is not located in Delaware but has a Delaware LLC registration.</li>
                    <li>Members, shareholders, officers, managers or directors of an LLC or corporation are not required to reside in Delaware.</li>
                    <li>Non-residents do not pay personal income tax in Delaware.</li>
                    <li>The Delaware Court of Chancery mainly hears cases involving businesses and uses judges (not juries), which is a benefit for large LLCs or corporations with thousands of shareholders.</li>

                </ul>
                <h2>
                How to Start a Delaware LLC
                </h2>
                <p>
                The process begins with choosing an appropriate business name that is not already in use. Then, you will want to decide whether you are forming a single member or a multi-member Delaware LLC.
                </p>
                <p>
                Next, Delaware LLC forms need to be completed and filed with the state. A Delaware LLC operating agreement is recommended for starting an LLC, though it is not required by state law. For businesses with more than one member, the Delaware LLC operating agreement will clearly define each member's role, responsibilities and ownership share of the business.
                </p>
                <p>
                You will also need a registered agent. The registered agent for a Delaware LLC must have a physical address in the state of Delaware. The registered agent will receive and forward to you any legal paperwork in the event of a lawsuit.
                </p>
                <p>
                Need help? Check out how to start a business in the state of Delaware for further details. Ascend would be happy to walk you through the Delaware LLC formation process and serve as your registered agent. Contact us about starting your Delaware LLC today!
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
            <div className="formingadelawarellc-cta">
                <h2>Let's get to it.</h2>
                <p>Create your corporation or limited liability company today.</p>
                <button>Get Started</button>
            </div>
        );
    };


    const TopMainFormingaDelawareLLC = () => {
        return (
            <div>
                <div className='top_main_image_formingadelawarellc'>
                    <img src="/img/delaware_hub_subpage_hero_bg.jpg" alt="" className='top_formingadelawarellc_image' />
                    <p className='image_over_paragraph_formingadelawarellc'>
                        Delaware LLC Formation
                    </p>
                </div>
            </div>
        );
    };

    return (
        <>
            <TopMainFormingaDelawareLLC />
            <div className="formingadelawarellc-app">

                {/* <Sidebar /> */}
                <SidebarLeft />
                <div className="formingadelawarellc-content-area">
                    <MainContent />
                    {/* <CallToAction /> */}
                </div>
            </div>
        </>
    );
}

export default FormingaDelawareLLC;
