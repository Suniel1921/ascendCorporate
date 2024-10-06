// // import React from "react";
// // import "./cartCard.css";
// // import { useCartGlobally } from "../../contexts/cartContext";
// // import { FaRegEdit } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";

// // const CartCard = ({ hideContinueButton }) => {
// //   const { cart } = useCartGlobally();
// //   const navigate = useNavigate();

// //   // Calculate the subtotal
// //   const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

// //   // Additional fees (you can modify these as per your requirement)
// //   const shippingFee = 20;
// //   const stateExpediteFee = 130;
// //   const stateFee = 10;
// //   const creditCardSurcharge = 10;

// //   // Calculate the total
// //   const total = subtotal + shippingFee + stateExpediteFee + stateFee + creditCardSurcharge;

// //   return (
// //     <div className="cartCardContainer">
// //       <h2>Shopping Cart</h2>
// //       <div className="cartCard">
// //         {cart.map((item) => (
// //           <div key={item._id}>
// //             <h3>{item.heading}</h3>
// //             <ul>
// //               {item.list.map((feature, index) => (
// //                 <li key={index}>{feature}</li>
// //               ))}
// //             </ul>
// //             <div className="priceRow">
// //               <h3>TOTAL {item.heading}</h3>
// //               <p className="price">${item.price}</p>
// //             </div>
// //           </div>
// //         ))}
        
// //         <div className="packageOptionsAndFees">
// //           <div className="priceRow">
// //             <p>Shipping and Handling Fee for Corporate Kit</p>
// //             <p className="price">${shippingFee}</p>
// //           </div>
// //           <div className="priceRow">
// //             <p>State Expedite Fee for Formation, LLC, Illinois</p>
// //             <p className="price">${stateExpediteFee}</p>
// //           </div>
// //           <div className="priceRow">
// //             <p>State Fee for Formation, LLC, Illinois</p>
// //             <p className="price">${stateFee}</p>
// //           </div>
// //           <div className="priceRow totalRow">
// //             <h3>TOTAL Package Options and Fees</h3>
// //             <p className="price">${subtotal + shippingFee + stateExpediteFee + stateFee}</p>
// //           </div>
// //           <div className="priceRow subtotalRow">
// //             <h3>Subtotal</h3>
// //             <p className="price">${subtotal}</p>
// //           </div>
// //           <div className="priceRow">
// //             <h3>Estimated Credit Card Surcharge</h3>
// //             <p className="price">${creditCardSurcharge}</p>
// //           </div>
// //           <div className="priceRow totalRow">
// //             <h3>Total</h3>
// //             <p className="price">${total}</p>
// //           </div>
// //           <p className="additionalInfo">
// //             Additional sales tax may apply based on a jurisdiction’s
// //             applicable state, local tax laws, or both. In addition, where
// //             permitted by applicable law, we impose a surcharge of 2.2% on the
// //             transaction amount on credit card products, which is not greater
// //             than our cost of acceptance. We do not surcharge debit cards. If
// //             applicable, the sales tax will be calculated at the time the order
// //             is processed and the surcharge will be adjusted to cover the
// //             additional sales tax.
// //           </p>
// //         </div>
// //         <h3 className="modifiedText" onClick={() => navigate('/cart')}>
// //           <FaRegEdit /> Modify Cart
// //         </h3>
// //       </div>
// //       {!hideContinueButton && <button className="cartCardBtn">Continue</button>}
// //     </div>
// //   );
// // };

// // export default CartCard;







// import React from "react";
// import "./cartCard.css";
// import { useCartGlobally } from "../../contexts/cartContext";
// import { FaRegEdit } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const CartCard = ({ hideContinueButton }) => {
//   // const { cart } = useCartGlobally();
//   const { cart = [] } = useCartGlobally();
//   const navigate = useNavigate();

//   // Calculate the subtotal
//   const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

//   // Additional fees (you can modify these as per your requirement)
//   const shippingFee = 0;
//   const stateExpediteFee = 0;
//   const stateFee = 0;
//   const creditCardSurcharge = 0;

//   // Calculate the total
//   const total = subtotal + shippingFee + stateExpediteFee + stateFee + creditCardSurcharge;

