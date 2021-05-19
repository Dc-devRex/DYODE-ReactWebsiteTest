import React from 'react';
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'

const Footer = () => {

function handleClickOne() {
    var column = document.getElementsByClassName("first-column");

    for(let i = 0; i < column.length; i++) {
        column[i].addEventListener('click', function() {
            this.classList.toggle('active');
        })
    }
}

function handleClickTwo() {
    var column = document.getElementsByClassName("second-column");

    for(let i = 0; i < column.length; i++) {
        column[i].addEventListener('click', function() {
            this.classList.toggle('active');
        })
    }
}

    return (
        <div className="footer-container">
            <div className="footer-columns">
              <div className="first-column">
                  <p onClick={handleClickOne} className="column-heading">Customer Service</p>
                  <div className="test-div">
                  <ul>
                      <li><a href="#">Accessibility</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Return Policy</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Gift Certificates</a></li>
                      <li><a href="#">Wishlist</a></li>
                  </ul>
                  </div>
              </div>
              <div className="second-column">
                  <p onClick={handleClickTwo} className="column-heading">Company</p>
                  <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Press</a></li>
                      <li><a href="#">Affiliates</a></li>
                  </ul>
              </div>
              <div class="footer-social-section">
                  <p className="column-heading">Follow Us</p>
                  <div className="social-icons">
                    <a href="#">  
                     <img src={facebook} />
                    </a>
                    <a href="#">  
                     <img src={instagram} />
                    </a>
                    <a href="#">  
                     <img src={twitter} />
                    </a>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Footer

