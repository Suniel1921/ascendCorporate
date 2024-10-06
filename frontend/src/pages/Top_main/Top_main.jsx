import React, { useEffect } from 'react';
import "./Top_main.css";
import Button_top from "../Button/Button_top";
import Front_page from '../Front_page';
import Navbar from '../navbar/Navbar';
import ChatBox from '../../components/chatBox/ChatBox';


const Top_main = () => {
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (event) => {
      // Image Movement Logic
      const topLeftImage = document.querySelector('.Top_left_image img');
      const topRightImage = document.querySelector('.Top_right_image img');
      const bottomLeftImage = document.querySelector('.bottom_left_image img');
      const bottomRightImage = document.querySelector('.bottom_right_image img');

      const images = [topLeftImage, topRightImage, bottomLeftImage, bottomRightImage];
      
      images.forEach((image, index) => {
        const rect = image.getBoundingClientRect();
        const imageX = rect.left + rect.width / 2;
        const imageY = rect.top + rect.height / 2;
        const deltaX = event.clientX - imageX;
        const deltaY = event.clientY - imageY;
        const moveX = deltaX * (0.03 + index * 0.01); 
        const moveY = deltaY * (0.03 + index * 0.01);

        image.style.transition = 'transform 0.6s ease-out';
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });

      // Custom Cursor Logic
      const cursorX = event.clientX;
      const cursorY = event.clientY;

      const offsetX = 10; // Adjust this value for more or less distance
      const offsetY = 10; // Adjust this value for more or less distance

      const circleBorder = document.getElementById('circle-border');
      if (circleBorder) {
        circleBorder.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }

      const customCursor = document.getElementById('custom-cursor');
      if (customCursor) {
        customCursor.style.transform = `translate(${cursorX + offsetX}px, ${cursorY + offsetY}px)`;
      }

      animationFrameId = requestAnimationFrame(handleMouseMove);
    };

    const mainBackground = document.querySelector('.main_background');
    mainBackground.addEventListener('mousemove', handleMouseMove);

    return () => {
      mainBackground.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
    <Navbar /> 
      <div id="circle-border">
        {/* <div id="custom-cursor"></div> for Red Dot Cursor */}
      </div>
      <div className="test">
      
        <div className='main_background'>
          <div className='main_background_left'>
            <h1 className='Main_heading'>
              Making business <br/>easier.
            </h1>
            <p className='main_paragraph'>
            Ready to form an LLC, Corporation, or Non-Profit? At Ascend, we provide everything you need to start and maintain your business.


            </p>
            <div className='Button_top'>
              <Button_top />
              <div id="unique-hover-button">
                <div id="unique-hover-button__div">
                  <span className='nomobile'>
                    <p>call us+1(313) 355-3295</p>
                  </span>
                </div>
                <div id="unique-hover-button__div">
                  <span>
                    <p>call us +1(313) 355-3295</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        
          <div className="main_background_right">
          
            <div className='chatBoxModal'><ChatBox/></div>
            <div className='top_img'>
              <div className='Top_left_image'>
                <img src='/img/girl4.png' alt="" />
              </div>
              <div className='Top_right_image'>
                <img src='/img/girl3.png' alt="" className='top_right' />
              </div>
            </div>
            <div className='bottom_img'>
              <div className='bottom_left_image'>
                <img src='./img/girl2.png' alt="" />
              </div>
              <div className='bottom_right_image'>
                <img src='/img/girl1.png' alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      
      <Front_page />
    </>
  );
}

export default Top_main;
