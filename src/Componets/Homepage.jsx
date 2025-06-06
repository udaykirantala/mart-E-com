import { Carousel } from "./Carousel"
import { Servicedata } from "./ServiceData"
import { Bigdiscount } from "./Bigdiscount"
import { NewArrivals } from "./NewArrivals"
import { BestSales } from "./BestSales"

export const Homepage=({toasfy})=>{
    return(
        <>
        <Carousel/><br/>
        <Servicedata/><br/>
        <Bigdiscount toasfy={toasfy}/><br/>
        <NewArrivals toasfy={toasfy}/><br/>
        <BestSales toasfy={toasfy}/>
        </>
    )
}