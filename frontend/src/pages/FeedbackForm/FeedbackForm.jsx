import React from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  return (
    <section>
      <div className="container">
        <h2 className='h2_div'> Contact Us</h2>
        

        <div className="container_div">
          <div className="mapSection">
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2938.5599432215563!2d-83.10425182388012!3d42.56463617117459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDMzJzUyLjciTiA4M8KwMDYnMDYuMCJX!5e0!3m2!1sen!2snp!4v1725068281328!5m2!1sen!2snp" 
 className="iframe"
 allowFullScreen=""
  loading="lazy">
</iframe>



            <div className="addressSection">
              <div className="addressText">
                <h2 className="title_contact">ADDRESS</h2>
                <p>2337 Cedar Knoll Dr, Troy, MI 48083, USA</p>
              </div>
              <div className="addressText">
                <h2 className="title_contact">EMAIL</h2>
                <a className="emailSection" href="mailto:info@ascendcorprate.com">info@ascendcorprate.com</a>
                <h2 className="title_contact">PHONE</h2>
                <p className="emailSection">+1(313) 355-3295</p>
              </div>
            </div>
          </div>
          <div className="feedbackForm">
            <h2 className="feedbackTitle">Have Any Questions?</h2>
            <div className="formField">
              <label htmlFor="name" className="label">Name</label>
              <input type="text" id="name" name="name" className="input" />
            </div>
            <div className="formField">
              <label htmlFor="email" className="label">Email</label>
              <input type="email" id="email" name="email" className="input" />
            </div>
            <div className="formField">
              <label htmlFor="message" className="label">Message</label>
              <textarea id="message" name="message" className="textarea"></textarea>
            </div>
            <button className="button_send">Send</button>
            {/* <p className="footerText">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
