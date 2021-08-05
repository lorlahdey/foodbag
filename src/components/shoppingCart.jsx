import React from 'react'
import {  FaRegMinusSquare, FaRegPlusSquare, FaTimes } from 'react-icons/fa'
import '../styles/shoppingCart.css'
import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'
import image3 from '../images/image3.svg'
import scooter  from '../images/scooter 1.svg'



const ShoppingCart = () => {
    return (
        <div className='cart-page'>
            <div className='cart-nav'>
                <p>Home `{'>'}` Cart</p>
            </div>

            <h1>Cart</h1>
            
            <section className='shopping-cart'>
                <div className="cart-items">
                    <div className="item-container">
                        <div className='cancel-item-icon'>
                            <FaTimes />
                        </div>
                        <div className="item-image">
                            <img src={image1} alt="image1" />
                        </div>
                        <div className="item-details">
                            <p className='itemName'>KFC - King Bucket</p>
                            <div className='item-quantity'>
                                <FaRegPlusSquare className='item-quanlity-icon'/> 
                                2 
                                <FaRegMinusSquare  className='item-quanlity-icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="item-price">#10,000</div>
                </div>
                <hr />
                <div className="cart-items">
                    <div className="item-container">
                        <div className='cancel-item-icon'>
                            <FaTimes />
                        </div>
                        <div className="item-image">
                            <img src={image2} alt="image2" />
                        </div>
                        <div className="item-details">
                            <p className='itemName'>Refuel Max</p>
                            <div className='item-quantity'>
                                <FaRegPlusSquare className='item-quanlity-icon'/> 
                                2 
                                <FaRegMinusSquare  className='item-quanlity-icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="item-price">#1,200</div>
                </div>
                <div className="cart-items">
                    <div className="item-container">
                        <div className='cancel-item-icon'>
                            <FaTimes />
                        </div>
                        <div className="item-image">
                            <img src={image3} alt="image3" />
                        </div>
                        <div className="item-details">
                            <p className='itemName'>Refuel Max</p>
                            <div className='item-quantity'>
                                <FaRegPlusSquare className='item-quanlity-icon'/> 
                                2 
                                <FaRegMinusSquare  className='item-quanlity-icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="item-price">#1,300</div>
                </div>
                <div className="cart-items">
                    <div className="delivery-container">
                        <div className="delivery-image">
                            <img src={scooter} alt="" />
                        </div>
                        <p className='delivery-detail'>Delivery fee</p>
                    </div>
                    <div className="item-price">#1,400</div>
                </div>
                <div className="total-amount">
                    <p>Total</p>
                    <p>#13,600</p>
                </div>
                <button className='checkout'>Checkout</button>
            </section>
        </div>
    )
}

export default ShoppingCart
