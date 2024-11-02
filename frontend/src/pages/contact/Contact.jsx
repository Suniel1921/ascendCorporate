// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import '../contact/contact.css';
// import { useNavigate } from 'react-router-dom';

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   subject: Yup.string().required('Subject is required'),
//   firstName: Yup.string().required('First name is required'),
//   lastName: Yup.string().required('Last name is required'),
//   primaryPhone: Yup.string()
//     .matches(/^\+1\d{10}$/, 'Phone number must be in US format (+1XXXXXXXXXX)')
//     .required('Primary phone is required'),
//   secondaryPhone: Yup.string()
//     .matches(/^\+1\d{10}$/, 'Phone number must be in US format (+1XXXXXXXXXX)'),
//   contactEmail: Yup.string().email('Invalid email format').required('Contact email is required'),
//   confirmEmail: Yup.string()
//     .oneOf([Yup.ref('contactEmail'), null], 'Emails must match')
//     .required('Confirm email is required'),
//   industry: Yup.string().required('Industry is required'),
//   orderNumber: Yup.string(),
//   invoiceNumber: Yup.string(),
//   message: Yup.string().max(1000, 'Message must be 1000 characters or less').required('Message is required'),
// });

// const Contact = () => {
//     const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       subject: '',
//       firstName: '',
//       lastName: '',
//       primaryPhone: '',
//       secondaryPhone: '',
//       contactEmail: '',
//       confirmEmail: '',
//       industry: '',
//       orderNumber: '',
//       invoiceNumber: '',
//       message: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/newOrder`, values, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         formik.resetForm();
//         formik.setStatus({ success: response.data.message });
//         navigate("/thank-you-guide");
//       } catch (error) {
//         console.error('Error submitting form:', error);
//         formik.setStatus({ error: error.response?.data?.message || 'There was a problem submitting your message. Please try again later.' });
//       }
//     },
//   });

//   return (
//     <div className="container">
//       <div className="ContainerForm">
//         <h2 className="contactHeader">Contact Us</h2>
//         <p>
//           We're sorry to have missed you! Live Chat Support is not available at this time. Please fill out this form below and one of our specialists will respond to your request shortly. You can expect a response within 1 business day. If you need immediate assistance or wish to change a recently submitted order, please call us.
//         </p>
//         <form onSubmit={formik.handleSubmit}>
//           <fieldset>
//             <h2 className="formHeader">We Look Forward To Hearing From You</h2>

//             <div className="formrow">
//               <div className="formcol">
//                 <label>Subject of My Message</label>
//                 <select
//                   name="subject"
//                   value={formik.values.subject}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   required
//                 >
//                   <option value="">Please select one</option>
//                   <option value="Choosing_a_Business_Structure">Choosing a Business Structure</option>
//                   <option value="Incorporation_or_LLC_Formation">Incorporation or LLC Formation</option>
//                   <option value="Billing_or_Invoice_Payments">Billing or Invoice Payments</option>
//                   <option value="Closing_a_Business">Closing a Business</option>
//                   <option value="Doing_Business_in_Another_State">Doing Business in Another State</option>
//                   <option value="Employer_ID_Numbers_(EIN)">Employer ID Numbers (EIN)</option>
//                   <option value="Order_Status">Order Status</option>
//                   <option value="Change_Company_Information_with_the_State">Change Company Information with the State</option>
//                   <option value="Update_Contact_Information_with_ascendAscend">Update Contact Information with ascendAscend</option>
//                   <option value="Business_Licenses_and_Permits">Business Licenses and Permits</option>
//                   <option value="DBA_Registration">DBA Registration</option>
//                   <option value="Other/None_of_the_Above">Other / None of the Above</option>
//                 </select>
//                 {formik.touched.subject && formik.errors.subject && (
//                   <div className="error-message">{formik.errors.subject}</div>
//                 )}
//               </div>
//             </div>

