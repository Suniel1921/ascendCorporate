import React, { useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../contact/userContactInfo.css';
import CartCard from '../cart/CartCard';

const UserContactInfo = () => {
  const navigate = useNavigate();
d 
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
        .matches(/^\d+$/, 'Phone number must be numeric')
        .required('Phone number is required'),
      secondaryPhoneNumber: Yup.string().matches(/^\d+$/, 'Secondary phone number must be numeric'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Emails must match')
        .required('Confirm email is required'),
      // industry: Yup.string().required('Industry is required') // Commented out as requested
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/contacts`, values);
        if (response.data.success) {
          localStorage.setItem('contactFormData', JSON.stringify(values));
          toast.success('Contact saved successfully');
          resetForm();
          navigate('/company-info');
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'Error saving contact');
        console.error('Error saving contact:', error);
      }
    }
  });

  useEffect(() => {
    const savedData = loadSavedData();
    formik.setValues(savedData);
  }, []);

  return (
    <div className='container'>
      <div className="flexContainer">
        <div className="userContactInfoContainer">
          <form onSubmit={formik.handleSubmit} className="contactForm">
            {/* Dynamically rendering form fields */}
            {[
              { name: 'firstName', label: 'First Name', type: 'text' },
              { name: 'middleName', label: 'Middle Name', type: 'text' },
              { name: 'lastName', label: 'Last Name', type: 'text' },
              { name: 'country', label: 'Country', type: 'text' },
              { name: 'street', label: 'Street', type: 'text' },
              { name: 'city', label: 'City', type: 'text' },
              { name: 'state', label: 'State', type: 'text' },
              { name: 'postalCode', label: 'Postal Code', type: 'number' }, // Accepting only numeric values
              { name: 'phoneNumber', label: 'Phone Number', type: 'number' }, // Accepting only numeric values
              { name: 'secondaryPhoneNumber', label: 'Secondary Phone Number', type: 'number' }, // Optional
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'confirmEmail', label: 'Confirm Email', type: 'email' }
            ].map(({ name, label, type }) => (
              <div key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formik.values[name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required={name !== 'secondaryPhoneNumber'} // Make secondaryPhoneNumber optional
                />
                {formik.touched[name] && formik.errors[name] && (
                  <div className="error">{formik.errors[name]}</div>
                )}
              </div>
            ))}

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="cartContainer">
          <CartCard />
        </div>
      </div>
    </div>
  );
};

export default UserContactInfo;
