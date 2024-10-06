import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spin } from 'antd'; 
import 'antd/dist/reset.css'; 
import "./Pricing_main.css";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCartGlobally } from '../../contexts/cartContext';

const Pricing_main = () => {
    const [pricingPlans, setPricingPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCartGlobally();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPricingPlans = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/getAllPrice`);
                const data = response.data.allPrice[0];
                setPricingPlans(data);
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
                setError('Failed to load pricing plans'); // Set error state if fetch fails
            } finally {
                setLoading(false); // Set loading to false after fetch completes
            }
        };

        fetchPricingPlans();
    }, []);

    // Handle adding the package to the cart
    const handleAddToCart = (index) => {
        const product = {
            _id: `package-${index}`, // Unique ID for each package
            heading: pricingPlans.cartHeading[index],
            price: pricingPlans.cartPrice[index],
            list: pricingPlans[`cartList${index}`],
        };
        addToCart(product); // Use the addToCart function from context
        toast.success('Item added to cart');
        navigate('/cart'); // Navigate to the cart page
    };

    // Render individual package card
    const renderPackageCard = (index) => (
        <div className="packageChildCard" key={index}>
            <div className="packageHeadingData">
                <div className="packageContent">
                    <h3>{pricingPlans.cartHeading[index]}</h3>
                    <p className="packagecartPrice">${pricingPlans.cartPrice[index]}</p>
                    <p>plus $366 state fee</p>
                    <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
                </div>
            </div>
            <ul className="packageListContent">
                {pricingPlans[`cartList${index}`].map((item, idx) => (
                    <li className="cartListData" key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );

    if (loading) {
        return (
            <div className="loading-spinner">
                <Spin size="large" /> {/* Large spinner */}
            </div>
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="packageSelectionContainer pricing_main">
            <div className="container">
                <div className="packageHeading">
                    <h3>Select a Package for Limited Liability Company</h3>
                    <p>We offer 3 flavors of packages that range from laying the foundation to building the whole house.</p>
                </div>
                <div className="packageCard">
                    {pricingPlans.cartHeading && pricingPlans.cartHeading.length > 0 ? (
                        [0, 1, 2].map((index) => renderPackageCard(index))
                    ) : (
                        <p>No packages available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pricing_main;
