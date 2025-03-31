import React, { Component } from 'react';

class Testimonial extends Component {
  render() {
    const stars = '★'.repeat(this.props.rating) + '☆'.repeat(5 - this.props.rating);
    
    return (
      <div className="testimonial">
        <div className="rating">{stars}</div>
        <p className="text">{this.props.text || "Great product and service!"}</p>
        <p className="name">- {this.props.name}</p>
      </div>
    );
  }
}

export default Testimonial;