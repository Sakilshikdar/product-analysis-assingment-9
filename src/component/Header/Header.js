import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div >
            <nav>
                <Link className='link' to="/home">HOME</Link>
                <Link className='link' to="/reviews">REVIEWS</Link>
                <Link className='link' to="/dashboard">DASHBOARD</Link>
                <Link className='link' to="/blogs">BLOGS</Link>
                <Link className='link' to="_blank">ABOUT</Link>
            </nav>

        </div>
    );
};

export default Header;