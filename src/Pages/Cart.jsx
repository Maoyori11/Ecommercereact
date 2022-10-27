import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllProductsCart, setCartGlobal } from './store/slices/cart.slice'
import getConfig from './store/utils/getConfig'


const cart = () => {

  const [total, setTotal] = useState()

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])

  useEffect(() => {
    if(cart) {
      const result = cart.products.reduce((acc, cv) => {
        return acc + Number(cv.price) * cv.productsInCart.quantity
      }, 0)
      setTotal(result)
    }
  }, [cart])

  const handlePurchase = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, data, getConfig())
      .then(res => {
        dispatch(setCartGlobal(null))
        console.log(res.data)
      })
      .catch(err => console.log(err))

      setTotal(0)
  }


  return (
    <div className='cart'>
      <div className='cart_-container'>
        {
          cart?.products.map((product =>
            <CartProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
      <h2>Total: ${total}</h2>
      <button onClick={handlePurchase} style={{ fontSize: '30px' }}>Buy Now</button>
    </div>
  )
}

export default cart