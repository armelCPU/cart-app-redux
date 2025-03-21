import React from 'react'

import './FullCartItem.css'

const QuantityValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function FullCartItem({product}) {
    const MAX_DESCRIPTION =  150 ;

  return (
    <div className='fullcart-container'>
        <div className="product-image">
            <img src={product.image} />
        </div>
        <div className='product-details'>
            <h2 className='price'>{product.price}  €</h2>
            <h3 className='title'>{product.title}</h3>
            <h4 className='category'>
                <span>{product.category}</span>
            </h4>
            <p className='description'>{product.description.length > MAX_DESCRIPTION ? product.description.substring(0, MAX_DESCRIPTION) + "..." : product.description}</p>
            <div className='quantity'>
                <label htmlFor="">Quantity</label>
                <select name="quantity" id="quantity" value={product.quantity}>
                    {
                        QuantityValues.map(val => <option value={val} key={val} >{val}</option>)
                    }
                </select>
            </div>
        </div>
    </div>
  )
}
