import '../Componets/NewArrivals.css'
import { electronic } from "../assets/filterArray"
import { ProductsCardNewBest } from "./ProductsCardNewBest"

export const NewArrivals = ()=>{
    return(
        <>
        <div><h1 className="NameNewArrivals">New Arrivals</h1></div>
        <div className="productsContainerNewArrivals">
            {electronic.map((item)=>(
                <div>
                    <ProductsCardNewBest key={item.id} imgUrl={item.imgUrl} productName={item.productName} id={item.id} price={item.price}/>
                </div>
            ))}
        </div>
        </>
    )
}