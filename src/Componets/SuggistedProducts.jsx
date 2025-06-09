import { useEffect, useState } from "react";
import { products } from "../assets/products";
import './SuggistedProducts.css'
import './Hover.css'
import { Product } from "./Product";

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
          <Product imgUrl={item.imgUrl} productName={item.productName} price={item.price} id={item.id}/>
        ))}
      </div>
    ) : (
      <p>No product found.</p>
    )}
  </div>
);
};
