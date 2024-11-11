
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../cart/checkout.css';
import { useCartGlobally } from "../../contexts/cartContext"; // Importing the context

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const API_URL = import.meta.env.VITE_REACT_APP_URL;

const CheckoutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { clearCart } = useCartGlobally(); // Accessing the clearCart function from context
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    // Fetch user data from localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const storedContactInfo = JSON.parse(localStorage.getItem('contactFormData')) || {};
        const companyInfo = JSON.parse(localStorage.getItem('companyInfo')) || {};

        setUserData({
            cart: storedCart,
            contactFormData: storedContactInfo,
            companyInfo,
        });
    }, []);

    const createPaymentIntent = async () => {
        const response = await axios.post(
            `${API_URL}/api/v1/order/create-payment-intent`,
            { amount: totalPrice * 100 },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return response.data.clientSecret;
    };

    const confirmPayment = async (clientSecret) => {
        const cardNumberElement = elements.getElement(CardNumberElement);
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardNumberElement,
                billing_details: {
                    name: userData.contactFormData.name || 'Cardholder Name',
                },
            },
        });
        return paymentResult;
    };

    const saveOrderDetails = async (paymentIntentId) => {
        await axios.post(`${API_URL}/api/v1/order/save-order-details`, {
            paymentIntentId,
            cartData: userData.cart,
            contactInfo: userData.contactFormData,
            companyInfo: userData.companyInfo,
            totalPrice,
        }, { headers: { 'Content-Type': 'application/json' } });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) return;

        try {
            const clientSecret = await createPaymentIntent();
            const paymentResult = await confirmPayment(clientSecret);

            if (paymentResult.paymentIntent.status === 'succeeded') {
                await saveOrderDetails(paymentResult.paymentIntent.id);

                // Clear the cart from both localStorage and global state
                clearCart(); // Clear the cart globally using context
                toast.success("Payment successful!");
                navigate('/client-dashboard');
            } else {
                throw new Error(paymentResult.error.message);
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
