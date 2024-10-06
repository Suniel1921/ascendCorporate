import React, { useState } from 'react';
import './ExpandableList2.css'; // Import CSS for styling

const Expandablelist2 = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mainsteps-container">
            <h2>10 Steps to Starting a BusinessAdditional Steps to Starting a Business:</h2>
            <div className='steps-container'>
                <ol>
                    <li className="step-item">
                    Appoint a Registered Agent: Ascend Incorporate LLC offers Registered Agent services to help ensure you receive important legal documents.
                    </li>
                    <li className="step-item">
                    Satisfy Insurance Requirements: Protect your business by obtaining the necessary insurance, such as general liability or workers' compensation insurance.
                    </li>
                    <li className="step-item">
                    Complete Additional Filings: If your business expands to other states, we can assist with registration filings, also known as "qualifications."
                    </li>
                    <button onClick={handleExpandClick} className="toggle-button">
                        {isExpanded ? 'Collapse list...' : 'Click to expand list...'}
                    </button>
                    {isExpanded && (
                        <>
                            <li className="step-item">Register a DBA (Doing Business As) Name: If you plan to operate under a name different from your legal business name, file a DBA with Ascend Incorporate LLC’s assistance.</li>
                            <li className="step-item">Draft Internal Documents: Corporations and LLCs need internal bylaws or an operating agreement. Ascend Incorporate LLC can customize these documents to suit your business.</li>
                            <li className="step-item">Establish a Business Presence: Set up a business address, and we can provide mail forwarding services if needed.</li>
                            <li className="step-item">Get a Business Credit Card: Separate your business and personal expenses with a business credit card to protect your personal assets.</li>
                            <li className="step-item">Get Started: Set an official launch date to help keep your business on track and motivated toward success</li>
                            
                        </>
                    )}
                </ol>
            </div>
        </div>
    );
};

export default Expandablelist2;
