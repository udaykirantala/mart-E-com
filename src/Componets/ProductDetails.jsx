import { useEffect, useState } from "react";
import { products } from "../assets/products";
import { useParams } from "react-router-dom";

export const Productdetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const filteredProduct = products.filter((item) => item.id.toString() === id);
    setProduct(filteredProduct);
  }, [id]);

  return (
    <div>
      <h2>Product Details</h2>
      {product.map((item) => (
        <div key={item.id}>
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Name:</strong> {item.productName}</p>
          <p><strong>Price:</strong> ${item.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
