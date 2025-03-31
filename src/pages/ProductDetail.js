import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ProductDetail extends Component {
  render() {
    const productId = parseInt(this.props.params.id);
    const product = this.props.products.find(p => p.id === productId);
    
    if (!product) {
      return <div>Product not found</div>;
    }
    
    // Find similar products (same category, excluding current product)
    const similarProducts = this.props.products.filter(
      p => p.category === product.category && p.id !== product.id
    ).slice(0, 4);
    
    const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    
    return (
      <div className="product-detail">
        <div className="product-main">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="rating">{stars}</div>
            <div className="price">₹{product.price}</div>
            <p className="description">{product.description}</p>
            
            <div className="details">
              <div><strong>Category:</strong> {product.category}</div>
              <div><strong>Subcategory:</strong> {product.subcategory}</div>
              <div><strong>Material:</strong> {product.material}</div>
              <div><strong>Dimensions:</strong> {product.dimensions}</div>
              <div><strong>Weight:</strong> {product.weight}</div>
            </div>
            
            <button 
              className="add-to-cart"
              onClick={() => this.props.addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        
        {similarProducts.length > 0 && (
          <div className="similar-products">
            <h2>Similar Products</h2>
            <div className="products-grid">
              {similarProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={this.props.addToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withParams(ProductDetail);