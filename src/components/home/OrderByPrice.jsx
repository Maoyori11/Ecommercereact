import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../Pages/store/slices/product.slice'

const OrderByPrice = () => {
    const dispatch = useDispatch()

    const handleAscending =()=>{
        dispatch(ascendingProducts())

    }

    const handledescending =()=>{
        dispatch(descendingProducts())
    }

  return (
    <div>
        <h3>Order</h3>
        <button onClick={handleAscending} className='order__btn'>Ascending ⏫</button>
        <button onClick={handledescending} className='order__btn'>Descending ⏬</button>
    </div>
  )
}

export default OrderByPrice