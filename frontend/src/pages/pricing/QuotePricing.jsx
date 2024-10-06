// import React, { useEffect, useState } from "react";
// import { SlLocationPin } from "react-icons/sl";
// import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";
// import { Spin } from "antd"; 
// import "antd/dist/reset.css"; 
// import "../pricing/quotePricing.css";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../navbar/Navbar";

// const QuotePricing = () => {
//   const [priceData, setPriceData] = useState([]);
//   const [selectedState, setSelectedState] = useState("California");
//   const [loading, setLoading] = useState(true); // State to handle loading
//   const navigate = useNavigate();

//   // Fetch all price data from the API
//   const getAllPriceData = async () => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/getAllPrice`
//       );
//       if (response.data.success) {
//         setPriceData(response.data.allPrice); 
//       }
//     } catch (error) {
//       toast.error(
//         error.response
//           ? error.response.data.message
//           : "Something went wrong"
//       );
//     } finally {
//       setLoading(false); 
//     }
//   };

//   // Use effect to fetch price data on component mount
//   useEffect(() => {
//     getAllPriceData();
//   }, []);

//   // Handle state selection
//   const handleStateChange = (event) => {
//     setSelectedState(event.target.value);
//   };

//   // Navigate to the Package page with the selected state
//   const handleSelectPackage = (id) => {
//     navigate(`/package-selection/${id}`, { state: { selectedState } });
//   };

//   // Render the component
//   return (
//     <>
//       <div className="navbarContainer">{/* <Navbar /> */}</div>
//       <div className="container">
//         <div className="quote-main-container">
//           <div className="quote-full-container">
//             <h2 className="quote-main-header">
//               Select a State for Your New Business Entity
//             </h2>
//             <p className="quote-header-paragraph">
//               Many businesses incorporate in their home states, but there are
//               advantages to selecting other states.
//             </p>
//             <div className="quote-search-logo">
//               <SlLocationPin className="quote-icon-map" />
//               <span className="countryList">
//                 <select
//                   name="Country"
//                   id="Country"
//                   className="quote-select"
//                   value={selectedState}
//                   onChange={handleStateChange}
//                 >
//                   <option value="Alabama">Alabama</option>
//                   <option value="Alaska">Alaska</option>
//                   <option value="Arizona">Arizona</option>
//                   <option value="Arkansas">Arkansas</option>
//                   <option value="California">California</option>
//                   <option value="Colorado">Colorado</option>
//                   <option value="Connecticut">Connecticut</option>
//                   <option value="Delaware">Delaware</option>
//                   <option value="District of Columbia">
//                     District of Columbia
//                   </option>
//                   <option value="Florida">Florida</option>
//                   <option value="Georgia">Georgia</option>
//                   <option value="Hawaii">Hawaii</option>
//                   <option value="Idaho">Idaho</option>
//                   <option value="Illinois">Illinois</option>
//                 </select>
//               </span>
//             </div>
//             <hr />
//             <h2 className="quote-main-header">
//               Choose the Type of Entity You'd Like to Form
//             </h2>
//             <p className="quote-header-paragraph">
//               LLC is the most popular entity type for small businesses, but it's
//               not for everyone. We've provided descriptions of some common
//               entity types to help you choose.
//             </p>

//             {/* Display loading spinner while data is being fetched */}
//             {loading ? (
//               <div className="loading-spinner">
//                 <Spin size="large" /> {/* Large spinner */}
//               </div>
//             ) : (
//               // Pricing Container
//               <div className="quote-pricing-container">
//                 {priceData.map((pData) => (
//                   <PricingCard
//                     key={pData.id}
//                     pData={pData}
//                     onSelect={() => handleSelectPackage(pData._id)}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Left Side Help Section */}
//           <div className="quote-left-side">
//             <HelpSection />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // PricingCard Component to display individual pricing options
// const PricingCard = ({ pData, onSelect }) => {
//   return (
//     <div className="quote-pricing-card">
//       <div className="quote-card-content">
//         <h2 className="quote-card-header">{pData.heading}</h2>
//         <p className="quote-card-paragraph">{pData.para}</p>

//         {/* List of Content */}
//         <ul className="quote-card-list">
//           {pData.contentList.map((content, index) => (
//             <li key={index}>
//               <FaCheck className="quote-check-icon" />
//               {content}
//             </li>
//           ))}
//         </ul>

//         {/* FAQ Link */}
//         <div className="quote-faq">
//           Frequently Asked Questions
//           <FaExternalLinkAlt className="quote-faq-icon" />
//         </div>
//       </div>

//       {/* Pricing Information */}
//       <div className="quote-pricing">
//         <p className="quote-pricing-paragraph">Packages starting at</p>
//         <h3>$99</h3>
//         <p className="quote-bottom-paragraph">Plus State Fees</p>
//         <button className="quote-select-button" onClick={onSelect}>
//           Select
//         </button>
//       </div>
//     </div>
//   );
// };

// // HelpSection Component for additional information
// const HelpSection = () => {
//   return (
//     <div className="quote-help-container">
//       <p className="quote-help-header">
//         Need help selecting a state for your new business entity?
//       </p>
//       <ul className="quote-help-links">
//         <li>
//           <a href="#">Choosing Your Home State</a>
//         </li>
//         <li>
//           <a href="#">Why Delaware is the 'Best'</a>
//         </li>
//       </ul>
//       <p className="quote-top-states-header">Top States to incorporate in</p>
//       <ul className="quote-top-states-list childQuote">
//         {topStates.map((state, index) => (
//           <TopStateItem key={index} state={state} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Array of top states for incorporation
// const topStates = [
//   { name: "Delaware", tooltip: "Content for Delaware" },
//   { name: "California", tooltip: "Content for California" },
//   { name: "Florida", tooltip: "Content for Florida" },
//   { name: "New York", tooltip: "Content for New York" },
//   { name: "Nevada", tooltip: "5% of customers Nevada" },
//   { name: "Texas", tooltip: "Content for Texas" },
// ];

