export const Product=({imgUrl,productName,price})=>{
    return(
        <>
        <div className="suggistedProductContainer">
            <div className="suggistedProductImage"><img src={imgUrl} alt={productName} /></div>
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
              <div className="suggistedProductButton"><button><i className="fa-solid fa-plus"></i></button></div>
            </div>
          </div>
        </>
    )
}