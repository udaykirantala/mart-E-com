import '../Componets/BestSales.css'
import { sofa } from "../assets/filterArray"
import { ProductsCardNewBest } from "./ProductsCardNewBest"

export const BestSales = ()=>{
    return(
        <>
        <div><h1 className="NameBestSales">New Arrivals</h1></div>
        <div className="productsContainerBestSales">
            {sofa.map((item)=>(
                <div>
                    <ProductsCardNewBest key={item.id} imgUrl={item.imgUrl} productName={item.productName} id={item.id} price={item.price}/>
                </div>
            ))}
        </div>
        </>
    )
}