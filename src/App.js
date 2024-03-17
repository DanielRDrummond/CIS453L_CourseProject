/* dandru3218
03/10/2024 */

import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'shop':
        return <Shop />;
      case 'reviews':
        return <Reviews />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('shop')}>Shop</li>
          <li onClick={() => setCurrentPage('reviews')}>Reviews</li>
          <li onClick={() => setCurrentPage('contact')}>Contact</li>
        </ul>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
