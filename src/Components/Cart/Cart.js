import React from 'react';
import './Cart.css'
import { MdDeleteForever } from 'react-icons/md'

const Cart = ({jewelry, deleteBtn}) => {
    return (
        <div className='cart-info-parent'>
            <img className='cart-image' src={jewelry.img} alt="" />
            <h6>{jewelry.name}</h6>
            <MdDeleteForever onClick={() => deleteBtn(jewelry)} className='delete-icon'></MdDeleteForever>
        </div>
    );
};

export default Cart;