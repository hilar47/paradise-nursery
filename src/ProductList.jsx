import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductList.css';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

// Product catalog, grouped by category.
// `image` holds an inline SVG data URI so the app has no external
// image dependencies and works immediately after cloning the repo.
const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: makeLeafSvg('#2F5233', '#B5714A'),
        description:
          'Tough, upright leaves that keep filtering the air while you sleep.',
        cost: '$28',
      },
      {
        name: 'Peace Lily',
        image: makeLeafSvg('#3B6B4A', '#E8DCC0'),
        description:
          'Glossy leaves and quiet white blooms that thrive in low light.',
        cost: '$24',
      },
      {
        name: 'Spider Plant',
        image: makeLeafSvg('#4F7A3D', '#8C8272'),
        description:
          'Arching, striped leaves that send out little plantlets over time.',
        cost: '$18',
      },
    ],
  },
  {
    category: 'Aromatic & Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: makeLeafSvg('#7C8863', '#C9A227'),
        description:
          'Silvery stems and fragrant purple blooms for calm, sunny windowsills.',
        cost: '$22',
      },
      {
        name: 'Rosemary',
        image: makeLeafSvg('#4B6B4C', '#9C7A54'),
        description:
          'Needle-like leaves with a warm, piney fragrance, right by the kitchen.',
        cost: '$16',
      },
      {
        name: 'Jasmine',
        image: makeLeafSvg('#3E6146', '#C7C0AC'),
        description:
          'A gentle climbing vine with small white flowers that open at dusk.',
        cost: '$26',
      },
    ],
  },
  {
    category: 'Pet-Friendly Plants',
    plants: [
      {
        name: 'Areca Palm',
        image: makeLeafSvg('#3E7A4A', '#7A5B44'),
        description:
          'Feathery fronds that bring an airy, tropical feel to any corner.',
        cost: '$32',
      },
      {
        name: 'Boston Fern',
        image: makeLeafSvg('#33613A', '#B79A6F'),
        description:
          'Lush, feathery fronds that love a humid windowsill or bathroom.',
        cost: '$20',
      },
      {
        name: 'Calathea',
        image: makeLeafSvg('#345E36', '#A15B3E'),
        description:
          "Patterned leaves that fold up at night, like tiny hands closing.",
        cost: '$25',
      },
    ],
  },
];

// Builds a small inline-SVG "potted plant" illustration as a data URI.
function makeLeafSvg(leafColor, potColor) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <path d='M35 84 L65 84 L60 96 Q50 99 40 96 Z' fill='${potColor}'/>
      <ellipse cx='50' cy='84' rx='16' ry='4' fill='${potColor}'/>
      <line x1='50' y1='84' x2='50' y2='60' stroke='${leafColor}' stroke-width='3'/>
      <path d='M50 60 Q30 50 28 28 Q46 34 50 60 Z' fill='${leafColor}'/>
      <path d='M50 60 Q70 50 72 28 Q54 34 50 60 Z' fill='${leafColor}'/>
      <path d='M50 55 Q40 38 44 18 Q56 32 50 55 Z' fill='${leafColor}'/>
    </svg>
  `;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState({});
  const [view, setView] = useState('products'); // 'products' | 'cart' | 'about'

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  const handleCartClick = () => setView('cart');
  const handleAboutClick = (e) => {
    e.preventDefault();
    setView('about');
  };
  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setView('products');
  };

  if (view === 'cart') {
    return <CartItem onContinueShopping={handleContinueShopping} />;
  }

  if (view === 'about') {
    return <AboutUs onBackClick={() => setView('products')} />;
  }

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <button className="brand-button" onClick={onHomeClick}>
          🌿 Paradise Nursery
        </button>
        <div className="nav-links">
          <a href="/" onClick={handleAboutClick} className="nav-link">
            About Us
          </a>
          <button className="cart-icon-button" onClick={handleCartClick}>
            🛒 Cart
            <span className="cart-count">{totalQuantity}</span>
          </button>
        </div>
      </nav>

      <div className="listing-header">
        <h1>Shop the Collection</h1>
        <p>
          Nine plants across three collections, each raised for a different
          job in your home.
        </p>
      </div>

      {plantsArray.map((categoryGroup) => (
        <div className="category-section" key={categoryGroup.category}>
          <h2 className="category-title">{categoryGroup.category}</h2>
          <div className="product-grid">
            {categoryGroup.plants.map((plant) => (
              <div className="product-card" key={plant.name}>
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />
                <div className="product-card-body">
                  <h3>{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <div className="product-card-footer">
                    <span className="product-cost">{plant.cost}</span>
                    <button
                      className={
                        addedItems[plant.name]
                          ? 'add-to-cart-button added'
                          : 'add-to-cart-button'
                      }
                      onClick={() => handleAddToCart(plant)}
                      disabled={!!addedItems[plant.name]}
                    >
                      {addedItems[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
