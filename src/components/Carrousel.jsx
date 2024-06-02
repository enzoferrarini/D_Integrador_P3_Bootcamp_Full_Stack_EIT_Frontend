import React, { useEffect, useState } from "react";
import banner0 from "../img/banner/B0.png";
import banner1 from "../img/banner/B1.png";
import banner2 from "../img/banner/B2.png";

function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 0, image: banner0 },
    { id: 1, image: banner1 },
    { id: 2, image: banner2 },
  ];

  useEffect(() => {
    const intervalRefresf = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalRefresf);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);

  return (
    <>
      <div className="flex__containter">
        <div className="carrusel__height">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`carousel__slide banner ${
                slide.id === currentSlide ? "" : "hidden"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carrousel;
