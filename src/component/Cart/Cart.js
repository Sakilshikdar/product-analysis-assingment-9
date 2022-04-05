import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'

const Cart = (props) => {
    const {name, rating, review} = props.review;
    
    return (
        <div className='review-cart'>
            <h2>Name: {name}</h2>
            <h4>review: {review}</h4>
            <p className='rating'>rating: {rating}<small className='rating-icon'><FontAwesomeIcon icon={faStar} /></small></p>
        </div>
    );
};

export default Cart;