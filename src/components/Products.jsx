import React from "react";
import { ProductCard } from "./ProductCard";
<<<<<<< HEAD
import "../styles/globals.css";
import "../styles/Products.css";
=======
import "../styles/products.css";
import "../styles/globals.css";
>>>>>>> f2f983a8682826c550c79933304788ca0244588c

export const Products = () => {
  return (
    <div className="container productsContainer">
      <div className="row">
        <div className="productsText col-lg-6 col-md-6 col-sm-12">
          <h3>Nuestros productos</h3>
          <p>
            Ofrecemos una amplia gama de herramientas, materiales y accesorios
            para satisfacer todas tus necesidades de bricolaje y reparación.
          </p>
          <button>Explorar Productos</button>
        </div>
        <div className="productCards col-lg-6 col-md-6 col-sm-12">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
