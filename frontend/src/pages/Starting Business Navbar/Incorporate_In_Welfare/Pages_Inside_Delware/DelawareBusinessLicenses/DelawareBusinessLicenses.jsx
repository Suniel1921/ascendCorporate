import React from 'react';
import './DelawareBusinessLicenses.css';
import SidebarLeft from '../SidebarLeft/SidebarLeft';

function DelawareBusinessLicenses() {
    // MainContent component
    const MainContent = () => {
        return (
            <div className="DelawareBusinessLicenses-main-content">
                <p>
                The first step in forming an LLC or corporation in Delaware is to pick a name. It seems like that should be the easy part, but actually it's important to do a Delaware corporation search or a Delaware LLC search to make sure the name you love isn't already taken by another company!
                </p>
                <h2>How to Do a Delaware Corporation Name Search
                </h2>
                <p>
                Looking for help doing your state of Delaware corporation search? Ascend would be happy to walk you through this process.
                </p>
                
                <p>
                When you're considering forming your Delaware LLC or corporation, our specialists can help you to find out if the name you want has already been taken within the state. If your name has been taken, we can help you find a number of alternatives that fit your business. Simply give us a call and have your ideal company name ready. We can search for you and provide you with an entity name, file number, incorporation or formation date, registered agent name, and address. Generally, in choosing your Delaware LLC name or Delaware corporation name, you won't need more information than that. 
                </p>
                
                
                <p>
                We have options available to search specifically for certain entities, for instance a DE LLC search or a DE incorporation search. Once you select a business type, just let us know the name you are interested in, and we can let you know if that name is already taken by a DE LLC or a DE corporation.
                </p>
                <p>
                Once we've confirmed your desired name isn't taken, our agents can reserve it online for you. We'll register your Delaware LLC name or Delaware corporation name on your behalf, and assign it to you straight away so no one else can use it.
                </p>
                <h2>
                Doing a Delaware Corporation or LLC Name Change

                </h2>
                <p>
                Maybe you already have a name, but you aren't happy with it and it doesn't represent the current direction of your company. We can handle that, too! The Delaware corporation name change process is very similar to the initial process of choosing a name for your corporation or LLC at the time of formation. The only difference, however, is that you will also have to do additional paperwork to link your new name to your existing corporation or LLC.
                </p>
                <p>
                We'll help you to determine if your new name is available and reserve it for you for an additional fee.
                </p>
                <p>
                Using the name you love for your company doesn't have to be hard. Let Ascend walk you through how to your Delaware corporation or Delaware LLC. We'll take care of everything from double-checking the name to filing the paperwork to serving as your registered agent. Contact us today!
                </p>
                <h2>
                    Ready to Form Your LLC in Delware?
                </h2>
                <button>Get Started</button>
                
            </div>
        );
    };

    // CallToAction component
    const CallToAction = () => {
        return (
            <div className="DelawareBusinessLicenses-cta">
                <h2>Let's get to it.</h2>
                <p>Create your corporation or limited liability company today.</p>
                <button>Get Started</button>
            </div>
        );
    };


    const TopMainDelawareBusinessLicenses = () => {
        return (
            <div>
                <div className='top_main_image_DelawareBusinessLicenses'>
                    <img src="/img/delaware_hub_subpage_hero_bg.jpg" alt="" className='top_DelawareBusinessLicenses_image' />
                    <p className='image_over_paragraph_DelawareBusinessLicenses'>
                    Delaware Corporation & LLC Name Search and Name Change
                    </p>
                </div>
            </div>
        );
    };

    return (
        <>
            <TopMainDelawareBusinessLicenses />
            <div className="DelawareBusinessLicenses-app">

                {/* <Sidebar /> */}
                <SidebarLeft />
                <div className="DelawareBusinessLicenses-content-area">
                    <MainContent />
                    {/* <CallToAction /> */}
                </div>
            </div>
        </>
    );
}

export default DelawareBusinessLicenses;
