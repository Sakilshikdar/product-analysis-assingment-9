import React from 'react';
import './Home.css'

const Home = () => {
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
                <button className='review-btn'>see all reviews</button>
            </div>
        </div>
    );
};

export default Home;