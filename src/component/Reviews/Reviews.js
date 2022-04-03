import React from 'react';
import useReviews from '../../hooks/Reviews';
import Cart from '../Cart/Cart';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
                <div className='card-title'>
                    <h1>This is review side</h1>
                </div>
            {
                reviews.map(review => <Cart
                key = {review.id}
                review={review}
                ></Cart> )
            }
            <div>
                
            </div>
        </div>
    );
};

export default Reviews;