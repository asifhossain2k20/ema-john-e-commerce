import React from 'react';
import './Poduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ReactStars from 'react-rating-stars-component';
const cartIcon =<FontAwesomeIcon icon={faShoppingCart} />

const Product = (props) => {
    const {name,img,seller,price,stock,star}=props.product;
    const firstExample = {
        size: 30,
        value: star,
        edit: false
      };
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Seller: {seller}</p>
                <h5>${price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
                <ReactStars {...firstExample} />
                <button className='btn-regular' onClick={()=>{
                    props.handleAddToCart(props.product);
                }}>{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;