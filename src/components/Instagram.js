import React from 'react'
import social1 from '../images/social1.png';
import social2 from '../images/social2.png';
import social3 from '../images/social3.png';
import social4 from '../images/social4.png';
import social5 from '../images/social5.png';

const Instagram = () => {
    return (
        <div className="social-container">
          <h1>Follow Us On Instagram</h1>
          <img className="show-mobile1" src={social1}/>
          <img className="show-mobile2" src={social2}/>
          <img className="show-mobile3" src={social3}/>
          <img className="no-show-mobile" src={social4}/>
          <img className="five no-show-mobile" src={social5}/>
        </div>
    )
}

export default Instagram
