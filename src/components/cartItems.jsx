import React from 'react'
import {  FaRegMinusSquare, FaRegPlusSquare, FaTimes } from 'react-icons/fa'

const CartItems = ({src, itemName, alternatives, value, price, quantity, handleIncrement, handleDecrement}) => {
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
                        <FaRegPlusSquare 
                            className='item-quanlity-icon'
                            onClick={ handleIncrement}
                        /> 
                        <p> {quantity} </p> 
                        <FaRegMinusSquare  
                            className='item-quanlity-icon'
                            onClick={handleDecrement}
                        />
                    </div>
                </div>
            </div>
            <div className="item-price" value={value}>#{value * quantity}</div>
        </div>
    )
}

export default CartItems
