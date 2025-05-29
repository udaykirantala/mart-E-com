import { useEffect, useState } from "react";
import { products } from "../assets/products";
import './SuggistedProducts.css'

export const SuggistedProduct = ({ likeid,currentid }) => {
  const [suggistproduct, setsuggistproduct] = useState([]);

  useEffect(() => {
    const filtersuggistProduct = products.filter((i) => i.category === likeid&&i.id!==currentid);
    setsuggistproduct(filtersuggistProduct);
  }, [likeid]);

  return (
  <div>
    <div><h1 className="suggistedProductName">You might also like</h1></div>
    
    {suggistproduct.length > 0 ? (
      <div className="suggistedContainer">
        {suggistproduct.map((item) => (
          <div className="suggistedProductContainer">
            <div className="suggistedProductImage"><img src={item.imgUrl} alt={item.productName} /></div>
            <div className="suggistedProductDetailsConatiner">
              <div><h2>{item.productName}</h2></div>
              <div className="suggistedProductStar_Price">
                <span>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                    <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                </span>
                <h4>${item.price}</h4>
              </div>
              <div className="suggistedProductButton"><button><i className="fa-solid fa-plus"></i></button></div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>No product found.</p>
    )}
  </div>
);
};
