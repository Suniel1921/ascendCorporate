// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import '../register/register.css';
// import { useAuthGlobally } from "../../../contexts/AuthContext";





// const Login = () => {
//     const navigate = useNavigate();
//     const [auth, setAuth] = useAuthGlobally();
  

//     // Validation schema using yup
//     const validationSchema = Yup.object({
//         email: Yup.string().email("Invalid Email").required("Email is required"),
//         password: Yup.string().required("Password is required")
//     });

//     // Formik hook for form management
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//         },
//         validationSchema: validationSchema,
//         onSubmit: async (values) => {
//             try {
//                 const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/login`, values);
//                 if (response.data.success) {
//                     toast.success(response.data.message);
//                     setAuth({
//                         ...auth,
//                         user: response.data.user,
//                         token: response.data.token
//                     });
//                     localStorage.setItem('token', JSON.stringify(response.data));
//                     axios.defaults.headers.common['Authorization'] = response.data.token;
//                     navigate('/');
//                 } else {
//                     toast.error(response.data.message);
//                 }
//             } catch (error) {
//                 if (error.response) {
//                     toast.error(error.response.data.message);
//                 }
//             }
//         }
//     });

//     return (
//         <div className="register-container">
//             <div className="form-section">
//                 <h3 className="formHeading">Login Your Account</h3>
//                 <form className="form" onSubmit={formik.handleSubmit}>
//                     <div className="input-group">
//                         <label htmlFor="email">Email</label>
//                         <input 
//                             type="email" 
//                             name="email" 
//                             placeholder="Email" 
//                             onChange={formik.handleChange} 
//                             value={formik.values.email} 
//                             onBlur={formik.handleBlur} 
//                         />
//                         {formik.touched.email && formik.errors.email && <p className="errors">{formik.errors.email}</p>}
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <div className="password-wrapper">
//                             <input 
//                                 type="password" 
//                                 name="password" 
//                                 placeholder="Password" 
//                                 onChange={formik.handleChange} 
//                                 value={formik.values.password} 
//                                 onBlur={formik.handleBlur} 
//                             />
//                             {formik.touched.password && formik.errors.password && <p className="errors">{formik.errors.password}</p>}
//                         </div>
//                     </div>
//                     <div className="form-options">
//                         <div className="rememberMe">
//                             <input type="checkbox" id="remember-me" />
//                             <label htmlFor="remember-me">Remember me</label>
//                         </div>
//                         <a href="#" className="forgot-password">Forgot Password?</a>
//                     </div>
//                     <button type="submit" className="sign-in-button">Sign in</button>
//                 </form>
//                 <button className="sign-in-other">Sign in with Google</button>
//                 <p className="sign-up-prompt">Don't have an account? <Link className="link" to={'/register'}>Create Here</Link></p>
//             </div>
//         </div>
//     );
// };

// export default Login;







import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import axios from 'axios';
import '../register/register.css';
import { useAuthGlobally } from "../../../contexts/AuthContext";
import ForgotPasswordModal from "../forgotPassword/ForgotPasswordModal ";


const Login = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuthGlobally();
    const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

    // Validation schema using yup
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email").required("Email is required"),
        password: Yup.string().required("Password is required")
    });

    // Formik hook for form management
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/login`, values);
                if (response.data.success) {
                    toast.success(response.data.message);
                    setAuth({
                        ...auth,
                        user: response.data.user,
                        token: response.data.token
                    });
                    localStorage.setItem('token', JSON.stringify(response.data));
                    axios.defaults.headers.common['Authorization'] = response.data.token;
                    navigate('/');
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                }
            }
        }
    });

    return (
        <div className="register-container">
            <div className="form-section">
                <h3 className="formHeading">Login Your Account</h3>
                <form className="form" onSubmit={formik.handleSubmit}>
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
                        {formik.touched.email && formik.errors.email && <p className="errors">{formik.errors.email}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-wrapper">
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                onChange={formik.handleChange} 
                                value={formik.values.password} 
                                onBlur={formik.handleBlur} 
                            />
                            {formik.touched.password && formik.errors.password && <p className="errors">{formik.errors.password}</p>}
                        </div>
                    </div>
                    <div className="form-options">
                        {/* <div className="rememberMe">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div> */}
                        <a onClick={() => setModalVisible(true)} className="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" className="sign-in-button">Log in</button>
                </form>
                {/* <button className="sign-in-other">Sign in with Google</button> */}
                <p className="sign-up-prompt">Don't have an account? <Link className="link" to={'/register'}>Create Here</Link></p>
            </div>
            <ForgotPasswordModal visible={modalVisible} onClose={() => setModalVisible(false)} /> {/* Add the modal */}
        </div>
    );
};

export default Login;

