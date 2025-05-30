import { useEffect, useState } from "react";
import { products } from "../assets/products";
import { Product } from "./Product";

export const Shop = () => {
  const [dropDownValue, setDropDownValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChange = (e) => {
    setDropDownValue(e.target.value);
  };

  useEffect(() => {
    const categoryToFilter = dropDownValue === "" ? "sofa" : dropDownValue;

    const filterProduct = products.filter(
      (item) => item.category === categoryToFilter
    );
    setFilteredProducts(filterProduct);
  }, [dropDownValue]);

  return (
    <div>
      <div>
        <select id="dropDown" value={dropDownValue} onChange={handleChange}>
          <option value=''>Filter By Category</option>
          <option value="sofa">Sofa</option>
          <option value="chair">Chair</option>
          <option value="watch">Watch</option>
          <option value="mobile">Mobile</option>
          <option value="wireless">Wireless</option>
        </select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <Product
              imgUrl={p.imgUrl}
              productName={p.productName}
              price={p.price}
              key={p.id}
            />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};
