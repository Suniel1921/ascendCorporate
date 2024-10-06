import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./About_Testomonial.css";

const About_Testimonial = [
    {
        quote: "I have been using The Company Corporation for almost 20 years and have had no hassles during that time.",
        author: "Matthew F.",
        location: "Thousand Oaks"
    },
    {
        quote: "The customer service is exceptional and the process was seamless.",
        author: "Jane D.",
        location: "New York"
    },
    {
        quote: "Highly recommend them for any business needs.",
        author: "John S.",
        location: "San Francisco"
    }
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current) => (current === About_Testimonial.length - 1 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setCurrent((current) => (current === 0 ? About_Testimonial.length - 1 : current - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="testimonial-wrapper">
            <div className="testimonial_container">
                <div className="testimonial-navigation-arrow testimonial-arrow-left" onClick={prevSlide}>
                    <FaChevronLeft />
                </div>
                <div className="testimonial-content">
                    {About_Testimonial.map((testimonial, index) => (
                        <div className={`testimonial-slide ${current === index ? "active" : ""}`} key={index}>
                            <div className="testimonial-card">
                                <blockquote className="testimonial-quote">{testimonial.quote}</blockquote>
                            </div>
                            <div className="testimonial-author-info">
                                <strong>{testimonial.author}</strong>
                                <span>{testimonial.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="testimonial-navigation-arrow testimonial-arrow-right" onClick={nextSlide}>
                    <FaChevronRight />
                </div>
            </div>
            <div className='readContent_about'>
            <a href="#">Read more of our customer review</a>
            </div>
        </div>
    );
};

export default Testimonial;