//   return (
//     <div className="cartCardContainer">
//       <h2>Shopping Cart</h2>
      
//       {/* Check if the cart is empty */}
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cartCard">
//           {cart.map((item) => (
//             <div key={item._id}>
//               <h3>{item.heading}</h3>
//               <ul>
//                 {item.list.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//               <div className="priceRow">
//                 <h3>TOTAL {item.heading}</h3>
//                 <p className="price">${item.price}</p>
//               </div>
//             </div>
//           ))}
          
//           <div className="packageOptionsAndFees">
//             <div className="priceRow">
//               <p>Shipping and Handling Fee for Corporate Kit</p>
//               <p className="price">${shippingFee}</p>
//             </div>
//             <div className="priceRow">
//               <p>State Expedite Fee for Formation, LLC, Illinois</p>
//               <p className="price">${stateExpediteFee}</p>
//             </div>
//             <div className="priceRow">
//               <p>State Fee for Formation, LLC, Illinois</p>
//               <p className="price">${stateFee}</p>
//             </div>
//             <div className="priceRow totalRow">
//               <h3>TOTAL Package Options and Fees</h3>
//               <p className="price">${subtotal + shippingFee + stateExpediteFee + stateFee}</p>
//             </div>
//             <div className="priceRow subtotalRow">
//               <h3>Subtotal</h3>
//               <p className="price">${subtotal}</p>
//             </div>
//             <div className="priceRow">
//               <h3>Estimated Credit Card Surcharge</h3>
//               <p className="price">${creditCardSurcharge}</p>
//             </div>
//             <div className="priceRow totalRow">
//               <h3>Total</h3>
//               <p className="price">${total}</p>
//             </div>
//             <p className="additionalInfo">
//               Additional sales tax may apply based on a jurisdiction’s
//               applicable state, local tax laws, or both. In addition, where
//               permitted by applicable law, we impose a surcharge of 2.2% on the
//               transaction amount on credit card products, which is not greater
//               than our cost of acceptance. We do not surcharge debit cards. If
//               applicable, the sales tax will be calculated at the time the order
//               is processed and the surcharge will be adjusted to cover the
//               additional sales tax.
//             </p>
//           </div>
//           <h3 className="modifiedText" onClick={() => navigate('/cart')}>
//             <FaRegEdit /> Modify Cart
//           </h3>
//         </div>
//       )}
      
//       {/* Conditionally render the "Continue" button based on the hideContinueButton prop */}
//       {!hideContinueButton && cart.length > 0 && (
//         <button className="cartCardBtn">Continue</button>
//       )}
//     </div>
//   );
// };

// export default CartCard;











// import React from "react";
// import "./cartCard.css";
// import { useCartGlobally } from "../../contexts/cartContext";
// import { FaRegEdit } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const CartCard = ({ hideContinueButton }) => {
//   const { cart = [] } = useCartGlobally();  // Default cart to an empty array if undefined
//   const navigate = useNavigate();

//   // Calculate the subtotal
//   const subtotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);

//   // Additional fees (you can modify these as per your requirement)
//   const shippingFee = 0;
//   const stateExpediteFee = 0;
//   const stateFee = 0;
//   const creditCardSurcharge = 0;

//   // Calculate the total
//   const total = subtotal + shippingFee + stateExpediteFee + stateFee + creditCardSurcharge;

//   // Handle "Continue" button click
//   const handleContinue = () => {
//     navigate("/next-page", { state: { totalAmount: total } });
//   };

//   return (
//     <div className="cartCardContainer">
//       <h2>Shopping Cart</h2>
      
//       {/* Check if the cart is empty */}
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cartCard">
//           {cart.map((item) => (
//             <div key={item._id}>
//               <h3>{item.heading}</h3>
//               <ul>
//                 {item.list?.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//               <div className="priceRow">
//                 <h3>TOTAL {item.heading}</h3>
//                 <p className="price">${item.price}</p>
//               </div>
//             </div>
//           ))}
          
