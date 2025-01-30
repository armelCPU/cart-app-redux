import React from 'react'
import { useSelector } from "react-redux";
import "./Products.css"
import Product from '../Product/Product';

import { useFetchProducts } from '../../hooks/products';
import {selectProducts, selectLoading, selectError} from "../../features/products/selectors"

export default function Products() {
    useFetchProducts();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='products'>
            {
                products.map(product => {
                    return <Product key={product.id} product={product} />
                })
            }
        </div>
    )
}
