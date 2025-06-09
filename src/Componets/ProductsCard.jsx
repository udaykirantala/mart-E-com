import { Link } from 'react-router-dom';
import './ProductsCard.css'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';
export const ProductsCard = (props) => {
    const [cart,setCart]=useContext(CartContext)
    const handleAddToCartToasfy = () => {
        toast.success('Product has been added to cart!');
    };
    return (
        <div className="productCard">
            <Link to={`/${props.id}`}><div className='productCardImage'>
                <img src={props.imgUrl} alt={props.productName} />
                <div className='poductCardLikeIcon'><i class="fa-regular fa-heart"></i></div>
            </div></Link>
            <div className='productDetails'>
                <h2>{props.productName}</h2>
                <span>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                </span>
                <h3>${props.price}</h3>
                <div className='productDetailsButton'>
                    <button
                    onClick={()=>{
                        const existingProductIndex=cart.findIndex(p=>p.id===props.id);

                        if(existingProductIndex !==-1){
                            const updatedCart = [...cart];
                            updatedCart[existingProductIndex].quantity=(updatedCart[existingProductIndex].quantity||1)+1;
                            setCart(updatedCart);
                            handleExistingProdct()
                        }else{
                            setCart([...cart,{...props,quantity:1}]);
                            handleAddToCartToasfy()
                        }
                    }}
                    ><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div className='productDiscount'><p>{props.discount}% Off</p></div>
        </div>
    );
}
