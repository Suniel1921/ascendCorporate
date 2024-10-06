import React from "react";
import "./Benefits_of_Incorporating.css";
import { Link, useNavigate } from "react-router-dom";

const BenefitsOfIncorporating = () => {
  const navigate = useNavigate();

  return (
    <div className="benefits_container">
      <h1 className="benefits_heading">Why Incorporate Your Business?</h1>

      <div className="benefits_main">
        <div className="benefits_left">
          <p className="benefits_paragraph">
            If you're not incorporated, your business may not appear as
            professional as you want it to. Incorporating helps protect your
            personal assets, provides tax advantages, and can help grow your
            business.
          </p>
          <h2 className="benefits_subheading">
            What Does It Mean To Be Incorporated?
          </h2>
          <p className="benefits_paragraph">
            Incorporation is the process of legally defining your business. Just
            like you wouldn't build a house without a plan, you shouldn't build
            a business without proper structure. Choosing an LLC, S Corporation,
            or C Corporation gives you the flexibility to decide on a tax
            structure that works best for your business.
          </p>
          <h2 className="benefits_subheading">
            Top Six Reasons to Incorporate Your Business:{" "}
          </h2>
          <ul className="benefits_list">
            <li>Personal asset protection</li>
            <li>Tax flexibility and benefits</li>
            <li>Enhanced credibility</li>
            <li>Brand protection</li>
            <li>Perpetual existence</li>
            <li>Deductible expenses</li>
          </ul>
          <h2 className="benefits_subheading">
            S Corp, C Corp, or LLC: Which One Is Right for You?{" "}
          </h2>
          <p className="benefits_paragraph">
          Incorporating isn’t one-size-fits-all. When choosing the best option for your business, consider the specific benefits each type offers:
          </p>
          <h4 className="benefits_h4">S Corporation:</h4>
          <ul className="benefits_list">
            <li>Avoids double taxation</li>
            <li>Offers investment opportunities</li>
            <li>Simple tax filing once a year</li>
          </ul>
          <h4 className="benefits_h4">C Corporation:</h4>
          <ul className="benefits_list">
            <li>Unlimited growth potential through stock sales</li>
            <li>No shareholder limit</li>
            <li>Tax-deductible business expenses</li>
          </ul>
          <h4 className="benefits_h4">LLC:</h4>
          <ul className="benefits_list">
            <li>Simple structure</li>
            <li>No residency requirement</li>
            <li>Flexible organizational structure</li>
          </ul>

          <h2 className="benefits_subheading">
            Where Should I Incorporate My Business?
          </h2>
          <p className="benefits_paragraph">
          Most businesses incorporate in their home state, but you can choose to incorporate in another state if it offers better benefits for your business.
          </p>

          <h3>Ready to create your company?</h3>
          <button
            className="benefits_button_full_left"
            onClick={() => navigate("/quote-pricing")}
          >
            Get Started
          </button>
          {/* <ComparisonChart/> */}
        </div>

        <div className="benefits_right">
          <h3 className="right_h3">Ready to Ascend Incorporate?</h3>
          <p>Start today and secure the future of your business!</p>
          <button
            className="benefits_button_full"
            onClick={() => navigate("/quote-pricing")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfIncorporating;
