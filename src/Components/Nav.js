import React from 'react';

import './Nav.css';  // Adjust the path according to your project structure

function Nav(props) {
    console.log(props)
    return (
        <nav className="main-nav">
           <div className="greeting">Hello, {props.name},{props.color}</div>
           
             <ul className="main-nav-menu">
             <li className="navbar-item"><a href="#home">{props.first}</a></li>
             <li className="navbar-item"><a href="#articles">{props.second}</a></li>
             <li className="navbar-item"><a href="#about">{props.third}</a></li>
             <li className="navbar-item"><a href="#contact">{props.fourth}</a></li>
            </ul>
            
        </nav>
    );
}

export default Nav;

