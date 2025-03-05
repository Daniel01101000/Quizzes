import React, { useState } from "react";
import "styles/Cards/CardFlashcards.css";
import X from "components/X/X-button.jsx";
import confetti from "canvas-confetti"; // 🔥 Importar librería para el confeti
import audio from "audios/sonido.wav"; // Importar el archivo de audio

export default function CardFlashcard({ name, questionA, questionB, questionC, correctAnswer, id }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Usar el audio importado en lugar de crear un nuevo objeto Audio
  const correctSound = new Audio(audio); // Usar el archivo de audio importado

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    // Si la respuesta es correcta, reproducir el sonido y lanzar el confeti
    if (correctAnswer === answer) {
      correctSound.play(); // Reproducir el sonido
      launchConfetti(); // Lanzar confeti
    }
  };

  // Función para determinar el estado de la respuesta (correcta o incorrecta)
  const getButtonClass = (answer) => {
    if (selectedAnswer === answer) {
      return correctAnswer === answer ? "correct" : "incorrect";
    }
    return "";
  };

  // Función para lanzar el confeti
  const launchConfetti = () => {
    confetti({
      particleCount: 100, // Cantidad de confeti
      spread: 70, // Ángulo de dispersión
      origin: { y: 0.6 }, // Alineación de la fuente de confeti (un poco más arriba)
      colors: ["#ff0", "#ff6347", "#32cd32"], // Colores del confeti
    });
  };

  return (
    <div className="cardFlashcard">
      <X id={id} type="flashcard" />
      <h3 className="card-title">{name}</h3>
      <div className="Answers">
        <button
          className={`answer-button ${getButtonClass("A")}`}
          onClick={() => handleAnswerClick("A")}
        >
          <span className="option-text">A)</span> {questionA}
        </button>

        <button
          className={`answer-button ${getButtonClass("B")}`}
          onClick={() => handleAnswerClick("B")}
        >
          <span className="option-text">B)</span> {questionB}
        </button>

        <button
          className={`answer-button ${getButtonClass("C")}`}
          onClick={() => handleAnswerClick("C")}
        >
          <span className="option-text">C)</span> {questionC}
        </button>
      </div>
    </div>
  );
}
