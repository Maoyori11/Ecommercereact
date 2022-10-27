import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../Pages/store/slices/cart.slice'
import getConfig from '../../Pages/store/utils/getConfig'
import './styles/cardProduct.css'


const CartProduct = ({ product }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL,getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err))
  }

  return (
    <article>
      <h2>{product.title}</h2>
      <ul>
        <li><span>Price</span>{product.price} </li>
        <li><span>Quantity</span>{product.productsInCart.quantity}</li>
      </ul>
      <button onClick={handleDelete} className='cart-p__btn'><i className="cart-p__icon fa-regular fa-trash-can"></i>
      </button>
    </article>
  )
}

export default CartProduct