import React from 'react';
import './Our_Services.css';
import { useNavigate } from 'react-router-dom';

const Our_Services = () => {
  const navigate = useNavigate();


  return (
    <div className="our-services_container">
      <h1 className="our-services_heading">Our Services</h1>

      <div className="our-services_main">
        <div className="our-services_left">
          <h2 className="our-services_subheading">Services to start and grow your small business.
          </h2>
          <p><b>501(c) Non-Profit Status</b></p>
          <p>
            501(c) is a tax law provision granting exemption from the federal income tax to non-profit organizations.
          </p>

          <p><b>Annual Report Filing</b></p>
          <p>
            Save time, cut expenses, and protect your company's good standing with Annual Report Preparation & Filing services from Ascend.
          </p>

          <p><b>Bank Account Resolutions (Written Consents)</b></p>
          <p>
            Corporations and LLCs can authorize one or more designees to open and manage the company's bank accounts. We can offer a written resolution that customers can provide to their banks and store with their company records. You simply provide us with the names of the authorized signers.
          </p>

          <p><b>Business Licenses & Permits</b></p>
          <p>
            Don't ignore the important business license, permit, and tax registration requirements for your business. Our Business License Compliance Package helps you identify the applications for your location and industry.
          </p>

          <p><b>Bylaws & Operating Agreements</b></p>
          <p>
            Get help creating the internal documents that govern your business. Ascend offers corporate bylaws in numerous states, or an LLC operating agreement in any state.
          </p>

          <p><b>Certificate of Good Standing</b></p>
          <p>
            Verify your company's status with the Secretary of State today by ordering this certificate. Banks, lenders, and investors often request these certificates as proof of good standing.
          </p>

          <p><b>Certified Copies</b></p>
          <p>
            Need a copy of documents your company has filed with the Secretary of State? We can help you order a copy of any document on file, certified with the Secretary of State's seal or signature.
          </p>

          <p><b>Closing a Business (Dissolution)</b></p>
          <p>
            If you need to close your business, state governments require additional filings and fees. We can help you with the dissolution process.
          </p>

          <p><b>Company Management & Ownership Changes (Written Consents)</b></p>
          <p>
            Corporations and LLCs can update their internal records by creating resolutions (called written consents). We provide several different types of written consents for your company including changes to directors, members, and managers.
          </p>

          <p><b>Conversions</b></p>
          <p>
            Changing your business from an LLC to a corporation (or vice versa).
          </p>

          <p><b>Company Name Changes (Amendments)</b></p>
          <p>
            We can help you change information listed on your corporation or LLC formation documents. Businesses commonly file amendments to change their name, purpose, address, or initial management.
          </p>

          <p><b>Corporate & LLC Compliance Kits</b></p>
          <p>
            Don't be left without the important tools your business needs. Our compliance kit includes a personalized, zipper-bound binder, stock or membership certificates, and a company seal.
          </p>
          <p><b>Doing Business As (DBA) Names</b></p>
          <p>
            If you do business under a name other than your personal, corporation, or LLC name, governments may require you to complete a "Doing Business As" filing. We can help you with this process.
          </p>

          <p><b>Employer Identification Number (EIN)</b></p>
          <p>
            Corporations, multiple-member LLCs, and any business that hires employees must obtain an EIN through the Internal Revenue Service (IRS). Let Ascend apply for your new EIN.
          </p>

          <p><b>Franchise Tax E-Filing</b></p>
          <p>
            Need help filing your Delaware annual reports and paying franchise taxes? This filing assistance program can help you maintain your company's good standing in the state of Delaware.
          </p>

          <p><b>Incorporation & LLC Formation</b></p>
          <p>
            Protect your personal assets and gain business credibility by forming a corporation or Limited Liability Company (LLC). We offer a variety of packages to meet your business needs and budget.
          </p>

          <ul>
            <li>C Corporation</li>
            <li>Limited Liability Company (LLC)</li>
            <li>Limited Partnership</li>
            <li>Nonprofit Corporation</li>
            <li>Professional Services Company</li>
            <li>S Corporation</li>
            <li>Series LLC</li>
          </ul>

          <p><b>LLC Tax Status Election - Form 8832</b></p>
          <p>
            By filing Form 8832 with the IRS, you can choose a tax status for your entity besides the original status. According to your objectives, you can elect to have your LLC taxed as a sole proprietorship, partnership, C Corporation, or S Corporation. In some cases, by changing its tax status, a company can save thousands of dollars in taxes each year.
          </p>

          <p><b>Mail Forwarding</b></p>
          <p>
            Delaware and Nevada companies can establish a private mailbox with our Mail Forwarding Service. Ascend will forward your business mail to any state in the U.S. and to other countries.
          </p>

          <p><b>Register in Additional States (Foreign Qualifications)</b></p>
          <p>
            If you conduct business in multiple locations, you may need to register in more than one state. Ascend can help you register to do business in any state or the District of Columbia.
          </p>

          <p><b>Registered Agent Service</b></p>
          <p>
            All corporations and LLCs must maintain a registered address to receive important legal documents and state notifications. Ascend can serve as your Registered Agent in any state or the District of Columbia.
          </p>

          <p><b>Reinstatements</b></p>
          <p>
            Ascend can help restore your company to good standing after it has been voided or dissolved by the state for failure to satisfy its good standing requirements.
          </p>

          <p><b>S-Corporation Election - Form 2553</b></p>
          <p>
            In order to enjoy the best-possible tax savings for your business, you need to have the right tax classification. Many C Corporations and LLCs elect to file for S Corporation status because of the advantages this classification provides their businesses.
          </p>


          <h3>
            Ready to create your company?
          </h3>
          <button className="our-services_button_full_left" onClick={() => navigate('/quote-pricing')}>Get Started</button>
          {/* <ComparisonChart/> */}

        </div>

        <div className="our-services_right">
          <h3 className='right_h3'>Ready to Incorporate?</h3>
          <p>Get started today and secure your business future.</p>
          <button className="our-services_button_full" onClick={() => navigate('/quote-pricing')}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Our_Services;
