import React, { useState, useRef } from 'react';
import { FaRocketchat, FaTimes } from "react-icons/fa";
import '../chatBox/chatBox.css';

const ChatBox = () => {
  const [isVisible, setIsVisible] = useState(true);
  const chatBoxRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleChatNow = () => {
    window.open('/new-order', '_blank', 'width=600, height=800'); 
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = chatBoxRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="chatBoxContainer"
      ref={chatBoxRef}
      style={{
        left: position.x === 0 ? 'auto' : `${position.x}px`,
        right: position.x === 0 ? '20px' : 'auto',
        top: position.y === 0 ? 'auto' : `${position.y}px`,
        bottom: position.y === 0 ? '20px' : 'auto',
        position: 'fixed',  // Use fixed to position relative to the viewport
        zIndex: 1000,  // Ensure chat box is above other elements
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <button className="closeBtn" onClick={handleClose}><FaTimes /></button>
      <div className="box">
        <FaRocketchat className='chat_mgs_icon' />
        <div className='chatContent'>
          <h2>Have a question?</h2>
          <p>Our incorporation specialists have the answer.</p>
        </div>
      </div>
      <button className='chatBtn' onClick={handleChatNow}>Chat Now</button>
    </div>
  );
}

export default ChatBox;
