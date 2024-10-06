import React from 'react'
import "./StartUp_Task.css";
import Start_grid from './Grid/Start_grid';
import ExpandableList from './Expand/ExpandableList';
import Expandablelist2 from './Expandable list 2/ExpandableList2';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import {useNavigate } from 'react-router-dom';

const StartUp_Task = () => {
  const navigate = useNavigate()
  return (
    <div className='start_up_main_container'>
      <div className='top_main_hero_section'>
        <img src="/img/hero-image-planning.jpg" alt="" className='top_Start_image' />
        <p className='image_over_paragraph_start'>
        Steps to Starting a Small Business with Ascend Incorporate LLC.
        </p>
      </div>


      .
      <div className="bottom_startup">
        {/*  left middle div */}
        <div className="left_middlediv">
          <p className='stat_paragraph'>
          Starting a new business is more than just ownership. It involves handling numerous legal requirements and compliance obligations at the state, federal, and local levels. As your business grows, you’ll also face opportunities to expand beyond its initial scope.
          </p>
          <p className='stat_paragraph'>
          Here are some helpful resources for entrepreneurs to successfully build their businesses. Use these tools to check off items on your startup checklist, explore industry best practices for forming your business, and decide which business structure—LLC, S Corp, or C Corp—will best serve your needs.
          </p>
          <Start_grid />
          <ExpandableList />
          <Expandablelist2 />
        </div>


        {/* right middle div */}
        <div className='right_start'>
        <div className="right_middle_div">
          <ImQuotesLeft className='quotes_start' /><span className='paragraph_quotes'>
            In the five or so years that we have been working with you, there have never been any problems, and your staff is always there to work with us in a courteous and helpful manner. Keep up the good work.
          </span>
          <ImQuotesRight className='quotes_start' />
          
          
        </div>
        <div className="bottomQuotes">
          Lawrence Dufraine - Londonerry,<br/>
          NH - 11/22/2014
          </div>
          <button className='start_getstarted' onClick={()=>navigate('/quote-pricing')}>
              Get Started
          </button>
        </div>
      </div>

    </div>
  )
}

export default StartUp_Task
