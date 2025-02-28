import React from "react";
import '../../../styles/Cards/CardFlashcards.css';

export default function CardFlashcard({ name, questionA, questionB, questionC }) {
  return (
    <div className="cardFlashcard">
      <h3 className="card-title">{name}</h3>
      <div className="Answers">
      <button className="answer-button"><span className="option-text">A)</span> {questionA}</button>
      <button className="answer-button"><span className="option-text">B)</span> {questionB}</button>
      <button className="answer-button"><span className="option-text">C)</span> {questionC}</button>
      </div>
    </div>
  );
}