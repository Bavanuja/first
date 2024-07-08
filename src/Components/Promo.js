import React from 'react';
import './Promo.css';  // Adjust the path according to your project structure

function Promo(props) {
    console.log(props);
    return (
        <div className="promo-section">
            <>
                <h1>{props.note},Don't miss this deal!</h1>
            </>
            <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
}

export default Promo;
