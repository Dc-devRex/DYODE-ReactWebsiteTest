import React from 'react';
import envelope from '../images/envelope.png';

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="signup-heading">
              <img width="40px" height="30px" src={envelope}/>
              <h2>Sign Up & Stay Connected</h2>
            </div>
            <div className="signup-cta">
              <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
              <input type="email" placeholder="Enter Your Email Address" />
              <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Signup
