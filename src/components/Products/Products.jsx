import React from 'react'

import "./Products.css"
import Product from '../Product/Product';

export default function Products() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='products'>
            {
                numbers.map(number => {
                    return <Product key={number} />
                })
            }
        </div>
    )
}