//           <div className="packageOptionsAndFees">
//             <div className="priceRow">
//               <p>Shipping & Handlling Fee for corporate Fees</p>
//               {/* <p>Shipping and Handling Fee for Corporate Kit</p> */}
//               <p className="price">${shippingFee}</p>
//             </div>
//             <div className="priceRow">
//               <p>State Expedite Fee for Formation, LLC, Illinois</p>
//               <p className="price">${stateExpediteFee}</p>
//             </div>
//             <div className="priceRow">
//               <p>State Fee for Formation, LLC, Illinois</p>
//               <p className="price">${stateFee}</p>
//             </div>
//             <div className="priceRow totalRow">
//               <h3>TOTAL Package Options and Fees</h3>
//               <p className="price">${subtotal + shippingFee + stateExpediteFee + stateFee}</p>
//             </div>
//             <div className="priceRow subtotalRow">
//               <h3>Subtotal</h3>
//               <p className="price">${subtotal}</p>
//             </div>
//             <div className="priceRow">
//               <h3>Estimated Credit Card Surcharge</h3>
//               <p className="price">${creditCardSurcharge}</p>
//             </div>
//             <div className="priceRow totalRow">
//               <h3>Total</h3>
//               <p className="price">${total}</p>
//             </div>
//             <p className="additionalInfo">
//               Additional sales tax may apply based on a jurisdiction’s
//               applicable state, local tax laws, or both. In addition, where
//               permitted by applicable law, we impose a surcharge of 2.2% on the
//               transaction amount on credit card products, which is not greater
//               than our cost of acceptance. We do not surcharge debit cards. If
//               applicable, the sales tax will be calculated at the time the order
//               is processed and the surcharge will be adjusted to cover the
//               additional sales tax.
//             </p>
//           </div>
//           <h3 className="modifiedText" onClick={() => navigate('/cart')}>
//             <FaRegEdit /> Modify Cart
//           </h3>
//         </div>
//       )}
      
//       {/* Conditionally render the "Continue" button based on the hideContinueButton prop */}
//       {!hideContinueButton && cart.length > 0 && (
//         <button className="cartCardBtn" onClick={handleContinue}>
//           Continue
//         </button>
//       )}
//     </div>
//   );
// };

// export default CartCard;





//new code testing


// import React, { useEffect, useState } from "react";
// import "./cartCard.css";
// import { useCartGlobally } from "../../contexts/cartContext";
// import { FaRegEdit } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const CartCard = ({ hideContinueButton }) => {
//   const { cart = [] } = useCartGlobally(); // Default cart to an empty array if undefined
//   const navigate = useNavigate();

//   // Local state to hold the state data
//   const [stateData, setStateData] = useState(null);

//   useEffect(() => {
//     // Retrieve state data from localStorage
//     const storedStateData = JSON.parse(localStorage.getItem("selectedStateData"));
//     setStateData(storedStateData);
//   }, []);

//   // Calculate the subtotal
//   const subtotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);

//   // Handle "Continue" button click
//   const handleContinue = () => {
//     navigate("/next-page", { state: { totalAmount: subtotal + (stateData?.total || 0) } });
//   };

//   return (
//     <div className="cartCardContainer">
//       <h2>Shopping Cart</h2>

//       {/* Check if the cart is empty */}
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cartCard">
//           {cart.map((item) => (
//             <div key={item._id}>
//               <h3>{item.heading}</h3>
//               <ul>
//                 {item.list?.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//               <div className="priceRow">
//                 <h3>{item.heading} Total</h3>
//                 <p className="price">${item.price.toFixed(2)}</p>
//               </div>
//             </div>
//           ))}

//           <div className="packageOptionsAndFees">
//             <h3>State Information:</h3>
//             <div className="stateInfo">
//               <p><strong>State Name:</strong> {stateData?.stateName || 'N/A'}</p>
//               <p><strong>Abbreviation:</strong> {stateData?.abbreviation || 'N/A'}</p>
//               <p><strong>Shipping Fee:</strong> ${stateData?.shippingFee?.toFixed(2) || 'N/A'}</p>
//               <p><strong>Publishing Fee:</strong> ${stateData?.publishingFee?.toFixed(2) || 'N/A'}</p>
//               <p><strong>State Expedite Fee:</strong> ${stateData?.stateExpediteFee?.toFixed(2) || 'N/A'}</p>
//               <p><strong>Correspondent Fee:</strong> ${stateData?.correspondentFee?.toFixed(2) || 'N/A'}</p>
//               <p><strong>Proof of Publication:</strong> ${stateData?.proofOfPublication?.toFixed(2) || 'N/A'}</p>
//               <p><strong>Recording Fee:</strong> ${stateData?.recordingFee?.toFixed(2) || 'N/A'}</p>
//               <p><strong>Total Fees:</strong> ${stateData?.total?.toFixed(2) || 'N/A'}</p>
//             </div>

