import { useEffect, useState } from "react";
import { products } from "../assets/products";
import './SuggistedProducts.css'

export const SuggistedProduct = ({ likeid }) => {
  const [suggistproduct, setsuggistproduct] = useState([]);

  useEffect(() => {
    const filtersuggistProduct = products.filter((i) => i.category === likeid);
    setsuggistproduct(filtersuggistProduct);
  }, [likeid]);

  return (
  <div>
    <div><h1 className="NameNewArrivals">New Arrivals</h1></div>
    
    {suggistproduct.length > 0 ? (
      <div className="suggistedContainer">
        {suggistproduct.map((item) => (
          <div key={item.id}>
            <div className='suggistedDetails'>
              <div className="suggistedDetailsImage">
                <img src={item.imgUrl} alt={item.productName} />
              </div>
              <h2>{item.productName}</h2>
              <span>
                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
              </span>
              <h3>${item.price}</h3>
              <div className='productDetailsButton'>
                <button><i className="fa-solid fa-plus"></i></button>
              </div>
            </div>
            <div className='suggistedDiscount'><p>{item.discount}% Off</p></div>
          </div>
        ))}
      </div>
    ) : (
      <p>No product found.</p>
    )}
  </div>
);
};
