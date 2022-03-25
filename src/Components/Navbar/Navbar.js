import React from 'react';
import logo from '../image/logo2.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='text-center mt-2'>
            <img className='logo' src={logo} alt="" />
        </div>
    );
};

export default Navbar;