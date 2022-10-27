import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../Pages/store/utils/getConfig'
import './styles/productInfo.css'

const ProductInfo = ({ product }) => {

    const [counter, setCounter] = useState(1)
    const handleMinus = () => {
        if (counter - 1 > 0) {
            setCounter(counter - 1)

        }
    }

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleAddCar = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`

        const data = {
            id: product.id,
            quantity: counter
        }

        axios.post(URL, data, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <article className='product-info'>
            <h2 className='product-info__title'>{product?.title}</h2>
            <p className='product-info__description'>{product?.description}</p>
            <footer className='product-info__footer'>
                <div className='product-info__price-container'>
                    <h3 className='product-info__price-label'>Price</h3>
                    <span className='product-info__price-number'>{product?.price}</span>
                </div>
                <div className='product-info__quantity-container'>
                    <h3 className='product-info__quantity-label'>Quantity</h3>
                    <div className='counter'>
                        <div onClick={handleMinus} className='counter__minus'>-</div>
                        <div className='counter__number'>{counter}</div>
                        <div onClick={handlePlus} className='counter__plus'>+</div>
                    </div>
                </div>
                <button onClick={handleAddCar} className='product-info__btn'> Add to Car
                    <i className="product-info__icon fa-solid fa-cart-shopping"></i>
                </button>
            </footer>
        </article>
    )
}

export default ProductInfo