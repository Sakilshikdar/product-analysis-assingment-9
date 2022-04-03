import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/Reviews';
import HomeCart from '../HomeCart/HomeCart';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()
    const navigate = useNavigate()

    const handleReviewPage = () =>{
        const path = '/reviews'
        navigate(path)
    }
    return (
        <div >
           <div className='home'>
           <div>
            <h1>Our next product
                <br />
                <small className='t-shirt'>Your best T-shirt</small>
            </h1>
            <p className='product-title'>This is a gorgias product only for you . If you want to see product detail sothe go the customer reviews. For your kind information have a dasent discount. </p>
            </div>
            <div className='home-img'> 
            <img src="https://5.imimg.com/data5/SH/GC/MY-8764775/mens-t-shirt-500x500.jpg" alt="" />
            </div>
           </div>
            <div className='home-review'>
                <h1 className='review-part'>Customer Reviews(3)</h1>
                {
                    reviews.slice(0, 3).map(review => <HomeCart
                    key = {review.id}
                    review= {review}
                    >
                    </HomeCart>)
                }
                <button onClick={handleReviewPage} className='review-btn'>see all reviews</button>
            </div>
        </div>
    );
};

export default Home;