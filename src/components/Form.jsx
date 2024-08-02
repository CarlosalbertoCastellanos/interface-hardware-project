import React from "react";
import "../styles/form.css";
import "../styles/globals.css";

export const Form = () => {
  return (
    <div className="container contactFormContainer">
      <h3>Contáctanos</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            className="form-control"
            rows="4"
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};
