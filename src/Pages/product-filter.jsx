import React from "react";
import '../CSS/product-filter.css';
import Product1 from '../assests/product-1.jpeg'; 


const ProductFilter = () => {
    return (
        <div id="product-filter-container">
            <div className="filter-container">
                <div className="top-products">
                    <p className="filter-title">Top Rated Products</p>

                <div className="product-card --card">

                <div className="img-container">
                <img src={Product1} alt="product-img" className="product-img --img"/>
                </div>

                <div className="products-details --details">
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
                </div>
           
                </div>
            </div>
                    
                </div>
                


                <div className="special-offers">
                    <p className="filter-title">Special Offers</p>

                    <div className="product-card --card">

                <div className="img-container">
                <img src={Product1} alt="product-img" className="product-img --img"/>
                </div>

                <div className="products-details --details">
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
                </div>
           
                </div>
            </div>
                </div>

                <div className="best-sellers">
                    <p className="filter-title">Best sellers</p>

                    <div className="product-card --card">

                <div className="img-container">
                <img src={Product1} alt="product-img" className="product-img --img"/>
                </div>

                <div className="products-details --details">
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
                </div>
           
                </div>
            </div>
                </div>


               
           </div>

           {/* <div className="product-card --card">

                <div className="img-container">
                <img src={Product1} alt="product-img" className="product-img --img"/>
                </div>

                <div className="products-details">
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
                </div>
           
                </div>
            </div> */}
        </div>
    );
}

export default ProductFilter;
