import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Componets/Header'
import { Homepage } from './Componets/Homepage'
import { Shop } from './Componets/Shop'
import { Cart } from './Componets/Cart'
import { Footer } from './Componets/Footer'
import { Productdetails } from './Componets/ProductDetails'
import { CartContext } from './Componets/CartContext'
import { useState } from 'react'
function App() {
  const [cart,setCart]=useState([])
  return (
    <>
    <CartContext.Provider value={[cart,setCart]}>
    <Header cout={cart.length}/>
    <Routes>
      <Route path='/' element={<Homepage/> } />
      <Route path='/home' element={<Homepage/> }/>
      <Route path='/shop' element={<Shop/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/:id' element={<Productdetails/>}/>
    </Routes>
    <Footer/>
    </CartContext.Provider>
    </>
  )
}

export default App
