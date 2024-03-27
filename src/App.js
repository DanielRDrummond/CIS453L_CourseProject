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
          <li className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Home</li>
          <li className={currentPage === 'shop' ? 'active' : ''} onClick={() => setCurrentPage('shop')}>Shop</li>
          <li className={currentPage === 'reviews' ? 'active' : ''} onClick={() => setCurrentPage('reviews')}>Reviews</li>
          <li className={currentPage === 'contact' ? 'active' : ''} onClick={() => setCurrentPage('contact')}>Contact</li>
        </ul>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
