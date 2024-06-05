import React from "react";
import '../CSS/product.css';
import Product1 from '../assests/product-1.jpeg'; 
import QuickView from '../assests/quickview.svg';
import CartIcon from '../assests/cart.svg';

const Product = () => {
    return (
        <div id="feature-products-container">
           <div className="feature-products-header">
            <div className="feature-products-flexbox">
                <p className="products-heading">Featured Products</p>
            </div>

            <div className="feature-products--flexbox">
                <ul>
                    <li className="all-button">All</li>
                    <li className="li">Power Tools</li>
                    <li className="li">Hand Tools</li>
                    <li className="li">Plumbing</li>
                    <li><i className="fa-solid fa-angle-left"></i></li>
                    <li><i className="fa-solid fa-angle-right"></i></li>
                </ul>
            </div>
           </div>

           <div className="product-card">
                <div className="img-container">
                <div className="quick">
                <p className="all--button">HOT</p>
                <img src={QuickView} alt="quick-view" className="quick-view"/>
                </div>
                <img src={Product1} alt="product-img" className="product-img"/>
                </div>
               
                <p className="product-model">SKU: A43-443328-B</p>
                <p className="product-title">Glossy Gray 19' Aluminium Wheel AR-19</p>
                <div className="review-box">
                <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                </div>

                <div>
                    <p className="review-count">26 Reviews</p>
                </div>
                </div>

                <div className="price-cart">
                <p className="price">&#8377;400</p>
                <img src={CartIcon} alt="cart-icon" className="cart-icon"/>
                </div>
           </div>
        </div>
    )
}

export default Product;