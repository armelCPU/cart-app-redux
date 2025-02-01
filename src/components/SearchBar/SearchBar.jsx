import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectFilterValues } from "../../features/products/selectors"
import { setFilterValues, setProducts} from "../../features/products/slice"
import { useFetchProducts } from '../../hooks/products';
import { selectAllProducts } from "../../features/cart/selectors"


import "./SearchBar.css"

export default function SearchBar() {
    const filterProducts = (products, filters) => {
        if (!products) return [];
        
        return products.filter(product => {
            // Vérifie chaque critère de filtrage
            return Object.entries(filters).every(([key, value]) => {
                // Ignore les filtres vides
                if (!value || value === '') return true;
                
                // Gestion des différents types de filtres
                switch (key) {
                    case 'category':
                        return product.category === value;
                    case 'priceMin':
                        return product.price >= parseFloat(value);
                    case 'priceMax':
                        return product.price <= parseFloat(value);
                    case 'search':
                        return product.title.toLowerCase().includes(value.toLowerCase()) ||
                               product.description.toLowerCase().includes(value.toLowerCase());
                    default:
                        // Pour les autres propriétés, vérifie l'égalité directe
                        return product[key] === value;
                }
            });
        });
    }

    const filterValues = useSelector(selectFilterValues);
    const allProducts = useSelector(selectAllProducts);

    const dispatch = useDispatch();

    const handleFilter = (e) => {
        const newFilterVal = {
            ...filterValues,
            search: e.target.value
        }
        dispatch(setFilterValues(newFilterVal));

        const newProducts = filterProducts(
            allProducts, newFilterVal
        )

        dispatch(setProducts(newProducts));
    }

    useFetchProducts(filterValues);

    return (
        <div className="filter-container">
            <input 
                type="text"
                onChange={handleFilter}
                value={filterValues.search}
                placeholder='Recherchez un produit'
                className='filter-value'
            >
            </input>
        </div>
    )
}
