// import React from 'react';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import '../contact/userContactInfo.css';
// import Cart from '../cart/Cart';
// import CartCard from '../cart/CartCard';

// const UserContactInfo = () => {
//   const navigate = useNavigate();

//   // Formik for managing form state and validation
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       middleName: '',
//       lastName: '',
//       country: '',
//       street: '',
//       city: '',
//       state: '',
//       postalCode: '',
//       phoneNumber: '',
//       secondaryPhoneNumber: '',
//       email: '',
//       confirmEmail: '',
//       industry: ''
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string().required('First name is required'),
//       middleName: Yup.string().required('Middle name is required'),
//       lastName: Yup.string().required('Last name is required'),
//       country: Yup.string().required('Country is required'),
//       street: Yup.string().required('Street is required'),
//       city: Yup.string().required('City is required'),
//       state: Yup.string().required('State is required'),
//       postalCode: Yup.string()
//         .matches(/^\d+$/, 'Postal code must be a number')
//         .required('Postal code is required'),
//       phoneNumber: Yup.string()
//         .matches(/^\d+$/, 'Phone number must be a number')
//         .required('Phone number is required'),
//       secondaryPhoneNumber: Yup.string()
//         .matches(/^\d+$/, 'Secondary phone number must be a number')
//         .required('Secondary phone number is required'),
//       email: Yup.string().email('Invalid email address').required('Email is required'),
//       confirmEmail: Yup.string()
//         .oneOf([Yup.ref('email'), null], 'Emails must match')
//         .required('Confirm email is required'),
//       industry: Yup.string().required('Industry is required')
//     }),
//     // Form submission handling
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         // Sending form data to the API
//         const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/contacts`, values);
//         if (response.data.success) {
//           localStorage.setItem('contactFormData', JSON.stringify(values));
//           toast.success('Contact saved successfully');
//           resetForm(); // Reset form on successful submission
//           navigate('/company-info'); // Navigate to the next page
//         }
//       } catch (error) {
//         // Handle errors during the API request
//         toast.error(error.response?.data?.message || 'Error saving contact');
//         console.error('Error saving contact:', error);
//       }
//     }
//   });

//   return (
//     <div className="flexContainer">
//       <div className="userContactInfoContainer">
//         <div className="containerxxxxxxxxxxxxxx">
//           <form onSubmit={formik.handleSubmit} className="contactForm">
//             {/* Rendering form fields dynamically from an array */}
//             {['firstName', 'middleName', 'lastName', 'country', 'street', 'city', 'state', 'postalCode', 'phoneNumber', 'secondaryPhoneNumber', 'email', 'confirmEmail', 'industry'].map((field) => (
//               <div key={field}>
//                 <label htmlFor={field}>
//                   {/* Formatting field names for display */}
//                   {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//                 </label>
//                 <input
//                   type={
//                     field === 'email' || field === 'confirmEmail' 
//                       ? 'email' 
//                       : field === 'postalCode' || field === 'phoneNumber' || field === 'secondaryPhoneNumber'
//                       ? 'number' 
//                       : 'text' // Conditional input type for other fields
//                   }
//                   id={field}
//                   name={field}
//                   value={formik.values[field]}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   required
//                 />
//                 {/* Displaying validation error messages */}
//                 {formik.touched[field] && formik.errors[field] && (
//                   <div className="error">{formik.errors[field]}</div>
//                 )}
//               </div>
//             ))}
//             <button type="submit">Submit</button> {/* Submit button for the form */}
//           </form>
//         </div>
//       </div>
//       <div className="cartContainer">
//         <CartCard /> {/* Rendering the CartCard component */}
//       </div>
//     </div>
//   );
// };

// export default UserContactInfo;







import React, { useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../contact/userContactInfo.css';
import Cart from '../cart/Cart';
import CartCard from '../cart/CartCard';

const UserContactInfo = () => {
  const navigate = useNavigate();

  // Load saved form data from localStorage
  const loadSavedData = () => {
    const savedData = localStorage.getItem('contactFormData');
    return savedData ? JSON.parse(savedData) : {};
  };

  // Formik for managing form state and validation
  const formik = useFormik({
    initialValues: loadSavedData(),
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      middleName: Yup.string().required('Middle name is required'),
      lastName: Yup.string().required('Last name is required'),
      country: Yup.string().required('Country is required'),
      street: Yup.string().required('Street is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      postalCode: Yup.string()
        .matches(/^\d+$/, 'Postal code must be a number')
        .required('Postal code is required'),
      phoneNumber: Yup.string()
        .matches(/^(?:\+1[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Invalid US phone number')
        .required('Phone number is required'),
      secondaryPhoneNumber: Yup.string()
        .matches(/^(?:\+1[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Invalid US phone number'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Emails must match')
        .required('Confirm email is required'),
      industry: Yup.string().required('Industry is required')
    }),
    // Form submission handling
    onSubmit: async (values, { resetForm }) => {
      try {
        // Sending form data to the API
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/contacts`, values);
        if (response.data.success) {
          localStorage.setItem('contactFormData', JSON.stringify(values));
          toast.success('Contact saved successfully');
          resetForm(); // Reset form on successful submission
          navigate('/company-info'); // Navigate to the next page
        }
      } catch (error) {
        // Handle errors during the API request
        toast.error(error.response?.data?.message || 'Error saving contact');
        console.error('Error saving contact:', error);
      }
    }
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedData = loadSavedData();
    formik.setValues(savedData); // Set Formik values from localStorage
  }, []);

  return (
    <>
      <div className='container'>
        <div className="flexContainer ">
          <div className="userContactInfoContainer">
            <div className="containerxxxxxxx">
              <form onSubmit={formik.handleSubmit} className="contactForm">
                {/* Rendering form fields dynamically from an array */}
                {['firstName', 'middleName', 'lastName', 'country', 'street', 'city', 'state', 'postalCode', 'phoneNumber', 'secondaryPhoneNumber', 'email', 'confirmEmail', 'industry'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field}>
                      {/* Formatting field names for display */}
                      {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </label>
                    <input
                      type={
                        field === 'email' || field === 'confirmEmail' 
                          ? 'email' 
                          : field === 'postalCode' || field === 'phoneNumber' || field === 'secondaryPhoneNumber'
                          ? 'text' 
                          : 'text' // Conditional input type for other fields
                      }
                      id={field}
                      name={field}
                      value={formik.values[field]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {/* Displaying validation error messages */}
                    {formik.touched[field] && formik.errors[field] && (
                      <div className="error">{formik.errors[field]}</div>
                    )}
                  </div>
                ))}
               
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="cartContainer">
            <CartCard /> {/* Rendering the CartCard component */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserContactInfo;
