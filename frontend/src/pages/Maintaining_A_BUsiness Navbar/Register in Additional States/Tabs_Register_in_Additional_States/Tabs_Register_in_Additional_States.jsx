import React, { useState } from 'react';
import './Tabs_Register_in_Additional_States.css';
import FQA_Register_in_Additional_States from './FQA_Register_in_Additional_States/FQA_Register_in_Additional_States';


const Tabs_Register_in_Additional_States = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-register-in-additional-states-container">
            <h2>
            Foreign Qualification – register your corporation or LLC in other states
            </h2>
            <div className="tabs-register-in-additional-states-tabs">
                <div
                    className={`tabs-register-in-additional-states-tab ${activeTab === 'Overview' ? 'tabs-register-in-additional-states-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-register-in-additional-states-tab ${activeTab === 'FAQs' ? 'tabs-register-in-additional-states-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-register-in-additional-states-tab-indicator">
                <div className={`tabs-register-in-additional-states-indicator ${activeTab === 'Overview' ? 'tabs-register-in-additional-states-overview' : 'tabs-register-in-additional-states-faqs'}`}></div>
            </div>
            <div className="tabs-register-in-additional-states-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        In order to do business legally in states other than your home state (the state where your company was formed or incorporated), you may need to register (also referred to as qualifying) your company in those states. If your business has offices, employees or advertises in states outside of your company's home state, chances are you'll need to qualify your company in that state. Your company becomes qualified by obtaining something often called a Certificate of Authority from the Secretary of State.
                        </p>
                        
                        <h2>
                            Ascend can help
                        </h2>
                        <p>
                            Ascend In order to do business legally in states other than your home state (the state where your company was formed or incorporated), you may need to register (also referred to as qualifying) your company in those states. If your business has offices, employees or advertises in states outside of your company's home state, chances are you'll need to qualify your company in that state. Your company becomes qualified by obtaining something often called a Certificate of Authority from the Secretary of State.
                        </p>
                        <p>
                        It's important to understand that by doing business in other states, you may be required to meet other compliance obligations, including the need for business licenses, business permits and tax registrations in those states. Ascend can help you fulfill these and other compliance obligations in all the states where you'd like to transact business.


                        </p>
                        <h2 className='heading_bottom'>
                            Learn More
                        </h2>
                        <p>
                        Find more details about bylaws and operating agreements in our Frequently Asked Questions section.
                        </p>
                        <h3>
                        Call us at 980000000 to get started.
                        </h3>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <div>
                        <FQA_Register_in_Additional_States/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs_Register_in_Additional_States;
