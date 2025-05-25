import { Carousel } from "./Carousel"
import { Servicedata } from "./ServiceData"
import { Bigdiscount } from "./Bigdiscount"
import { NewArrivals } from "./NewArrivals"
import { BestSales } from "./BestSales"

export const Homepage=()=>{
    return(
        <>
        <Carousel/><br/>
        <Servicedata/><br/>
        <Bigdiscount/><br/>
        <NewArrivals/><br/>
        <BestSales/>
        </>
    )
}