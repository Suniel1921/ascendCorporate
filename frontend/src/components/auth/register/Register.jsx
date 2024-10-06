import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import OtpVerification from "../../otp/OtpVerification";
import "../register/register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from React Icons

const Register = () => {
  const navigate = useNavigate();
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Formik hook for form management
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/register`,
          values
        );
        if (response.data.success) {
          toast.success(response.data.message);
          setUserEmail(values.email);
          setIsOTPModalOpen(true);
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      }
    },
  });

  return (
    <div className="register-container">
      <div className="form-section">
        <h3 className="formHeading">Create Your Account</h3>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="errors">{formik.errors.name}</p>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="errors">{formik.errors.email}</p>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {formik.touched.password && formik.errors.password && (
                <span className="errors">{formik.errors.password}</span>
              )}
            </div>
          </div>
          <button type="submit" className="sign-in-button">
            Sign up
          </button>
        </form>
        <p className="sign-up-prompt">
          Already have an account?
          <Link className="link" to={"/login"}>
            Login Here
          </Link>
        </p>
      </div>
      {isOTPModalOpen && (
        <OtpVerification
          email={userEmail}
          onClose={() => setIsOTPModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Register;
