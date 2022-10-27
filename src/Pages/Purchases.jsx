import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CardPurchase from '../components/purchases/CardPurchase'
import getConfig from './store/utils/getConfig'


const Purchases = () => {

  const [purchases, setPurchases] = useState()
  console.log(purchases);

  useEffect(() => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
      axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err =>console.log(err))
  }, [])

  return (
    <div className='purchases'>
      <h2 className='purchases__title'>My purchases</h2>
      <div className='purchases__container'>
        {
          purchases?.map(purchase => (
            <CardPurchase 
            key={purchase.id}
            purchase ={purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Purchases