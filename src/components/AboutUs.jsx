import React from "react";
import "../styles/aboutUs.css";
import "../styles/globals.css";

export const AboutUs = () => {
  return (
    <div className="container aboutUsContainer">
      <div className="row">
        <div className="aboutUsText col-lg-6 col-md-6 col-sm-12">
          <h3>Sobre Nosotros</h3>
          <p>
            Ferreteria el porvenir es una empresa familiar con más de 15 años de
            experiencia en el mercado. Nos enorgullece ofrecer un servicio
            personalizado y de calidad a nuestros clientes.
          </p>
          <p>
            Nuestro equipo de expertos está siempre disponible para asesorarte y
            ayudarte a encontrar las mejores soluciones para tus proyectos.
          </p>
          <button>Conoce a Nuestro Equipo</button>
        </div>
        <div className="aboutUsImages col-lg-6 col-md-6 col-sm-12">
          <div className="imagePlaceholder"></div>
          <div className="imagePlaceholder"></div>
        </div>
      </div>
    </div>
  );
};
