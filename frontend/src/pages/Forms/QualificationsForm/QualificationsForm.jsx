import React from "react";
import { useNavigate } from "react-router-dom";
import "./QualificationsForm.css";

const QualificationsForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation or other logic here if needed
    navigate("/contact-info");
  };

  return (
    <div className="qualifications-container">
      <h2>Qualifications</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="entity-type">
            Please select the type of entity for your business
          </label>
          <select id="entity-type" name="entity-type">
            <option value="">Please Select</option>
            {/* Add other options here */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="domestic-state">
            Please select your domestic state, where your company is registered
          </label>
          <select id="domestic-state" name="domestic-state">
            <option value="">Please Select</option>
            {/* Add other options here */}
          </select>
        </div>

        <div className="form-group">
          <label>
            Select which state(s) you would like to register your business in
          </label>
          <div className="checkbox-group">
            {[
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "District of Columbia",
              "Florida",
              "Georgia",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming",
            ].map((state) => (
              <div key={state} className="checkbox-item">
                <input type="checkbox" id={state} name="states" value={state} />
                <label htmlFor={state}>{state}</label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="continue-button">
          Continue
        </button>
      </form>
    </div>
  );
};

export default QualificationsForm;
