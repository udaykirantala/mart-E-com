import { Link } from 'react-router-dom';
import './ProductsCard.css'
export const ProductsCardNewBest = (props) => {
    return (
        <div className="productCard">
            <Link to={`/${props.id}`} ><div className='productCardImage'>
                <img src={props.imgUrl} alt={props.productName} />
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
                    <button><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>
    );
}
