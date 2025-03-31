import React, { Component } from 'react';

class CheckoutPage extends Component {
  state = {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'cod'
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the order to a backend
    alert('Order placed successfully!');
  };

  render() {
    const { cart } = this.props;
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal + 50; // Adding shipping
    
    return (
      <div className="checkout-page">
        <h1>Checkout</h1>
        
        <div className="checkout-container">
          <form className="checkout-form" onSubmit={this.handleSubmit}>
            <h2>Shipping Information</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={this.state.email} 
                onChange={this.handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea 
                name="address" 
                value={this.state.address} 
                onChange={this.handleInputChange} 
                required 
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input 
                  type="text" 
                  name="city" 
                  value={this.state.city} 
                  onChange={this.handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input 
                  type="text" 
                  name="state" 
                  value={this.state.state} 
                  onChange={this.handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>ZIP Code</label>
                <input 
                  type="text" 
                  name="zip" 
                  value={this.state.zip} 
                  onChange={this.handleInputChange} 
                  required 
                />
              </div>
            </div>
            
            <h2>Payment Method</h2>
            <div className="payment-methods">
              <label>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="cod" 
                  checked={this.state.paymentMethod === 'cod'} 
                  onChange={this.handleInputChange} 
                />
                Cash on Delivery
              </label>
              <label>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="card" 
                  checked={this.state.paymentMethod === 'card'} 
                  onChange={this.handleInputChange} 
                />
                Credit/Debit Card
              </label>
            </div>
            
            <button type="submit" className="place-order-button">
              Place Order
            </button>
          </form>
          
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <span>{item.name} × {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>₹50</span>
              </div>
              <div className="total-row grand-total">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutPage;