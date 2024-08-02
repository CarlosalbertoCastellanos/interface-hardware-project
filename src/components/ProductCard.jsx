import Image from "next/image";
import React from "react";
import "../styles/product-card.css";
import "../styles/globals.css";

export const ProductCard = () => {
  return (
    <div className="productCardContainer">
      <div className="productCard">
        <Image
          src="/img/construction_icono.png"
          alt="Taladro Eléctrico"
          width={300}
          height={300}
          layout="responsive"
        />
        <div className="productInfo">
          <h3>Taladro Eléctrico</h3>
          <p>$99.99</p>
        </div>
      </div>
      <div className="productCard">
        <Image
          src="/img/construction_icono.png"
          alt="Martillo de Goma"
          width={220}
          height={229}
          // width={300}
          // height={300}
          layout="responsive"
        />
        <div className="productInfo">
          <h3>Martillo de Goma</h3>
          <p>$14.99</p>
        </div>
      </div>
      <div className="productCard">
        <Image
          src="/img/construction_icono.png"
          alt="Alicate"
          width={300}
          height={300}
          layout="responsive"
        />
        <div className="productInfo">
          <h3>Alicate</h3>
          <p>$9.99</p>
        </div>
      </div>
      <div className="productCard">
        <Image
          src="/img/construction_icono.png"
          alt="Tornillos"
          width={300}
          height={300}
          layout="responsive"
        />
        <div className="productInfo">
          <h3>Tornillos</h3>
          <p>$5.99</p>
        </div>
      </div>
    </div>
  );
};
