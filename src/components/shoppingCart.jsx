import React from 'react'
import { useState } from 'react';
import {  FaRegMinusSquare, FaRegPlusSquare, FaTimes} from 'react-icons/fa'
import '../styles/shoppingCart.css'
import scooter  from '../images/scooter 1.svg'

const cartArray = [
    {
        id: 1,
        imageSrc: '../images/image1.svg',
        itemName: 'KFC - King Bucket',
        quantity: 1,
        value: 10000,
    },
    {
        id: 2,
        imageSrc: '../images/image3.svg',
        itemName: 'Refuel Max',
        quantity: 1,
        value: 1200,
    },
    {
        id: 3,
        imageSrc: '../images/image4.svg',
        itemName: 'Refuel Max',
        quantity: 1,
        value: 1000,
    },
]

const ShoppingCart = () => {
    const [ cartItems, SetCartItems ] = useState(cartArray)
    const deleiveryPrice = 1400

    const removeCartItem = (id) => {
        const newcartItems = cartItems.filter(cartItem => cartItem.id !== id) 
        SetCartItems(newcartItems)
    }

    const increaseQuantity = index => {
        const newCartItems = [...cartItems]
        newCartItems[index].quantity++
        SetCartItems(newCartItems)
    }
    
    const decreaseQuantity =  (index) => {
        const newCartItems = [...cartItems]
        if (newCartItems[index].quantity >= 1)
            newCartItems[index].quantity--
            SetCartItems(newCartItems)
    }

    const sumOverallPrice =[]
    cartItems.map(item => {
        let overallPrice = item.quantity * item.value
        sumOverallPrice.push(overallPrice)
        return sumOverallPrice
    })
    const total = sumOverallPrice.reduce((acc, curr) => acc + curr, 0)

    return (
        <div className='cart-page'>

            <div className='cart-nav'>Home {'>'} <span> Cart</span> </div> 
            <h1>Cart</h1>
            <section className='shopping-cart'>
                {
                    cartItems.map((item, index ) => {
                        return (
                            <>
                                <div className="cart-items" key={item.id}>
                                    <div className="item-container">
                                        <div className='cancel-item-icon' onClick={() => removeCartItem(item.id) } >
                                            <FaTimes />
                                        </div>
                                        <div className="item-image">
                                            <img src={item.imageSrc} alt='itemPicture' />
                                        </div>
                                        <div className="item-details">
                                            <p className='itemName'>{item.itemName}</p>
                                            <div className='item-quantity'>
                                                <FaRegPlusSquare 
                                                    className='item-quanlity-icon'
                                                    onClick={() => increaseQuantity(index)}
                                                /> 
                                                <p> {item.quantity} </p> 
                                                <FaRegMinusSquare  
                                                    className='item-quanlity-icon'
                                                    onClick={(e) => decreaseQuantity(index)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-price" ># {(item.value * item.quantity).toLocaleString()}</div>
                                </div>
                                <hr />
                            </>
                        )
                    })
                }

                <div className="cart-items">
                    <div className="delivery-container">
                        <div className="delivery-image">
                            <img src={scooter} alt="" />
                        </div>
                        <p className='delivery-detail'>Delivery fee</p>
                    </div>
                    <div className="item-price"># {(deleiveryPrice).toLocaleString()}</div>
                </div>
                <hr />

                <div className="total-amount">
                    <p>Total</p>
                    <p># {(deleiveryPrice + total).toLocaleString()}</p>
                </div>
                <div className='checkout'>
                    <button >Checkout</button>
                </div>
            </section>
        </div>
    )
}

export default ShoppingCart