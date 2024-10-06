import React from 'react';
import "./Corporate_Gurantee.css";

const Corporate_Gurantee = () => {
  return (
    <div className='corporate_gurantee_container'>
      <h1 className='heading_gurantee'>$75,000 Ascend Compliance Guarantee</h1>
      <div className="main_bottom_div">
        <div className="left_bottom_gurantee">
          <p className='gurantee_paragraph'>
          Ascend Incorporate LLC stands by the quality of our services with a $75,000 Corporate Compliance Guarantee. If a court in the United States finds that your filing is invalid due to our error at the time it was properly submitted, we will correct the issue or compensate you up to $75,000.
          </p>
          <ul>
            <li>
            This guarantee does not apply if you fail to follow our Terms of Service, if there is negligence by any party other than Ascend Incorporate LLC, or if you do not meet your business’s ongoing requirements after the initial filing.
            </li>
            <li>
            The guarantee does not cover issues caused by inaccurate or unlawful information provided by you or your representatives.
            </li>
            <li>
          It applies only if the entire corporation or LLC is declared invalid.
            </li>
            <li>
            The guarantee remains valid as long as:
              <ul>
                <li>
                Your entity meets all state and federal corporate, regulatory, capitalization, securities, and tax requirements.
                </li>
                <li>
                You continue to use Ascend Incorporate LLC as your registered agent.
                </li>
                <li>
                Your business’s address, phone number, and payment information are kept current with us.
                </li>
              </ul>
            </li>
            <li>
            This guarantee does not apply if your entity is involved in illegal activities or has an unlawful purpose.
            </li>
            <li>
            Ascend Incorporate LLC reserves the right to update this guarantee at any time by posting the revised terms on our website.
            </li>
          </ul>
          <h2>
            Ready to create your company?
          </h2>
          <a href='http://www.ascendincorporate.com'>
          <button className='left_button_corporate'>
          Visit our website  to get started.
          </button></a>
        </div>
        <div className="right_bottom_gurantee">
          {/* Add content here if needed */}
          <h3>
            Let's get to it.
          </h3>
          <p>
            Create your corporation or limited liability company today.


          </p>
          <button className='button_about_corporate'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Corporate_Gurantee;
