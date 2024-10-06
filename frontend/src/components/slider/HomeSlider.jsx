import React, { useEffect, useState } from 'react';
import '../slider/homeSlider.css';
import {useNavigate} from 'react-router-dom'

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); 

  const slides = [
    { src: '/img/slide1.png', heading: 'Innovative Solutions for Financial Growth', content: 'Unlock innovative financial tools that fuel startup growth with dynamic strategies and transformative solutions tailored for your success.' },
    { src: '/img/slide2.png', heading: 'Empowering Startups with Financial Insights', content: 'Empower your startup with cutting-edge financial insights and dynamic solutions that drive rapid growth and operational excellence' },
    { src: '/img/slide3.png', heading: 'Transformative Finance Solutions for Success', content: 'Discover financial solutions that blend innovation with dynamism, perfectly crafted to support and drive high-growth startups.' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 4000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="homeSlider">
      <div className="home">
        <div className="sliderContainer">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img className='sliderImg' src={slide.src} alt={`Slide ${index + 1}`} />
              <div className="slideContent container">
               <div className="leftContent">
               <h2 className='sliderHeading'>{slide.heading}</h2>
               <p className='sliderPara'>{slide.content}</p>
               <button className='sliderBtn btn' onClick={()=>navigate("/quote-pricing")}>Get Started</button>
               </div>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>&lt;</button>
        <button className="next" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default HomeSlider;
