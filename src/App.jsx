import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import LoginScreen from './Pages/LoginScreen'
import ProductId from './Pages/ProductId'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Purchases from './Pages/Purchases'


function App() {

  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<ProductId/>} />
      <Route path='/login' element={<LoginScreen/>} />

      <Route element= {<ProtectedRoutes />}>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/purchases' element={<Purchases/>} />
        </Route>
     </Routes>
    </div>
  )
}

export default App
