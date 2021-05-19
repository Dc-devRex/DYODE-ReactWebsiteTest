import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const heros = [
    {
      name: 'hero 1',
      heading: "Shop New Arrivals",
      description: "Our coolest new items are waiting for you!",
      className: "hero1"
    },
    {
      name: 'hero 2',
      heading: "Our Fave Tees",
      description: "Shop all of our favorites.",
      className: "hero2"
    },
    {
      name: 'hero 3',
      heading: "Men's Tees",
      description: "Find the perfect shirt.",
      className: "hero3"
    },
  ]

export default class HeroSlider extends Component {

    render() {

        const settings = {
            autoplay: true,
            autoplaySpeed: 2500,
            dots: true,
            arrows: false,
            fade: true,
            isFinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "slides"
          };

      return (
        <div>
          <Slider {...settings}>
          {heros.map((hero) => {
            return (
              <div className={hero.className} >
                <div className="mobile-hero-content">
                  <h1>{hero.heading}</h1>
                  <p>{hero.description}</p>
                  <button class="heroButton">Shop Now</button>
                </div>
              </div>
            )
          })}
          </Slider>
        </div>
      );
    }
}
