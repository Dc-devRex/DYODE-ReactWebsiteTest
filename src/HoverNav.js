import React from 'react'
import hoverMens from "../src/images/hover-mens.png"

const HoverNav = () => {
    return (
        <div>
            <div className="hover-nav">
                  <div className="left-block">
                    <div class="left-block-img">
                      <img src={hoverMens} />
                    </div>
                    <div class="left-block-links">
                      <ul>
                        <li><a className="left-block-anchors" href="/">Shop All</a></li>
                        <li><a className="left-block-anchors" href="/">New Arrivals</a></li>
                        <li><a className="left-block-anchors" href="/">Favorites</a></li>
                        <li><a className="left-block-anchors" href="/">Sale</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-block">
                    <p>Tops</p>
                    <div className="right-block-left">
                      <ul>
                        <li><a className="right-block-left-anchors" href="/">T-Shirts</a></li>
                        <li><a className="right-block-left-anchors" href="/">Short Sleeve</a></li>
                        <li><a className="right-block-left-anchors" href="/">Long Sleeve</a></li>
                      </ul>
                    </div>
                    <p className="second-subhead-nav">Bottoms</p>
                    <div className="right-block-right">
                      <ul>
                        <li><a className="right-block-right-anchors" href="/">Shorts</a></li>
                        <li><a className="right-block-right-anchors" href="/">Pants</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default HoverNav
