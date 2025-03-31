import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">PrintMine.in</Link>
        </div>
        <nav className="nav">
          {this.props.isAuthenticated ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart ({this.props.cartCount})</Link>
              <button onClick={this.props.logout} className="logout-btn">Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </header>
    );
  }
}

export default Header;