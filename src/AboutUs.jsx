import React from 'react';
import './AboutUs.css';

function AboutUs({ onBackClick }) {
  const handleBackClick = (e) => {
    e.preventDefault();
    onBackClick();
  };

  return (
    <div className="about-us-container">
      <div className="about-us-card">
        <h1>About Paradise Nursery</h1>

        <p>
          Paradise Nursery was founded on a simple idea: a home feels more
          alive with plants in it. What started as a single greenhouse has
          grown into a small team of growers dedicated to raising healthy,
          resilient houseplants and helping people bring a little more green
          into their everyday lives.
        </p>

        <p>
          Every plant we sell is grown in small batches, without pesticides,
          and cared for by hand from cutting to shipment. We specialize in
          three collections: <strong>air-purifying plants</strong> that work
          quietly in the background to clean the air you breathe,{' '}
          <strong>aromatic and fragrant plants</strong> that fill a room with
          natural scent, and <strong>pet-friendly plants</strong> that are
          safe to grow around curious cats and dogs.
        </p>

        <p>
          Our mission is to make plant parenthood approachable. Every order
          ships with clear care instructions covering light, water, and
          humidity needs, so whether you're a first-time plant owner or a
          seasoned collector, your new plant arrives ready to thrive — not a
          mystery to figure out on your own.
        </p>

        <p>
          Thank you for shopping small and shopping green. We can't wait for
          you to meet your next plant.
        </p>

        <a href="/" onClick={handleBackClick} className="about-us-back-link">
          ← Back to Products
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
