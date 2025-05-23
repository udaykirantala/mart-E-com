import { SliderData } from "../assets/products";
import "../Componets/Carousel.css";

export const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        {SliderData.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="text-center p-3">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <button className="btn btn-primary">Visit Collections</button>
            </div>
            <div>
              <img
                src={slide.cover}
                className="d-block w-100"
                alt={slide.title}
                height="250px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
