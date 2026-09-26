import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  if (showProducts) {
    return <ProductList onHomeClick={() => setShowProducts(false)} />;
  }

  return (
    <div className="landing-page">
      <div className="background-image">
        <div className="content">
          <div className="landing_content">
            <h1>Paradise Nursery</h1>
            <div className="divider"></div>
            <p>
              Where Green Meets Serenity. Bring nature home with our
              hand-raised, air-purifying, and fragrant houseplants — grown
              with care, delivered with love.
            </p>
            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