// // TopStateItem Component for displaying each state in the help section
// const TopStateItem = ({ state }) => {
//   return (
//     <li>
//       <a href="#">{state.name}</a>
//       <span className="tooltip">{state.tooltip}</span>
//     </li>
//   );
// };

// export default QuotePricing;





// new code testing 



import React, { useEffect, useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import { Spin } from "antd";
import "antd/dist/reset.css";
import "../pricing/quotePricing.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import StateData from "../../constants/stateData";

const QuotePricing = () => {
  const [priceData, setPriceData] = useState([]);
  const [selectedState, setSelectedState] = useState("Alabama");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all price data from the API
  const getAllPriceData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/getAllPrice`
      );
      if (response.data.success) {
        setPriceData(response.data.allPrice);
      }
    } catch (error) {
      toast.error(
        error.response
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  // Use effect to fetch price data on component mount
  useEffect(() => {
    getAllPriceData();
  }, []);

  // Handle state selection
  const handleStateChange = (event) => {
    const selected = event.target.value;
    setSelectedState(selected);
    
    // Save selected state data to local storage
    const selectedStateData = StateData.find(state => state.stateName === selected);
    localStorage.setItem("selectedStateData", JSON.stringify(selectedStateData));
  };

  // Navigate to the Package page with the selected state
  const handleSelectPackage = (id) => {
    navigate(`/package-selection/${id}`, { state: { selectedState } });
  };

  // Filter StateData based on selected state
  const filteredStateData = StateData.find(state => state.stateName === selectedState);

  // Render the component
  return (
    <>
      <div className="navbarContainer">{/* <Navbar /> */}</div>
      <div className="container">
        <div className="quote-main-container">
          <div className="quote-full-container">
            <h2 className="quote-main-header">
              Select a State for Your New Business Entity
            </h2>
            <p className="quote-header-paragraph">
              Many businesses incorporate in their home states, but there are
              advantages to selecting other states.
            </p>
            <div className="quote-search-logo">
              <SlLocationPin className="quote-icon-map" />
              <span className="countryList">
                <select
                  name="Country"
                  id="Country"
                  className="quote-select"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  {StateData.map(state => (
                    <option key={state.abbreviation} value={state.stateName}>
                      {state.stateName}
                    </option>
                  ))}
                </select>
              </span>
            </div>
            <hr />
            <h2 className="quote-main-header">
              Choose the Type of Entity You'd Like to Form
            </h2>
            <p className="quote-header-paragraph">
              LLC is the most popular entity type for small businesses, but it's
              not for everyone. We've provided descriptions of some common
              entity types to help you choose.
            </p>

            {/* Display loading spinner while data is being fetched */}
            {loading ? (
              <div className="loading-spinner">
                <Spin size="large" />
              </div>
            ) : (
              // Pricing Container
              <div className="quote-pricing-container">
                {priceData.map((pData) => (
                  <PricingCard
                    key={pData.id}
                    pData={pData}
                    onSelect={() => handleSelectPackage(pData._id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Left Side Help Section */}
          <div className="quote-left-side">
            <HelpSection />
          </div>
        </div>
      </div>
    </>
  );
};

// PricingCard Component to display individual pricing options
const PricingCard = ({ pData, onSelect }) => {
  return (
    <div className="quote-pricing-card">
      <div className="quote-card-content">
        <h2 className="quote-card-header">{pData.heading}</h2>
        <p className="quote-card-paragraph">{pData.para}</p>

        {/* List of Content */}
        <ul className="quote-card-list">
          {pData.contentList.map((content, index) => (
            <li key={index}>
              <FaCheck className="quote-check-icon" />
              {content}
            </li>
          ))}
        </ul>

        {/* FAQ Link */}
        <div className="quote-faq">
          Frequently Asked Questions
          <FaExternalLinkAlt className="quote-faq-icon" />
        </div>
      </div>

      {/* Pricing Information */}
      <div className="quote-pricing">
        <p className="quote-pricing-paragraph">Packages starting at</p>
        <h3>$99</h3>
        <p className="quote-bottom-paragraph">Plus State Fees</p>
        <button className="quote-select-button" onClick={onSelect}>
          Select
        </button>
      </div>
    </div>
  );
};

// HelpSection Component for additional information
const HelpSection = () => {
  return (
    <div className="quote-help-container">
      <p className="quote-help-header">
        Need help selecting a state for your new business entity?
      </p>
      <ul className="quote-help-links">
        <li>
          <a href="#">Choosing Your Home State</a>
        </li>
        <li>
          <a href="#">Why Delaware is the 'Best'</a>
        </li>
      </ul>
      <p className="quote-top-states-header">Top States to incorporate in</p>
      <ul className="quote-top-states-list childQuote">
        {topStates.map((state, index) => (
          <TopStateItem key={index} state={state} />
        ))}
      </ul>
    </div>
  );
};

// Array of top states for incorporation
const topStates = [
  { name: "Delaware", tooltip: "Content for Delaware" },
  { name: "California", tooltip: "Content for California" },
  { name: "Florida", tooltip: "Content for Florida" },
  { name: "New York", tooltip: "Content for New York" },
  { name: "Nevada", tooltip: "5% of customers Nevada" },
  { name: "Texas", tooltip: "Content for Texas" },
];

// TopStateItem Component for displaying each state in the help section
const TopStateItem = ({ state }) => {
  return (
    <li>
      <a href="#">{state.name}</a>
      <span className="tooltip">{state.tooltip}</span>
    </li>
  );
};

export default QuotePricing;
