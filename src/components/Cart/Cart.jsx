import React from 'react'
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import "./Cart.css"
import CartItem from '../CartItem/CartItem';
import { selectCartProducts } from "../../features/cart/selectors"

export default function Cart() {
    const cartProducts = useSelector(selectCartProducts);
    
    return (
        <div className="cart-container">
            { cartProducts.length == 0 &&  <p>Cart is empty ...</p>}
            { cartProducts.length > 0 && (
                <div className="cart-detail">
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
            )}
        </div>
    )
}
