import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartItem.css';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Converts a "$28" style string into a plain number.
  const parseCost = (cost) => parseFloat(String(cost).replace('$', ''));

  // Subtotal for a single line item (unit cost * quantity).
  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  // Grand total across every item in the cart.
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <p>
          {totalQuantity === 0
            ? 'Nothing in here yet.'
            : `${totalQuantity} item${totalQuantity === 1 ? '' : 's'} ready for checkout.`}
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-unit-cost">{item.cost} each</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item)} aria-label="Decrease quantity">
                      -
                    </button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)} aria-label="Increase quantity">
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-item-right">
                  <p className="cart-item-subtotal">${calculateTotalCost(item)}</p>
                  <button className="remove-button" onClick={() => handleRemove(item)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Items</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${calculateTotalAmount()}</span>
            </div>
            <button className="checkout-button" onClick={handleCheckoutShopping}>
              Checkout
            </button>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
