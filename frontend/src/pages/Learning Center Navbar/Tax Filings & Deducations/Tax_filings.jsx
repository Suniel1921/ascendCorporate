import React from 'react'
import "./Tax_Filings.css";

const Tax_filings = () => {
  return (
    <div className='Tax-fillings_Container'>
      <h1 className="Tax-fillings_heading">
        Tax Filings & Deductions
      </h1>
      <div className="Tax-fillings_main">
        <p className="Tax-fillings_paragraph">
          As America's leading provider of business formation services in all
          50 states, Ascend can help you incorporate or form a
          limited liability company in just 10 minutes, at a lower cost than
          using an attorney.
        </p>
        <h2 className="Tax-fillings_subheading">
          File Tax Forms for Your Business
        </h2>
        <p className="Tax-fillings_paragraph">
          C corporations, s corporations and limited liability companies (LLCs) complete tax filings with the Internal Revenue Service (IRS) based on their tax classifications. For example:
        </p>
        <ul className='list_tax_fillings'>
          <li><b>C Corporations</b>file IRS Form 1120 and pay taxes on any profits at a corporate income tax rate. Shareholders also pay taxes on dividends. Quarterly estimated tax payments are due in April, June, September, and January.</li>
          <li><b>C Corporations</b> file IRS Form 1120S. Shareholders report their share of corporate profit and loss on their personal 1040 income tax returns using Schedule E. Like a partnership or LLC, an s corporation must also file Schedule K-1.</li>
          <li><b>Single-Owner LLCs</b>  report all profit or loss in the LLC on the personal income tax return of the owner using Schedule C, similar to a sole proprietorship.</li>
          <li><b>Multi-Owner LLCs</b> taxed as partnerships file IRS Form 1065 with a Schedule K-1. Each LLC member reports their share of profit or loss in the company on Schedule E and submits it with their 1040 return.</li>
        </ul>
        <h2 className="Tax-fillings_subheading">
          Save on Taxes with Business Tax Deductions
        </h2>
        <p className="Tax-fillings_paragraph">
          Tax deductions may allow a small business owner to offset the expense of starting and running
        </p>
        <p className="Tax-fillings_paragraph">
          Log your business expenses regularly and save your receipts to help maintain an accurate accounting of your expenditures. You may need these records to help calculate deductions or to provide to the IRS during an audit.
        </p>
        <p className="Tax-fillings_paragraph">
          Many businesses take advantage of the following deductions:
        </p>
        <ul className='list_tax_fillings'>
          <li><b>Startup costs.</b>Companies may incur startup costs for research, advertising, licensing, and other items prior to opening for business. Rather than deducting these costs in the year in which they incur them, businesses can deduct startup expenses in equal amounts over their first five years in business.</li>
          <li><b>Operating expenses.</b> Day-to-day operating expenses include employee salaries, rent, travel, and more. Businesses can deduct operating expenses in the year in which they incur them. You should, however, familiarize yourself with IRS limits on the amounts you can deduct.</li>
          <li><b>Inventory costs.</b>  Inventory consists of items that you make or buy, then resell. These costs differ from startup expenses. Businesses can deduct inventory costs as they sell the inventory.</li>
          <li><b>Capital expenses. </b> Land, equipment, machinery, or buildings may qualify as capital expenses. These expenses include long-term investments, as opposed to simple operating costs. The appropriate timing for deductions on capital expenses depends upon several factors, including the size of the business.</li>
        </ul>
      </div>
    </div>
  )
}

export default Tax_filings
