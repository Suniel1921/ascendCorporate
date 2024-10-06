import React from 'react';
import "./ComparisonChart.css";
import { TiTick } from "react-icons/ti";

const ComparisionChart = () => {
  return (
    <div className='comparision-chartcontainer'>
      <h1 className='comparision-chartheading'>Business Comparision Chart</h1>
      <div className="comparision-chartmain">
        <div className="comparision-chartleft">
          <p className='comparision-chartparagraph'>
            Before you begin the incorporation process, you will need to choose a business structure. Ascend can help you form a new corporation or Limited Liability Company (LLC) in any state. There are plenty of options when it comes to deciding whether to incorporate or form a partnership or act as a sole proprietor; take your time and let Ascend Business Comparison Chart help you through the process. Please review our chart below for the advantages of forming a C Corporation, S Corporation, or LLC.
          </p>

          <table className="comparison-table">
            <thead>
              
              <tr>
                <th></th>
                <th>C Corp</th>
                <th>S Corp</th>
                <th>LLC</th>
                <th>General Partnership</th>
                <th>Sole Proprieter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Owners have limited liability for business debts and obligations</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Created by a state-level registration that usually protects the company name</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Business duration can be perpetual</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>May have an unlimited number of owners</td>
                <td>✔</td>
                <td></td>
                <td>✔</td>
                <td>✔</td>
                <td></td>
              </tr>
              <tr>
                <td>Owners need not be U.S. citizens or residents</td>
                <td>✔</td>
                <td></td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>May be owned by another business, rather than individuals</td>
                <td>✔</td>
                <td></td>
                <td>✔</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>May issue shares of stock to attract investors</td>
                <td>✔</td>
                <td>✔</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Owners can report business profit and loss on their personal tax returns</td>
                <td></td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>Owners can split profit and loss with the business for a lower overall tax rate</td>
                <td>✔</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Permitted to distribute special allocations, under certain guidelines</td>
                <td></td>
                <td></td>
                <td>✔</td>
                <td>✔</td>
                <td></td>
              </tr>
              <tr>
                <td>Not required to hold annual meetings or record meeting minutes</td>
                <td></td>
                <td></td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>

        </div>

        <div className="comparision-chartright">
          <h3>
            Let's get to it.
          </h3>
          <p>
            Create your corporation or limited liability company today.
          </p>
          <button className='comparision-chartbutton_full'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default ComparisionChart;
