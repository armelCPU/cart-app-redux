import React from 'react'
import "./CartItem.css"

import Button from '../Button/Button'

export default function CartItem() {
  return (
    <div className='item-container'>
        <span className='product-name'>4  - Product Items</span>
        <span className='update-quantity'>
            <Button type="add" name="+"/>
            <Button type="remove" name="-"/>
        </span>
    </div>
  )
}
