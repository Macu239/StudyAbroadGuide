import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import "./ImageCarousel.css";



export default function ImageCarousel({ height = "300px", Slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const startSlideTimer = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Slides.length);
    }, 3000);
  };

  const resetSlideTimer = () => {
    clearInterval(slideInterval.current);
    startSlideTimer();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetSlideTimer();
  };

  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div 
      className="carousel"
      style={{ "--carousel-height": height }}
    >
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Slides.map((src, index) => (
          <Link key={index} to={src.path}>
            <img
            key={index}
            src={src.img}
            alt={`Slide ${index}`}
            className="slide"
            draggable="false"
          />
          </Link>
        ))}
      </div>
      <div className="dots">
        {Slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
