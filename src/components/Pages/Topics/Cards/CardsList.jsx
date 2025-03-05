import React from "react";
import { useSelector } from "react-redux";
import CardTopic from "./CardTopic.jsx";
import "../../../styles/createCards/CreateCards.css";

export default function CardsList() {
  const cards = useSelector((state) => state.cardsTopics.cards); // Obtener tarjetas de Redux

  return (
    <div className="grid-contenedor">
      {cards.map((card, index) => (
        <CardTopic key={index} name={card.name} description={card.description} type="topic"/>
      ))}
    </div>
  );
}
