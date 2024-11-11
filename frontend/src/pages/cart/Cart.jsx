
import React, { useEffect, useState } from "react";
import "./cart.css";
import { useCartGlobally } from "../../contexts/cartContext";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart } = useCartGlobally();
  const navigate = useNavigate();

  // Local state to hold the state data
  const [stateData, setStateData] = useState(null);

  useEffect(() => {
    // Retrieve state data from localStorage
    const storedStateData = JSON.parse(
      localStorage.getItem("selectedStateData")
    );
    setStateData(storedStateData);
  }, []);

  // Calculate the subtotal of the cart items
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  // Calculate total fees from state data
  const totalFees = stateData?.total || 0;

  // Calculate the total amount (subtotal + total fees)
  const total = subtotal + totalFees;

  const handleContinueShopping = () => {
    const lastPackageUrl = localStorage.getItem("lastPackageUrl");
    if (lastPackageUrl) {
      try {
        const url = new URL(lastPackageUrl);
        navigate(url.pathname); // Use pathname to avoid appending current URL
      } catch (error) {
        console.error("Invalid URL:", lastPackageUrl);
        navigate("/"); // Fallback to the homepage if URL is invalid
      }
    } else {
      navigate("/"); // Fallback to the homepage if no URL is found
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="emptyCartContainer">
          <p>Your cart is empty</p>
          <button
            className="empty_continue_Shopping"
            onClick={handleContinueShopping}
          >
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
                <th className="mb-hide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <>
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
                      </div>
                    </td>
                    <td className="cart-item-price">
                      <p className="cart-price">${item.price.toFixed(2)}</p>
                    </td>
                    <td className="cart-item-actions mb-hide">
                      <button
                        className="cart-action-button"
                        onClick={() => removeFromCart(item._id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>

                  <tr className="mb-show">
                    <td colspan="2" className=" mb-delete-bttn">
                      <button
                        className="cart-action-button"
                        onClick={() => removeFromCart(item._id)}
                      >
                        <FaTrash /> <span className="delete-text">Delete</span>
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <div className="cart-summary-header">
              <h3>Package Options and Fees</h3>
            </div>

            <div className="stateInfo">
              <div className="priceRow">
                <p>
                  <strong>State Name:</strong>
                </p>
                <p className="price">{stateData?.stateName || "N/A"}</p>
              </div>
              <div className="priceRow">
                <p>
                  <strong>Abbreviation:</strong>
                </p>
                <p className="price">{stateData?.abbreviation || "N/A"}</p>
              </div>
              <div className="priceRow">
                <p>
                  <strong>Shipping Fee:</strong>
                </p>
                <p className="price">
                  ${stateData?.shippingFee?.toFixed(2) || "N/A"}
                </p>
              </div>
              <div className="priceRow">
                <p>
                  <strong>Publishing Fee:</strong>
                </p>
                <p className="price">
                  ${stateData?.publishingFee?.toFixed(2) || "N/A"}
                </p>
              </div>
              <div className="priceRow">
                <p>
                  <strong>State Expedite Fee:</strong>
                </p>
                <p className="price">
                  ${stateData?.stateExpediteFee?.toFixed(2) || "N/A"}
                </p>
              </div>
              <div className="priceRow">
                <p>
                  <strong>Correspondent Fee:</strong>
                </p>
                <p className="price">
                  ${stateData?.correspondentFee?.toFixed(2) || "N/A"}
                </p>
              </div>
              <div className="priceRow">
                <p>
                  <strong>Proof of Publication:</strong>
                </p>
                <p className="price">
                  ${stateData?.proofOfPublication?.toFixed(2) || "N/A"}
                </p>
              </div>
              <div className="priceRow">
                <p>
                  <strong>Recording Fee:</strong>
                </p>
                <p className="price">
                  ${stateData?.recordingFee?.toFixed(2) || "N/A"}
                </p>
              </div>
              <div className="priceRow">
                <p>
                  <strong>Total Fees:</strong>
                </p>
                <p className="price">
                  ${stateData?.total?.toFixed(2) || "N/A"}
                </p>
              </div>
            </div>

            <div className="cart-summary-item total">
              <strong>TOTAL Package Options and Fees</strong>
              <strong className="cart-summary-price">
                ${totalFees.toFixed(2)}
              </strong>
            </div>
          </div>

          <div className="cart-total">
            <strong>Total</strong>
            <p>${total.toFixed(2)}</p>
          </div>

          <p className="cart-disclaimer">
            Additional sales tax may apply based on a jurisdiction's applicable
            state, local tax laws, or both. If applicable, sales tax will be
            calculated at the time the order is processed.
          </p>

          <div className="cart-buttons">
            <button
              className="cart-button continue-shopping"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="cart-button checkout"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
