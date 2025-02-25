import React from "react";
import '../../../styles/Cards/CardQuiz.css';

export default function CardQuiz({ name }) {
  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>
    </div>
  );
}