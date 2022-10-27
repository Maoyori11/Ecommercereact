import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../Pages/store/slices/product.slice'

const FilterCategory = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    const dispatch =useDispatch()

    const handleFetchCategory = id => {
        if (id) {
            //Petición de filtro por categoria
            dispatch(getProductsByCategory(id))
        } else{
            //Petición de todos los productos
            dispatch(getAllProducts())
        }
    }

    return (
        <article>
            <h3>Category</h3>
            <ul >
                <li onClick={() => handleFetchCategory()} style={{ cursor: 'pointer' }}>All Products</li>
                {
                    categories?.map(category => (
                        <li
                            style={{ cursor: 'pointer' }}
                            key={category.id}
                            onClick={() => handleFetchCategory(category.id)}
                        >
                            {category.name}
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default FilterCategory