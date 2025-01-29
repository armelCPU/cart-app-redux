import React from 'react'
import Button from "../Button/Button"

import "./Product.css"

const DATA = {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64.00,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
        "rate": 3.3,
        "count": 203
    }
}

export default function Product() {
  const MAX_DESCRIPTION =  150 
  return (
    <div className='product-container'>
        <img src={DATA.image} alt=" Product Image" />
        <div className='product-infos'>
            <h3>
                {DATA.title}
            </h3>
            <h4>{DATA.category}</h4>
            <p className='product-description'>{DATA.description.length > MAX_DESCRIPTION ? DATA.description.substring(0, MAX_DESCRIPTION) + "..." : DATA.description} </p>
            <p className='product-price'>{DATA.price} €</p>
        </div>
        <div className='action-buttons'>
            <Button type="add" name="Ajouter Au Panier"/>
            <Button type="remove" name="Retirer du Panier"/>
        </div>
    </div>
  )
}
