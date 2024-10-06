

// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import '../cart/checkout.css';
// import CartCard from '../cart/CartCard';
// import { useCartGlobally } from '../../contexts/cartContext';
// import { useAuthGlobally } from '../../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// const CheckoutForm = ({ totalPrice }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [userData, setUserData] = useState(null);
//     const [auth] = useAuthGlobally();

//     const navigate = useNavigate();

//     // Fetch user data from localStorage on component mount
//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart'));
//         const storedContactInfo = JSON.parse(localStorage.getItem('contactFormData'));

//         setUserData({
//             cart: storedCart || [],
//             contactFormData: storedContactInfo || {},
//         });
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             return;
//         }

//         const cardNumberElement = elements.getElement(CardNumberElement);
//         const cardExpiryElement = elements.getElement(CardExpiryElement);
//         const cardCvcElement = elements.getElement(CardCvcElement);

//         try {
//             // Step 1: Create payment intent
//             const response = await axios.post(
//                 `${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/create-payment-intent`,
//                 { amount: totalPrice * 100 }, // Stripe expects the amount in cents
//                 { headers: { 'Content-Type': 'application/json' } }
//             );

//             const { clientSecret } = response.data;

//             // Step 2: Confirm the card payment
//             const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: cardNumberElement,
//                     billing_details: {
//                         // Add billing details if necessary
//                     },
//                 },
//             });

//             // Step 3: If payment is successful, send data to backend
//             if (paymentResult.paymentIntent.status === 'succeeded') {
//                 if(!auth.user){
//                     navigate('/login');
//                 }else{
//                     // Send the cart, contact, and company info to backend
//                 await axios.post(
//                     `${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/save-order-details`,
//                     {
//                         paymentIntentId: paymentResult.paymentIntent.id,
//                         cartData: userData.cart,
//                         contactInfo: userData.contactFormData,
//                         companyInfo: userData.companyInfo,
//                         // user: auth.user._id,
                      
//                     },
//                     { headers: { 'Content-Type': 'application/json' } }
//                 );
//                 navigate ('/client-dashboard');
//                 toast.success("payment success...")
                

//                 }
                
//                 setSuccess(true);
//                 setError(null);
//             } else {
//                 setError(paymentResult.error.message);
//                 setSuccess(false);
//             }
//         } catch (error) {
//             setError(error.response ? error.response.data.error : error.message);
//         }

//         setLoading(false);
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
//                 {loading ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
//             </button>
//             {error && <div className="error-message">{error}</div>}
//             {success && <div className="success-message">Payment succeeded!</div>}
//         </form>
//     );
// };




// const Checkout = () => {
//     const { cart } = useCartGlobally();
//     const [auth] = useAuthGlobally();

//     // Calculate the subtotal
//     const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
//     const shippingFee = 0;
//     const stateExpediteFee = 0;
//     const stateFee = 0;
//     const creditCardSurcharge = 0;

//     // Calculate the total
//     const totalPrice = subtotal + shippingFee + stateExpediteFee + stateFee + creditCardSurcharge;

//     return (
//         <div className="checkout-container">
//             <div className="container">
//                 <h3 className="checkout-title">Checkout Page</h3>
//                 {
//                     auth.user ? (
//                         <Elements stripe={stripePromise}>
//                     <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
//                         {/* Pass totalPrice to CheckoutForm */}
//                         <CheckoutForm totalPrice={totalPrice} />
//                         <CartCard hideContinueButton={true} />
//                     </div>
//                 </Elements>

//                     ) : (
//                         <><h3>login please</h3></>
//                     )
//                 }
                
//             </div>
//         </div>
//     );
// };

// export default Checkout;





// important note: here seperate this above two component (pahile checkout ra chekcout form eutai component ma thiyo aba xaina)
 


// new code tesing


import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartCard from '../cart/CartCard';
import { useCartGlobally } from '../../contexts/cartContext';
import { useAuthGlobally } from '../../contexts/AuthContext';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Checkout = () => {
    const { cart } = useCartGlobally();
    const [auth] = useAuthGlobally();
    const [totalAmount, setTotalAmount] = useState(0);

    const handleTotalChange = (total) => {
        setTotalAmount(total); // Update total amount when it changes
    };

    return (
        <div className="checkout-container">
            <div className="container">
                <h3 className="checkout-title">Checkout Page</h3>
                {auth.user ? (
                    <Elements stripe={stripePromise}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
                            <CheckoutForm totalPrice={totalAmount} />
                            <CartCard hideContinueButton={true} onTotalChange={handleTotalChange} />
                        </div>
                    </Elements>
                ) : (
                    <h3>Please login to proceed</h3>
                )}
            </div>
        </div>
    );
};

export default Checkout;
