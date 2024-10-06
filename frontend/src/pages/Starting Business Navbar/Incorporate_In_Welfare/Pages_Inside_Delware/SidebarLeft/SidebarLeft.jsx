import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SidebarLeft.css'; // Import the Sidebar-specific CSS

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="delware-accordion-item">
            <div className="delware-accordion-title" onClick={() => setIsOpen(!isOpen)}>
                {title}
            </div>
            {isOpen && <div className="delware-accordion-content">{children}</div>}
        </div>
    );
};

const SidebarLeft = () => {
    return (
        <div className="delware-sidebar">
            <h3>Delaware Home</h3>
            <AccordionItem title="Starting Out">
                <ul className='sidebarleft_ul'>
                    <li><Link to="/delware_welfare">Incorporate in Delaware</Link></li>
                    <li><Link to="/FormingaDelawareLLC">Forming a Delaware LLC</Link></li>
                    <li><Link to="/DelawareBusinessNameSearch">Delaware Business Name Search</Link></li>
                    <li><Link to="/DelawareBusinessLicenses">Delaware Business Licenses</Link></li>
                </ul>
            </AccordionItem>
            <AccordionItem title="Why Delaware?">
                <ul className='sidebarleft_ul'>
                    <li><Link to="/AdvantagesofIncorporatinginDelwar">Advantages of Incorporating in Delaware</Link></li>
                    <li><Link to="/HowToWhyIncorporateinDelaware">How To & Why Incorporate in Delaware</Link></li>
                    <li><Link to="/DE_VS_NV">DE vs. NV</Link></li>
                </ul>
            </AccordionItem>
            <AccordionItem title="Ready, Set, Get Started!">
                <ul className='sidebarleft_ul'>
                    <li><Link to="#">Incorporate Your Business Today</Link></li>
                    <li><Link to="/Fees_to_Start_a_Business_in_Delaware">Fees to Start a Business in Delaware</Link></li>
                    <li><Link to="/Delaware_Filing_Forms">Delaware Filing Forms</Link></li>
                    <li><Link to="/Formation_Registration">Formation/Registration</Link></li>
                    <li><Link to="/Taxes">Taxes</Link></li>
                </ul>
            </AccordionItem>
        </div>
    );
};

export default SidebarLeft;
