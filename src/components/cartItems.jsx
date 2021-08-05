import React from 'react'
import {  FaRegMinusSquare, FaRegPlusSquare, FaTimes } from 'react-icons/fa'

const CartItems = ({src, itemName, alternatives, price, quantity, handleIncrement, handleDecrement}) => {
    return (
        <div className="cart-items">
                    <div className="item-container">
                        <div className='cancel-item-icon'>
                            <FaTimes />
                        </div>
                        <div className="item-image">
                            <img src={src} alt={alternatives} />
                        </div>
                        <div className="item-details">
                            <p className='itemName'>{itemName}</p>
                            <div className='item-quantity'>
                                <button onClick= {handleIncrement}><FaRegPlusSquare className='item-quanlity-icon'/> </button>
                                {quantity} 
                                <button onClick= {handleDecrement}><FaRegMinusSquare  className='item-quanlity-icon'/></button>
                            </div>
                        </div>
                    </div>
                    <div className="item-price" >#{price}</div>
                </div>
    )
}

export default CartItems
