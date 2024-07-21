import React from "react";
import { Carousel } from "./Carousel";
import "../styles/globals.css";
import "../styles/ContentCarousel.css";

export const ContentCarousel = () => {
  const images = [
    "/img/volqueta.jpg",
    "/img/minicargador.jpg",
    // Agrega más imágenes según sea necesario
  ];

  return (
    <div className="carousel">
      <Carousel images={images} />
      <div className="carousel__overlay">
        <h1>Bienvenido a Ferretería El Porvenir</h1>
        <p>
          Encuentra todo lo que necesitas para tus proyectos de bricolaje y
          reparación en nuestra ferretería.
        </p>
        <button>Ver productos</button>
      </div>
    </div>
  );
};
