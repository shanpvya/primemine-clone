import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      products: [
        { id: 1,
          name: 'Personalized Name Keychain',
          price: 199,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Name',
          rating: 5,
          description: 'Custom engraved metal keychain with your name',
          tags: ['personalized', 'name', 'keychain'],
          material: 'Stainless Steel',
          dimensions: '2.5 x 4 cm',
          weight: '15g'
        },
        {
          id: 2,
          name: 'Corporate Logo Keychain',
          price: 249,
          image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Corporate',
          rating: 5,
          description: 'Premium keychain with your company logo',
          tags: ['corporate', 'logo', 'gift'],
          material: 'Brass',
          dimensions: '3 x 5 cm',
          weight: '20g'
        },
        {
          id: 3,
          name: 'Heart Shape Keychain',
          price: 179,
          image: 'https://images.unsplash.com/photo-1611591437281-460914d0f587?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Heart',
          rating: 5,
          description: 'Beautiful heart-shaped keychain for loved ones',
          tags: ['heart', 'love', 'gift'],
          material: 'Stainless Steel',
          dimensions: '3 x 3 cm',
          weight: '12g'
        },
        {
          id: 4,
          name: 'Custom Photo Keychain',
          price: 299,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Photo',
          rating: 5,
          description: 'Keychain with your favorite photo',
          tags: ['photo', 'memory', 'personalized'],
          material: 'Aluminum',
          dimensions: '4 x 6 cm',
          weight: '25g'
        },
        {
          id: 5,
          name: 'Engraved Couple Keychain',
          price: 349,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Couple',
          rating: 5,
          description: 'Matching keychains for couples',
          tags: ['couple', 'love', 'relationship'],
          material: 'Stainless Steel',
          dimensions: '3 x 4 cm',
          weight: '18g'
        },
        {
          id: 6,
          name: 'Custom Initial Keychain',
          price: 219,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Initial',
          rating: 5,
          description: 'Keychain with your initials',
          tags: ['initial', 'monogram', 'personalized'],
          material: 'Brass',
          dimensions: '2.5 x 3.5 cm',
          weight: '15g'
        },
        {
          id: 7,
          name: 'Barcode Keychain',
          price: 199,
          image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Unique',
          rating: 5,
          description: 'Unique barcode design keychain',
          tags: ['unique', 'modern', 'design'],
          material: 'Stainless Steel',
          dimensions: '3 x 5 cm',
          weight: '16g'
        },
        {
          id: 8,
          name: 'Custom GPS Keychain',
          price: 279,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Coordinates',
          rating: 5,
          description: 'Keychain with special location coordinates',
          tags: ['gps', 'coordinates', 'memory'],
          material: 'Aluminum',
          dimensions: '3 x 4 cm',
          weight: '18g'
        },
        {
          id: 9,
          name: 'Personalized Dog Tag',
          price: 229,
          image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Dog Tag',
          rating: 5,
          description: 'Military style dog tag keychain',
          tags: ['military', 'dog tag', 'personalized'],
          material: 'Stainless Steel',
          dimensions: '2 x 3 cm',
          weight: '12g'
        },
        {
          id: 10,
          name: 'Custom Quote Keychain',
          price: 199,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Keychain',
          subcategory: 'Quote',
          rating: 5,
          description: 'Keychain with your favorite quote',
          tags: ['quote', 'inspiration', 'message'],
          material: 'Brass',
          dimensions: '3 x 5 cm',
          weight: '17g'
        },
        // METAL PENS (30 samples)
        {
          id: 11,
          name: 'Executive Engraved Pen',
          price: 299,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Executive',
          rating: 5,
          description: 'Premium metal pen with custom engraving',
          tags: ['executive', 'pen', 'gift'],
          material: 'Brass',
          dimensions: '14 cm',
          weight: '45g'
        },
        {
          id: 12,
          name: 'Corporate Branded Pen Set',
          price: 599,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Corporate',
          rating: 5,
          description: 'Set of 3 branded pens for corporate gifting',
          tags: ['corporate', 'set', 'gift'],
          material: 'Brass',
          dimensions: '14 cm',
          weight: '150g'
        },
        {
          id: 13,
          name: 'Personalized Fountain Pen',
          price: 499,
          image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Fountain',
          rating: 5,
          description: 'Elegant fountain pen with custom engraving',
          tags: ['fountain', 'luxury', 'gift'],
          material: 'Stainless Steel',
          dimensions: '15 cm',
          weight: '50g'
        },
        {
          id: 14,
          name: 'Engraved Ballpoint Pen',
          price: 249,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Ballpoint',
          rating: 5,
          description: 'Smooth writing ballpoint pen with engraving',
          tags: ['ballpoint', 'everyday', 'office'],
          material: 'Aluminum',
          dimensions: '14 cm',
          weight: '35g'
        },
        {
          id: 15,
          name: 'Custom Logo Pen',
          price: 349,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Logo',
          rating: 5,
          description: 'Pen with your company logo',
          tags: ['logo', 'branding', 'corporate'],
          material: 'Brass',
          dimensions: '14 cm',
          weight: '40g'
        },
        {
          id: 16,
          name: 'Personalized Rollerball Pen',
          price: 379,
          image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Rollerball',
          rating: 5,
          description: 'Smooth rollerball pen with your name',
          tags: ['rollerball', 'smooth', 'writing'],
          material: 'Stainless Steel',
          dimensions: '14 cm',
          weight: '42g'
        },
        {
          id: 17,
          name: 'Engraved Anniversary Pen',
          price: 429,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Anniversary',
          rating: 5,
          description: 'Special pen for anniversary gifts',
          tags: ['anniversary', 'celebration', 'luxury'],
          material: 'Brass',
          dimensions: '14 cm',
          weight: '45g'
        },
        {
          id: 18,
          name: 'Custom Date Pen',
          price: 299,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Date',
          rating: 5,
          description: 'Pen engraved with special date',
          tags: ['date', 'memory', 'special'],
          material: 'Aluminum',
          dimensions: '14 cm',
          weight: '38g'
        },
        {
          id: 19,
          name: 'Personalized Graduation Pen',
          price: 349,
          image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Graduation',
          rating: 5,
          description: 'Perfect gift for graduates',
          tags: ['graduation', 'achievement', 'gift'],
          material: 'Stainless Steel',
          dimensions: '14 cm',
          weight: '43g'
        },
        {
          id: 20,
          name: 'Engraved Retirement Pen',
          price: 399,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Metal Pen',
          subcategory: 'Retirement',
          rating: 5,
          description: 'Special pen for retirement gifts',
          tags: ['retirement', 'appreciation', 'gift'],
          material: 'Brass',
          dimensions: '14 cm',
          weight: '46g'
        },
        // MOBILE STANDS (20 samples)
        {
          id: 21,
          name: 'Personalized Wooden Stand',
          price: 349,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Mobile Stand',
          subcategory: 'Wooden',
          rating: 5,
          description: 'Custom engraved wooden mobile stand',
          tags: ['wooden', 'stand', 'personalized'],
          material: 'Wood',
          dimensions: '10 x 15 cm',
          weight: '200g'
        },
        {
          id: 22,
          name: 'Metal Phone Stand',
          price: 299,
          image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
          category: 'Mobile Stand',
          subcategory: 'Metal',
          rating: 5,
          description: 'Durable metal stand for phones',
          tags: ['metal', 'durable', 'adjustable'],
          material: 'Aluminum',
          dimensions: '8 x 12 cm',
          weight: '150g'
        },
        {
          id: 23,
          name: 'Acrylic Phone Stand',
          price: 279,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Mobile Stand',
          subcategory: 'Acrylic',
          rating: 5,
          description: 'Clear acrylic stand for modern look',
          tags: ['acrylic', 'modern', 'minimalist'],
          material: 'Acrylic',
          dimensions: '9 x 14 cm',
          weight: '180g'
        },
        {
          id: 24,
          name: 'Adjustable Tablet Stand',
          price: 399,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Mobile Stand',
          subcategory: 'Tablet',
          rating: 5,
          description: 'Adjustable stand for phones and tablets',
          tags: ['adjustable', 'versatile', 'tablet'],
          material: 'Aluminum',
          dimensions: '12 x 18 cm',
          weight: '250g'
        },
        {
          id: 25,
          name: 'Car Dashboard Stand',
          price: 329,
          image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
          category: 'Mobile Stand',
          subcategory: 'Car',
          rating: 5,
          description: 'Secure stand for car dashboard',
          tags: ['car', 'dashboard', 'secure'],
          material: 'Plastic',
          dimensions: '10 x 15 cm',
          weight: '120g'
        },
        // MAGNETIC BADGES (20 samples)
        {
          id: 26,
          name: 'Corporate ID Badge',
          price: 179,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Magnetic Badge',
          subcategory: 'Corporate',
          rating: 5,
          description: 'Custom magnetic badge for employees',
          tags: ['corporate', 'badge', 'ID'],
          material: 'Plastic/Magnet',
          dimensions: '5 x 8 cm',
          weight: '30g'
        },
        {
          id: 27,
          name: 'Personalized Name Badge',
          price: 149,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Magnetic Badge',
          subcategory: 'Name',
          rating: 5,
          description: 'Custom name badge with magnet',
          tags: ['name', 'badge', 'identification'],
          material: 'Plastic/Magnet',
          dimensions: '5 x 8 cm',
          weight: '30g'
        },
        {
          id: 28,
          name: 'Visitor Pass Badge',
          price: 129,
          image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60',
          category: 'Magnetic Badge',
          subcategory: 'Visitor',
          rating: 5,
          description: 'Temporary visitor pass badge',
          tags: ['visitor', 'temporary', 'pass'],
          material: 'Plastic/Magnet',
          dimensions: '5 x 8 cm',
          weight: '30g'
        },
        {
          id: 29,
          name: 'Event Staff Badge',
          price: 159,
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60',
          category: 'Magnetic Badge',
          subcategory: 'Event',
          rating: 5,
          description: 'Badge for event staff identification',
          tags: ['event', 'staff', 'identification'],
          material: 'Plastic/Magnet',
          dimensions: '5 x 8 cm',
          weight: '30g'
        },
        {
          id: 30,
          name: 'Security Badge',
          price: 199,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60',
          category: 'Magnetic Badge',
          subcategory: 'Security',
          rating: 5,
          description: 'High-security identification badge',
          tags: ['security', 'official', 'identification'],
          material: 'Plastic/Magnet',
          dimensions: '5 x 8 cm',
          weight: '30g'
        }
      ],
      featuredProducts: [],
      corporateProducts: [],
      isAuthenticated: false
    };
    
    // Bind methods to ensure 'this' context
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.setState({
      featuredProducts: this.state.products.filter(p => p.featured).slice(0, 8),
      corporateProducts: this.state.products.filter(p => p.tags.includes('corporate')).slice(0, 8)
    });
  }

  addToCart = (product) => {
    this.setState(prevState => {
      const existingItem = prevState.cart.find(item => item.id === product.id);
      if (existingItem && existingItem.quantity >= 10) {
        alert('Maximum quantity (10) reached for this item');
        return null;
      }
      if (existingItem) {
        return {
          cart: prevState.cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        return {
          cart: [...prevState.cart, { ...product, quantity: 1 }],
          notification: `${product.name} added to cart!`
        };
      }
    });
  };

  removeFromCart = (productId) => {
    this.setState(prevState => ({
      cart: prevState.cart.filter(item => item.id !== productId)
    }));
  };

  updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) {
      alert('Quantity must be between 1 and 10');
      return;
    }
    this.setState(prevState => ({
      cart: prevState.cart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  login = (username, password) => {
    if (username === 'Adithya' && password === '12345678') {
      this.setState({ isAuthenticated: true });
      return true;
    }
    return false;
  };

  logout = () => {
    this.setState({ isAuthenticated: false });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Header 
            cartCount={this.state.cart.reduce((total, item) => total + item.quantity, 0)} 
            isAuthenticated={this.state.isAuthenticated}
            logout={this.logout}
          />
          <Routes>
            <Route path="/login" element={
              this.state.isAuthenticated ? 
                <Navigate to="/" /> : 
                <LoginPage login={this.login} />
            } />
            <Route path="/" element={
              this.state.isAuthenticated ? 
                <Home 
                  products={this.state.products} 
                  featuredProducts={this.state.featuredProducts}
                  corporateProducts={this.state.corporateProducts}
                  addToCart={this.addToCart}
                /> : 
                <Navigate to="/login" />
            } />
            <Route path="/products" element={
              this.state.isAuthenticated ? 
                <Products 
                  products={this.state.products} 
                  addToCart={this.addToCart} 
                /> : 
                <Navigate to="/login" />
            } />
            <Route path="/products/:id" element={
              this.state.isAuthenticated ? 
                <ProductDetail 
                  products={this.state.products} 
                  addToCart={this.addToCart} 
                /> : 
                <Navigate to="/login" />
            } />
            <Route path="/cart" element={
              this.state.isAuthenticated ? 
                <CartPage 
                  cart={this.state.cart} 
                  removeFromCart={this.removeFromCart}
                  updateQuantity={this.updateQuantity}
                /> : 
                <Navigate to="/login" />
            } />
            <Route path="/checkout" element={
              this.state.isAuthenticated ? 
                <CheckoutPage 
                  cart={this.state.cart} 
                /> : 
                <Navigate to="/login" />
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;