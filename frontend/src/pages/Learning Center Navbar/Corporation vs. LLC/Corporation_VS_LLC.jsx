import React from 'react';
import "./Corporation_VS_LLC.css";
import { TiTick } from "react-icons/ti";

const Corporation_VS_LLC = () => {
  return (
    <div className='corp_vs_llc_container'>
      <h1 className='corp_vs_llc_heading'>LLC vs. Corporation: What's the Difference?</h1>
      <div className="corp_vs_llc_main">
        <div className="corp_vs_llc_left">
          <p className='corp_vs_llc_paragraph'>
            A limited liability company (LLC) and corporation are two different company structures with very different tax requirements. No matter which entity type you choose, being incorporated adds legitimacy to your business, specifically, the way your business is perceived in the marketplace. Take a minute to consider your short and long-term business goals to determine which structure is best for you.
          </p>
          <h2 className='corp_heading'>
            Advantages and disadvantages of an LLC vs. a corporation
          </h2>
          <p className='corp_vs_llc_paragraph'>
            A limited liability company (LLC) is a type of business structure that offers personal liability protection, as well as a few tax advantages. The “LL,” or limited liability, in LLC is what protects your personal assets in the event of a judgment against your company. Traditional corporations offer limited liability as well, so let’s focus on the structural and taxation differences to explain the differences of LLCs vs. corporations in the chart below.
          </p>
          <table className="corp_vs_llc_table">
            <thead>
              
              <tr>
                <th>Advantages of an LLC</th>
                <th>Disadvantages of an LLC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="tick"><TiTick /></span> No limit on the number of owners</td>
                <td><span className="tick"><TiTick /></span> Cannot engage in corporate income-splitting to lower tax liability</td>
              </tr>
              <tr>
                <td><span className="tick"><TiTick /></span> Profit and loss are passed through to the owners’ individual tax returns</td>
                <td><span className="tick"><TiTick /></span> Cannot issue stock</td>
              </tr>
              <tr>
                <td><span className="tick"><TiTick /></span> No annual meeting or minute book requirements</td>
                <td></td>
              </tr>
              <tr>
                <th>Advantages of a corporation</th>
                <th>Disadvantages of a corporation</th>
              </tr>
              <tr>
                <td><span className="tick"><TiTick /></span> May issue shares of stock to attract investors</td>
                <td><span className="tick"><TiTick /></span> C corporation tax structure requires double taxation of corporate profits (S corporations do not)</td>
              </tr>
              <tr>
                <td><span className="tick"><TiTick /></span> Corporate income-splitting may help lower overall tax liability</td>
                <td><span className="tick"><TiTick /></span> Must hold annual meetings and record minutes</td>
              </tr>
              <tr>
                <td></td>
                <td><span className="tick"><TiTick /></span> S corporations have restrictions on the number of owners</td>
              </tr>
            </tbody>
          </table>

          <h2 className='corp_heading'>
            Is an LLC or corporation better for my business?
          </h2>
          <p className='corp_vs_llc_paragraph'>
            Business goals vary by company, and choosing whether to incorporate as an LLC or corporation does, too. When deciding which kind of entity fits your business strategy, consider some of the differences that each kind offers. Learn more about the types of business entities with our comprehensive comparison chart.
          </p>

          <h2 className='corp_heading'>
            Learn more about LLCs, corporations, and other legal business structures
          </h2>
          <p className='corp_vs_llc_paragraph'>Whichever type of entity you choose, Ascend can help you form an LLC or corporation online or by phone in minutes. Here’s more information about each type of business entity to choose from before speaking to one of our experts:</p>

          <div className='llc_div'>
            <ul className='llc_list'>
              <li>LLC</li>
              <li>C corporation</li>
              <li>S corporation</li>
              <li>Nonprofit corporation</li>
              <li>Professional corporation</li>
              <li>Series LLC</li>
              <li>Limited partnership</li>
            </ul>
          </div>


          <h2 className='corp_heading'>
            Ready to form your business?
          </h2>
          <button className='corp_vs_llc_button'>
            Get Started
          </button>
        </div>






        <div className="corp_vs_llc_right">
          <h3>
            Let's get to it.
          </h3>
          <p>
            Create your corporation or limited liability company today.
          </p>
          <button className='corp_vs_llc_button_full'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Corporation_VS_LLC;
