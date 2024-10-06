import React, { useState } from "react";
import "./Tabs.css"; // Import the CSS file
import FAQs from "./FQA/FAQs";

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="custom-tabs-container">
      <div className="custom-tabs">
        <div
          className={`custom-tab ${
            activeTab === "Overview" ? "custom-active" : ""
          }`}
          onClick={() => handleTabClick("Overview")}
        >
          Overview
        </div>
        <div
          className={`custom-tab ${
            activeTab === "FAQs" ? "custom-active" : ""
          }`}
          onClick={() => handleTabClick("FAQs")}
        >
          FAQs
        </div>
      </div>
      <div className="custom-tab-indicator">
        <div
          className={`custom-indicator ${
            activeTab === "Overview" ? "custom-overview" : "custom-faqs"
          }`}
        ></div>
      </div>
      <div className="custom-tab-content">
        {activeTab === "Overview" && (
          <div>
            <img
              src="/img/RegisteredAgent4.jpg"
              alt=""
              className="Overview_tab_image"
            />
            <h2>Registered Agent Fundamentals: Here's What You Need to Know</h2>
            <p>
              So you've made the decision to form a corporation or LLC?
              Congratulations! One of the first things you'll need in the
              formation process is a registered agent.
            </p>
            <h2>What is a registered agent?</h2>
            <p>
              A registered agent, or agent for service of process, helps to
              ensure your business maintains compliance. It is the state's way
              of communicating with a corporation or LLC. This agent also
              receives legal and tax documents on behalf of a business or
              corporation, such as notifications from the Secretary of State,
              government notices, tax forms, notifications of lawsuits, and
              other materials.
            </p>
            <h2>What is a registered agent?</h2>
            <ul>
              <li>
                <b>It gives you freedom.</b>With a registered agent, if you are
                located in the state where your business is registered, you
                won't need to worry about updating the state if you move. Plus,
                this agent must be available during normal business hours. If
                your company doesn't follow the traditional 9-to-5 work day, an
                agent can fill the time for you.
              </li>

              <li>
                <b>It’s the Law:</b>If your business is incorporated in one
                state (like Delaware) but operates in another, you are legally
                required to have a registered agent with a physical address in
                the state where you’re incorporated. P.O. boxes don’t count.
              </li>

              <li>
                <b>It's your right.</b>: Corporations and LLCs have legal
                rights, such as the right to due process, which includes
                receiving important legal notices. A registered agent ensures
                that you receive key information, like wage garnishments,
                subpoenas, and court summons, promptly.
              </li>

              <li>
                <b>You’ll Stay Informed: </b>A registered agent ensures that you
                never miss an important document or deadline. Third-party
                services will handle all communication on your behalf, including
                tax forms, legal notices, and compliance documents.
              </li>
            </ul>
            <h2>How should you choose a registered agent?</h2>
            <p>
              While individuals can act as a registered agent, it’s recommended
              to use an experienced service provider like Ascend Incorporate
              LLC. We offer comprehensive compliance services across all 50
              states and the District of Columbia. Plus, we provide access to
              our state-of-the-art online tool that keeps you updated on
              filings, order status, business standing, and more.
            </p>
            <img
              src="/img/RegisteredAgent2.jpg"
              alt=""
              className="Overview_tab_image"
            />
            <h2>Benefits of a Third-Party Registered Agent</h2>
            <ul>
              <li>
                <b>Reliability.</b>: A third-party agent, like Ascend Incorporate LLC, ensures you never miss an important deadline. We handle the paperwork and stay available during all business hours, freeing you to focus on meetings, work travel, vacations, or even just taking a break without worry.
              </li>
              <li>
                <b>Cost-Effective: </b>By using Ascend Incorporate LLC, you avoid the expense of hiring an employee solely to wait for legal documents. We cover your needs 24/7 at competitive rates, offering a more efficient solution.
              </li>

              <li>
                <b>Privacy:</b>With our registered agent services, your business won’t have to deal with the embarrassment of having legal documents delivered in front of customers, vendors, or neighbours. All legal matters are handled discreetly.
              </li>
            </ul>
            <p>
            The bottom line: Partnering with an experienced third-party agent like Ascend Incorporate LLC brings peace of mind—something that’s invaluable to your business.
            </p>
            {/* <div className="youtube-embed-container">
              <div className="youtube-embed">
                <iframe
                  src="https://www.youtube.com/embed/n3VqYhy7YcY"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                />
              </div>
            </div> */}
            <h2>Ready to sign up for our Registered Agent Services?</h2>
            <button className="Tabs_overview_button_full_left">
              Get Started
            </button>
          </div>
        )}
        {activeTab === "FAQs" && <FAQs />}
      </div>
    </div>
  );
};

export default CustomTabs;
