import { Carousel } from './Componets/Carousel'
import './App.css'
import { Header } from './Componets/Header'
import { Servicedata } from './Componets/ServiceData'
import { Bigdiscount } from './Componets/Bigdiscount'
import { NewArrivals } from './Componets/NewArrivals'
import { BestSales } from './Componets/BestSales'

function App() {
  return (
    <>
    <Header/>
    <Carousel/><br/>
    <Servicedata/><br/>
    <Bigdiscount/>
    <NewArrivals/>
    <BestSales/>
    </>
  )
}

export default App
