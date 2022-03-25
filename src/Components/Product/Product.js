import React from 'react';
import { Card } from 'react-bootstrap';
import { BsCartPlus } from 'react-icons/bs'
import './Product.css'

const Product = ({ jewelry, handleAdToCart }) => {
    const { img, name, price } = jewelry;
    return (
        <div className="single-card">
            <Card className='mx-auto'>
                <img src={img} alt="" />
                <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <button className='button btn button-size' onClick={() => handleAdToCart(jewelry)}>
                        <p className='btn-text'>Add to Cart</p><BsCartPlus></BsCartPlus>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;