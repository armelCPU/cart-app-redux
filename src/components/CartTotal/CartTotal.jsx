import React from 'react'
import Button from '../Button/Button'
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../features/cart/selectors"


import './CartTotal.css'

export default function CartTotal() {
    const deliveryFees = 3.99;
    const cartProducts = useSelector(selectCartProducts);

    const cartTotal = cartProducts.reduce(
        (sum, product) => sum + product.quantity*product.price, 0
    );

  return (
    <div className='total-container'>
        <h2>TOTAL</h2>
        <p className='sub-total'>
            <span>Sous-total</span>
            <span>{cartTotal} €</span>
        </p>
        <p className='sub-total'>
            <span>Livraison</span>
            <span>{deliveryFees}  €</span>
        </p>
        <p className='sub-total'>
            <span>TOTAL A PAYER</span>
            <span>{cartTotal + deliveryFees}  €</span>
        </p>
        <Button 
            type="add" 
            name="Payer Maintenant"
            onClick={() => alert("Hello")}
        />

        <p>Nos acceptons</p>
        <div className="payment-logos">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-apple-pay"></i>
        </div>
        <p>Vous avez un code promotionnel ? Ajoutez-le à la prochaine étape</p>
    </div>
  )
}
