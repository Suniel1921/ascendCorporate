// import React, { useState } from 'react';
// import './Delware_Content.css';

// function Delware_Content() {
//     // AccordionItem component
//     const AccordionItem = ({ title, children }) => {
//         const [isOpen, setIsOpen] = useState(false);

//         return (
//             <div className="delware-accordion-item">
//                 <div className="delware-accordion-title" onClick={() => setIsOpen(!isOpen)}>
//                     {title}
//                 </div>
//                 {isOpen && <div className="delware-accordion-content">{children}</div>}
//             </div>
//         );
//     };

//     // Sidebar component
//     const Sidebar = () => {
//         return (
//             <div className="delware-sidebar">
//                 <h3>Delaware Home</h3>
//                 <AccordionItem title="Starting Out">
//                     <ul>
//                         <li>Incorporate in Delaware</li>
//                         <li>Forming a Delaware LLC</li>
//                     </ul>
//                 </AccordionItem>
//                 <AccordionItem title="Why Delaware?">
//                     <ul>
//                         <li>Delaware Business Name Search</li>
//                         <li>Delaware Business Licenses</li>
//                     </ul>
//                 </AccordionItem>
//                 <AccordionItem title="Ready, Set, Get Started!">
//                     <ul>
//                         <li>Get Started</li>
//                     </ul>
//                 </AccordionItem>
//             </div>
//         );
//     };

//     // MainContent component
//     const MainContent = () => {
//         return (
//             <div className="delware-main-content">
//               <p>
//               While many companies choose to incorporate in their home state, many businesses have chosen to incorporate in Delaware even though they may not be located within the state. The state of Delaware is known for having some of the most business-friendly laws and regulations for starting and running a business.
//               </p>
//                 <h2>Why Incorporate In Delaware?</h2>
//                 <p>
//                     One major incentive to incorporate in the state of Delaware is that it offers
//                     favorable tax treatment for companies headquartered in other states. Many of the
//                     largest firms in America have chosen this small state as their state of incorporation.
//                 </p>
//                 <ul>
//                     <li>The nation’s most advanced and flexible business entity laws</li>
//                     <li>Low franchise tax for small businesses</li>
//                     <li>Members, shareholders, officers, managers, or directors of a corporation are not required to reside in Delaware</li>
//                     <li>Non-residents do not pay personal income tax in Delaware</li>
//                     <li>No Delaware sales tax</li>
//                     <li>The Delaware Court of Chancery mainly hears cases involving businesses and uses judges (not juries)</li>
//                 </ul>
//                 <p>
//                 One way to easily and efficiently start a Delaware corporation is by using the services of Ascend. Ascend has helped thousands of companies with incorporating in Delaware and our established relationship with the Delaware Secretary of State allows us to provide the best service in the industry. We offer both s corp and c corp status packages for Delaware corporations. We can take care of the process from reviewing your business name, to filing your paperwork, to serving as your registered agent for Delaware. Get started now!
//                 </p>
//                 <div className="img_delware">
//                   <div className='left_del_img'>
//                     <img src="./img/delaware_hub_story1_bg.jpg" alt=""  className='image_delware'/>
//                   </div>
//                   <div className='right_del_img'>
//                     <img src="./img/delaware_hub_story1_bg.jpg" alt="" className='image_delware'/>
//                   </div>
//                 </div>
//                 <h2>
//                 How to Incorporate in Delaware
//                 </h2>
//                 <p>
//                 To start your business and incorporate in Delaware, begin by choosing a business name. You will need to confirm your business name meets naming requirements and is not already in use. You will then need to file Delaware articles of incorporation. You will need a Federal Tax ID if you intend to hire employees or open a bank account in the name of the business.
//                 </p>
//                 <p>
//                 Once the process to incorporate your business in Delaware is complete, you will receive a Delaware certificate of incorporation. The certificate of incorporation is sometimes asked for as proof of your business entity when opening bank accounts or applying for other financing. Finally, you will need a Delaware Registered Agent to receive legal paperwork on your behalf.
//                 </p>
//                 <h2>
//                 The Costs and Fees of Incorporating in Delaware
//                 </h2>
//                 <p>
//                 The state fee to incorporate in Delaware is a minimum of $89 which includes your Division of Corporation fees ($50), filing fee tax ($15 minimum), and the county fee ($24). This price is based on a corporation with 1500 shares at no par value, so the Delaware incorporation fees to file may vary depending on the number of shares you desire and their par value.
//                 </p>
//                 <p>
//                   Ascend can take care of the requirements to get your Delaware incorporation up and running and advise you of the total cost to incorporate in Delaware online based on your individual situation.
//                 </p>
//                 <p>
//                 Deciding where to form your business is a decision that has a lot of considerations. Delaware is a great choice for most businesses. With the help of Ascend, you can incorporate your business in Delaware online quickly and with ease. Our long standing relationship with the state of Delaware makes it starting a corporation fast and efficient. We can generally process a corporation in the state of Delaware in 48-72 hours.
//                 </p>
//                 <h2>
//                 Why not get started today? Click the button to begin your company formation for Delaware.
//                 </h2>
//                 <button>Get Started</button>
//                 <p>
//                 Not quite ready to get started? Check out the resources below for more information on starting a business in Delaware.
//                 </p>
//                 <ul className="low-elware">
//                   <li>Advantages to Incorporating in Delaware</li>
//                   <li>How to Incorporate in Delaware</li>
//                   <li>Delaware Business Name & Search</li>
//                   <li>Forming a Delaware LLC</li>
//                 </ul>

