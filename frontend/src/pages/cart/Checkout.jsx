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
