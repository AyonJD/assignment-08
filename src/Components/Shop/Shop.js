import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [jewelries, setJewelries] = useState([]);
    const [jewelryArr, setJewelryArr] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setJewelries(data))
    }, [])

    let selectedJewelry = [];
    const handleAdToCart = props => {
        selectedJewelry = [...jewelryArr, props];
        setJewelryArr(selectedJewelry)
    }
    // console.log(jewelryArr);
    
    return (
        <div className='container'>
            <div className=" shop-grid">
                <div className="grid">
                    {
                        jewelries.map(jewelry => <Product handleAdToCart = {handleAdToCart} key = {jewelry.id} jewelry = {jewelry}></Product>)
                    }
                </div>
                <div className="cart">
                    <div className="sticky">
                        <h4 className='text-center summery'>Order Summery</h4>
                        <div className="cart-info">
                            {
                                jewelryArr.map(jewelry => <Cart key = {jewelry.id} jewelry={ jewelry }></Cart>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;