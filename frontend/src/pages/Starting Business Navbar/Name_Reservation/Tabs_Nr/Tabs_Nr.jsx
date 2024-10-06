import React, { useState } from 'react';
import './Tabs_Nr.css'; // Updated the CSS file name
import FQAS_Nr from "../FQAS_Nr/FQAS_Nr"

const Tabs_Eni = () => { // Updated the component name
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-nr-container">
            <div className="tabs-nr-tabs">
                <div
                    className={`tabs-nr-tab ${activeTab === 'Overview' ? 'tabs-nr-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`tabs-nr-tab ${activeTab === 'FAQs' ? 'tabs-nr-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="tabs-nr-tab-indicator">
                <div className={`tabs-nr-indicator ${activeTab === 'Overview' ? 'tabs-nr-overview' : 'tabs-nr-faqs'}`}></div>
            </div>
            <div className="tabs-nr-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <p>
                        The success of your business depends to some degree on your ability to set yourself apart from the competition. A good first step is choosing the right business name.</p>

                        <p>Even if you're not ready to form a corporation or LLC, Ascend can reserve your business name in the state where you intend to form your company. Simply tell us what name you want to reserve and we'll conduct a search of the state records to make sure it's available. If it is, we will reserve your name of choice and hold it for you as long as state rules allow, preventing other companies from registering their businesses under the same name.</p>

                        <p>Be sure to choose your company name carefully. The name should be descriptive of your business activities, and it must be unique - it can't be confused with that of any other corporation, limited liability company (LLC) or partnership in your intended state of formation.</p>

                        <p>
                            <b>Keep in mind that:</b>
                        </p>
                        <ul>
                            <li>State laws vary widely when it comes to business name reservations. Our Business Specialists can give you more details about the process and how to successfully reserve your name.</li>
                            <li>Reserving a name does not create a legal business structure. For that, you'll need to incorporate or form an LLC.</li>
                            <li>Even if the state approves your name reservation, there's no guarantee that it will accept the name when you decide to incorporate under that name.</li>
                        </ul>
                        
                        <h2>Ascend can help</h2>
                        <p>
                            Ascend can obtain an Employer Identification Number (EIN) from the IRS on your business's behalf. The process is fast, easy and cost-effective.
                        </p>
                        <h2>Learn More</h2>

                        <p>
                            Get more details about your Employer Identification Number (EIN) in our Frequently Asked Questions section.
                        </p>
                        <h2>
                            Ready to sign up for our Registered Agent Services?
                        </h2>
                        <button className="tabs-nr-overview-button">Get Started</button>
                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <FQAS_Nr />
                )}
            </div>
        </div>
    );
};

export default Tabs_Eni; // Updated the export name
