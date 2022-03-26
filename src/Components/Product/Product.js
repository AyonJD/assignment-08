import React from 'react';
import { Card } from 'react-bootstrap';
import { BsCartPlus } from 'react-icons/bs'
import './Product.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Product = ({ jewelry, handleAdToCart }) => {
    const { img, name, price } = jewelry;
    return (
        <div className="single-card"
        data-aos="fade-up"
        data-aos-duration="3000"
        >
            <Card className='mx-auto'>
                <img src={img} alt="" />
                <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    <Card.Text className="card-price">
                        Price: ${price}
                    </Card.Text>
                    <button className='button btn button-size button-hover' onClick={() => handleAdToCart(jewelry)}>
                        <p className='btn-text'>Add to Cart</p><BsCartPlus></BsCartPlus>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;