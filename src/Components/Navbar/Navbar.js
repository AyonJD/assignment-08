import React from 'react';
import logo from '../image/logo2.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='text-center'>
            <img className='w-25' src={logo} alt="" />
        </div>
    );
};

export default Navbar;