import React from 'react';
import useReviews from '../../hooks/Reviews';
import Cart from '../Cart/Cart';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='cart-title'>
                    <h1>This is review side</h1>
                </div>
               <div className='reviews-cart'>
               {
                    reviews.map(review => <Cart
                        key={review.id}
                        review={review}
                    ></Cart>)
                }
               </div>
        </div>
    );
};

export default Reviews;