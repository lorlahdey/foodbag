import React from 'react'
import { useState } from 'react';
import {  FaRegMinusSquare, FaRegPlusSquare, FaTimes } from 'react-icons/fa'
import '../styles/shoppingCart.css'
import image1 from '../images/image1.svg'
import image3 from '../images/image3.svg'
import image4 from '../images/image4.svg'
import scooter  from '../images/scooter 1.svg'
import CartItems from './cartItems'




const ShoppingCart = () => {
    
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    let decreaseQuantity = () => {
        setQuantity( quantity - 1);
    }

    if (quantity <=0) {
        decreaseQuantity = () => setQuantity(1);
    }

    return (
        <div className='cart-page'>
            
            <h1>Cart</h1>
            
            <section className='shopping-cart'>
                <CartItems 
                    src={image1}
                    alternatives='image1'
                    itemName='KFC - King Bucket'
                    handleIncrement= {increaseQuantity}
                    quantity={quantity}
                    handleDecrement= {decreaseQuantity}
                    value='11000'
                />
                <hr />
                <CartItems 
                    src={image3}
                    alternatives='image3'
                    itemName='Refuel Max'
                    handleIncrement= {increaseQuantity}
                    quantity={quantity}
                    handleDecrement= {decreaseQuantity}
                    value='1200'
                />
                <hr />
                <CartItems 
                    src={image4}
                    alternatives='image4'
                    itemName='Refuel Max'
                    value='1000'
                    handleIncrement= {increaseQuantity}
                    quantity={quantity}
                    handleDecrement= {decreaseQuantity}
                />
                <hr />
                <div className="cart-items">
                    <div className="delivery-container">
                        <div className="delivery-image">
                            <img src={scooter} alt="" />
                        </div>
                        <p className='delivery-detail'>Delivery fee</p>
                    </div>
                    <div className="item-price">#1,400</div>
                </div>
                <hr />
                <div className="total-amount">
                    <p>Total</p>
                    <p>#13,600</p>
                </div>
                <div className='checkout'>
                    <button >Checkout</button>
                </div>
            </section>
        </div>
    )
}

export default ShoppingCart
