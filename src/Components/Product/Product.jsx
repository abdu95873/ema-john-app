import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, quantity, price, ratings}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h5 className='product-name'>{name}</h5>
            <p>Price: ${price}</p>
            <p>Menufacturer: {seller}</p>
            <p>Rating: {ratings} Star</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;