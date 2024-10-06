import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./State_Guides.css";

const State_Guides = () => {
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (selectedState) {
      navigate(`/Learning_Center/${selectedState}`);
    }
  };

  return (
    <div className='main_state_guides'>
      <div className='top_main_hero_section_state_guides'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_State_guides' />
        <p className='image_over_paragraph_state'>
          State Guides
        </p>
      </div>

      <div className='bottom_bar_state_guides'>
        <div className='left_side_state_guides'>
          <p className='paragraph_state_guides'>
            Most of our customers form their new companies in the state where they conduct the majority of their business. Need more state-specific information to decide what's right for your business?&nbsp;
            <b>Choose a state from the dropdown for more information.</b>
          </p>
        </div>

        <div className='right_side_state_guides'>
          <select
            name="state"
            id="state"
            className='country_state_guide'
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="" disabled>Select a State</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District_of_Columbia">District of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New_Hampshire">New Hampshire</option>
            <option value="New_Jersey">New Jersey</option>
            <option value="New_Mexico">New Mexico</option>
            <option value="New_York">New York</option>
            <option value="North_Carolina">North Carolina</option>
            <option value="North_Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode_Island">Rhode Island</option>
            <option value="South_Carolina">South Carolina</option>
            <option value="South_Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West_Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>

          <button className='state_getstarted' onClick={handleNavigation}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default State_Guides;
