import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './store/slices/product.slice'
import CardProduct from '../components/home/CardProducts'
import './styles/home.css'
import InputSearch from '../components/home/InputSearch'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import OrderByPrice from '../components/home/OrderByPrice'


const Home = () => {
    const [inputText, setInputText] = useState('')
    const [filterByText, setFilterByText] = useState()
    const [filterByPrice, setFilterByPrice] = useState({
      from:0,
      to: Infinity
    })

    const products = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    useEffect(() => {

        if(inputText !== '' && products){
          const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
          setFilterByText(products.filter(cb))
        } else {
          setFilterByText(products)
        }
      }, [inputText, products])

      
    const callBackFilterPrice =product=>{
      return +product.price >= filterByPrice.from &&  +product.price <= filterByPrice.to
    }

console.log(filterByPrice)

  return (
    <main className='home'>
        <InputSearch setInputText={setInputText}
        inputText={inputText}
        />
        <FilterPrice
        setFilterByPrice ={setFilterByPrice}
        />
        <FilterCategory/>
        <OrderByPrice/>
        <div className='home__container'>
            {
                filterByText?.filter(callBackFilterPrice).map(product =>(
                    <CardProduct 
                    key={product.id}
                    product={product}
                    />
                ))
            }
        </div>

    </main>
  )
}

export default Home