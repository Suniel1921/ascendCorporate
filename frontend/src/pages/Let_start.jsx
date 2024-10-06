import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './Let_start.css';

const Let_start = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState([0, 0, 0]);
  const counterRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
  const targetNumbers = [99, 20, 98]; // Target numbers for each counter
  const formats = ['%', 'M']; // Formats to be added after the numbers
  const incrementSpeed = 30; // Speed of the counting animation (in milliseconds)


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            let currentNumber = 0;
            const interval = setInterval(() => {
              currentNumber += 1;
              setCounts((prevCounts) => {
                const newCounts = [...prevCounts];
                newCounts[index] = currentNumber;
                return newCounts;
              });
              if (currentNumber === targetNumbers[index]) {
                clearInterval(interval);
              }
            }, incrementSpeed);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((ref, index) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      counterRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className='main-start'>
      <div className='upper_part'>
        <div className='left_side_start'>
          <div className="letStartBG">
            <span className="letStart_redDot"></span>
            <p className="letStart">LET'S START</p>
          </div>
          <h3 className='left_side_h3'>
            Consulting company with <br />
            strategy in business growth.
          </h3>
          <p className='left_side_p'>
            We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.
          </p>
        </div>
        <div className='Right_side_start'></div>
      </div>
      <div className='bottom_side'>
        <div className='bottom_div'>
          <div className='bottom_div_left' ref={counterRefs.current[0]}>
            <div className='number'>{counts[0]}{formats[0]}</div>
            <div className='symbol'>+</div>
          </div>
          <div className='content'>
            <h4 className='content_header'>
              PROJECT COMPLETED <br />
              IN LAST 5 YEARS
            </h4>
            <div className='content_paragraph'>
              We’re full service which means. <br />
              we’ve got you covered on design.
            </div>
          </div>
        </div>
        <div className='bottom_div'>
          <div className='bottom_div_left' ref={counterRefs.current[1]}>
            <div className='number'>{counts[1]}{formats[1]}</div>
            <div className='symbol'>+</div>
          </div>
          <div className='content'>
            <h4 className='content_header'>
              HAPPY CUSTOMERS WHO TRUSTED US <br />
              IN LAST 5 YEARS
            </h4>
            <div className='content_paragraph'>
              We’re full service which means. <br />
              we’ve got you covered on design.
            </div>
          </div>
        </div>
        <div className='bottom_div'>
          <div className='bottom_div_left' ref={counterRefs.current[2]}>
            <div className='number'>{counts[2]}{formats[2]}</div>
            <div className='symbol'>+</div>
          </div>
          <div className='content'>
            <h4 className='content_header'>
              Awards Winnings & Partner Worldwide <br />
              IN LAST 5 YEARS
            </h4>
            <div className='content_paragraph'>
              We’re full service which means. <br />
              we’ve got you covered on design.
            </div>
          </div>
        </div>



        <div className='bottom_div_right'>
          <h2 className='content_header'>
            Get the download on Corporations, LLCs, & More.
          </h2>
          <button className='bottom_div_button' onClick={()=>navigate('/download-guide-info')}>
            Download The Free Guide
          </button>
        </div>
      </div>
    </div>
  );
}

export default Let_start;





// component with image as per client required

// import React from "react";
// import './Let_start.css';

// const Let_start = () => {
//   return (
//     <div className="let_started_Container">
//       <div className="let_Started">
//         <div className="leftContainer">
//           <div className="leftContent">
//             <h4>Get the download on corporations, LLCs, and more.</h4>
//             <img src="/img/Image_2.jpg" alt="heroimg" />
//           </div>
//         </div>
//         <div className="rightContainer">
//           <div className="rightContent">
//             <h4>
//               Destination: Delaware. No matter where you're headquartered, 
//               incorporating in Delaware could be a great move for your balance sheet. 
//               LLCs, and more.
//             </h4>
//             <img src="/img/Image_2.jpg" alt="heroimg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Let_start;