//             <div className="formrow">
//               <div className="formcol">
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formik.values.firstName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   required
//                 />
//                 {formik.touched.firstName && formik.errors.firstName && (
//                   <div className="error-message">{formik.errors.firstName}</div>
//                 )}
//               </div>
//               <div className="formcol">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formik.values.lastName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   required
//                 />
//                 {formik.touched.lastName && formik.errors.lastName && (
//                   <div className="error-message">{formik.errors.lastName}</div>
//                 )}
//               </div>
//             </div>

//             <div className="formrow">
//               <div className="formcol">
//                 <label htmlFor="primaryPhone">Primary Phone</label>
//                 <input
//                   type="tel"
//                   id="primaryPhone"
//                   name="primaryPhone"
//                   value={formik.values.primaryPhone}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   required
//                 />
//                 {formik.touched.primaryPhone && formik.errors.primaryPhone && (
//                   <div className="error-message">{formik.errors.primaryPhone}</div>
//                 )}
//               </div>
//               <div className="formcol">
//                 <label htmlFor="secondaryPhone">Secondary Phone</label>
//                 <input
//                   type="tel"
//                   id="secondaryPhone"
//                   name="secondaryPhone"
//                   value={formik.values.secondaryPhone}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.secondaryPhone && formik.errors.secondaryPhone && (
//                   <div className="error-message">{formik.errors.secondaryPhone}</div>
//                 )}
//               </div>
//             </div>

//             <div className="formrow">
//               <div className="formcol">
//                 <label htmlFor="contactEmail">Contact Email</label>
//                 <input
//                   type="email"
//                   id="contactEmail"
//                   name="contactEmail"
//                   value={formik.values.contactEmail}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   required
//                 />
//                 {formik.touched.contactEmail && formik.errors.contactEmail && (
//                   <div className="error-message">{formik.errors.contactEmail}</div>
//                 )}
//               </div>
//               <div className="formcol">
//                 <label htmlFor="confirmEmail">Confirm Email</label>
//                 <input
//                   type="email"
//                   id="confirmEmail"
//                   name="confirmEmail"
//                   value={formik.values.confirmEmail}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   required
//                 />
//                 {formik.touched.confirmEmail && formik.errors.confirmEmail && (
//                   <div className="error-message">{formik.errors.confirmEmail}</div>
//                 )}
//               </div>
//             </div>

//             <div className="formrow">
//               <div className="formcol">
//                 <label>Industry</label>
//                 <select
//                   name="industry"
//                   value={formik.values.industry}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   required
//                 >
//                   <option value="">Please select one</option>
//                   <option value="subject1">Subject 1</option>
//                   <option value="subject2">Subject 2</option>
//                 </select>
//                 {formik.touched.industry && formik.errors.industry && (
//                   <div className="error-message">{formik.errors.industry}</div>
//                 )}
//               </div>
//             </div>

//             <div className="formrow">
//               <div className="formcol">
//                 <label htmlFor="orderNumber">Order Number</label>
//                 <input
//                   type="text"
//                   id="orderNumber"
//                   name="orderNumber"
//                   value={formik.values.orderNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   placeholder="Example 000000"
//                 />
//               </div>
//               <div className="formcol">
//                 <label htmlFor="invoiceNumber">Invoice Number</label>
//                 <input
//                   type="text"
//                   id="invoiceNumber"
//                   name="invoiceNumber"
//                   value={formik.values.invoiceNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   placeholder="Example: 7000000"
//                 />
//               </div>
//             </div>

//             <div className="formrow message">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formik.values.message}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 maxLength="1000"
//                 required
//               />
//               {formik.touched.message && formik.errors.message && (
//                 <div className="error-message">{formik.errors.message}</div>
//               )}
//             </div>

//             <div className="button-row">
//               <button type="submit" className="submit-button">Submit</button>
//             </div>
//           </fieldset>
//         </form>
//         {formik.status?.error && <p className="error-message">{formik.status.error}</p>}
//         {formik.status?.success && <p className="success-message">{formik.status.success}</p>}
//       </div>
//     </div>
//   );
// };

