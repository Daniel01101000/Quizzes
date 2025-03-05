import React from "react";
import { useSelector } from "react-redux";
import CardFlashcard from "./CardFlashcard.jsx";
import "styles/createCards/CreateCards.css";

export default function CardsList() {
  // Cambiar de state.cards.cards a state.cardsFlashcards.cards
  const cards = useSelector((state) => state.cardsFlashcards.cards); // Obtener tarjetas de Redux

  return (
    <div className="grid-contenedor">
      {cards.map((card, index) => (
        <CardFlashcard key={index} name={card.name} questionA={card.questionA} questionB={card.questionB} questionC={card.questionC} quizId={quizId} type="flashcard"/>
      ))}
    </div>
  );
}