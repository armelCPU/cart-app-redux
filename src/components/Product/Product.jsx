import React from 'react'
import Button from "../Button/Button"
import Stars from "../Stars/Stars"
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../features/cart/slice"
import { selectCartProducts } from "../../features/cart/selectors"

import "./Product.css"


export default function Product({ product }) {
  const MAX_DESCRIPTION =  150 
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const getProductInCart = (productId) => {
    return cartProducts.find(
        product => product.id === productId
    )
  }

  return (
    <div className='product-container'>
        <img src={product.image} alt="Product Image" />
        <div className='product-infos'>
            <h3>
                {product.title}
            </h3>
            <h4>{product.category}</h4>
            <Stars rating={product.rating.rate} />
            <h5>{product.rating.count} ratings</h5>
            <p className='product-description'>{product.description.length > MAX_DESCRIPTION ? product.description.substring(0, MAX_DESCRIPTION) + "..." : product.description} </p>
        </div>
        <div className='action-buttons'>
          <p className='product-price'>{product.price} €</p>
            <Button 
              type="add" 
              name="Ajouter Au Panier"
              onClick={ () => dispatch(addProduct(product.id))}
            />
            {getProductInCart(product.id) &&(<Button 
              type="remove" 
              name="Retirer du Panier"
              onClick={ () => dispatch(removeProduct(product.id))}
            />)}
        </div>
    </div>
  )
}
