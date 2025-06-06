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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart,setCart]=useState([])
  const handleAddToCartToasfy = () => {
  toast.success('Product has been added to cart!');
};

  return (
    <>
    <CartContext.Provider value={[cart,setCart]}>
    <Header cout={cart.length}/>
    <ToastContainer position="top-right" autoClose={3000} />
    <Routes>
      <Route path='/' element={<Homepage toasfy={handleAddToCartToasfy()}/> } />
      <Route path='/home' element={<Homepage toasfy={handleAddToCartToasfy()}/> }/>
      <Route path='/shop' element={<Shop toasfy={handleAddToCartToasfy()}/>} />
      <Route path='/cart' element={<Cart toasfy={handleAddToCartToasfy()}/>}/>
      <Route path='/:id' element={<Productdetails toasfy={handleAddToCartToasfy()}/>}/>
    </Routes>
    <Footer/>
    </CartContext.Provider>
    </>
  )
}

export default App
