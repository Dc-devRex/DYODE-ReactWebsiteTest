import React, { useState } from 'react'
import mobileMenu from "../images/mobileMenuIcon.png"
import logo from '../images/logo.png'
import search from '../images/search.png'
import user from '../images/user.png'
import cart from '../images/cart.png'
import SearchBar from "./SearchBar"
import HoverNav from '../HoverNav'
import hoverMens from "../images/hover-mens.png"
import closeMenu  from "../images/closeMenu.png"

const Navbar = () => {

  const[isShown, setIsShown] = useState(false);
  const[isShownMob, setMob] = useState(false);
  const[showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  }

  const toggleSub = () => {
    setIsShown(!isShown);
  }

  const toggleMob = () => {
    setMob(!isShownMob);
  }
  
        return (
         <div class="nav-container">
               <div className="mobile-menu">
                 <a href="#">
                     <img 
                       onClick={toggleMob} 
                       src={mobileMenu} 
                       alt="Mobile Menu"
                      />
                 </a>
               </div>
               <div class="logo">
                 <a href="/">
                    <img className="mobile-logo" width="55px" height="45px" src={logo} alt="Logo" />
                    <img className="desktop-logo" src={logo} alt="Logo" />
                 </a>
               </div>
               <div class="nav-links">
                <ul id="nav">
                    <li><a
                         className="mens-link"
                         onClick={toggleSub}
                         href="#">Men's</a></li>
                    <li><a href="#">Women's</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Sale!</a></li>
                </ul>
               </div>
               <div class="nav-icons">
                    <a href="#">
                      <img  
                        onClick={toggleSearch}
                        src={search} 
                        alt="Search" 
                      />
                    </a>
                    <a href="#">
                     <img src={user} alt="Account Owner Body" />
                    </a>
                    <a href="#">
                      <img src={cart} alt="Shopping Cart" />
                    </a>
               </div>

               {isShown && (
                 <HoverNav />
                )}

               {isShownMob && (
                 <div className="hover-nav-mob">
                   <img onClick={toggleMob} className="closeMenuIcon" src={closeMenu} />
                     <div className="left-block-mob">
                       <div class="left-block-img-mob">
                         <img src={hoverMens}/>
                       </div>
                     <div class="left-block-links-mob">
                       <ul>
                         <li><a className="left-block-anchors-mob" href="/">Shop All</a></li>
                         <li><a className="left-block-anchors-mob" href="/">New Arrivals</a></li>
                         <li><a className="left-block-anchors-mob" href="/">Favorites</a></li>
                         <li><a className="left-block-anchors-mob" href="/">Sale</a></li>
                       </ul>
                     </div>
                   </div>
                   <div className="right-block-mob">
                     <p>Tops</p>
                     <div className="right-block-left-mob">
                       <ul>
                         <li><a className="right-block-left-anchors-mob" href="/">T-Shirts</a></li>
                         <li><a className="right-block-left-anchors-mob" href="/">Short Sleeve</a></li>
                         <li><a className="right-block-left-anchors-mob" href="/">Long Sleeve</a></li>
                       </ul>
                     </div>
                     <p className="second-subhead-nav-mob">Bottoms</p>
                     <div className="right-block-right-mob">
                       <ul>
                         <li><a className="right-block-right-anchors-mob" href="/">Shorts</a></li>
                         <li><a className="right-block-right-anchors-mob" href="/">Pants</a></li>
                       </ul>
                     </div>
                   </div>
                 </div>
                )}

               {showSearch && (
                 <SearchBar showSearch={showSearch} toggle={toggleSearch} />
               )}
         </div>
        );
}

export default Navbar
