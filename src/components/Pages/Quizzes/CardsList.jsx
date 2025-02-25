import React from "react";
import { useSelector } from "react-redux";
import CardQuiz from "./CardQuiz.jsx";
import "../../../styles/createCards/CreateCards.css";

export default function CardsList() {
  const cards = useSelector((state) => state.cardsQuizzes.cards); // Obtener tarjetas de Redux

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <CardQuiz key={index} name={card.name} />
      ))}
    </div>
  );
}
