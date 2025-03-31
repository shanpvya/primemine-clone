import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

class Products extends Component {
  state = {
    selectedCategory: 'All'
  };

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { products, addToCart } = this.props;
    const { selectedCategory } = this.state;
    
    const categories = ['All', ...new Set(products.map(product => product.category))];
    const filteredProducts = selectedCategory === 'All' 
      ? products 
      : products.filter(product => product.category === selectedCategory);
    
    return (
      <div className="products-page">
        <h1>Our Products</h1>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => this.handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;