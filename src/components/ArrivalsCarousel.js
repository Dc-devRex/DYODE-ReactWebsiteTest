import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import newArrival from "../images/new-arrival.png";

const arrivals = [
    {
      name: 'arrival1',
      image: <img src={newArrival}/>,
      title: "Product Title",
      detail: "Women's t-shirt",
      price: 19.99
    },
    {
      name: 'arrival2',
      image: <img src={newArrival}/>,
      title: "Product Title",
      detail: "Women's t-shirt",
      price: 19.99
    },
    {
      name: 'arrival3',
      image: <img src={newArrival}/>,
      title: "Product Title",
      detail: "Women's t-shirt",
      price: 19.99
    },
    {
        name: 'arrival4',
        image: <img src={newArrival}/>,
        title: "Product Title",
        detail: "Women's t-shirt",
        price: 19.99
      },
      {
        name: 'arrival1',
        image: <img src={newArrival}/>,
        title: "Product Title",
        detail: "Women's t-shirt",
        price: 19.99
      },
      {
        name: 'arrival2',
        image: <img src={newArrival}/>,
        title: "Product Title",
        detail: "Women's t-shirt",
        price: 19.99
      },
      {
        name: 'arrival3',
        image: <img src={newArrival}/>,
        title: "Product Title",
        detail: "Women's t-shirt",
        price: 19.99
      },
      {
          name: 'arrival4',
          image: <img src={newArrival}/>,
          title: "Product Title",
          detail: "Women's t-shirt",
          price: 19.99
        }
  ]

export default class ArrivalSlider extends Component {

    render() {

        const settings = {
            autoplay: false,
            autoplaySpeed: 3000,
            dots: false,
            arrows: true,
            fade: false,
            isFinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            className: "slides",
            responsive: [
              {
                breakpoint: 425,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true
                }
              }
            ]
          };

      return (
        <div className="arrivals-container">
          <h1><span className="arrival-mobile-heading">Shop</span> New Arrivals</h1>
          <Slider {...settings}>
          {arrivals.map((arrival) => {
            return (
              <div className="arrivals" >
                {arrival.image}
                <p className="arrivalTitle">{arrival.title}</p>
                <p className="arrivalDetail">{arrival.detail}</p>
                <p className="arrivalPrice"><span className="dollarSign">$</span>{arrival.price}</p>
              </div>
            )
          })}
          </Slider>
        </div>
      );
    }
}