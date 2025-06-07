import { useEffect, useState } from "react";
import { products } from "../assets/products";
import { Product } from "./Product";
import './Shop.css'
import { BanerPage } from "./BanerPage";
import { ToastContainer } from "react-toastify";
 
export const Shop = () => {
  const [dropDownValue, setDropDownValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [searchActive, setSearchActive] = useState(false); // flag to switch between category/search

  const handleChange = (e) => {
    setDropDownValue(e.target.value);
    setSearchActive(false);
  };

  const handleInputChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleSearchClick = () => {
    const searchResult = products.filter((item) =>
      item.productName.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setFilteredProducts(searchResult);
    setSearchActive(true);
  };

  useEffect(() => {
    if (!searchActive) {
      const categoryToFilter = dropDownValue === "" ? "sofa" : dropDownValue;

      const filterProduct = products.filter(
        (item) => item.category === categoryToFilter
      );

      setFilteredProducts(filterProduct);
    }
  }, [dropDownValue, searchActive]);

  return (
    <div>
      <div>
        <BanerPage title={"Product"}/> 
      </div>
      <ToastContainer position='top-right' autoClose={2000} />
      <div className="shopeFilterSearchContainer">
        <div className="shopFilterContainer">
          <select
            id="dropDown"
            value={dropDownValue}
            onChange={handleChange}
            className="custom-dropdown"
          >
            <option value="">Filter By Category |</option>
            <option value="sofa">Sofa</option>
            <option value="chair">Chair</option>
            <option value="watch">Watch</option>
            <option value="mobile">Mobile</option>
            <option value="wireless">Wireless</option>
          </select>
        </div>
        <div className="shopSearchContainer">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search...."
            value={searchProduct}
            onChange={handleInputChange}
          />
          <button onClick={handleSearchClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div><br/>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <Product
              imgUrl={p.imgUrl}
              productName={p.productName}
              price={p.price}
              id={p.id}
              key={p.id}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div><br/>
    </div>
  );
};
