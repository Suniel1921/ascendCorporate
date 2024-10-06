import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import '../downloadGuide/downloadguideinfo.css';
import {useNavigate } from 'react-router-dom';

const DownloadGuideInfo = () => {
    const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      primaryNumber: '',
      secondaryNumber: '',
      email: '',
      marketingOption: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Complete this field.'),
      lastName: Yup.string()
        .min(2, 'Please enter at least two characters')
        .required('Complete this field.'),
      primaryNumber: Yup.string().required('Complete this field.'),
      secondaryNumber: Yup.string(),
      email: Yup.string().email('Invalid email address').required('Complete this field.'),
      marketingOption: Yup.string().required('Select a marketing option'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/guide/guide-info`,
          values,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data.success) {
          toast.success('Form submitted successfully!');
          navigate('/thank-you-guide')
          resetForm(); // Reset form fields after successful submission
        } else {
          toast.error('Failed to submit the form.');
        }
      } catch (error) {
        toast.error('An error occurred while submitting the form.');
      }
    },
  });

  return (
    <div className="downloadGuideInfoContainer">
      <Toaster />
      <h2>Download a free guide</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Form fields with validation */}
        <div className="formGroup">
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className={formik.touched.firstName && formik.errors.firstName ? 'input-error' : ''}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="formGroup">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className={formik.touched.lastName && formik.errors.lastName ? 'input-error' : ''}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="formGroup">
          <input
            id="primaryNumber"
            name="primaryNumber"
            type="text"
            placeholder="Primary Number : ###-###-####"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.primaryNumber}
            className={formik.touched.primaryNumber && formik.errors.primaryNumber ? 'input-error' : ''}
          />
          {formik.touched.primaryNumber && formik.errors.primaryNumber ? (
            <div className="error">{formik.errors.primaryNumber}</div>
          ) : null}
        </div>

        <div className="formGroup">
          <input
            id="secondaryNumber"
            name="secondaryNumber"
            type="text"
            placeholder="Secondary Number : ###-###-####"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.secondaryNumber}
            className={formik.touched.secondaryNumber && formik.errors.secondaryNumber ? 'input-error' : ''}
          />
          {formik.touched.secondaryNumber && formik.errors.secondaryNumber ? (
            <div className="error">{formik.errors.secondaryNumber}</div>
          ) : null}
        </div>

        <div className="formGroup">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="formGroup">
          <select
            id="marketingOption"
            name="marketingOption"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.marketingOption}
            className={formik.touched.marketingOption && formik.errors.marketingOption ? 'input-error' : ''}
          >
            <option value="" label="Select marketing option" />
            <option value="Marketing (Multi-Level)" label="Marketing (Multi-Level)" />
            <option value="Marketing (Digital)" label="Marketing (Digital)" />
          </select>
          {formik.touched.marketingOption && formik.errors.marketingOption ? (
            <div className="error">{formik.errors.marketingOption}</div>
          ) : null}
        </div>

        <button type="submit" className="submitButton">
          grab your free guide
        </button>
      </form>
    </div>
  );
};

export default DownloadGuideInfo;
