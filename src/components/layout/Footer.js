import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Connecting NGOs with people who want to make a difference. Join us in creating positive change in communities across India.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/browse-ngos">Browse NGOs</a></li>
                        <li><a href="/post-ngo">Register NGO</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>📧 info@ngoportal.com</li>
                        <li>📞 +91 123 456 7890</li>
                        <li>📍 Bangalore, India</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} NGO Portal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
