import { useEffect, useState } from "react";
import { products } from "../assets/products";
import { useParams } from "react-router-dom";

export const Productdetails = () => {
  const [product, setProduct] = useState([]);
  const [activeTab,setactiveTab]=useState('discription');
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
          <div>
            <div>
              <img src={item.imgUrl} alt={item.productName}/>
            </div>
            <div>
              <h1>{item.productName}</h1>
              <p><span><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i></span>{item.rating}: rating<span></span></p>
              <p><span>${item.price}</span><span>category:{item.category}</span></p>
              <p>{item.shortDesc}</p>
              <p></p>
              <button>Add to Cart</button>
            </div>
          </div>
          <div>
            <div>
              <button onClick={()=>setactiveTab('discription')}>Description</button>
              <button onClick={()=>setactiveTab('reviews')}>Reviews</button>
            </div>
            <div>
              {activeTab==='discription'?(
                <div>
                  <p>{item.description}</p>
                </div>
              ):(
                <div>
                  {item.reviews.map((review) => (
                    <div key={review.text}>
                      <p>{review.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
