import React from 'react';
import img from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img className='navImg' src={img} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Revieww</a>
                <a href="/inventory">Manage Your Inventory</a>
                
            </nav>
        </div>
    );
};

export default Header;