//             </div>
//         );
//     };

//     // CallToAction component
//     const CallToAction = () => {
//         return (
//             <div className="delware-cta">
//                 <h2>Let's get to it.</h2>
//                 <p>Create your corporation or limited liability company today.</p>
//                 <button>Get Started</button>
//             </div>
//         );
//     };

//     return (
//         <div className="delware-app">
//             <Sidebar />
//             <div className="delware-content-area">
//                 <MainContent />
//                 <CallToAction />
//             </div>
//         </div>
//     );
// }

// export default Delware_Content;






import React from 'react';
import './Delware_Content.css';
import SidebarLeft from '../SidebarLeft/SidebarLeft';

function Delware_Content() {
    // MainContent component
    const MainContent = () => {
        return (
            <div className="delware-main-content">
                <p>
                    While many companies choose to incorporate in their home state, many businesses have chosen to incorporate in Delaware even though they may not be located within the state. The state of Delaware is known for having some of the most business-friendly laws and regulations for starting and running a business.
                </p>
                <h2>Why Incorporate In Delaware?</h2>
                <p>
                    One major incentive to incorporate in the state of Delaware is that it offers
                    favorable tax treatment for companies headquartered in other states. Many of the
                    largest firms in America have chosen this small state as their state of incorporation.
                </p>
                <ul>
                    <li>The nation’s most advanced and flexible business entity laws</li>
                    <li>Low franchise tax for small businesses</li>
                    <li>Members, shareholders, officers, managers, or directors of a corporation are not required to reside in Delaware</li>
                    <li>Non-residents do not pay personal income tax in Delaware</li>
                    <li>No Delaware sales tax</li>
                    <li>The Delaware Court of Chancery mainly hears cases involving businesses and uses judges (not juries)</li>
                </ul>
                <p>
                    One way to easily and efficiently start a Delaware corporation is by using the services of Ascend. Ascend has helped thousands of companies with incorporating in Delaware and our established relationship with the Delaware Secretary of State allows us to provide the best service in the industry. We offer both s corp and c corp status packages for Delaware corporations. We can take care of the process from reviewing your business name, to filing your paperwork, to serving as your registered agent for Delaware. Get started now!
                </p>
                <div className="img_delware">
                    <div className='left_del_img'>
                        <img src="./img/delaware_hub_story1_bg.jpg" alt="" className='image_delware' />
                    </div>
                    <div className='right_del_img'>
                        <img src="./img/delaware_hub_story1_bg.jpg" alt="" className='image_delware' />
                    </div>
                </div>
                <h2>
                    How to Incorporate in Delaware
                </h2>
                <p>
                    To start your business and incorporate in Delaware, begin by choosing a business name. You will need to confirm your business name meets naming requirements and is not already in use. You will then need to file Delaware articles of incorporation. You will need a Federal Tax ID if you intend to hire employees or open a bank account in the name of the business.
                </p>
                <p>
                    Once the process to incorporate your business in Delaware is complete, you will receive a Delaware certificate of incorporation. The certificate of incorporation is sometimes asked for as proof of your business entity when opening bank accounts or applying for other financing. Finally, you will need a Delaware Registered Agent to receive legal paperwork on your behalf.
                </p>
                <h2>
                    The Costs and Fees of Incorporating in Delaware
                </h2>
                <p>
                    The state fee to incorporate in Delaware is a minimum of $89 which includes your Division of Corporation fees ($50), filing fee tax ($15 minimum), and the county fee ($24). This price is based on a corporation with 1500 shares at no par value, so the Delaware incorporation fees to file may vary depending on the number of shares you desire and their par value.
                </p>
                <p>
                    Ascend can take care of the requirements to get your Delaware incorporation up and running and advise you of the total cost to incorporate in Delaware online based on your individual situation.
                </p>
                <p>
                    Deciding where to form your business is a decision that has a lot of considerations. Delaware is a great choice for most businesses. With the help of Ascend, you can incorporate your business in Delaware online quickly and with ease. Our long-standing relationship with the state of Delaware makes starting a corporation fast and efficient. We can generally process a corporation in the state of Delaware in 48-72 hours.
                </p>
                <h2>
                    Why not get started today? Click the button to begin your company formation for Delaware.
                </h2>
                <button>Get Started</button>
                <p>
                    Not quite ready to get started? Check out the resources below for more information on starting a business in Delaware.
                </p>
                <ul className="low-elware">
                    <li>Advantages to Incorporating in Delaware</li>
                    <li>How to Incorporate in Delaware</li>
                    <li>Delaware Business Name & Search</li>
                    <li>Forming a Delaware LLC</li>
                </ul>
            </div>
        );
    };

    // CallToAction component
    const CallToAction = () => {
        return (
            <div className="delware-cta">
                <h2>Let's get to it.</h2>
                <p>Create your corporation or limited liability company today.</p>
                <button>Get Started</button>
            </div>
        );
    };


    const TopMaindelware = () => {
        return (
            <div>
                <div className='top_main_image_delware'>
                    <img src="/img/delaware_hub_subpage_hero_bg.jpg" alt="" className='top_delawre_image' />
                    <p className='image_over_paragraph_delware'>
                        Incorporating in Delaware
                    </p>
                </div>
            </div>
        );
    };

    return (
        <>
            <TopMaindelware />
            <div className="delware-app">

                {/* <Sidebar /> */}
                <SidebarLeft />
                <div className="delware-content-area">
                    <MainContent />
                    <CallToAction />
                </div>
            </div>
        </>
    );
}

export default Delware_Content;
