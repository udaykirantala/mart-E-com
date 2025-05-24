import './ProductsCard.css'
export const ProductsCard = (props) => {
    return (
        <div className="productCard">
            <div className='productCardImage'>
                <img src={props.imgUrl} alt={props.productName} />
            </div>
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
            <div className='productDiscount'><p>{props.discount}% Off</p></div>
        </div>
    );
}
