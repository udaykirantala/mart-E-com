import { Carousel } from "./Carousel"
import { Servicedata } from "./ServiceData"
import { Bigdiscount } from "./Bigdiscount"
import { NewArrivals } from "./NewArrivals"
import { BestSales } from "./BestSales"
import { ToastContainer } from "react-toastify"

export const Homepage=()=>{
    return(
        <>
        <ToastContainer position="top-right" autoClose={2000}/>
        <Carousel/><br/>
        <Servicedata/><br/>
        <Bigdiscount/><br/>
        <NewArrivals/><br/>
        <BestSales/>
        </>
    )
}