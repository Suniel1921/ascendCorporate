import React from 'react';
import "./Customer_review.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const reviews = [
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nobis. Dicta itaque natus voluptatem et, labore fugiat molestiae ipsam enim, ea voluptas harum! Ducimus minus laborum aperiam iure, facere cumque. " ,
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nobis. Dicta itaque natus voluptatem et, labore fugiat molestiae ipsam enim, ea voluptas harum! Ducimus minus laborum aperiam iure, facere cumque.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nobis. Dicta itaque natus voluptatem et, labore fugiat molestiae ipsam enim, ea voluptas harum! Ducimus minus laborum aperiam iure, facere cumque.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nobis. Dicta itaque natus voluptatem et, labore fugiat molestiae ipsam enim, ea voluptas harum! Ducimus minus laborum aperiam iure, facere cumque.",
  "Fantastic experience, will shop here again!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nobis. Dicta itaque natus voluptatem et, labore fugiat molestiae ipsam enim, ea voluptas harum! Ducimus minus laborum aperiam iure, facere cumque.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nobis. Dicta itaque natus voluptatem et, labore fugiat molestiae ipsam enim, ea voluptas harum! Ducimus minus laborum aperiam iure, facere cumque."
];

const Customer_review = () => {
  return (
    <div className='recent_customer_review'>
      <div className='recent_customer_review_image'>
        <img src="/img/hero-image-quote-marks.jpg" alt="Customer Review" className='recent_image' />
        <p className='Recent_customer_paragraph'>
          Recent Customer Review
          
        </p>
      </div>
      <div className='review_container'>
        {reviews.map((review, index) => (
          <p key={index} className='review_paragraph'>
             <RiDoubleQuotesL className='quotes_par' />{review} <RiDoubleQuotesR  className='quotes_par'/>

          </p>
        ))}
      </div>
    </div>
  );
}

export default Customer_review;
