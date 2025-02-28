import React from "react";
import { useSelector } from "react-redux";
import CardQuiz from "./CardQuiz.jsx";
import "../../../styles/createCards/CreateCards.css";

export default function CardsList() {
  const cards = useSelector((state) => state.quizzes.quizzes);
const cardsArray = Object.values(cards); // Convierte el objeto en un array

return (
  <div className="cards-container">
    {cardsArray.length > 0 ? (
      cardsArray.map((card, index) => (
        <CardQuiz
        key={index}
        name={card.title}
        quizId={card.id}       // Asegúrate de que 'card.id' contenga el quizId
        topicId={card.topicId} // Asegúrate de que 'card.topicId' contenga el topicId
      />
      ))
    ) : (
      <p>No hay tarjetas disponibles</p>
    )}
  </div>
);
}
