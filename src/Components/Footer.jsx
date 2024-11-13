// Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>FitLife Gym</h2>
          <p>Your journey to a healthier, stronger life starts here.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#main">Join-Now</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Fitness St, Workout City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@fitlifegym.com</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <h4>Join Our Newsletter</h4>
          <p>Stay updated on new classes and offers!</p>
          <form>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} FitLife Gym. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
