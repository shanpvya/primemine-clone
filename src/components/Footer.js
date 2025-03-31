import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-section">
          <h3>WELCOME TO PRINTMINE.IN</h3>
          <p>Welcome to PrintMine, your one-stop shop for personalized gifts, customized gifts, and unique caricatures.</p>
        </div>
        
        <div className="footer-section">
          <h3>REACH OUT TO US</h3>
          <p>Beside HR Tower, Manuas Reality<br />
          Road Agroha Colony Raipur<br />
          Chhattisgarh 482001</p>
          <p>Company Name : HR Enterprises</p>
          <p>order@printmine.in</p>
          <p>+91 6262427271</p>
        </div>
        
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>My Account</li>
            <li>Cancellation & Refund</li>
            <li>Shipping & Delivery Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Collections</h3>
          <ul>
            <li>Metal Keychain</li>
            <li>Mobile Stand</li>
            <li>Metal Pens</li>
            <li>Magnetic Badges</li>
            <li>All</li>
          </ul>
        </div>
        
        <div className="copyright">
          <p>Copyright © 2025 PrintMine.in all rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;