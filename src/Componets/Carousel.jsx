import { SliderData } from "../assets/products";
import "../Componets/Carousel.css";


export const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner" id="inner">
        {SliderData.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
           <div id="carouselContainer">
              <div className="text-center p-3" id="carouselDetails">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <button className="btn bg-body-secondary">Visit Collections</button>
              </div>
              <div id="carouselImage">
                <img src={slide.cover} className="d-block w-90" alt={slide.title} height="500px"/>
              </div>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};
