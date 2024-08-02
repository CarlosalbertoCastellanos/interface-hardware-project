import React from "react";
import "../styles/services.css";
import "../styles/globals.css";

export const Services = () => {
  const services = [
    {
      icon: "🪛", // Puedes reemplazar esto con un ícono adecuado
      title: "Corte de Vidrio",
      description: "Ofrecemos servicio de maquinaria para tus proyectos.",
    },
    {
      icon: "🛠️",
      title: "Asesoramiento Técnico",
      description:
        "Nuestro equipo de expertos está disponible para asesorarte en tus proyectos.",
    },
    {
      icon: "🚚",
      title: "Entrega a Domicilio",
      description:
        "Ofrecemos servicio de entrega a domicilio para tus compras.",
    },
    {
      icon: "🔧",
      title: "Alquiler de Herramientas",
      description:
        "Puedes alquilar herramientas especializadas para tus proyectos.",
    },
  ];

  return (
    <div className="container servicesContainer">
      <h3>Nuestros Servicios</h3>
      <div className="servicesGrid">
        {services.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="serviceIcon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
