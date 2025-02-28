import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Cards/CardQuiz.css";

export default function CardQuiz({ name, quizId, topicId }) {
  return (
    <Link to={`/topics/${topicId}/quizzes/${quizId}/flashcards`} style={{ textDecoration: "none" }}>
      <div className="card">
        <h3 className="card-title">{name}</h3>
      </div>
    </Link>
  );
}