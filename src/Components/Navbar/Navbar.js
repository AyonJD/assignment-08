import React from 'react';
import logo from '../image/logo2.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='text-center mt-3 d-flex align-items-center justify-content-center nav-parent'>
            <img className='logo me-4' src={logo} alt="" />
            <h1 className='header'>Jewelry <span>World</span></h1>
        </div>
    );
};

export default Navbar;