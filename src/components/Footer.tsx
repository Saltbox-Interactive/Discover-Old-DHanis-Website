// Footer.js
import React from 'react';
import './Footer.css';  // Optional if you want to add styles

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p> © {currentYear} Saltbox Interactive. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
