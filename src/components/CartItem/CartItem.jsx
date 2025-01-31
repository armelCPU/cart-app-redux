import React from 'react'
import "./CartItem.css"
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../features/cart/slice"

import Button from '../Button/Button'

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className='item-container'>
        <span className='product-name'>{product.quantity} - {product.title} - {product.price}€</span>
        <span className='update-quantity'>
            <Button 
              type="add" 
              name="+"
              onClick={ () => dispatch(addProduct(product.id))}
            />
            <Button 
              type="remove" 
              name="-"
              onClick={ () => dispatch(removeProduct(product.id))}
            />
        </span>
    </div>
  )
}
