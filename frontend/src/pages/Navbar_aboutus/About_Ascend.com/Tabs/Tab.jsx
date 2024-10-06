import React, { useState } from 'react';
import './Tab.css'; // Import the CSS file

const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: 'Our Mission', content:
                <div>
                    <p className='Tabs_paragraph'>
                    We understand the challenges of small business ownership because we're entrepreneurs ourselves. We partner with business owners throughout their company’s journey, helping them overcome obstacles and ensuring compliance. Our goal is to provide guidance and thought leadership to encourage continued success, no matter the odds. Helping entrepreneurs is our passion, and we believe strongly in the power of private enterprise.
                    </p>
                    <p className='Tabs_paragraph'>
                        We got into this business because helping entrepreneurs is our passion. And we strongly believe in the power of private enterprise.
                    </p>
                    <h3>
                        ESG Charter
                    </h3>
                    <p className='Tabs_paragraph'>
                    Ascend Incorporate LLC is dedicated to improving our communities, customers, employees, and partners every day.
                    </p>
                </div>
        },
        {
            label: 'Our Story', content:
                <div>
                    <p className='Tabs_paragraph'>Even though Ascend Incorporate LLC is new, we are committed to staying true to our mission for the long haul.</p>
                    <p className='Tabs_paragraph'>
                    In the early days, two individuals had a vision to make it easier for businesses to form corporations. They eventually joined forces to create the first company focused solely on helping businesses succeed. Although Ascend Incorporate LLC is a new name in the market, we are driven by the same spirit of innovation and support that has guided successful companies for decades.
                    </p>
                </div>
        },
        {
            label: 'Our Team', content:
                <div>
                    <p className='Tabs_paragraph'>
                    At Ascend Incorporate LLC, we truly understand the challenges you face because many of us have been business owners ourselves. When we say, "we've been there," we mean it. Our team treats your needs with the same care and attention we’d give to our own businesses. Your success is our success, so we approach every task with enthusiasm, speed, and professionalism. We see you as a partner, not just another client. Join a team that’s passionate about helping businesses like yours thrive, and committed to doing it right every time.
                    </p>
                    
                </div>
        },
        {
            label: 'Let Us Help', content:
                <div>
                    <p className='Tabs_paragraph'>
                        Ascend Incorporate LLC offers a variety of services tailored to meet the needs of small businesses at every stage:
                    </p>
                    <ul className="service-list">
                        <li> <b>Business Formation: </b> We help businesses incorporate and form LLCs, along with other entity types, across all U.S. states and the District of Columbia.</li>
                        <li> <b>Registered Agent Services: </b> We act as a registered agent, ensuring that businesses receive their legal and critical documents promptly and securely.</li>
                        <li> <b>Tax Assistance: </b>We assist businesses in applying for essential tax information, such as Employer Identification Numbers (EINs), and help nonprofit organizations obtain 501(c) status.</li>
                        <li> <b>Entity Support: </b> We assist new businesses with drafting bylaws and operating agreements, securing unique company names, and registering to operate in other states.</li>
                        <li> <b>Ongoing Compliance: </b> We help businesses maintain compliance by preparing and filing annual reports and conducting research to identify necessary business licenses.</li>
                    </ul>
                </div>
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-container">
            <div className="tabs-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
            
        </div>
    );
};

export default Tab;
