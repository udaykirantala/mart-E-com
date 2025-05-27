import { useEffect, useState } from "react";
import { products } from "../assets/products";
import { useParams } from "react-router-dom";
import './ProductDetails.css'
import { SuggistedProduct } from "./SuggistedProducts";

export const Productdetails = () => {
  const [product, setProduct] = useState([]);
  const [reviewlan,setreviewlan]=useState();
  const [activeTab,setactiveTab]=useState('discription');
  const { id } = useParams();

  useEffect(() => {
    const filteredProduct = products.filter((item) => item.id.toString() === id);
    setProduct(filteredProduct);

    if (filteredProduct.length > 0) {
      setreviewlan(filteredProduct[0].reviews.length);
    } else {
      setreviewlan(0);
    }

  }, [id]);

  return (
    <div className="productDetailstotalContainer">
      {product.map((item) => (
        <div key={item.id}>
          <div className="productDetailsContainer">
            <div className="productDetailsImage">
              <img src={item.imgUrl} alt={item.productName}/>
            </div>
            <div className="productDetailsDetails">
              <h1>{item.productName}</h1>
              <p className="productDetailsRatingNum"><span><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i></span><span>{item.avgRating}: rating</span></p>
              <p className="productDetailsCategory"><h3>${item.price}</h3><span>category:{item.category}</span></p>
              <p>{item.shortDesc}</p>
              <p></p>
              <button>Add to Cart</button>
            </div>
          </div><br/>
          <div>
            <div className="productDetailBtn">
              <button onClick={()=>setactiveTab('discription')} style={{color:activeTab==='reviews'?'gray':'black'}}>Description</button>
              <button onClick={()=>setactiveTab('reviews')} style={{color:activeTab==='reviews'?'black':'gray'}}>Reviews ({reviewlan})</button>
            </div>
            <div className="DescriptionAndReviws">
              {activeTab==='discription'?(
                <div>
                  <p>{item.description}</p>
                </div>
              ):(
                <div>
                  {item.reviews.map((review,index) => (
                    <div key={index} className="reviewDetails">
                      <h5>Jhone Doe</h5>
                      <p>{review.rating} (rating)</p>
                      <h5>{review.text}</h5>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <SuggistedProduct likeid={item.category} />
          </div>
        </div>
      ))}
    </div>
  );
};
