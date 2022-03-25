import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'

const Product = ({ jewelry }) => {
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;