import Image from "next/image";
import React from "react";
import "../styles/globals.css";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="contenedor-header">
        <div className="row">
          <div className="col-sm-12 col-md-4 logo-title">
            <Image
              src="/img/construction_icono.png"
              alt="tool"
              width={50}
              height={50}
            />
            <h2>Ferreteria el porvenir</h2>
          </div>
          <div className="col-sm-12 col-md-3 search-container">
            <input type="text" placeholder="Buscar productos..." />
            <button type="submit">Buscar</button>
          </div>
          <div className="col-sm-12 col-md-5 navegacion-principal">
            <nav>
              <a href="#" className="navegacion">
                Productos
              </a>
              <a href="#" className="navegacion">
                Servicios
              </a>
              <a href="#" className="navegacion">
                Sobre Nosotros
              </a>
              <a href="#" className="navegacion">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
