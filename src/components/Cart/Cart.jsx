import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css"
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import { selectCartProducts, selectShowCart } from "../../features/cart/selectors"
import { toogleShowCart } from "../../features/cart/slice"
import closeIcon from "../../assets/close.png"


export default function Cart() {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectCartProducts);
    const showCart = useSelector(selectShowCart);

    const runToogleShowCart = () => {
        dispatch(toogleShowCart());
    }

    const cartTotal = cartProducts.reduce(
        (sum, product) => sum + product.quantity*product.price, 0
    );

    if ( !showCart) {
        return (
            <div className='display-cart-container'>
                <Button 
                    type="show-cart" 
                    name="Afficher le Panier"
                    onClick={runToogleShowCart}
                /> 
            </div>
        )
    }

    return (
        <div className="cart-container">
            { cartProducts.length == 0 &&  (
                <div>
                    <div className="close-cart">
                        <img 
                        src={closeIcon} alt=""
                        onClick={runToogleShowCart}
                        />
                    </div>
                    <p>Cart is empty ...</p>
                </div>
            )}
            { cartProducts.length > 0 && (
                <div className="cart-detail">
                    <div className="close-cart">
                        <img 
                        src={closeIcon} alt=""
                        onClick={runToogleShowCart}
                        />
                    </div>
                    <h3>Voici votre Panier</h3>
                    <div className="line"></div>
                    <div className='cart-products'> 
                        {cartProducts.map(product => (
                            <CartItem key={product.id} product={product}/>
                        ))}
                    </div>
                    <div className="line"></div>
                    <div className="total-price">
                        <h4>Total Price: {cartTotal} €</h4>
                    </div>
                </div>
            )}
        </div>
    )
}
