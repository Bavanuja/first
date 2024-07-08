import React from 'react';

import './Nav.css';  // Adjust the path according to your project structure

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#articles">Articles</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;

