import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, rating, review} = props.review;
    return (
        <div className='review-cart'>
            <h2>Name: {name}</h2>
            <h4>review: {review}</h4>
            <p>rating: {rating}</p>
        </div>
    );
};

export default Cart;