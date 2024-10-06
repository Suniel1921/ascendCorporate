import React from 'react';
import "./Pricing_box.css";
import { IoAnalyticsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Pricing_box = () => {
    return (
        <div className="Features-section">
            <div className="Features-container">
                <h2 className="Features-title">
                    Startup & Early Consulting.
                </h2>
                <p className="Features-description">
                    Together, we help our clients achieve tangible, measurable results. Focused on business outcomes — we bring a unique set of expertise and skills to the party.
                </p>
            </div>
            <div className="Features-grid">
                <Link to="/Registered_Agent_Service" className="Features-card">
                    <div className='Featured_card_top'>
                        <div className='featureCardHeading'>
                            <h3>Registered Agent Service</h3>
                            {/* <h3>Turnaround Consulting</h3> */}
                        </div>
                        <div className='featuredcardIcon'>
                            <IoAnalyticsOutline className='icon_grid' />
                        </div>
                    </div>
                    <p className='Featured_card_bottom'>
                        A registered agent, or agent for service of process, helps to ensure your business maintains compliance. It is the state's way of communicating with a corporation or LLC.
                    </p>
                </Link>
                <Link to="/Employer_ID_Number" className="Features-card">
                    <div className='Featured_card_top'>
                        <div className='featureCardHeading'>
                            <h3>Employer ID Number</h3>
                            {/* <h3>Turnaround Consulting</h3> */}
                        </div>
                        <div className='featuredcardIcon'>
                            <IoAnalyticsOutline className='icon_grid' />
                        </div>
                    </div>
                    <p className='Featured_card_bottom'>
                        Essential for marketing and consulting, creating targeted messages to drive actions and business growth.
                    </p>
                </Link>
                <Link to="/Incorporate_In_Welfare" className="Features-card">
                    <div className='Featured_card_top'>
                        <div className='featureCardHeading'>
                            <h3>Incorporate In Welfare</h3>
                            {/* <h3>Turnaround Consulting</h3> */}
                        </div>
                        <div className='featuredcardIcon'>
                            <IoAnalyticsOutline className='icon_grid' />
                        </div>
                    </div>
                    <p className='Featured_card_bottom'>
                        Helps in crafting specific marketing messages that motivate people to engage and act.
                    </p>
                </Link>
                <Link to="/Limited_Liability_Company" className="Features-card">
                    <div className='Featured_card_top'>
                        <div className='featureCardHeading'>
                            <h3>Limited Liability Company</h3>
                            {/* <h3>Turnaround Consulting</h3> */}
                        </div>
                        <div className='featuredcardIcon'>
                            <IoAnalyticsOutline className='icon_grid' />
                        </div>
                    </div>
                    <p className='Featured_card_bottom'>
                        Facilitates tailored marketing strategies to enhance business engagement and effectiveness.
                    </p>
                </Link>
                <Link to="/S_Corporation" className="Features-card">
                    <div className='Featured_card_top'>
                        <div className='featureCardHeading'>
                            <h3>S Corporation</h3>
                            {/* <h3>Turnaround Consulting</h3> */}
                        </div>
                        <div className='featuredcardIcon'>
                            <IoAnalyticsOutline className='icon_grid' />
                        </div>
                    </div>
                    <p className='Featured_card_bottom'>
                        Provides specialized marketing messages to drive business actions and growth.
                    </p>
                </Link>
                <Link to="/C_Corporation" className="Features-card">
                    <div className='Featured_card_top'>
                        <div className='featureCardHeading'>
                            <h3>C Corporation</h3>
                            {/* <h3>Turnaround Consulting</h3> */}
                        </div>
                        <div className='featuredcardIcon'>
                            <IoAnalyticsOutline className='icon_grid' />
                        </div>
                    </div>
                    <p className='Featured_card_bottom'>
                        Enables targeted marketing efforts to encourage specific actions and improve business outcomes.


                    </p>
                </Link>
                <Link to="/None_Profit_Corporation" className="Features-card">
                    <div className='Featured_card_top'>
                        <div className='featureCardHeading'>
                            <h3>None Profit Corporation</h3>
                            {/* <h3>Turnaround Consulting</h3> */}
                        </div>
                        <div className='featuredcardIcon'>
                            <IoAnalyticsOutline className='icon_grid' />
                        </div>
                    </div>
                    <p className='Featured_card_bottom'>
                        Focuses on creating compelling marketing messages to drive engagement and achieve organizational goals.
                    </p>
                </Link>
                <Link to="Starting A Business" className="Features-card">
                    <div className='Featured_card_top'>
                        <div className='featureCardHeading'>
                            <h3>Starting A Business</h3>
                            {/* <h3>Turnaround Consulting</h3> */}
                        </div>
                        <div className='featuredcardIcon'>
                            <IoAnalyticsOutline className='icon_grid' />
                        </div>
                    </div>
                    <p className='Featured_card_bottom'>
                        Offers strategic marketing insights to motivate and drive successful business initiation and growth.
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Pricing_box;
