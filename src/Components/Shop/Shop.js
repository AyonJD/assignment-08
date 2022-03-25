import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { ImCross } from 'react-icons/im'
import Modal from 'react-modal';

//Modal styles
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

const Shop = () => {
    const [jewelries, setJewelries] = useState([]);
    const [jewelryArr, setJewelryArr] = useState([]);
    const [drawItem, setDrawItem] = useState({})

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
    const draw = array => {
        const random = Math.floor(Math.random() * array.length)
        const luckyProductArr = jewelryArr[random]
        setDrawItem(luckyProductArr)
        openModal()
    }
    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    //Modal open function
    function openModal() {
        setIsOpen(true);
    }
    // Modal close function
    function closeModal() {
        setIsOpen(false);
    }
    
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
                            <div className="text-center group">

                                {/* Modal body-----------------> */}
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal">
                                        <ImCross className='cross' onClick={closeModal}></ImCross>
                                        <h1>modal</h1>
                                    </Modal>

                                <button className='btn w-75 my-3' onClick={() => draw(jewelryArr)}>Lucky Draw</button>
                                <button className='btn w-75'>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;