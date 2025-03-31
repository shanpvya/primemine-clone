import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartPage extends Component {
  handleQuantityChange = (productId, e) => {
    const newQuantity = parseInt(e.target.value);
    this.props.updateQuantity(productId, newQuantity);
  };

  render() {
    const { cart, removeFromCart } = this.props;
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    return (
      <div className="cart-page">
        <h1>Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/products">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <div className="price">₹{item.price}</div>
                  </div>
                  <div className="quantity-control">
                    <input 
                      type="number" 
                      min="1" 
                      max="10"
                      value={item.quantity} 
                      onChange={(e) => this.handleQuantityChange(item.id, e)}
                    />
                  </div>
                  <div className="item-total">₹{item.price * item.quantity}</div>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>₹50</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{subtotal + 50}</span>
              </div>
              
              <Link to="/checkout" className="checkout-button">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default CartPage;