import React from 'react'
import "./Incorporate_In_Welfare.css";
import CardDelaware from './CardDelaware/CardDelaware';

const Incorporate_In_Welfare = () => {
  return (
    <div className='main_delware_container'>
      <div className='top_main_hero_section_Delaware'>
        <img src="/img/delaware_hero_bg.jpg" alt="" className='top_Delaware_image' />
        <p className='image_over_paragraph_Delware'>
          Delaware
        </p>
      </div>


      {/* bottom */}
      <div className="bottom_main_container_delware">
        <div className="top_main_bottom_delware">
          <div className='left_top_main_bottom_delware'>
            <p className='delware_paragraph'>
              Over 1 million businesses call Delaware their legal home. More than half of the corporations that make up the Fortune 500® are incorporated in the State of Delaware. Before you start your business, navigate through the Delaware Corporation Knowledge Hub to learn more about the many advantages the state offers for businesses both small and large. Also, learn how Ascend is able to support you at every step of your business formation journey managing your paperwork and state filings so that you can focus on your business.
            </p>
          </div>

          <div className="right_delware_bottom ">
            <h3>
              Let's get to it.
            </h3>
            <p>
              Create your corporation or limited liability company today.
            </p>
            <button className='delware_right_button_full'>
              Get Started
            </button>
          </div>
        </div>

          <h2 className='delware_h2'>
          Still Exploring Your Options? Learn More About Starting a Corporation or LLC in Delaware.
          </h2>

          <CardDelaware/>
        <div className="second_delwafere_bottom">

        </div>
      </div>
    </div>
  )
}

export default Incorporate_In_Welfare
