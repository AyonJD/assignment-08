import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { ImCross } from 'react-icons/im'
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



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
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setJewelries(data))
    }, [])

    let selectedJewelry = [];
    const handleAdToCart = props => {
        if (jewelryArr.length > 3) {
            //Sweet alert-------------------------->
            MySwal.fire({
                didOpen: () => {
                  MySwal.clickConfirm()
                }
              }).then(() => {
                return MySwal.fire(<p>Sorry! You can't add more that 4 products...</p>)
              })
            // Sweet alert end------------------------------>
            return;
        } else {
            selectedJewelry = [...jewelryArr, props];
            setJewelryArr(selectedJewelry);
        }
        
    }
    const draw = array => {
        //Lucky draw logic----------------->
        if (array.length === 0) {
            return;
        } else {
            const random = Math.floor(Math.random() * array.length)
            const luckyProductArr = jewelryArr[random]
            setDrawItem(luckyProductArr)
            openModal()
        }
    }
    const reset = () => {
        setJewelryArr([])
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
                                        <img className='modal-image' src={drawItem.img} alt="" />
                                        <h3 className='modal-header py-0 mb-0'>{drawItem.name}</h3>
                                        <h4 className='modal-header py-2'>${drawItem.price}</h4>
                                        <button className='order-now btn my-3' onClick={closeModal}>Order Now</button>
                                    </Modal>
                                    {/* ========================== */}
                                    {/* Lucky Draw and Reset button */}
                                    <button className='btn w-75 my-3 button-size' onClick={() => draw(jewelryArr)}>Lucky Draw</button>
                                    <button className='btn w-75 button-size' onClick={reset}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;