import React from 'react';
import './Button_top.css';
import { Link } from 'react-router-dom';

const Button_top = () => {
  return (
    <button className="hover-button">
      <div className="hover-button__div">
      <Link className='link' to={'/quote-pricing'}><span>Let's Get Started</span></Link>
      </div>
      <div className="hover-button__div hidethis">
        <Link className='link' to={'/quote-pricing'}><span>Let's Get Started</span></Link>
      </div>
    </button>
  );
};

export default Button_top;
