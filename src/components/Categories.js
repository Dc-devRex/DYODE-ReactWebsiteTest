import React from 'react'
import women from "../images/womens.png"
import womenSm from "../images/womens-sm.png"
import men from "../images/mens.png"
import accessories from "../images/accessories.png"

const Categories = () => {
    return (
        <div className="categoriesContainer">
            <div className="category-cards">
                <div className="categoriesLabels women-heading-mob">
                    <h2 className="categoryheading">Women's</h2>
                </div>
                <img className="womens-image" width="435px" height="570px" src={women} alt="Women's Category" />
            </div>
            <div className="category-cards">
                <div className="categoriesLabels men-heading-mob">
                    <h2 className="categoryheading">Men's</h2>
                </div>
                <img className="mens-image" width="435px" height="570px" src={men} alt="Men's Category" />
            </div>
            <div className="category-cards">
                <div className="categoriesLabels accessories-heading-mob">
                    <h2 className="categoryheading">Accessories</h2>
                </div>
                <img className="accessories-image" width="435px" height="570px" src={accessories} alt="Accessories Category" />
            </div>
        </div>    
    )
}

export default Categories
