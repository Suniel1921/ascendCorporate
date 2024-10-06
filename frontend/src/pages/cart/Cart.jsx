// import React from 'react';
// import './cart.css';
// import { useCartGlobally } from '../../contexts/cartContext';

// const Cart = () => {
//   const { cart, removeFromCart } = useCartGlobally();

//   // Calculate the subtotal
//   const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

//   // Additional fees (same as in CartCard)
//   const shippingFee = 20;
//   const stateExpediteFee = 130;
//   const stateFee = 10;
//   const creditCardSurcharge = 10;

//   // Calculate the total
//   const total = subtotal + shippingFee + stateExpediteFee + stateFee + creditCardSurcharge;

//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Shopping Cart</h1>

//       {cart.length === 0 ? (
//         <div className="emptyCartContainer">
//         <p>Your cart is empty</p>
//         {/* <img className="emptyCartImg" src="/img/emptyCart.png" alt="cart image" /> */}
//         <button className='empty_continue_Shopping'>Continue Shopping</button>
//       </div>
      
//       ) : (
//         <>
//           <table className="cart-table">
//             <thead className="cart-table-header">
//               <tr>
//                 <th>Item</th>
//                 <th>Price</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item) => (
//                 <tr key={item._id} className="cart-item">
//                   <td className="cart-item-details">
//                     <h2>{item.heading}</h2>
//                     <ul>
//                       {item.list.map((feature, index) => (
//                         <li key={index}>{feature}</li>
//                       ))}
//                     </ul>
//                     <div className="price-total">
//                       <strong>TOTAL {item.heading}</strong>
//                       <p className="cart-price">${item.price.toFixed(2)}</p>
//                     </div>
//                   </td>
//                   <td className="cart-item-price"></td> {/* Empty td to maintain alignment */}
//                   <td className="cart-item-actions">
//                     <button className="cart-action-button" onClick={() => removeFromCart(item._id)}>Remove</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="cart-summary">
//             <div className="cart-summary-header">
//               <h3>Package Options and Fees</h3>
//             </div>
//             <div className="cart-summary-item">
//               <p>Shipping and Handling Fee for Corporate Kit</p>
//               <p className="cart-summary-price">${shippingFee.toFixed(2)}</p>
//             </div>
//             <div className="cart-summary-item">
//               <p>State Expedite Fee for Formation, LLC, Illinois</p>
//               <p className="cart-summary-price">${stateExpediteFee.toFixed(2)}</p>
//             </div>
//             <div className="cart-summary-item">
//               <p>State Fee for Formation, LLC, Illinois</p>
//               <p className="cart-summary-price">${stateFee.toFixed(2)}</p>
//             </div>
//             <div className="cart-summary-item total">
//               <strong>TOTAL Package Options and Fees</strong>
//               <strong className="cart-summary-price">${subtotal + shippingFee + stateExpediteFee + stateFee}</strong>
//             </div>
//           </div>

//           <div className="cart-total">
//             <strong>Total</strong>
//             <p>${total.toFixed(2)}</p>
//           </div>
//           <p className="cart-disclaimer">
//             Additional sales tax may apply based on a jurisdiction's applicable state, local tax laws, or both. If applicable, sales tax will be calculated at the time the order is processed.
//           </p>

//           <div className="cart-buttons">
//             <button className="cart-button continue-shopping">Continue Shopping</button>
//             <button className="cart-button checkout">Checkout</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;





import React, { useEffect, useState } from 'react';
import './cart.css';
import { useCartGlobally } from '../../contexts/cartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCartGlobally();
  const navigate = useNavigate();
  
  // Local state to hold the state data
  const [stateData, setStateData] = useState(null);

  useEffect(() => {
    // Retrieve state data from localStorage
    const storedStateData = JSON.parse(localStorage.getItem("selectedStateData"));
    setStateData(storedStateData);
  }, []);

  // Calculate the subtotal of the cart items
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  // Calculate total fees from state data
  const totalFees = (stateData?.total || 0);

  // Calculate the total amount (subtotal + total fees)
  const total = subtotal + totalFees;

  const handleContinueShopping = () => {
    const lastPackageUrl = localStorage.getItem('lastPackageUrl');
    if (lastPackageUrl) {
      try {
        const url = new URL(lastPackageUrl);
        navigate(url.pathname); // Use pathname to avoid appending current URL
      } catch (error) {
        console.error('Invalid URL:', lastPackageUrl);
        navigate('/'); // Fallback to the homepage if URL is invalid
      }
    } else {
      navigate('/'); // Fallback to the homepage if no URL is found
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="emptyCartContainer">
          <p>Your cart is empty</p>
          <button className="empty_continue_Shopping" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead className="cart-table-header">
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} className="cart-item">
                  <td className="cart-item-details">
                    <h2>{item.heading}</h2>
                    <ul>
                      {item.list.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="price-total">
                      <strong>TOTAL {item.heading}</strong>
                      <p className="cart-price">${item.price.toFixed(2)}</p>
                    </div>
                  </td>
                  <td className="cart-item-price"></td>
                  <td className="cart-item-actions">
                    <button className="cart-action-button" onClick={() => removeFromCart(item._id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <div className="cart-summary-header">
              <h3>Package Options and Fees</h3>
            </div>

            <div className="stateInfo">
              <div className="priceRow">
                <p><strong>State Name:</strong></p>
                <p className="price">{stateData?.stateName || 'N/A'}</p>
              </div>
              <div className="priceRow">
                <p><strong>Abbreviation:</strong></p>
                <p className="price">{stateData?.abbreviation || 'N/A'}</p>
              </div>
              <div className="priceRow">
                <p><strong>Shipping Fee:</strong></p>
                <p className="price">${stateData?.shippingFee?.toFixed(2) || 'N/A'}</p>
              </div>
              <div className="priceRow">
                <p><strong>Publishing Fee:</strong></p>
                <p className="price">${stateData?.publishingFee?.toFixed(2) || 'N/A'}</p>
              </div>
              <div className="priceRow">
                <p><strong>State Expedite Fee:</strong></p>
                <p className="price">${stateData?.stateExpediteFee?.toFixed(2) || 'N/A'}</p>
              </div>
              <div className="priceRow">
                <p><strong>Correspondent Fee:</strong></p>
                <p className="price">${stateData?.correspondentFee?.toFixed(2) || 'N/A'}</p>
              </div>
              <div className="priceRow">
                <p><strong>Proof of Publication:</strong></p>
                <p className="price">${stateData?.proofOfPublication?.toFixed(2) || 'N/A'}</p>
              </div>
              <div className="priceRow">
                <p><strong>Recording Fee:</strong></p>
                <p className="price">${stateData?.recordingFee?.toFixed(2) || 'N/A'}</p>
              </div>
              <div className="priceRow">
                <p><strong>Total Fees:</strong></p>
                <p className="price">${stateData?.total?.toFixed(2) || 'N/A'}</p>
              </div>
            </div>

            <div className="cart-summary-item total">
              <strong>TOTAL Package Options and Fees</strong>
              <strong className="cart-summary-price">${totalFees.toFixed(2)}</strong>
            </div>
          </div>

          <div className="cart-total">
            <strong>Total</strong>
            <p>${total.toFixed(2)}</p>
          </div>

          <p className="cart-disclaimer">
            Additional sales tax may apply based on a jurisdiction's applicable state, local tax laws, or both. 
            If applicable, sales tax will be calculated at the time the order is processed.
          </p>

          <div className="cart-buttons">
            <button className="cart-button continue-shopping" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className="cart-button checkout" onClick={() => navigate('/checkout')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
