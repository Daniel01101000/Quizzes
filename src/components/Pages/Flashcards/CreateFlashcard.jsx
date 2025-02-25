import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../../store/cardsSliceFlashcards";
import "../../../styles/createCards/CreateCards.css";

export default function CreateFlashcard() {
  const [name, setName] = useState("");
  const [questionA, setQuestionA] = useState("");
  const [questionB, setQuestionB] = useState("");
  const [questionC, setQuestionC] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Obtener el input seleccionado
    const selectedOption = document.querySelector('input[name="correctOption"]:checked');
  
    if (!name || !questionA || !questionB || !questionC || !selectedOption) {
      alert("Please complete all fields and select a correct answer.");
      return;
    }
  
    dispatch(addCard({ 
      name, 
      questionA, 
      questionB, 
      questionC, 
      correctAnswer: selectedOption.value // Guardar respuesta correcta
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
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group-option">
          <label htmlFor="questionA">A)</label>
          <input
            id="questionA"
            value={questionA}
            onChange={(e) => setQuestionA(e.target.value)}
            required
          />
        </div>

        <div className="input-group-option">
          <label htmlFor="questionB">B)</label>
          <input
            id="questionB"
            value={questionB}
            onChange={(e) => setQuestionB(e.target.value)}
            required
          />
        </div>


        <div className="input-group-option">
          <label htmlFor="questionC">C)</label>
          <input
            id="questionC"
            value={questionC}
            onChange={(e) => setQuestionC(e.target.value)}
            required
          />
        </div>
        

        
          <label htmlFor="questionC">Choose the correct</label>
          <div className="options">

          <div className="options-radio">
          <label htmlFor="optionA"><span className="optionText">A)</span></label>
          <input
            id="optionA"
            value={questionC}
            onChange={(e) => setQuestionC(e.target.value)}
            type="radio"
            name="correctOption"
          />
         </div>

          <div className="options-radio">
          <label htmlFor="optionB"><span className="optionText">B)</span></label>
          <input
            id="optionB"
            value={questionC}
            onChange={(e) => setQuestionC(e.target.value)}
            type="radio"
            name="correctOption"
          />
          </div>

          <div className="options-radio">
          <label htmlFor="optionC"><span className="optionText">C)</span></label>
          <input
            id="optionC"
            value={questionC}
            onChange={(e) => setQuestionC(e.target.value)}
            type="radio"
            name="correctOption"
          />
          </div>

          </div>
        
        <button type="submit" className="submit-btn">
        Create Flashcard
        </button>
      </form>
    </div>
  );
}