"use client";
import React, { useState, useEffect, useCallback } from "react";
import "../styles/carousel.css";
import Image from "next/image";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = useCallback(() => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="carousel">
      <button className="carousel__button" onClick={prevSlide}>
        ◀
      </button>
      <div className="carousel__image-container">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel__image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <button className="carousel__button" onClick={nextSlide}>
        ▶
      </button>
    </div>
  );
};
