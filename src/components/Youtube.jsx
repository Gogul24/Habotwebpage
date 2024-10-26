import React, { useState } from 'react';
import '../style/youtube.css'

export default function Youtube() {
  const [activeView, setActiveView] = useState('buyer');

  const toggleView = () => {
    setActiveView(prevView => (prevView === 'buyer' ? 'supplier' : 'buyer'));
  };

  const buyerInfo = [
    "Post your requirements.",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on the ratings and reviews."
  ];
  
  const supplierInfo = [
    "Browse buyer requirements.",
    "Contact buyers with your offers.",
    "Receive orders and fulfill them."
  ];

  return (
    <div className="containerY">
      <div className="content">
        <div className="video-container">
          <div className="play-button">
            <a href="https://www.youtube.com/watch?v=IZLp-TZyDkQ" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="info-container">
          <div className="tabs">
            <h2 className={`tab ${activeView === 'buyer' ? 'active' : ''}`} onClick={toggleView}>Buyer</h2>
            <h2 className={`tab ${activeView === 'supplier' ? 'active' : ''}`} onClick={toggleView}>Supplier</h2>
          </div>
          <ul className="info-list">
            {(activeView === 'buyer' ? buyerInfo : supplierInfo).map((info, index) => (
              <li key={index} className="list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{info}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


