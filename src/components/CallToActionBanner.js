// src/components/CallToActionBanner.js
import React, { useState } from 'react';

const CallToActionBanner = () => {
  const [showPopup, setShowPopup] = useState(true); // Set showPopup to true initially

  const handleShopClick = () => {
    // Redirects to the Shop page
    window.location.href = '../pages/Shop.js';
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {showPopup && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#f8f9fa', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.3)', zIndex: '9999' }}>
          <h2>Huge Shed Sale!</h2>
          <p>Get your dream shed at unbeatable prices.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={handleShopClick} style={{ marginRight: '10px', padding: '10px 20px', fontSize: '1.2rem', borderRadius: '5px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Shop</button>
            <button onClick={togglePopup} style={{ padding: '10px 20px', fontSize: '1.2rem', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallToActionBanner;