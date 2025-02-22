import React, { useState } from "react";
import "../../../styles/CreateCards.css"; // Importa el archivo CSS

export default function CreateQuiz() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Flashcard creado:", { name, description });
  };

  return (
    <div className="flashcard-container">
      <h2 className="flashcard-title">Create Quiz</h2>
      <form onSubmit={handleSubmit} className="flashcard-form">
        <div className="input-group">
          <label htmlFor="name">Name of the Quiz</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description of the Quiz</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="3"
          />
        </div>
        <button type="submit" className="submit-btn">
        Create Quiz
        </button>
      </form>
    </div>
  );
}