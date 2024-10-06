import React from 'react';
import './AdvantagesofIncorporatinginDelaware.css';
import SidebarLeft from '../../SidebarLeft/SidebarLeft';

function AdvantagesofIncorporatinginDelware() {
    // MainContent component
    const MainContent = () => {
        return (
            <div className="AdvantagesofIncorporatinginDelware-main-content">
                <p>
                When you're thinking about forming your company's LLC or incorporating, many business owners assume that forming the company in their home state is the best choice. However, it may not be.
                </p>
                <p>
                In fact, Delaware is a very popular place to form a corporation. There are many advantages of incorporating in Delaware. It's no accident that Delaware has been known as the place for businesses to incorporate since the early 1900s, and its incorporation and LLC rates continue to grow rapidly. Over a million business entities have made Delaware their legal home.
                </p>
                <p>
                Do you want help forming your LLC or incorporating in Delaware? Ascend has helped thousands of companies with incorporating in Delaware. We'll walk you through the whole process, from reviewing your business name to serving as your registered agent. Contact us today!
                </p>
                <h2>Benefits of Forming a Delaware LLC or a Delaware Corporation
                </h2>
                <p>
                There are many Delaware LLC advantages, and benefits of forming a Delaware corporation
                </p>
                <ul>
                    <li>The Delaware General Corporation Law is one of the most advanced and flexible corporation statutes in the nation.</li>
                    <li>The Delaware Court of Chancery mainly hears cases involving businesses and uses judges (not juries), which is a benefit for large LLCs or corporations with thousands of shareholders.</li>
                    <li>The state legislature works hard to keep the corporation statute and other business laws current.
                    </li>
                    <li>Low franchise tax for small businesses and no state sales tax.</li>
                    <li>Members, shareholders, officers, managers or directors of an LLC or corporation are not required to reside in the state of Delaware.</li>

                </ul>

                <div className="img_AdvantagesofIncorporatinginDelware">
                    <div className='left_AdvantagesofIncorporatinginDelware_img'>
                        <img src="./img/delaware_hub_divider_img9.jpg" alt="" className='image_AdvantagesofIncorporatinginDelware' />
                    </div>
                    <div className='right_AdvantagesofIncorporatinginDelware_img'>
                        <img src="./img/delaware_hub_divider_img3.jpg" alt="" className='image_AdvantagesofIncorporatinginDelware' />
                    </div>
                </div>
                <p>
                Check out the Delaware tax page for more information on tax advantages in the state of Delaware.
                </p>
                <p>
                As you can see, there are significant advantages to incorporating in Delaware.
                </p>
                <h2>
                Are There Disadvantages to Incorporating in Delaware?

                </h2>
                <p>
                Some smaller companies that only do business in their home state may not benefit from the advantages of incorporating in DE. If they intend to stay small and only operate in their state, incorporating in both Delaware and paying an additional fee to their home state will cost the company money that may not be needed.
                </p>
                <p>
                However, the legal protections that are afforded you as a Delaware corporation or LLC may override this cost. As Ray Garrett, Jr., former Chairman of the Securities and Exchange Commission, says,
                </p>
                <p>
                "Why do they go to Delaware? …You're concerned about flexibility, capital structure, and corporate purposes. The fact is that Delaware has more law and has answered more questions through its decisions. …It is easier to get an answer to a question under the Delaware Act than it is under say, the Illinois law, which has very few cases in the corporate area."
                </p>
                
                
                <p>
                In the end, even a small company has good reason to choose Delaware for its incorporation advantages.
                </p>
                <p>
                If you want the advantages of incorporating in Delaware, let Ascend help you! Our relationship with the Delaware Secretary of State allows us to provide the best service in the industry. Get started with us today!
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
            <div className="AdvantagesofIncorporatinginDelware-cta">
                <h2>Let's get to it.</h2>
                <p>Create your corporation or limited liability company today.</p>
                <button>Get Started</button>
            </div>
        );
    };


    const TopMainAdvantagesofIncorporatinginDelware = () => {
        return (
            <div>
                <div className='top_main_image_AdvantagesofIncorporatinginDelware'>
                    <img src="/img/delaware_hub_subpage_hero_bg.jpg" alt="" className='top_AdvantagesofIncorporatinginDelware_image' />
                    <p className='image_over_paragraph_AdvantagesofIncorporatinginDelware'>
                        Advantages of Incorporating a Business in Delaware
                    </p>
                </div>
            </div>
        );
    };

    return (
        <>
            <TopMainAdvantagesofIncorporatinginDelware />
            <div className="AdvantagesofIncorporatinginDelware-app">

                {/* <Sidebar /> */}
                <SidebarLeft />
                <div className="AdvantagesofIncorporatinginDelware-content-area">
                    <MainContent />
                    {/* <CallToAction /> */}
                </div>
            </div>
        </>
    );
}

export default AdvantagesofIncorporatinginDelware;
