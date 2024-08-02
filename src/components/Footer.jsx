import React from "react";
import "../styles/footer.css";
import "../styles/globals.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>Sobre Nosotros</h4>
          <p>
            El porvenir es una ferretería familiar con más de 15 años de
            experiencia en el mercado. Nos enorgullece ofrecer un servicio
            personalizado y de calidad a nuestros clientes.
          </p>
        </div>
        <div className="footer-section contact">
          <h4>Contacto</h4>
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Ferreteria porvenir. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
