import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, addToCart } = this.props;
    const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    
    return (
      <div className="product-card">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <div className="rating">{stars}</div>
          <div className="price">₹{product.price}</div>
        </Link>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  }
}

export default ProductCard;