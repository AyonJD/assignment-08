import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [jewelries, setJewelries] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setJewelries(data))
    }, [])
    // console.log(jewelry);
    return (
        <div className='container'>
            <div className="row grid">
                
                {
                    jewelries.map(jewelry => <Product key = {jewelry.id} jewelry = {jewelry}></Product>)
                }
               
            </div>
        </div>
    );
};

export default Shop;