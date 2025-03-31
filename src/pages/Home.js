import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import Testimonial from '../components/Testimonial';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="hero">
          <h1>EVERY GIFT TELLS A STORY</h1>
          <p>Personalized gifts that make your moments memorable</p>
        </section>
        
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {this.props.featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={this.props.addToCart}
              />
            ))}
          </div>
        </section>
        
        <section className="testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <Testimonial name="Rajesh Kumar P." rating={5} text="Excellent quality and fast delivery!" />
            <Testimonial name="Swathi..." rating={5} text="Loved the personalized keychain!" />
            <Testimonial name="Manish A." rating={5} text="Great customer service." />
            <Testimonial name="Jyoti S." rating={5} text="Will definitely order again." />
            <Testimonial name="Sakshi S." rating={5} text="Perfect gift for my friend." />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;