//             <div className="priceRow totalRow">
//               <h3>TOTAL Package Options and Fees</h3>
//               <p className="price">${(subtotal + (stateData?.total || 0)).toFixed(2)}</p>
//             </div>

//             <div className="priceRow subtotalRow">
//               <h3>Subtotal</h3>
//               <p className="price">${subtotal.toFixed(2)}</p>
//             </div>

//             <div className="priceRow totalRow">
//               <h3>Total</h3>
//               <p className="price">${(subtotal + (stateData?.total || 0)).toFixed(2)}</p>
//             </div>

//             <p className="additionalInfo">
//               Additional sales tax may apply based on a jurisdiction’s applicable state, local tax laws, or both. 
//               In addition, where permitted by applicable law, we impose a surcharge of 2.2% on the transaction amount on credit card products, 
//               which is not greater than our cost of acceptance. We do not surcharge debit cards. If applicable, the sales tax will be calculated 
//               at the time the order is processed and the surcharge will be adjusted to cover the additional sales tax.
//             </p>
//           </div>

//           <h3 className="modifiedText" onClick={() => navigate('/cart')}>
//             <FaRegEdit /> Modify Cart
//           </h3>
//         </div>
//       )}

//       {/* Conditionally render the "Continue" button based on the hideContinueButton prop */}
//       {!hideContinueButton && cart.length > 0 && (
//         <button className="cartCardBtn" onClick={handleContinue}>
//           Continue
//         </button>
//       )}
//     </div>
//   );
// };

// export default CartCard;





import React, { useEffect, useState } from "react";
import "./cartCard.css";
import { useCartGlobally } from "../../contexts/cartContext";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartCard = ({ hideContinueButton, onTotalChange }) => {
  const { cart = [] } = useCartGlobally(); // Default cart to an empty array if undefined
  const navigate = useNavigate();

  // Local state to hold the state data
  const [stateData, setStateData] = useState(null);

  useEffect(() => {
    // Retrieve state data from localStorage
    const storedStateData = JSON.parse(localStorage.getItem("selectedStateData"));
    setStateData(storedStateData);
  }, []);

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  // Update total amount and notify the parent component
  useEffect(() => {
    if (onTotalChange) {
      onTotalChange(subtotal + (stateData?.total || 0));
    }
  }, [subtotal, stateData, onTotalChange]);

  // Handle "Continue" button click
  const handleContinue = () => {
    navigate("/next-page", { state: { totalAmount: subtotal + (stateData?.total || 0) } });
  };

  return (
    <div className="cartCardContainer">
      <h2>Shopping Cart</h2>

      {/* Check if the cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cartCard">
          {cart.map((item) => (
            <div key={item._id}>
              <h3>{item.heading}</h3>
              <ul>
                {item.list?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="priceRow">
                <h3>{item.heading} Total</h3>
                <p className="price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="packageOptionsAndFees">
            <h3>State Information:</h3>
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

            <div className="priceRow totalRow">
              <h3>TOTAL Package Options and Fees</h3>
              <p className="price">${(subtotal + (stateData?.total || 0)).toFixed(2)}</p>
            </div>

            <div className="priceRow subtotalRow">
              <h3>Subtotal</h3>
              <p className="price">${subtotal.toFixed(2)}</p>
            </div>

            <div className="priceRow totalRow">
              <h3>Total</h3>
              <p className="price">${(subtotal + (stateData?.total || 0)).toFixed(2)}</p>
            </div>
          </div>

          <h3 className="modifiedText" onClick={() => navigate('/cart')}>
            <FaRegEdit /> Modify Cart
          </h3>
        </div>
      )}

      {!hideContinueButton && cart.length > 0 && (
        <button className="cartCardBtn" onClick={handleContinue}>
          Continue
        </button>
      )}
    </div>
  );
};

export default CartCard;
