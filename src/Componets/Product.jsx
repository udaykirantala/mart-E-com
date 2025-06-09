import { useContext } from 'react';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../Componets/Hover.css'
export const Product = ({ id, imgUrl, productName, price}) => {
  const [cart, setCart] = useContext(CartContext);
  const handleAddToCartToasfy=()=>{
    toast.success('Product has been added to cart!')
  }
  return (
    <div className="suggistedProductContainer">
      <Link to={`/${id}`}><div className="suggistedProductImage">
        <img src={imgUrl} alt={productName} />
        <div className='poductCardLikeIcon'><i class="fa-regular fa-heart"></i></div>
      </div></Link>
      <div className="suggistedProductDetailsConatiner">
        <div><h2>{productName}</h2></div>
        <div className="suggistedProductStar_Price">
          <span>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          </span>
          <h4>${price}</h4>
        </div>
        <div className="suggistedProductButton">
          <button
            onClick={() => {
              const existingProductIndex = cart.findIndex(p => p.id === id);

              if (existingProductIndex !== -1) {
                const updatedCart = [...cart];
                updatedCart[existingProductIndex].quantity = (updatedCart[existingProductIndex].quantity || 1) + 1;
                setCart(updatedCart);
              } else {
                setCart([...cart, { id, imgUrl, productName, price, quantity: 1 }]);
                handleAddToCartToasfy()
              }
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
