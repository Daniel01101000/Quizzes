import React, { useState } from "react"; 
import { useDispatch } from "react-redux";
import { addCard } from "../../../store/cardsSliceFlashcards";
import { v4 as uuidv4 } from "uuid"; // 🔥 Importar uuid para IDs únicos
import "../../../styles/createCards/CreateCards.css";

export default function CreateFlashcard({ quizId }) { // 🔥 Recibir quizId
  const [name, setName] = useState("");
  const [questionA, setQuestionA] = useState("");
  const [questionB, setQuestionB] = useState("");
  const [questionC, setQuestionC] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener la opción seleccionada
    const selectedOption = document.querySelector('input[name="correctOption"]:checked');

    if (!name || !questionA || !questionB || !questionC || !selectedOption) {
      alert("Please complete all fields and select a correct answer.");
      return;
    }

    dispatch(addCard({ 
      id: uuidv4(), // 🔥 Generar un ID único
      quizId, // 🔥 Agregar el quizId
      name, 
      questionA, 
      questionB, 
      questionC, 
      correctAnswer: selectedOption.value 
    }));

    // Resetear los valores después de enviar
    setName("");
    setQuestionA("");
    setQuestionB("");
    setQuestionC("");
  };

  return (
    <div className="flashcard-container">
      <h2 className="flashcard-title">Create Flashcard</h2>
      <form onSubmit={handleSubmit} className="flashcard-form">
        <div className="input-group">
          <label htmlFor="name">Question</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="input-group-option">
          <label htmlFor="questionA">A)</label>
          <input id="questionA" value={questionA} onChange={(e) => setQuestionA(e.target.value)} required />
        </div>

        <div className="input-group-option">
          <label htmlFor="questionB">B)</label>
          <input id="questionB" value={questionB} onChange={(e) => setQuestionB(e.target.value)} required />
        </div>

        <div className="input-group-option">
          <label htmlFor="questionC">C)</label>
          <input id="questionC" value={questionC} onChange={(e) => setQuestionC(e.target.value)} required />
        </div>

        <label>Choose the correct answer:</label>
        <div className="options">
          <div className="options-radio">
            <label htmlFor="optionA"><span className="optionText">A)</span></label>
            <input id="optionA" value={questionA} type="radio" name="correctOption" />
          </div>

          <div className="options-radio">
            <label htmlFor="optionB"><span className="optionText">B)</span></label>
            <input id="optionB" value={questionB} type="radio" name="correctOption" />
          </div>

          <div className="options-radio">
            <label htmlFor="optionC"><span className="optionText">C)</span></label>
            <input id="optionC" value={questionC} type="radio" name="correctOption" />
          </div>
        </div>

        <button type="submit" className="submit-btn">Create Flashcard</button>
      </form>
    </div>
  );
}
