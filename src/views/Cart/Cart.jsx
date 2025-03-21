import React from 'react'
import FullCartItem from '../../components/FullCartItem/FullCartItem'
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../features/cart/selectors"
import './Cart.css'
import CartTotal from '../../components/CartTotal/CartTotal'

export default function Cart() {
    const cartProducts = useSelector(selectCartProducts);

    const cartTotal = cartProducts.reduce(
      (sum, product) => sum + product.quantity*product.price, 0
  );

  
  if (cartProducts.length > 0)
    return (
      <>
        <div className='header-container'>
          <h1>Votre Panier</h1>
        </div>
        <div className='cart-global'>
          <div className="items-container">
            {
              cartProducts.map(product => <FullCartItem key={product.id} product={product}/>)
            }
            <div className='cart-total-container'>
              <div className="cart-sub-total">
                <span>Sous-total</span>
                <span>{cartTotal} €</span>
              </div>
            </div>
          </div>
          <div className="recap-container">
            <CartTotal />
          </div>
        </div>
      </>
    )
  
    return (
      <div className='header-container'>
          <h1>Votre Panier est vide ...</h1>
      </div>
    )
}
