import React from 'react';
import { useLocation } from 'react-router-dom';
import '../contact/orderProgress.css';
import { FaCheckCircle } from 'react-icons/fa';

// Define the steps of the order process
const steps = [
  { path: '/quote-pricing', label: 'Quote Pricing' },
  { path: '/package-selection', label: 'Package Selection' },
  // { path: '/cart', label: 'Cart' },
  { path: '/contact-info', label: 'Contact Info' },
  { path: '/company-info', label: 'Company Info' },
  { path: '/checkout', label: 'Review & Checkout' },
];

const OrderProgress = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to determine the status of each step based on the current path
  const getStatus = (stepPath) => {
    if (currentPath.startsWith(stepPath)) return 'current';
    const stepIndex = steps.findIndex(step => currentPath.startsWith(step.path));
    return stepIndex >= steps.findIndex(step => step.path === stepPath) ? 'completed' : 'pending';
  };

  return (
    <div className="order-progress">
      {steps.map(step => (
        <div key={step.path} className={`step ${getStatus(step.path)}`}>
          <FaCheckCircle className="icon" />
          {step.label}
        </div>
      ))}
    </div>
  );
};

export default OrderProgress;