// export default Contact;













//new code testing


import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../contact/contact.css";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "antd";

// Validation schema using Yup
const validationSchema = Yup.object({
  subject: Yup.string().required("Subject is required"), 
  firstName: Yup.string().required("First name is required"), 
  lastName: Yup.string().required("Last name is required"), 
  primaryPhone: Yup.string()
    .matches(/^\+1\d{10}$/, "Phone number must be in US format (+1XXXXXXXXXX)")
    .required("Primary phone is required"), 
  secondaryPhone: Yup.string().nullable().notRequired(), // Optional
  contactEmail: Yup.string()
    .email("Invalid email format")
    .required("Contact email is required"), 
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("contactEmail"), null], "Emails must match")
    .required("Confirm email is required"), 
  industry: Yup.string().nullable().notRequired(), // Optional
  orderNumber: Yup.string().nullable().notRequired(), // Optional
  invoiceNumber: Yup.string().nullable().notRequired(), // Optional
  message: Yup.string()
    .max(1000, "Message must be 1000 characters or less")
    .required("Message is required"), 
  captcha: Yup.number()
    .required("Please complete the CAPTCHA")
    .oneOf([Yup.ref("captchaValue"), null], "CAPTCHA is incorrect"),
});


const Contact = () => {
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());

  // Function to generate a random number for CAPTCHA
  function generateCaptcha() {
    return Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
  }

  const formik = useFormik({
    initialValues: {
      subject: "",
      firstName: "",
      lastName: "",
      primaryPhone: "",
      secondaryPhone: "",
      contactEmail: "",
      confirmEmail: "",
      industry: "", // Optional
      orderNumber: "", // Optional
      invoiceNumber: "", // Optional
      message: "",
      captcha: "",
      captchaValue: captchaValue, // Add the generated captcha value here
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Submitting form with values: ", values); // Log form data
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/contacts`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        formik.resetForm();
        navigate('/')
        formik.setStatus({ success: response.data.message });
        setCaptchaValue(generateCaptcha()); // Regenerate CAPTCHA on successful submission
      } catch (error) {
        console.error("Error submitting form:", error);
        formik.setStatus({
          error:
            error.response?.data?.message ||
            "There was a problem submitting your message. Please try again later.",
        });
      }
    },
    
  });

  return (
    <div className="container">
      <div className="ContainerForm">
        <h2 className="contactHeader">Contact Us</h2>
        <p>
          We're sorry to have missed you! Live Chat Support is not available at
          this time. Please fill out this form below and one of our specialists
          will respond to your request shortly. You can expect a response within
          1 business day. If you need immediate assistance or wish to change a
          recently submitted order, please call us.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <h2 className="formHeader">We Look Forward To Hearing From You</h2>

            <div className="formrow">
              <div className="formrow">
                <div className="formcol">
                  <label>Subject of My Message</label>
                  <select
                    name="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  >
                    <option value="">Please select one</option>
                    <option value="Choosing_a_Business_Structure">
                      Choosing a Business Structure
                    </option>
                    <option value="Incorporation_or_LLC_Formation">
                      Incorporation or LLC Formation
                    </option>
                    <option value="Billing_or_Invoice_Payments">
                      Billing or Invoice Payments
                    </option>
                    <option value="Closing_a_Business">
                      Closing a Business
                    </option>
                    <option value="Doing_Business_in_Another_State">
                      Doing Business in Another State
                    </option>
                    <option value="Employer_ID_Numbers_(EIN)">
                      Employer ID Numbers (EIN)
                    </option>
                    <option value="Order_Status">Order Status</option>
                    <option value="Change_Company_Information_with_the_State">
                      Change Company Information with the State
                    </option>
                    <option value="Update_Contact_Information_with_ascendAscend">
                      Update Contact Information with ascendAscend
                    </option>
                    <option value="Business_Licenses_and_Permits">
                      Business Licenses and Permits
                    </option>
                    <option value="DBA_Registration">DBA Registration</option>
                    <option value="Other/None_of_the_Above">
                      Other / None of the Above
                    </option>
                  </select>
                  {formik.touched.subject && formik.errors.subject && (
                    <div className="error-message">{formik.errors.subject}</div>
                  )}
                </div>
              </div>

              <div className="formcol">
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="error-message">{formik.errors.firstName}</div>
                )}
              </div>

              <div className="formcol">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="error-message">{formik.errors.lastName}</div>
                )}
              </div>
            </div>

            <div className="formrow">
              <div className="formcol">
                <label htmlFor="primaryPhone">Primary Phone</label>
                <Input
                  type="text"
                  id="primaryPhone"
                  name="primaryPhone"
                  value={formik.values.primaryPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.primaryPhone && formik.errors.primaryPhone && (
                  <div className="error-message">
                    {formik.errors.primaryPhone}
                  </div>
                )}
              </div>

              <div className="formcol">
                <label htmlFor="secondaryPhone">Secondary Phone</label>
                <Input
                  type="text"
                  id="secondaryPhone"
                  name="secondaryPhone"
                  value={formik.values.secondaryPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.secondaryPhone &&
                  formik.errors.secondaryPhone && (
                    <div className="error-message">
                      {formik.errors.secondaryPhone}
                    </div>
                  )}
              </div>
            </div>

            <div className="formrow">
              <div className="formcol">
                <label htmlFor="contactEmail">Contact Email</label>
                <Input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formik.values.contactEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.contactEmail && formik.errors.contactEmail && (
                  <div className="error-message">
                    {formik.errors.contactEmail}
                  </div>
                )}
              </div>

              <div className="formcol">
                <label htmlFor="confirmEmail">Confirm Email</label>
                <Input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  value={formik.values.confirmEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.confirmEmail && formik.errors.confirmEmail && (
                  <div className="error-message">
                    {formik.errors.confirmEmail}
                  </div>
                )}
              </div>
            </div>

            <div className="formrow">
              <div className="formcol">
                <label htmlFor="industry">Industry</label>
                <Input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formik.values.industry}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.industry && formik.errors.industry && (
                  <div className="error-message">{formik.errors.industry}</div>
                )}
              </div>

              <div className="formcol">
                <label htmlFor="orderNumber">Order Number</label>
                <Input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  value={formik.values.orderNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <div className="formrow">
              <div className="formcol">
                <label htmlFor="invoiceNumber">Invoice Number</label>
                <Input
                  type="text"
                  id="invoiceNumber"
                  name="invoiceNumber"
                  value={formik.values.invoiceNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <div className="formrow">
              <div className="formcol">
                <label htmlFor="message">Message</label>
                <Input.TextArea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows={4}
                  required
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="error-message">{formik.errors.message}</div>
                )}
              </div>
            </div>

            <div className="captcha-formrow">
  <div className="captcha-container-custom">
    <label htmlFor="captcha">CAPTCHA:</label>
    <div className="captcha-box-custom">
      <div className="captcha-image-custom">
        <span>{captchaValue}</span> {/* Display CAPTCHA Value */}
      </div>
      <button type="button" className="captcha-refresh-custom">
        &#x21bb; {/* Refresh Icon */}
      </button>
    </div>
    <Input
      type="text"
      id="captcha"
      name="captcha"
      className="captcha-input-custom"
      value={formik.values.captcha}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      required
    />
    {formik.touched.captcha && formik.errors.captcha && (
      <div className="captcha-error-message">{formik.errors.captcha}</div>
    )}
  </div>
</div>


            <div className="formrow">
              <Button
                type="primary"
                htmlType="submit"
                disabled={formik.isSubmitting}
              >
                Submit
              </Button>
            </div>

            {formik.status && formik.status.success && (
              <div className="success-message">{formik.status.success}</div>
            )}
            {formik.status && formik.status.error && (
              <div className="error-message">{formik.status.error}</div>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
