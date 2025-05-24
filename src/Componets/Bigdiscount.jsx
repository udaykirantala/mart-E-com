import { discoutProducts } from "../assets/products"
import { ProductsCard } from "./ProductsCard"
import '../Componets/Bigdiscount.css'

export const Bigdiscount = ()=>{
    return(
        <>
        <div className="productsContainer">
            {discoutProducts.map((item)=>(
                <div className="productswidth">
                    <ProductsCard key={item.id} imgUrl={item.imgUrl} productName={item.productName} id={item.id} price={item.price} discount={item.discount} />
                </div>
            ))}
        </div>
        </>
    )
}