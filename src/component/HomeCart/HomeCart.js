import React from 'react'; 
import './Home Cart.css'

const HomeCart = (props) => {
        const {name, rating, review} = props.review;
        return (
            <div className='review-cart'>
                <h2>Name: {name}</h2>
                <h4>review: {review}</h4>
                <p>rating: {rating}</p>
        </div>
    );
};

export default HomeCart;