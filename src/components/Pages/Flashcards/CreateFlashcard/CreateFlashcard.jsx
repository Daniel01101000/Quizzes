import React, { useState } from "react"; 
import { useDispatch } from "react-redux";
import { addCard } from "store/cardsSliceFlashcards";
import { v4 as uuidv4 } from "uuid"; // 🔥 Importar uuid para IDs únicos
import "styles/createCards/CreateCards.css";

export default function CreateFlashcard({ quizId }) {
  const [name, setName] = useState("");
  const [questionA, setQuestionA] = useState("");
  const [questionB, setQuestionB] = useState("");
  const [questionC, setQuestionC] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(""); // 🔥 Guardar la respuesta correcta seleccionada

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !questionA || !questionB || !questionC || !correctAnswer) {
      alert("Please complete all fields and select a correct answer.");
      return;
    }

    dispatch(addCard({
      id: uuidv4(),
      quizId,
      name,
      questionA,
      questionB,
      questionC,
      correctAnswer, // Guarda la letra directamente
    }));
  
    // Resetear valores
    setName("");
    setQuestionA("");
    setQuestionB("");
    setQuestionC("");
    setCorrectAnswer("");
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
            <label htmlFor="optionA">A)</label>
            <input
   id="optionA"
    type="radio"
    name="correctOption"
    value="A"
    checked={correctAnswer === "A"}
        onChange={() => setCorrectAnswer("A")}
        />
          </div>

          <div className="options-radio">
            <label htmlFor="optionB">B)</label>
            <input
  id="optionB"
  type="radio"
  name="correctOption"
  value="B"
  checked={correctAnswer === "B"}
  onChange={() => setCorrectAnswer("B")}
/>
          </div>

          <div className="options-radio">
            <label htmlFor="optionC">C)</label>
            <input
  id="optionC"
  type="radio"
  name="correctOption"
  value="C"
  checked={correctAnswer === "C"}
  onChange={() => setCorrectAnswer("C")}
/>
          </div>
        </div>

        <button type="submit" className="submit-btn">Create Flashcard</button>
      </form>
    </div>
  );
}
