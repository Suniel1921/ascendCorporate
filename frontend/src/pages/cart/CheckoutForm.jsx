// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import '../cart/checkout.css'; // Ensure your CSS is properly set up

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// const CheckoutForm = ({ totalPrice }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [userData, setUserData] = useState(null);
//     const navigate = useNavigate();

//     // Fetch user data from localStorage on component mount
//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         const storedContactInfo = JSON.parse(localStorage.getItem('contactFormData')) || {};
//         setUserData({
//             cart: storedCart,
//             contactFormData: storedContactInfo,
//             companyInfo: JSON.parse(localStorage.getItem('companyInfo')) || {}, // Fetch company info if needed
//         });
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) return;

//         const cardNumberElement = elements.getElement(CardNumberElement);
//         const cardExpiryElement = elements.getElement(CardExpiryElement);
//         const cardCvcElement = elements.getElement(CardCvcElement);

//         try {
//             // Step 1: Create payment intent
//             const response = await axios.post(
//                 `${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/create-payment-intent`,
//                 { amount: totalPrice * 100 }, // Amount in cents
//                 { headers: { 'Content-Type': 'application/json' } }
//             );

//             const { clientSecret } = response.data;

//             // Step 2: Confirm the card payment
//             const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: cardNumberElement,
//                     billing_details: {
//                         // Optional: You can collect more billing details here
//                         name: userData.contactFormData.name || 'Cardholder Name',
//                     },
//                 },
//             });

//             // Step 3: Handle payment success
//             if (paymentResult.paymentIntent.status === 'succeeded') {
//                 // await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/createOrder`,
//                 await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/save-order-details`,
//                     {
//                         paymentIntentId: paymentResult.paymentIntent.id,
//                         cartData: userData.cart,
//                         contactInfo: userData.contactFormData,
//                         companyInfo: userData.companyInfo,
//                     },
//                     { headers: { 'Content-Type': 'application/json' } }
//                 );

//                 navigate('/client-dashboard');
//                 toast.success("Payment successful!");
//             } else {
//                 setError(paymentResult.error.message);
//             }
//         } catch (error) {
//             setError(error.response?.data?.error || error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <form className="payment-form" onSubmit={handleSubmit}>
//             <h4 className="form-title">Enter Your Payment Details</h4>
//             <div className="card-number-wrapper">
//                 <label htmlFor="cardNumber">Card Number</label>
//                 <CardNumberElement className="card-element" id="cardNumber" />
//             </div>
//             <div className="card-expiry-cvc-wrapper">
//                 <div className="card-expiry-wrapper">
//                     <label htmlFor="cardExpiry">Expiry Date</label>
//                     <CardExpiryElement className="card-element" id="cardExpiry" />
//                 </div>
//                 <div className="card-cvc-wrapper">
//                     <label htmlFor="cardCvc">CVV</label>
//                     <CardCvcElement className="card-element" id="cardCvc" />
//                 </div>
//             </div>
//             <button className="submit-button" type="submit" disabled={!stripe || loading}>
//     {loading ? 'Processing...' : `Pay $${totalPrice ? totalPrice.toFixed(2) : '0.00'}`}
// </button>

//             {error && <div className="error-message">{error}</div>}
//         </form>
//     );
// };

// export default CheckoutForm;












import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../cart/checkout.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    // Fetch user data from localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const storedContactInfo = JSON.parse(localStorage.getItem('contactFormData')) || {};
        const companyInfo = JSON.parse(localStorage.getItem('companyInfo')) || {}; // Fetch company info if needed

        setUserData({
            cart: storedCart,
            contactFormData: storedContactInfo,
            companyInfo,
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) return;

        const cardNumberElement = elements.getElement(CardNumberElement);
        const cardExpiryElement = elements.getElement(CardExpiryElement);
        const cardCvcElement = elements.getElement(CardCvcElement);

        try {
            // Step 1: Create payment intent
            const response = await axios.post(
                `${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/create-payment-intent`,
                { amount: totalPrice * 100 },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const { clientSecret } = response.data;

            // Step 2: Confirm the card payment
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardNumberElement,
                    billing_details: {
                        name: userData.contactFormData.name || 'Cardholder Name',
                    },
                },
            });

            // Step 3: Handle payment success
            if (paymentResult.paymentIntent.status === 'succeeded') {
                // await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/createOrder`, {
                await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/save-order-details`, {
                    paymentIntentId: paymentResult.paymentIntent.id,
                    cartData: userData.cart,
                    contactInfo: userData.contactFormData,
                    companyInfo: userData.companyInfo,
                }, { headers: { 'Content-Type': 'application/json' } });

                toast.success("Payment successful!");
                navigate('/client-dashboard');
            } else {
                setError(paymentResult.error.message);
            }
        } catch (error) {
            setError(error.response?.data?.error || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="payment-form" onSubmit={handleSubmit}>
            <h4 className="form-title">Enter Your Payment Details</h4>
            <div className="card-number-wrapper">
                <label htmlFor="cardNumber">Card Number</label>
                <CardNumberElement className="card-element" id="cardNumber" />
            </div>
            <div className="card-expiry-cvc-wrapper">
                <div className="card-expiry-wrapper">
                    <label htmlFor="cardExpiry">Expiry Date</label>
                    <CardExpiryElement className="card-element" id="cardExpiry" />
                </div>
                <div className="card-cvc-wrapper">
                    <label htmlFor="cardCvc">CVV</label>
                    <CardCvcElement className="card-element" id="cardCvc" />
                </div>
            </div>
            <button className="submit-button" type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
            </button>
            {error && <div className="error-message">{error}</div>}
        </form>
    );
};

export default CheckoutForm;
