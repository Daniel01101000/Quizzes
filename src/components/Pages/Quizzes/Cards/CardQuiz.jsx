import React from "react";
import { useDispatch } from "react-redux";
import { removeCard as removeQuiz } from "store/cardsSliceQuizzes.js"; // Importa la acción
import { Link } from "react-router-dom";
import "styles/Cards/CardQuiz.css";
import X from "components/X/X-button.jsx";

export default function CardQuiz({ name, quizId, topicId }) {
  const dispatch = useDispatch();

  return (
    <div className="card-quiz">
   <X onClick={() => dispatch(removeQuiz(quizId))} type="quiz" id={quizId} />

  {/* Link solo rodea el texto y mantiene cursor pointer */}
  <h3 className="card-title">
    <Link
      to={`/topics/${topicId}/quizzes/${quizId}/flashcards`}
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
    >
      {name}
    </Link>
  </h3>
</div>
  );
}
