import React from 'react'
import Button from "../Button/Button"

import "./Product.css"


export default function Product({ product }) {
  const MAX_DESCRIPTION =  150 
  return (
    <div className='product-container'>
        <img src={product.image} alt="Product Image" />
        <div className='product-infos'>
            <h3>
                {product.title}
            </h3>
            <h4>{product.category}</h4>
            <p className='product-description'>{product.description.length > MAX_DESCRIPTION ? product.description.substring(0, MAX_DESCRIPTION) + "..." : product.description} </p>
        </div>
        <div className='action-buttons'>
          <p className='product-price'>{product.price} €</p>
            <Button type="add" name="Ajouter Au Panier"/>
            <Button type="remove" name="Retirer du Panier"/>
        </div>
    </div>
  )
}
