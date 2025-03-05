import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuiz } from "store/quizzesSlice"; // ✅ Importar `addQuiz`
import { v4 as uuidv4 } from "uuid"; // Para generar IDs únicos
import "styles/createCards/CreateCards.css";
import { useParams } from "react-router-dom";

export default function CreateQuiz() {
  const { topicId } = useParams(); // 🔥 Obtener el topicId desde la URL
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  console.log("CreateQuiz - topicId recibido:", topicId); // Verificar si topicId tiene valor

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(
        addQuiz({
          id: uuidv4(),
          title,
          topicId, // Ahora topicId siempre vendrá de la URL
        })
      );
      setTitle("");
    }
  };

  return (
    <div className="flashcard-container">
      <h2 className="flashcard-title">Create Quiz</h2>
      <form onSubmit={handleSubmit} className="flashcard-form">
        <div className="input-group">
          <label htmlFor="title">Name of the Quiz</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create Quiz
        </button>
      </form>
    </div>
  );
}
