import React from "react";
import { useSelector } from "react-redux";
import CardTopic from "./CardTopic.jsx";
import "../../../styles/CreateCards.css";

export default function CardsList() {
  const cards = useSelector((state) => state.cards.cards); // Obtener tarjetas de Redux

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <CardTopic key={index} name={card.name} description={card.description} />
      ))}
    </div>
  );
}
