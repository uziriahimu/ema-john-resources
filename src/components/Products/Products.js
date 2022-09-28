import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'

const Products = ({ product, handleAddToCart }) => {
    // const [product, handleAddToCart] = props
    const { name, img, seller, price, ratings } = product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings:{ratings} starts</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;