import React from "react";
import { useSelector } from "react-redux";
import CardQuiz from "./CardQuiz.jsx";
import "styles/createCards/CreateCards.css";
import Emojis from "components/Emojis/Emojis.jsx";

export default function CardsList() {
  const cards = useSelector((state) => state.quizzes.quizzes);
  const cardsArray = Object.values(cards); // Convierte el objeto en un array

  return (
    <>
      {cardsArray.length > 0 ? (
        <div className="grid-contenedor">
          {cardsArray.map((card, index) => (
            <CardQuiz
              key={index}
              name={card.title}
              quizId={card.id}       // Asegúrate de que 'card.id' contenga el quizId
              topicId={card.topicId} // Asegúrate de que 'card.topicId' contenga el topicId
              type="quiz"
            />
          ))}
        </div>
      ) : (
        <>
          {/* Aquí fuera de la cuadrícula, mensaje y emojis */}
          <p className="Problem">There are no cards available</p>
          <Emojis />
          
        </>
      )}
    </>
  );
}