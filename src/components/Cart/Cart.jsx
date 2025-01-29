import React from 'react'

import "./Cart.css"
import CartItem from '../CartItem/CartItem';

export default function Cart() {
    const numbers = [1, 2, 3, 4];

    return (
        <div className="cart-container">
            <h3>Voici votre Panier</h3>
            <div className="line"></div>
            <div className='cart-products'> 
                {numbers.map(num => <CartItem key={num}/>)}
            </div>
            <div className="line"></div>
            <div className="total-price">
                <h4>Total Price: 45 €</h4>
            </div>
        </div>
    )
}
