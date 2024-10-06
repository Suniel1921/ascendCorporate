import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useCartGlobally } from '../../contexts/cartContext';
import { Spin } from 'antd'; 
import 'antd/dist/reset.css'; 
import './package.css';

const Package = () => {
  const { id } = useParams();
  const location = useLocation();
  const selectedState = location.state?.selectedState || 'California'; // Default to California if state is not passed
  const [singlePackage, setSinglePackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCartGlobally();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('lastPackageUrl', window.location.href); // Save the current URL when the component mounts
  }, [id]);

  const getsinglePrice = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/getSinglePackage/${id}`
      );
      if (response.data.success) {
        setSinglePackage(response.data.singlePackage);
      } else {
        setError('No data found.');
      }
    } catch (error) {
      if (error.response) {
        setError(`Error: ${error.response.status} - ${error.response.statusText}`);
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getsinglePrice();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <Spin size="large" /> {/* Large spinner */}
      </div>
    );
  }
  if (error) return <p>{error}</p>;
  if (!singlePackage) return <p>No Package Found...</p>;

  const handleAddToCart = (index) => {
    const product = {
      _id: `${id}-${index}`, // Unique ID for each variant
      heading: singlePackage.cartHeading[index],
      price: singlePackage.cartPrice[index],
      list: singlePackage[`cartList${index}`],
    };
    addToCart(product);
    toast.success('Item added to cart');
    navigate('/contact-info');
  };

  const renderPackageCard = (index) => (
    <div className="packageChildCard" key={index}>
      <div className="packageHeadingData">
        <div className="packageContent">
          <h3>{singlePackage.cartHeading[index]}</h3>
          <p className="packagecartPrice">${singlePackage.cartPrice[index]}</p>
          <p>plus $366 state fee</p>
          <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
        </div>
      </div>
      <ul className="packageListContent">
        {singlePackage[`cartList${index}`].map((item, idx) => (
          <li className="cartListData" key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="packageSelectionContainer">
      <div className="container">
        <div className="packageHeading">
          <h3>Select a Package for Your {selectedState} Limited Liability Company</h3>
          <p>We offer 3 flavors of packages that range from laying the foundation to building the whole house.</p>
        </div>
        <div className="packageCard">
          {renderPackageCard(0)}
          {renderPackageCard(1)}
          {renderPackageCard(2)}
        </div>
      </div>
    </div>
  );
};

export default Package;
